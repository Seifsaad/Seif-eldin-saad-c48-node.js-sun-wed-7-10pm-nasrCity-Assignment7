const {Router} = require('express')
const bookController = require('./book.controller')

const bookRouter = Router();

bookRouter.post('/', bookController.insertDoc)
bookRouter.post('/batch', bookController.insertMultiDocs)
bookRouter.patch('/:title', bookController.updateDoc)
module.exports = bookRouter;
