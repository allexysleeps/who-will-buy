'use strict';
const {Event} = require('../../database');
const {ObjectId} = require('mongodb');

async function addTask (req, res) {
  const {event_id} = req.params;
  const {title, description} = req.body;
  
}