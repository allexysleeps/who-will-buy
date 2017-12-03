'use strict';
const Router = require('express').Router();
const auth = require('../controllers/auth');
const events = require('../controllers/events');
const passportJwtMiddleware = require('../configs/passport').passportJwtMiddleware;

Router
	.post('/authenticate', auth.authenticate)
	.post('/register', auth.register)
	.post('/event', passportJwtMiddleware, events.createEvent)
	.post('/event/members/:event_id', passportJwtMiddleware, events.setMembers)

module.exports = Router;