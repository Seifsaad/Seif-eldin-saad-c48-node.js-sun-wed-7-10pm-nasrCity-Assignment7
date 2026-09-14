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

async function insertMultiDocs(newDocs) {
    return await db.collection('books').insertMany(newDocs)
}

async function updateDoc(title, year) {
    return await db.collection('books').updateOne({
        title: title
    }, {$set: {year: year}})
}

async function getBooksByTitle(title) {
    return await db.collection('books').findOne({
        title: title
    })
}

async function getBooksByYear(from, to) {
    return await db.collection('books').find(
        {
            year: {$gte: from, $lte: to}
        }).toArray();
}

async function getBooksByGenre(genre) {
    return await db.collection('books').find(
        {
            genres: genre
        }).toArray();
}

async function getBooksSkipLimit() {
    return await db.collection('books').find().skip(2).limit(3).toArray()
}

async function getBooksYearInt() {
    return await db.collection('books').find({
        year: {$type: "int"}
    }).toArray();
}

async function getBooksExcludeGenres() {
    return await db.collection('books').find({
        genres: {$nin: ["horror", "science fiction"]}
    }).toArray()
}

async function deleteBookByYear(year) {
    return await db.collection('books').deleteMany({
        year: {$lt: year}
    })
}

async function filterBooksByYear() {
    return await db.collection('books').aggregate([
        {$match: {year: {$gt: 2000}}},
        {$sort: {year: -1}}
    ]).toArray();
}

async function aggregateBooksInclude() {
    return await db.collection('books').aggregate([
        {$match: {year: {$gt: 2000}}},
        {
            $project: {
                _id: 0,
                title: 1,
                author: 1,
                year: 1
            }
        }
    ]).toArray();
}

async function aggregateBreakArray() {
    return await db.collection('books').aggregate([
        {$unwind: "$genres"}
    ]).toArray();
}

async function aggregateJoinLogs() {
    return await db.collection('books').aggregate([
        {
            $lookup: {
                from: "logs",
                localField: "_id",
                foreignField: "book_id",
                as: "logs",
            },
        }
    ]).toArray()
}

module.exports = {
    insertDoc,
    insertMultiDocs,
    updateDoc,
    getBooksByTitle,
    getBooksByYear,
    getBooksByGenre,
    getBooksSkipLimit,
    getBooksYearInt,
    getBooksExcludeGenres,
    deleteBookByYear,
    filterBooksByYear,
    aggregateBooksInclude,
    aggregateBreakArray,
    aggregateJoinLogs
}
