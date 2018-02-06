'use strict';
const {User} = require('../database');

function sendProfile(req, res) {
	const {user} = req;
	User
		.findOne({email: user.email}, (err, result) => {
			if (err) {
			  res.sendStatus(500);
			  console.log(err);
      }
			res.send(result)
		})
}

module.exports = {
	send: sendProfile
};