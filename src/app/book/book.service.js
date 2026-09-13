const bookRepository = require('./book.repository')

async function insertDoc(newDoc) {
    return await bookRepository.insertDoc(newDoc)
}


module.exports = {
    insertDoc,
}