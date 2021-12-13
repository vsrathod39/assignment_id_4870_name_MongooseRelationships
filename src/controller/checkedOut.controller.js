// express
const express = require("express");
const router = express.Router();

// model User
const CheckOut = require("../models/checkOut.model");

// post book
router.post("/", async (req, res) => {
    try {
        const checkOut = await CheckOut.create(req.body);
        return res.send(checkOut);  
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

// get all checkOuts Book 
router.get("", async (req, res) => {
    try {
        const checkOuts = await CheckOut.find().populate("book_id", "title").lean().exec();
        return res.send({checkOuts});  
    } catch (error) {
        return res.status(500).send({error: error.message, status: "hello"});
    }
});

// get single checkOut
router.get("/:id", async (req, res) => {
    try {
        const checkOuts = await CheckOut.findById(req.params.id).lean().exec();
        return res.send({checkOuts});  
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

// patch checkOut
router.patch("/:id", async (req, res) => {
    try {
        const checkOut = await CheckOut.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();
        return res.send({checkOut});  
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

// delete checkOut
router.delete("/:id", async (req, res) => {
    try {
        const checkOut = await CheckOut.findByIdAndDelete(req.params.id).lean().exec();
        return res.send({checkOut});  
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});


module.exports = router;