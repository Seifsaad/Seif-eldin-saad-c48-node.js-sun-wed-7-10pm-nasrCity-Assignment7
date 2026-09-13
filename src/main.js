const { config } = require("dotenv");
config();

const express = require("express");
const bookRouter = require("./app/book/book.route");
const logsRouter = require("./app/logs/logs.route");
const app = express();

app.use(express.json());

app.use("/books", bookRouter);
app.use("/logs", logsRouter)

app.use((error,req,res,next)=>{
  res.json({message: error.message,success: false,stack: error.stack})
})

// app.use((err, req, res, next) => {
//   const statusCode = Number.isInteger(err.status) ? err.status : 500;
//   res.status(statusCode).json({
//     message: err.message,
//     status: statusCode,
//     stack: err.stack,
//   });
// });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
