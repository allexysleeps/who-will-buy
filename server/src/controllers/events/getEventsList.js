'use strict';
const {Event} = require('../../database');

function getEventsList (req, res) {
  const admin_id = req.params.user_id || req.user._id;
  Event.find({admin_id}, (err, events) => {
      if (err) {
        console.log(err);
        return res.sendStatus(404);
      }
      res.json(events);
    })
}

module.exports = {
  name: 'getEventsList',
  controller: getEventsList
};