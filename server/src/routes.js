'use strict';
const Router = require('express').Router();
const auth = require('./controllers/auth');
const eventControllers = require('./controllers/events');
const userProfile = require('./controllers/userProfile');
const passportJwtMiddleware = require('./configs/passport').passportJwtMiddleware;
const validationMiddleware = require('./validations');

Router
  //Users routes
  .post('/authenticate', validationMiddleware.auth, auth.authenticate)
	.post('/register', auth.register)
	.get('/profile', passportJwtMiddleware, userProfile.send)
  //Events routes
	.post('/event', passportJwtMiddleware, eventControllers.createEvent)
  .get('/events/:user_id*?', passportJwtMiddleware, eventControllers.getEventsList)
  .get('/event/:event_id', passportJwtMiddleware, eventControllers.getEvent)
  .post(
    '/event/member/:event_id',
    passportJwtMiddleware,
    validationMiddleware.eventMembers,
    eventControllers.addMember)
  //Tasks routes
  .post('/task/:event_id', passportJwtMiddleware, );

module.exports = Router;