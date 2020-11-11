const express = require('express');
const router = express.Router();
const db = require('../db');
const ObjectId = require('mongodb').ObjectID;


router.get('/', async (req, res) => {
    let { num = 10, name, type } = req.query;
    console.log('Query params: ', req.query);

    try {
        const cursor = await db
                            .db('turingdb')
                            .collection('tasks')
                            .find({ createdOn: { $gte: 0 }})
                            .sort({ createdOn: -1 })
                            .limit(parseInt(num, 10));

        const results = await cursor.toArray();
        if(results.length) {
            console.log(results.length, req.originalUrl, req.hostname);
            return res.json(results);
        }
    } catch(e) {
        console.log(e);
    }
});

router.post('/new', async (req, res) => {
    const { name, type } = req.body;
    console.log('Query params: ', req.body);

    if(!name || !type) {
        return res.status(401).json({message: 'Name & type is required!'});
    }
    const task = {
        name,
        type,
        status : 'active',
        createdOn: Date.now(),
        updatedOn: Date.now(),
        finishedOn: Date.now()
    };

    try {
    const result = await db
                        .db('turingdb')
                        .collection('tasks')
                        .insertOne(task);
    if(result) {
        const newTask = result.ops[0];
        console.log('Task created: ', newTask);
        return res.json(newTask);
        } 
    } catch(e) {
        console.log(e);
    } finally{
        // db.close();
    }
});


router.patch('/:taskId', async (req, res) => {

    const { taskId } = req.params;
    const { name, type } = req.body;
    console.log('Query params: ', req.body);    
    console.log('task ID: ', taskId);
    if(name === undefined || type === undefined) {
        return res.status(401).json({message: 'Name & type is required for update!'});
    }
    try {
        const result = await db
                            .db('turingdb')
                            .collection('tasks')
                            .updateOne({ "_id" : ObjectId(taskId) }, { $set: { name: name, type: type } });
                            
    if(result) {
        const { modifiedCount, matchedCount } = result;
        console.log(`${matchedCount} Documents matched criteria`);
        console.log(`${modifiedCount} Documents were updated`);

        return res.status(204).json({ matchedCount, modifiedCount });
        }
    } catch(e) {
        console.log(e);
    }
});


router.delete('/:taskId', async (req, res) => {

    const { taskId } = req.params;
    console.log(taskId);
    try {
        const result = await db
                            .db('turingdb')
                            .collection('tasks')
                            .deleteOne({ "_id": ObjectId(taskId) });        
    if(result) {
        const { deletedCount } = result;
        console.log(`${deletedCount} Documents were deleted`);

        return res.json({ deletedCount });
        }
    } catch(e) {
        console.log(e);
    }
});

router.get('/clearAll', async (req, res) => {

    try {
        const result = await db
                            .db('turingdb')
                            .collection('tasks')
                            .deleteMany({ name : { $exists : true } });        
    if(result) {
        const { deletedCount } = result;
        console.log(`${deletedCount} Documents were deleted`);

        return res.json({ deletedCount });
        }
    } catch(e) {
        console.log(e);
    }
});

module.exports = router;