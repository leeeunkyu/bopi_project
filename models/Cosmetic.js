var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
  title: {type: String, required: true, trim: true},
  content: {type: String, required: true, trim: true},
  numComment: {type: Number, default: 0},
  createdAt: {type: Date, default: Date.now},
  read: {type: Number, default: 0}
}, {
  toJSON: {virtuals: true },
  toObject: {virtuals: true}
});

var Cosmetic = mongoose.model('Cosmetic', schema);

module.exports = Cosmetic;
