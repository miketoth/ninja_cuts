/// <reference path="d/jquery.d.ts" />

class Lesson {

}

//////////////////////////////////////////////////

$(document).ready(function() {
	var lesson = ['h', 'j', 'k', 'l'];
	var counter = 0;

	$("#lesson-box").attr('placeholder', lesson[0]);

	$("#lesson-box").on("input", function() {

		if(lesson[counter] == $("#lesson-box").val()) {
			console.log($("#lesson-box").val());
			counter++;
		}

		// clear the box afterwards
		setTimeout(function() {
			$("#lesson-box").val("");
			}, 450);

		$("#lesson-box").keypress(function(e) {
			var code = String.fromCharCode(e.which);

			if(lesson[counter] == code) {
				counter++;
			}
		});

		// loop counter back around
		if(counter > 3) {
			counter = 0;
		}

		// put new character in the box
		$("#lesson-box").attr("placeholder", lesson[counter]);
	});
});