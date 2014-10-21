var express = require('express');
var mongo = require('mongo');
var mongoose = require('mongoose');
var Ninja = require('./ninja');
var Zombie = require('./zombie');
var Testing = require('./testModel');
var app = express();

var test1 = new Testing({name: 'Test 1', health: 300});

test1.save();


// Zombies
var jimmy = new Zombie({name: 'Rotting Jimmy', health: 30, ninjasKilled: 1});

var timbo = new Zombie({name: 'timbo', health: 20, ninjasKilled: 30});

// Ninjas

var ninja1 = new Ninja({name: 'Secret', health: 300, weapons: ['Sword', 'Club'], skills: ['Wall climbing'], abilities: ['Whatever'], zombiesKilled: 40000});
var ninja2 = new Ninja({name: 'Unknown', health: 3, weapons: ['Sword'], skills: ['Wall climbing'], abilities: ['Killing things'], zombiesKilled: 1});

jimmy.save();
timbo.save();
ninja1.save();
ninja2.save();

mongoose.connect('mongodb://localhost/ninjaZombies');


app.get('/zombies', function(req, res){
	Zombie.find().exec(function(err, things){
		res.send(things);
	});
});

app.get('/ninjas', function(req, res){
	Ninja.find().exec(function(err, ninjas){
		if(err){
			res.send(err);
		} else{
			res.send(ninjas);
		}
	});
})




app.listen(8888, function () {
	console.log("listening on port "  + 8888);
});