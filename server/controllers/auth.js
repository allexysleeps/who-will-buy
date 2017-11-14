'use strict';
const bcrypt = require('bcrypt-nodejs');
const mongo = require('../database/mongoSetup');
const jwt = require('jsonwebtoken');
const secrets = require('../configs/secrets');

const generateToken = (email) => {
	return jwt.sign({email}, secrets.jwtSecret, {expiresIn: '1 year'});
};

function authenticate(req, res) {
	const {email, password} = req.body;
	mongo.db.collection('users')
		.findOne({email}, (err, result) => {
			if(!result) {
				res.sendStatus(404);
			}
			if(bcrypt.compareSync(password, result.password)) {
				res.status(200).json({token: generateToken(email)})
			}
		})
}

function register(req, res) {
	const {email, password} = req.body;
	if(!email || !password) {
		res.sendStatus(400);
	}
	mongo.db.collection('users')
		.findOne({email}, (err, result) => {
			if(result) {
				res.status(409)
			} else {
				mongo.db.collection('users')
					.insert({
						email,
						password: bcrypt.hashSync(password)
					}, (err, result) => {
						res.status(200).json({token: generateToken(email)})
					})
			}
		})
}

module.exports = {
	authenticate,
	register,
};