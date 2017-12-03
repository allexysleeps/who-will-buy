'use strict';
const db = require('../database/mongo');
const ObjectId = require('mongodb').ObjectID;

function createEvent(req, res) {
	const {title, assignment, description, event_icon} = req.body;
	const admin_id = req.user._id;
	const newEvent = new db.models.Event({
		admin_id,
		title,
		description,
		assignment,
		event_icon
	});
	newEvent.save((err) => {
		if (err) {
			console.log(err);
			res.sendStatus(400);
		}
		res.sendStatus(200);
	})
}

function setMembers(req, res) {
	const {event_id} = req.params;
	console.log(event_id);
	const {emailList} = req.body;
	db.collection('events')
		.updateOne({_id: ObjectId(event_id)}, {$set: {users: emailList}}, (err, result) => {
			res.sendStatus(200);
		})
}

function getEventList(req, res) {
	const {} = req.body;
}

module.exports = {
	createEvent,
	getEventList,
	setMembers
};