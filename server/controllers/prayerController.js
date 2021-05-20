const Prayer = require('../models/Prayer');

module.exports = {

  addPrayer: async(req, res) => {
    req.body.valid = true;
    try {
      const add = await Prayer.create(req.body);
      // the response is the prayer with id
      // { _id: 60a688a806951817bb2fcd39, name: 'asd', prayer: 'asdf', __v: 0 }
      res.status(201).send('Prayer sent');
    } catch(err) {
      console.log({err})
      res.send(400).send('Incorrect input');
    }
  },
  getAllPrayers: async(req, res) => {
    try {
      const getAll = await Prayer.find({});
      res.status(200).send(getAll);
    } catch(err) {
      console.log({err})
      res.send(400).send('Bad request');
    }
  }
}