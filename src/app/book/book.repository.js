const db = require('../../common/db/mongodb')

//Q1(will excute manually without api (mongoDB compass))

// db.createCollection("books", {
//   validator: {
//     $jsonSchema: {
//       bsonType: "object",
//       required: ["title"],
//       properties: {
//         title: {
//           bsonType: "string",
//         },
//       },
//     },
//   },
// });

//Q2(will excute manually without api (mongoDB compass))

// db.authors.insertOne({
//   name: "Author 1",
//   nationality: "British",
// });

//Q3(will excute manually without api (mongoDB compass))

// db.createCollection("logs", {
//   capped: true,
//   size: 100000,
// });

//Q4(will excute manually without api (mongoDB compass))

// db.books.createIndex({ title: 1 });


async function insertDoc(newDoc) {
    return await db.collection('books').insertOne(newDoc)
}

async function insertMultiDocs(newDocs){
    return await db.collection('books').insertMany(newDocs)
}

async function updateDoc(title,year) {
    return await db.collection('books').updateOne({
        title: title
    },{$set: {year: year}})
}

async function getBooksByTitle(title) {
     return await db.collection('books').findOne({
         title: title
     })
}

async function getBooksByYear(from,to) {
    return await db.collection('books').find(
        {
            year: {$gte: from, $lte: to}
        }).toArray();
}

module.exports = {
    insertDoc,
    insertMultiDocs,
    updateDoc,
    getBooksByTitle,
    getBooksByYear
}
