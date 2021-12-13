// express
const express = require("express");
const router = express.Router();

// model User
const Book = require("../models/book.model");

// // post book
// router.post("/", async (req, res) => {
//     try {
//         const book = await Book.create(req.body);
//         return res.send({book});  
//     } catch (error) {
//         return res.status(500).send({error: error.message, status: "failed"});
//     }
// });

// get all books that are checked out
router.get("", async (req, res) => {
    try {
        const books = await Book.find().lean().exec();
        return res.send({books});  
    } catch (error) {
        return res.status(500).send({error: error.message, status: "hello"});
    }
});

// // get single book
// router.get("/:id", async (req, res) => {
//     try {
//         const books = await Book.findById(req.params.id).lean().exec();
//         return res.send({books});  
//     } catch (error) {
//         return res.status(500).send({error: error.message, status: "failed"});
//     }
// });

// // patch book
// router.patch("/:id", async (req, res) => {
//     try {
//         const book = await Book.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();
//         return res.send({book});  
//     } catch (error) {
//         return res.status(500).send({error: error.message, status: "failed"});
//     }
// });

// // delete book
// router.delete("/:id", async (req, res) => {
//     try {
//         const book = await Book.findByIdAndDelete(req.params.id).lean().exec();
//         return res.send({book});  
//     } catch (error) {
//         return res.status(500).send({error: error.message, status: "failed"});
//     }
// });


module.exports = router;