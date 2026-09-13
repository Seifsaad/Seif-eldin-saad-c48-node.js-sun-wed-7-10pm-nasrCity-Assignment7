const { config } = require("dotenv");
config();

const express = require("express");
const bookRouter = require("./app/book/book.route");
const app = express();

app.use(express.json());

app.use("/book", bookRouter);

app.use((err, req, res, next) => {
  res.status(err.status).json({
    message: err.message,
    status: err.status,
    stack: err.stack,
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
