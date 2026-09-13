const logsRepository = require('./logs.repository')

async function insertLog(action,book_id) {
    return await logsRepository.insertLog(action,book_id)
}


module.exports = {
    insertLog,

}