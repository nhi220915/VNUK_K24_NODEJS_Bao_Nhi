const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true // tên duy nhất (kh muốn trùng tên)
    },
    img: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("category", categorySchema);