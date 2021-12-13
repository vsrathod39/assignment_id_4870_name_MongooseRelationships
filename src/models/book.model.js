const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    author_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "authors",
        required: true
    }]
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model("book", bookSchema);