'use strict';
const mongo = require('../database/mongoSetup');

function createEvent(req, res) {
	const {title, assignment, description, event_icon} = req.body;
	if(!title) {
		return res.sendStatus(400);
	}
	mongo.db.collection('events')
		.insert({
			title, assignment, description, event_icon
		}, (err, result) => {
			if(err) {res.sendStatus(500)}
			res.sendStatus(200);
		});
}

module.exports = {
	createEvent,
};