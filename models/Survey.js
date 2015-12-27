var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
  value:{type: Number}
}, {
  toJSON: {virtuals: true },
  toObject: {virtuals: true}
});

var Survey = mongoose.model('Survey', schema);

module.exports = Survey;
