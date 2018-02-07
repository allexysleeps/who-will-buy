'use strict';
const ObjectId = require('mongodb').ObjectID;
const {Event, User} = require('../../database');
const {validationResult} = require('express-validator/check');
const {errorFormatter} = require('../../validations/utils');

async function addMember(req, res) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    const {event_id} = req.params;
    const {email, participant_id} = req.body;
    const user = await User.findOne({email}).exec();
    if (user) {
      Event
        .update({_id: ObjectId(event_id)},
          {$push: {participants: {participant_id: ObjectId(user._id), status: 'pending'}}},
          (err, result) => {
            res.sendStatus(200);
          })
    } else {
      res.sendStatus(404);
      //  Here will go invite func
    }
  } else {
    res.status(400).json(errorFormatter(errors.mapped()))
  }

}

module.exports = {
  name: 'addMember',
  controller: addMember
};