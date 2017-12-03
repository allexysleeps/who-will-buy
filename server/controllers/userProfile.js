'use strict';
const db  = require('../database/mongo');

function sendProfile(req, res) {
	const {user} = req;
	db.model('User')
		.find({email: user.email}, (err, result) => {
			res.send(result)
		})
	// res.sendStatus(200)
}

module.exports = {
	send: sendProfile
};