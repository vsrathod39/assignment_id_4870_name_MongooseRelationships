const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
    book_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "book",
        required: true
    }
    
}, {
    versionKey: false,
    timestamps: true
});

const a= mongoose.model("a_section", sectionSchema);
const b = mongoose.model("b_section", sectionSchema);
const c = mongoose.model("c_section", sectionSchema);

module.exports = {a, b, c};