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

					$("#lesson-box").css("border-color", "green");


					// highlight the box green for a few seconds
					// clear the box afterwards
					setTimeout(function() {
						$("#lesson-box").val("");
						$("#lesson-box").css("border-color", "#9ecaed");
					}, 450);
				}
				else {
					var currentValue = $("#lesson-box").val().toString();

					// compare it to the substring of the same length of the command
					var validSubString = lesson.short_cuts[counter].command.substring(0, currentValue.length);

					// Not a valid substring
					if(currentValue !== validSubString) {
						$("#lesson-box").css("border-color", "red"); // turn input box border to red
					}
					else {
						$("#lesson-box").css("border-color", "#9ecaed");
					}	
					
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
