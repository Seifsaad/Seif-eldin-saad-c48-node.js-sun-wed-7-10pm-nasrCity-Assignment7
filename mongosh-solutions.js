const db = require("./src/common/db/mongodb");

//Q1
db.createCollection("books", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title"],
      properties: {
        title: {
          bsonType: "string",
        },
      },
    },
  },
});

//Q2
db.authors.insertOne({
  name: "Author 1",
  nationality: "British",
});

//Q3
db.createCollection("logs", {
  capped: true,
  size: 100000,
});

//Q4
db.books.createIndex({ title: 1 });

//Q5
db.books.insertOne({
  title: "Book 1",
  author: "Ali",
  year: 1937,
  genres: ["fantasy", "adventure"],
});

//Q6
db.books.insertMany([
  {
    title: "Book 2",
    author: "Ali",
    year: 1937,
    genres: ["fantasy", "adventure"],
  },
  {
    title: "Book 3",
    author: "Ahmed",
    year: 1937,
    genres: ["fantasy", "adventure"],
  },
]);

//Q7
db.logs.insertOne({
  book_id: ObjectId(""),
  action: "borrowed",
});

//Q8
db.books.updateOne({ title: "future" }, { $set: { year: 2022 } });

//Q9
db.books.find({
  title: "Brave New World",
});

//Q10
db.books.find({
  year: { $gte: 1900, $lte: 2000 },
});

//Q11
db.books.find({ genre: "science fiction" });

//Q12
db.books.find().skip(2).limit(3).sort({ year: -1 });

//Q13
db.books.find({
  year: { $type: "int" },
});

//Q14
db.books.find({
  genres: { $nin: ["Horror", "science fiction"] },
});

//Q15
db.books.deleteMany({
  year: { $lt: 2000 },
});

//Q16
db.books.aggregate([
  {
    $match: {
      year: { $gt: 2000 },
    },
    $sort: {
      year: -1,
    },
  },
]);

//Q17
db.books.aggregate([
  {
    $match: {
      year: { $gt: 2000 },
    },
  },
  {
    $project: {
      title: 1,
      author: 1,
      year: 1,
    },
  },
]);

//Q18
db.books.aggregate([
  {
    $unwind: "$genres",
  },
]);

//Q19
db.books.aggregate([
  {
    $lookup: {
      from: "logs",
      localField: "_id",
      foreignField: "book_id",
      as: "logs",
    },
  },
]);
