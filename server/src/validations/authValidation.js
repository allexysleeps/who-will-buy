'use strict';
const {check} = require('express-validator/check');

const rules = [
  check('email')
    .isEmail().withMessage('Not valid email')
    .trim()
    .normalizeEmail(),
  check('password')
    .isLength({min: 5}).withMessage('Password min length 5 chars')
];

module.exports = {
	name: 'auth',
	rules
};