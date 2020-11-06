const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const connectionString = process.env.CONN_STR;

const db = new MongoClient(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }); 

console.log(connectionString !== undefined ? 'URI available' : 'URI undefined');

async function dbFunc() {
    try {
        await db.connect();

        console.log('DB Connected');
    } catch(e) {
        console.log(`Connection error !, error message: ${e.message}`);
    } finally {
        // await db.close();
    }
} 

dbFunc();

module.exports = db;