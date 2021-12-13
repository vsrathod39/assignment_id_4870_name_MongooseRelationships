// express
const express = require("express");
const router = express.Router();

// model User
const Author = require("../models/author.model");

// post book
router.post("/", async (req, res) => {
    try {
        const author = await Author.create(req.body);
        return res.send({author});  
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

// get all authors that are checked out
router.get("", async (req, res) => {
    try {
        const authors = await Author.find().lean().exec();
        return res.send({authors});  
    } catch (error) {
        return res.status(500).send({error: error.message, status: "hello"});
    }
});

// get single author with book details
router.get("/:id", async (req, res) => {
    try {
        const author = await Author.findById(req.params.id).populate("book_id", "title").lean().exec();
        return res.send({author});  
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

// // patch author
// router.patch("/:id", async (req, res) => {
//     try {
//         const author = await Author.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();
//         return res.send({author});  
//     } catch (error) {
//         return res.status(500).send({error: error.message, status: "failed"});
//     }
// });

// // delete author
// router.delete("/:id", async (req, res) => {
//     try {
//         const author = await Author.findByIdAndDelete(req.params.id).lean().exec();
//         return res.send({author});  
//     } catch (error) {
//         return res.status(500).send({error: error.message, status: "failed"});
//     }
// });


module.exports = router;