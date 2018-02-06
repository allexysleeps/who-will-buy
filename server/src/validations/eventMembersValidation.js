'use strict';
const {check} = require('express-validator/check');

const rules = [
  check('email')
    .isEmail().withMessage('Invalid email')
];

module.exports = {
  name: 'eventMembers',
  rules
};