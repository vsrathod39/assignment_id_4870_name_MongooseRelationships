// express
const express = require("express");
const router = express.Router();

// model
const {a, b, c} = require("../models/section.model");
const CheckOut = require("../models/checkOut.model");
const Author = require("../models/author.model");

// Section a
// post
router.post("/a", async (req, res) => {
    try {
        const a_section = await a.create(req.body);
        return res.send({a_section});  
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

// get all
router.get("/a", async (req, res) => {
    try {
        const a_section = await a.find().populate("book_id", "title").lean().exec();
        return res.send({a_section});  
    } catch (error) {
        return res.status(500).send({error: error.message, status: "hello"});
    }
});

// get single
router.get("/a/:id", async (req, res) => {
    try {
        const a_section = await a.findById(req.params.id).populate("book_id", "title").lean().exec();
        return res.send({a_section});  
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

// // patch
router.patch("/a/:id", async (req, res) => {
    try {
        const a_section = await a.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();
        return res.send({a_section});  
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

// delete
router.delete("/a/:id", async (req, res) => {
    try {
        const a_section = await a.findByIdAndDelete(req.params.id).lean().exec();
        return res.send({a_section});  
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

// section b
// post
router.post("/b", async (req, res) => {
    try {
        const b_section = await b.create(req.body);
        return res.send({b_section});  
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

// get all
router.get("/b", async (req, res) => {
    try {
        const b_section = await b.find().populate("book_id", "title").lean().exec();
        return res.send({b_section});  
    } catch (error) {
        return res.status(500).send({error: error.message, status: "hello"});
    }
});

// get single
router.get("/b/:id", async (req, res) => {
    try {
        const b_section = await b.findById(req.params.id).populate("book_id", "title").lean().exec();
        return res.send({b_section});  
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

// // patch
router.patch("/b/:id", async (req, res) => {
    try {
        const b_section = await b.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();
        return res.send({b_section});  
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

// delete
router.delete("/b/:id", async (req, res) => {
    try {
        const b_section = await b.findByIdAndDelete(req.params.id).lean().exec();
        return res.send({b_section});  
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

// section c
// post
router.post("/c", async (req, res) => {
    try {
        const c_section = await c.create(req.body);
        return res.send({c_section});  
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

// get all
router.get("/c", async (req, res) => {
    try {
        const c_section = await c.find().populate("book_id", "title").lean().exec();
        return res.send({c_section});  
    } catch (error) {
        return res.status(500).send({error: error.message, status: "hello"});
    }
});

// get single
router.get("/c/:id", async (req, res) => {
    try {
        const c_section = await c.findById(req.params.id).populate("book_id", "title").lean().exec();
        return res.send({c_section});  
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

// // patch
router.patch("/c/:id", async (req, res) => {
    try {
        const c_section = await c.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();
        return res.send({c_section});  
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

// delete
router.delete("/c/:id", async (req, res) => {
    try {
        const c_section = await c.findByIdAndDelete(req.params.id).lean().exec();
        return res.send({c_section});  
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

// find books in a section that are not checked out
router.get("/available/a", async (req, res) => {
    try {
        const checkOuts = await CheckOut.find({}, { book_id : 1}).lean().exec();
        const finalCheckOutsArray = checkOuts.map((obj) => {
            return obj.book_id.toString();
        });
        
        const available_in_section_a = await a.find( { book_id: {$nin: finalCheckOutsArray}});
        return res.send({available_in_section_a});
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

router.get("/available/b", async (req, res) => {
    try {
        const checkOuts = await CheckOut.find({}, { book_id : 1}).lean().exec();
        const finalCheckOutsArray = checkOuts.map((obj) => {
            return obj.book_id.toString();
        });
        
        const available_in_section_b = await b.find( { book_id: {$nin: finalCheckOutsArray}});
        return res.send({available_in_section_b});
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

router.get("/available/c", async (req, res) => {
    try {
        const checkOuts = await CheckOut.find({}, { book_id : 1}).lean().exec();
        const finalCheckOutsArray = checkOuts.map((obj) => {
            return obj.book_id.toString();
        });
        
        const available_in_section_c = await c.find( { book_id: {$nin: finalCheckOutsArray}});
        return res.send({available_in_section_c});
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

// find books of 1 author inside a section
router.get("/a/author/:id", async (req, res) => {
    try {
        let book_id = await Author.findOne({_id: req.params.id}, {book_id: 1}).lean().exec();
        book_id = book_id.book_id;
        let book_id_array = [];
        for(let i = 0; i < book_id.length; i++){
            book_id_array.push(book_id[i].toString());
        }
        const a_section_book = await a.find({book_id: {$in: book_id_array}}).populate("book_id", "title").lean().exec();
        return res.send({a_section_book});
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }

})

router.get("/b/author/:id", async (req, res) => {
    try {
        let book_id = await Author.findOne({_id: req.params.id}, {book_id: 1}).lean().exec();
        book_id = book_id.book_id;
        let book_id_array = [];
        for(let i = 0; i < book_id.length; i++){
            book_id_array.push(book_id[i].toString());
        }
        const a_section_book = await b.find({book_id: {$in: book_id_array}}).populate("book_id", "title").lean().exec();
        return res.send({a_section_book});
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }

})

router.get("/c/author/:id", async (req, res) => {
    try {
        let book_id = await Author.findOne({_id: req.params.id}, {book_id: 1}).lean().exec();
        book_id = book_id.book_id;
        let book_id_array = [];
        for(let i = 0; i < book_id.length; i++){
            book_id_array.push(book_id[i].toString());
        }
        const a_section_book = await c.find({book_id: {$in: book_id_array}}).populate("book_id", "title").lean().exec();
        return res.send({a_section_book});
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }

})

module.exports = router;