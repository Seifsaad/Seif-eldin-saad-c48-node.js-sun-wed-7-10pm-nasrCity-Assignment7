const db = require('../../common/db/mongodb')
const {ObjectId} = require("mongodb");

async function insertLog(action,book_id){
    return await db.collection('logs').insertOne({
        action: action,
        book_id: new ObjectId(book_id),
    });
}


module.exports = {
    insertLog,
}
