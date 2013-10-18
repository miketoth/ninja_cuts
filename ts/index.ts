/// <reference path="d/jquery.d.ts" />

/**

Structure of short_cuts

[
	{
		"command": "YOUR STUFF HERE",
		"explanation": "YOUR STUFF HERE"
	}
]
	
}

*/

/*

TODO make side bar scrollable
TODO grrr probably will need jquery UI, bleh

*/

class Lesson {
	short_cuts = []
	constructor(short_cuts) {
		this.short_cuts = short_cuts;
	}

	// debug for the lesson
	show() {
		return console.log (this.short_cuts);
	}
}

//////////////////////////////////////////////////

$(document).ready(function() {

	// the sidebar starts invisible? 
	// but we should let the user collapse it or something
	$(".lesson-brand").click(function() {
		console.log("Lets hide it");
		$("#sidebar-wrapper").slideLeft("slow", function() {
			console.log("did it work?");
		});
	});

	// let user select which lesson to load
	// display each lesson in the lesson folder
	$("a").click(function() {
		// get the specified JSON file and load it into the lesson 
		$.getScript("lessons/" + this.id,function(data) {
			var json_data = JSON.parse(data); // lessons must be in valid JSON format

			var lesson = new Lesson(json_data);
			var counter = 0;

			// insert initial command and explanation
			$("#lesson-box").attr('placeholder', lesson.short_cuts[0].command);
			$("#lesson-explanation").text(lesson.short_cuts[0].explanation);

			// respond to a users attempt
			$("#lesson-box").on("input", function() {

				// correct command has been entered
				if(lesson.short_cuts[counter].command === $("#lesson-box").val()) {
					counter++;

					// highlight the box green for a few seconds
					// clear the box afterwards
					setTimeout(function() {
						$("#lesson-box").val("");
					}, 450);
				}
				else {
					// check to see if it is a substring of the command 
					// ie :w is potentially still correct for the command :wq
					// while :q is incorrect

					// basically as long as the command could be correct keep the box highlighted blue
					// once it is correct highlight the box green
					// if it is impossible for the command to be correct
					// highlight it red until it is returned to a start where it could be correct
					console.log("fail");
				}
				// loop counter back around
				// because Objects are unordered associative arrays,
				// we have to get the length by taking the array of keys for the object
				if(counter > Object.keys(lesson.short_cuts).length - 1) {
					counter = 0;
				}

				// put new character in the box
				$("#lesson-box").attr("placeholder", lesson.short_cuts[counter].command);
				$("#lesson-explanation").text(lesson.short_cuts[counter].explanation);
			});
		});
	});
});