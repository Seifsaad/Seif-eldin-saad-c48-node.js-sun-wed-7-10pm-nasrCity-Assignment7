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
    return await db.collection('books').insertOne({
        data: newDoc
    })
}



module.exports = {
    insertDoc,
}
