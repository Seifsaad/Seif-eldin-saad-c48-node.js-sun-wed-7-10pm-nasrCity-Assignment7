const {MongoClient} = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017');
const db = client.db('Assignment7');


module.exports = db;