const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const dbURI = 'mongodb://localhost/who-will-buy';

mongoose.connect(dbURI, {
	useMongoClient: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', () => {
	console.log(`Connection established on ${dbURI}`);
});

fs
	.readdirSync(path.join(__dirname, 'models'))
  .filter(file => (file.indexOf('.') !== 0))
	.forEach(file => {
		const model = require(path.join(__dirname, 'models', file));
		db[model.modelName] = model;
	});

module.exports = db;