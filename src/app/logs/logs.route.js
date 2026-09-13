const {Router} = require('express')
const logsController = require('./logs.controller')

const logsRouter = Router();


logsRouter.post('/',logsController.insertLog)

module.exports = logsRouter;
