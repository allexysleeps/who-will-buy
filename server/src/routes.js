'use strict';
const Router = require('express').Router();
const auth = require('./controllers/auth');
const eventControllers = require('./controllers/events');
const userProfile = require('./controllers/userProfile');
const passportJwtMiddleware = require('./configs/passport').passportJwtMiddleware;
const validationMiddleware = require('./validations');

Router
  //User routes
  .post('/authenticate', validationMiddleware.auth, auth.authenticate)
	.post('/register', auth.register)
	.get('/profile', passportJwtMiddleware, userProfile.send)
  //Event routes
	.post('/event', passportJwtMiddleware, eventControllers.createEvent)
  .get('/events/:user_id*?', passportJwtMiddleware, eventControllers.getEventsList)
  .post(
    '/event/member/:event_id',
    passportJwtMiddleware,
    validationMiddleware.eventMembers,
    eventControllers.addMember);

module.exports = Router;