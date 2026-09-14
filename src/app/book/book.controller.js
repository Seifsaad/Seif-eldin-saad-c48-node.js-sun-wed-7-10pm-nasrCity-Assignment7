const bookService = require('./book.service')

const insertDoc = async function (req, res, next) {
    try {
        const newBook = await bookService.insertDoc(req.body);
        res.status(201).json({ message: "Book inserted successfully",success:true,data:newBook });
    } catch (err) {
        next(err);
    }
}

const insertMultiDocs = async function (req, res, next) {
    try {
        const newDoc = await bookService.insertMultiDocs(req.body);
        res.status(201).json({message: "Book inserted successfully",success:true,data:newDoc });
    }catch(err) {
        next(err);
    }
}

const updateDoc = async function (req, res, next) {
    try {
        const {title}= req.params;
        const {year}= req.body;
        const updatedDoc = await bookService.updateDoc(title,year);
        res.status(201).json({message: "Book inserted successfully",success:true,data:updatedDoc });
    }catch(err) {
        next(err);
    }
}

const getBooksByTitle = async function (req, res, next) {
    try {
        const {title}= req.query;
        const book = await bookService.getBooksByTitle(title);
        res.status(201).json({message: "Book info got successfully",success:true,data:book });
    }catch (err){
        next(err);
    }
}

const getBooksByYear = async function (req, res, next) {
    try {
        let {from,to}= req.query;
        from = Number(from);
        to = Number(to);
        const books = await bookService.getBooksByYear(from,to);
        res.status(201).json({message: "Books info got successfully",success:true,data:books });
    }catch (err){
        next(err);
    }
}

const getBooksByGenre = async function (req, res, next) {
    try {
        const {genre}= req.query;
        const books = await bookService.getBooksByGenre(genre);
        res.status(200).json({message: "Books info got successfully",success:true,data:books });
    }catch (err){
        next(err);
    }
}

const getBooksSkipLimit = async function (req, res, next) {
    try {
        const books = await bookService.getBooksSkipLimit();
        res.status(200).json({message: "Books info got successfully",success:true,data:books });
    }catch (err){
        next(err);
    }
}

const getBooksYearInt = async function (req, res, next) {
    try {
        const books = await bookService.getBooksYearInt();
        res.status(200).json({message: "Books info got successfully",success:true,data:books });
    }catch (err){
        next(err);
    }
}

const getBooksExcludeGenres = async function (req, res, next) {
    try {
        const books = await bookService.getBooksExcludeGenres();
        res.status(200).json({message: "Books info got successfully",success:true,data:books });
    }catch (err){
        next(err);
    }
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