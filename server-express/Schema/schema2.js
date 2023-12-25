const mongoose = require('mongoose');
const staff = new mongoose.Schema({
    IDforSpecificArea: {
        type: String,
        required: [true, "name must be provided"]
    },
    IDUser: {
        type: Number,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    position: {
        type: String
    },
})

module.exports = mongoose.model("Nhân viên", staff);