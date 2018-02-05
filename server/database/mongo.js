const mongoose = require('mongoose');
const db = mongoose.createConnection('mongo', 'who-will-buy');
const UserModel = require('./models/user');
const EventModel = require('./models/event');

db.model('User', UserModel);
db.model('Event', EventModel);

module.exports = db;