const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserModel = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	first_name: String,
	last_name: String,
});

module.exports = UserModel;