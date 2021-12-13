// express
const express = require("express");
const router = express.Router();

// model User
const User = require("../models/user.model");

// post user
router.post("/", async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.send({user});  
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

// get all users
router.get("", async (req, res) => {
    try {
        const users = await User.find().lean().exec();
        return res.send({users});  
    } catch (error) {
        return res.status(500).send({error: error.message, status: "hello"});
    }
});

// get single user
router.get("/:id", async (req, res) => {
    try {
        const users = await User.findById(req.params.id).lean().exec();
        return res.send({users});  
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

// patch user
router.patch("/:id", async (req, res) => {
    try {
        const users = await User.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();
        return res.send({users});  
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});

// delete user
router.delete("/:id", async (req, res) => {
    try {
        const users = await User.findByIdAndDelete(req.params.id).lean().exec();
        return res.send({users});  
    } catch (error) {
        return res.status(500).send({error: error.message, status: "failed"});
    }
});


module.exports = router;