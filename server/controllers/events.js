'use strict';
const mongo = require('../database/mongoSetup');
const ObjectId = require('mongodb').ObjectID;

function createEvent(req, res) {
	const {title, assignment, description, event_icon} = req.body;
	const admin_id = req.user._id;
	if(!title) {
		return res.sendStatus(400);
	}
	mongo.db.collection('events')
		.insert({
			title, assignment, description, event_icon, admin_id
		}, (err, result) => {
			if(err) {res.sendStatus(500)}
			res.sendStatus(200);
		});
}

function setMembers(req, res) {
	const {event_id} = req.params;
	console.log(event_id);
	const {emailList} = req.body;
	mongo.db.collection('events')
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