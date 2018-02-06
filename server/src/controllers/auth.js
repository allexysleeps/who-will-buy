'use strict';
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const secrets = require('../configs/secrets');
const {User} = require('../database');
const {validationResult} = require('express-validator/check');
const {errorFormatter} = require('../validations/utils');

const generateToken = (email) => {
	return jwt.sign({email}, secrets.jwtSecret, {expiresIn: '1 year'});
};

function authenticate(req, res) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const {email, password} = req.body;
    User.findOne({email}, (err, result) => {
      if(!result) {
        res.sendStatus(401);
      } else if (bcrypt.compareSync(password, result.password)) {
        res.status(200).json({token: generateToken(email)})
      } else {
        res.sendStatus(401);
      }
    })
  } else {
    res.status(400).json(errorFormatter(errors.mapped()));
  }
}

function register(req, res) {
	const {email, password} = req.body;
	const newUser = new User({
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