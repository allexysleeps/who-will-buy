'use strict';

const passport = require('passport');
const passportJwt = require('passport-jwt');
const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;
const jwtSecret = require('./secrets').jwtSecret;
const mongo = require('../database/mongo');

passport.use(new JwtStrategy({
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: jwtSecret,
	passReqToCallback: true
}, (req, jwtPayload, next) => {
	const {email} = jwtPayload;
	mongo.db.collection('users')
		.findOne({email}, (err, user) => {
			if(user) {
				next(null, user);
			} else {
				next(null, null, {message: 'User not found'})
			}
		});
}));

const passportJwtMiddleware = (req, res, next) => {
	passport.authenticate('jwt', {session: false}, (err, user, info) => {
		if(err) return next(err);
		if(user) {
			req.user = user;
			next(null, user)
		} else {
			if(info) {
				res.status(401).json(info.message)
			}
		}
	})(req, res, next)
};

module.exports = {
	passportJwtMiddleware
};
