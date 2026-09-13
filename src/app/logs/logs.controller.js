const logService = require('./logs.service')

const insertLog = async function (req, res, next) {
    try {
        const {action, book_id} = req.body;
        const newLog = await logService.insertLog(action, book_id);
        res.status(201).json({ message: "log inserted successfully",success:true,data:newLog });
    } catch (err) {
        next(err);
    }
}



module.exports = {
    insertLog,

}