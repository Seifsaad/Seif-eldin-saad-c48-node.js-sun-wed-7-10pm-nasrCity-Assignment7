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
bookRouter.post('/', bookController.insertDoc)
bookRouter.post('/batch', bookController.insertMultiDocs)
bookRouter.patch('/:title', bookController.updateDoc)


module.exports = bookRouter;
