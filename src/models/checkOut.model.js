const mongoose = require("mongoose");

const chekOutSchema = new mongoose.Schema({
        book_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "book",
            required: true
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true
        }

}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model("checkOut", chekOutSchema);