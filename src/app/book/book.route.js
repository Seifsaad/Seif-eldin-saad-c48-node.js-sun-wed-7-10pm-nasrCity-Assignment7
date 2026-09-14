const {Router} = require('express')
const bookController = require('./book.controller')
const {getBooksByTitle} = require("./book.service");

const bookRouter = Router();

bookRouter.get('/title', bookController.getBooksByTitle);
bookRouter.get('/year', bookController.getBooksByYear);
bookRouter.get('/genre', bookController.getBooksByGenre);
bookRouter.get('/skip-limit', bookController.getBooksSkipLimit);
bookRouter.get('/year-integar', bookController.getBooksYearInt);
bookRouter.get('/exclude-genres', bookController.getBooksExcludeGenres);
bookRouter.get('/aggregate1', bookController.filterBooksByYear);
bookRouter.get('/aggregate2', bookController.aggregateBooksInclude);
bookRouter.get('/aggregate3', bookController.aggregateBreakArray);
bookRouter.get('/aggregate4', bookController.aggregateJoinLogs);
bookRouter.post('/', bookController.insertDoc)
bookRouter.post('/batch', bookController.insertMultiDocs)
bookRouter.patch('/:title', bookController.updateDoc)
bookRouter.delete("/before-year",bookController.deleteBookByYear)


module.exports = bookRouter;
