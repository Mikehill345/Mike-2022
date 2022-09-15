const mongoose = require('mongoose')
const Schema = mongoose.Schema

const keySchema = new mongoose.Schema(
    {
        publicKey: {
            type: String,
            required: true
        },
        privateKey: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        sign: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model('Key', keySchema)