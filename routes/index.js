const express = require('express');
const router = express.Router();
const db = require('../db');


router.get('/', async (req, res) => {
    let { num, name } = req.query;
    console.log(num, name);

    try {
        const cursor = await db
                            .db('turingdb')
                            .collection('tasks')
                            .find({ time: { $gte: 0 }})
                            .sort({ time: -1 })
                            .limit(parseInt(num, 10));

        const results = await cursor.toArray();
        if(results.length) {
            console.log(results.length);
            res.json(results);
        }
    } catch(e) {
        console.log(e);
    }
});

router.get('/new', async (req, res) => {
    const { name, type } = req.query;
    const task = {
        // name: 'reading',
        name,
        time: Date.now(),
        type
        // type: 'educational'
    };

    try {
    const result = await db
                        .db('turingdb')
                        .collection('tasks')
                        .insertOne(task);
    console.log(task, result.ops);
    if(result) {
        const { name, _id, type, time} = result;
        res.json({task, _id, name, type, time});
        } 
    } catch(e) {
        console.log(e);
    } finally{
        // db.close();
    }
});


router.patch('/', async (req, res) => {

    let status = false;
    try {
        const result = await db
                            .db('turingdb')
                            .collection('tasks')
                            .updateMany({ description: { $exists: !status } }, { $set: { description: `${status ? 'No description' : 'Described'}` } });
        
        status = !status;
    if(result) {
        const { modifiedCount, matchedCount } = result;
        console.log(`${matchedCount} Documents matched criteria`);
        console.log(`${modifiedCount} Documents were updated`);

        res.json({ matchedCount, modifiedCount });
        }
    } catch(e) {
        console.log(e);
    }
});


router.delete('/', async (req, res) => {

    const { deleteTag } = req.params;
    console.log(req.params);
    try {
        const result = await db
                            .db('turingdb')
                            .collection('tasks')
                            .deleteMany({ name: { $regex: `${deleteTag}` } });        
    if(result) {
        const { deletedCount } = result;
        console.log(`${deletedCount} Documents were deleted`);

        res.json({ deletedCount });
        }
    } catch(e) {
        console.log(e);
    }
});

module.exports = router;