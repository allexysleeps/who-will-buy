'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('./database/mongoSetup');
const passportJwtMiddleware = require('./configs/passport').passportJwtMiddleware;
const app = express();

console.log(passportJwtMiddleware);

app
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({extended: false}))
	.use(passportJwtMiddleware)
	.get('/', (req, res, next) => {
		mongo.db.collection('users')
			.find({})
			.toArray((err, users) => {
				res.send(users);
			});
	})
	.get('/user/:first_name/:last_name/:email/:password', (req, res, next) => {
		mongo.db.collection('users')
			.insert(req.params, (err, result) => {
				res.send(result);
			})
	})
	.get('/updateEmail/:email/:newEmail', (req, res, next) => {
		mongo.db.collection('users')
			.updateOne(
				{email: req.params.email},
				{$set: {email: req.params.newEmail}},
				(err, result) => {
					res.send(result)
				}
			)
	})
	.listen(3000);

console.log(`its's alive`);