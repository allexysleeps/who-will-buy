'use strict';

const fs = require('fs');
const path = require('path');

const validationMiddleware = {};

fs
  .readdirSync(path.join(__dirname))
  .filter(file => (file.indexOf('.') !== 0)
    && (file !== 'index.js')
    && (file !== 'utils.js'))
  .forEach(file => {
    const {rules, name} = require(path.join(__dirname, file));
    validationMiddleware[name] = rules;
  });

module.exports = validationMiddleware;