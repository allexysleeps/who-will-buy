'use strict';
const fs = require('fs');
const path = require('path');

const eventControllers = {};

fs
  .readdirSync(path.join(__dirname))
  .filter(file => (file.indexOf('.') !== 0)
    && (file !== 'index.js'))
  .forEach(file => {
    const {controller, name} = require(path.join(__dirname, file));
    eventControllers[name] = controller;
  });

module.exports = eventControllers;