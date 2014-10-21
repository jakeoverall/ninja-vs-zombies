var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	name: {	type: String, require: true, uniqueness: true, lowercase: true },
	health: { type: Number, require: true, min: 0, max: 300, default: 50 }
});

module.exports = mongoose.model('TESTING', schema);


