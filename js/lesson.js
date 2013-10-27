
$(document).ready(function() {

	// continually append stuff into this so you don't lose what you have done
	var json_box_content = null;

	// set up json-box
	$("#json-box").append("<pre id='j-box'> " + JSON.stringify({foo: "sample", bar: "sample" }, null, 4) + " </pre>");

	$("#command-description").keypress(function() {
		// delete current json object
		$("#json-box").remove();
		var content = $("#command-description").val();
		json_box_content = '"description": content';

		// add a new updated json object
		// make sure you append new results on to the old values
		// create a new div with id json-box
		$("#right-side").append("<div id='json-box'></div>");
		$("#json-box").append("<pre id='j-box'> " + JSON.stringify({"description": content}, null, 4) + " </pre>");
	});

	//when the actuall command is updated do stuff/
	$("#command").keypress(function() {
		$("#json-box").remove();

		console.log(json_box_content);

		var content = $("#command").val();

		// do this later json_box_content
		$("#right-side").append("<div id='json-box'></div>");
		$("#json-box").append("<pre id='j-box'> " + JSON.stringify({"command": content}, null, 4) + " </pre>");
	});
});