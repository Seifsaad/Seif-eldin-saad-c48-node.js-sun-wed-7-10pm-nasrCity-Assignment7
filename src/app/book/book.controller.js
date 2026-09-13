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

module.exports = {
    insertDoc,
    insertMultiDocs,
    updateDoc,
}