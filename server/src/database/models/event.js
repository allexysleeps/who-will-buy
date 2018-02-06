const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
	admin_id: Schema.ObjectId,
	title: {
		type: String,
		required: true,
	},
	description: String,
	participants: [{
	  participant_id: Schema.ObjectId,
    status: {
	    type: String,
      enum: ['invited', 'pending', 'declined', 'approved']
    }
  }],
  tasks: [{
	  assignee_id: Schema.ObjectId,
    title: String,
    description: String,
    status: Boolean
  }]

});

module.exports = mongoose.model('Event', EventSchema);