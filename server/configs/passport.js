'use strict';

const passport = require('passport');
const passportJwt = require('passport-jwt');
const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;
const jwtSecret = require('./secrets').jwtSecret;

passport.use(new JwtStrategy({
	jwtFromRequest: ExtractJwt.fromHeader(),
	secretOrKey: jwtSecret,
	passReqToCallback: true
}, (req, jwtPayload, next) => {
	console.log(req);
	next(null, null, {message: 'User not found'})
}));

const passportJwtMiddleware = (req, res, next) => {
	passport.authenticate('jwt', {session: false}, (err, user, info) => {
		if(err) return next(err)
		if(user) {
			req.user = user.dataValues;
			next(null, user)
		} else {
			if(info) {
				res.status(401).json(info.message)
			}
		}
	})(req, res, next)
};

module.exports = {
	passportJwtMiddleware: passportJwtMiddleware
};
