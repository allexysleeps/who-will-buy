'use strict';
const {Event} = require('../../database');

function createEvent (req, res) {
  const {title, description} = req.body;
  const admin_id = req.user._id;
  const newEvent = new Event({
    admin_id,
    title,
    description
  });
  newEvent.save((err) => {
    if (err) {
      console.log(err);
      res.sendStatus(400);
    }
    res.sendStatus(200);
  })
}

module.exports = {
  name: 'createEvent',
  controller: createEvent
};