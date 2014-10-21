var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Ninja = new Schema({
	name: {	type: String, require: true, uniqueness: true, lowercase: true },
	health: { type: Number, require: true, min: 0, max: 300, default: 50 },
	weapons: [{ type: String, enum: ['Sword', 'Club', 'Numchucks', 'Tooth', 'Pick'], require: true, lowercase: true }],
	skills: [{ type: String, enum: ['Wall climbing', 'Stealth', 'Bo Staff Skills', 'Numchucks Skills'], require: true, lowercase: true }],
	abilities: [{ type: String, require: true, uniqueness: true, lowercase: true }],
	zombiesKilled: { type: Number, min: 0, default: 0 }
});

module.exports = mongoose.model('Ninja', Ninja);


