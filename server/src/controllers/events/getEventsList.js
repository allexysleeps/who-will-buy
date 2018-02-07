'use strict';
const {Event} = require('../../database');

async function getEventsList (req, res) {
  const admin_id = req.params.user_id || req.user._id;
  const eventList = await Event.find({admin_id})
    .select({admin_id: 1, title: 1, description: 1})
    .exec();
  if (eventList.length) {
    res.json(eventList);
  } else {
    res.sendStatus(404);
  }
}

module.exports = {
  name: 'getEventsList',
  controller: getEventsList
};