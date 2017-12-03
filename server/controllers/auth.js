'use strict';
const bcrypt = require('bcrypt-nodejs');
const db = require('../database/mongo');
const jwt = require('jsonwebtoken');
const secrets = require('../configs/secrets');

const generateToken = (email) => {
	return jwt.sign({email}, secrets.jwtSecret, {expiresIn: '1 year'});
};

function authenticate(req, res) {
	const {email, password} = req.body;
	db.model('User').findOne({email}, (err, result) => {
			if (err) {
				console.log(err);
				res.sendStatus(400);
			}
			if(!result) {
				res.sendStatus(404);
			}
			if (bcrypt.compareSync(password, result.password)) {
				res.status(200).json({token: generateToken(email)})
			}
			res.sendStatus(200);

	})
}

function register(req, res) {
	const {email, password} = req.body;
	const newUser = new db.models.User({
		email: email,
		password: bcrypt.hashSync(password),
	});
	newUser.save((err) => {
		if (err) {
			console.log(err);
			res.sendStatus(409)
		} else {
			res.status(200).json({token: generateToken(email)})
		}
	});
}

module.exports = {
	authenticate,
	register,
};