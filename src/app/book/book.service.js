const bookRepository = require('./book.repository')

async function insertDoc(newDoc) {
    return await bookRepository.insertDoc(newDoc)
}

async function insertMultiDocs(newDoc) {
    return await bookRepository.insertMultiDocs(newDoc)
}

async function updateDoc(title,year) {
    return await bookRepository.updateDoc(title,year)
}

module.exports = {
    insertDoc,
    insertMultiDocs,
    updateDoc,
}