const {Router} = require('express')
const bookController = require('./book.controller')

const bookRouter = Router();

bookRouter.post('/', bookController.insertDoc)

module.exports = bookRouter;
