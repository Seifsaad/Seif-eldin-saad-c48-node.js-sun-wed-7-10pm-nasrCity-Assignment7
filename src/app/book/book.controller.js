const bookService = require('./book.service')

const insertDoc = async function (req, res, next) {
    try {
        const newBook = await bookService.insertDoc(req.body);
        res.json({ message: "Book inserted successfully",success:true,data:newBook });
    } catch (err) {
        next(err);
    }
}


module.exports = {
    insertDoc,
}