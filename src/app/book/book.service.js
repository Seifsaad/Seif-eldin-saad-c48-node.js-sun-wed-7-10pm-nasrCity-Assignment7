const bookRepository = require('./book.repository')
const {getBooksByTitle, getBooksByYear, getBooksByGenre} = require("./book.repository");

async function insertDoc(newDoc) {
    return await bookRepository.insertDoc(newDoc)
}

async function insertMultiDocs(newDoc) {
    return await bookRepository.insertMultiDocs(newDoc)
}

async function updateDoc(title,year) {
    return await bookRepository.updateDoc(title,year)
}

async function getBookByTitle(title) {
    return await bookRepository.getBooksByTitle()
}

async function getBookBetween(from,to){
    return await bookRepository.getBooksByYear(from,to)
}

async function getBookByGenre(genre) {
    return await bookRepository.getBooksByGenre(genre)
}

async function getBooksSkipLimit() {
    return await bookRepository.getBooksSkipLimit()
}

async function getBooksYearInt() {
    return await bookRepository.getBooksYearInt()
}

async function getBooksExcludeGenres() {
    return await bookRepository.getBooksExcludeGenres()
}

module.exports = {
    insertDoc,
    insertMultiDocs,
    updateDoc,
    getBooksByTitle,
    getBooksByYear,
    getBooksByGenre,
    getBooksSkipLimit,
    getBooksYearInt,
    getBooksExcludeGenres,

}