const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventModel = new Schema({
	admin_id: Schema.ObjectId,
	title: {
		type: String,
		required: true,
	},
	description: String,
	assignment: {
		type: String,
		enum: ['Admin', 'Free', 'Auto']
	},
	event_icon: String,
});

module.exports = EventModel;