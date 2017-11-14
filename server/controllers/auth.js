'use strict';
const mongo = require('../database/mongoSetup');
const jwt = require('jsonwebtoken');
const secrets = require('../configs/secrets');

function authenticate(req, res) {
	const {email, password} = req.body;
	mongo.db.collection('users')
		.findOne({email}, (err, result) => {
			if(password === result.password) {
				res.status(200).json({
					token: jwt.sign({
						email: email
					}, secrets.jwtSecret, {expiresIn: '1 year'})
				})
			}
		})
}

module.exports = {
	authenticate,
};