
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rohitlohra3036:zjRLzWFdyLddXZyE@cluster0.8fcble5.mongodb.net/pollingdb');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

db.once('open', () => {
    console.log('Connected to Database : MongoDB');
});

module.exports = db;
