const mongoose = require('mongoose');

const prayerSchema = new mongoose.Schema({
  name: {type: String, required: true},
  prayer: {type: String, required: true},
  valid: {type: Boolean, required: true}
});

const Prayer = mongoose.model('Prayer', prayerSchema);

module.exports = Prayer;
