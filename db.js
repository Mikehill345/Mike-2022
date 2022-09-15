const mongoose = require('mongoose');
require('colors')

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/testDB`, {
        // await mongoose.connect(`mongodb://localhost:27017/golfdb`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Successfully connected to MongoDB'.random);
    } catch (err) {
        console.error('Error connecting to mongo', err.message);
    }
};

module.exports = connectDB;