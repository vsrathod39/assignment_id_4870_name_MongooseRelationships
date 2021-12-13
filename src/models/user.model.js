const mongoose = require("mongoose");

// user schema
const userSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    gender: {type: String, required:false, default: "Male"},
    ip_address: {type: String, required: true},
    age: {type: Number, required: true}
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model("user", userSchema); // users