(function(){
	var express = require('express');
	var app = express();
	var workout;
	var allowCrossDomain = function(req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
		res.header('Access-Control-Allow-Headers', 'Content-Type');
	
		next();
	}
	app.use(allowCrossDomain);
	
	app.get('/fitness/createworkout', function(request, response){
		console.log("create workout called");
		var ex1 = {"name": "cock pushups", "videoURL": "https://www.youtube.com/watch?v=0FNo1NvEEo8", "scheme" : "1min AMRAP", "duration": 4};
		var ex2 = {"name": "nutsack stretches", "videoURL": "https://www.youtube.com/watch?v=0FNo1NvEEo8", "scheme" : "1min static", "duration": 4};
		var ex3 = {"name": "dildo rows", "videoURL": "https://www.youtube.com/watch?v=0FNo1NvEEo8", "scheme" : "4x10", "duration": 4};
		
		//var d = Date.now();
		workout = {"dateCreated" : Date.now(),
			"station1" : [ex1, ex2, ex3],
			"station2" : [ex1, ex2, ex3],
			"stationn" : [ex1, ex2, ex3]
		};
		response.json(workout);
	});
	
	app.get('/fitness/getNextExercise', function(request, response){
		console.log("getNextExercise called");
		
		response.send("insert exercise json here");
	});
	
	app.listen(6969, function(){
		console.log("listening on port 6969");
	});
})();

/*
SCHEMAS
exercise = { "name" : 
			"videoURL" : 
			"scheme": "setsxreps or amrap or what have you"
			"duration": 
			}
			
workout = {"datecreated" : date created
			"station1" : [ex1, ex2, ex3...]
			"station2" : [ex1, ex2, ex3...]
			...
			"stationn" : [ex1, ex2, ex3...]
			}



*/