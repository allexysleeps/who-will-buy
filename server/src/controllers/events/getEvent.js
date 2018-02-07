'use strict';
const {Event} = require('../../database');
const {ObjectId} = require('mongodb');

async function getEvent (req, res) {
  const { event_id } = req.params;
  const event = await Event.findOne({_id: ObjectId(event_id)}).exec();
  res.json(event || null);
}

module.exports = {
  name: 'getEvent',
  controller: getEvent
};