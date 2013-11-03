
/**
Need to make sure each input box has a uniqure name and id
*/
var counter = 0; // used to make each input box unique.

// TODO replace this by creating the element in javascript	
function new_command_form(counter) {
	return '<div class="well well-lg">' +
		    				'<div class="control-group">' +
		    					'<label class="control-label" for="command-description' + counter + '">Description</label>' +
		    					'<div class="controls">' +
		    						'<input type="text" id="command-description' + counter + '" name="command-description' + counter + '" placeholder="Description" />' +
		    					'</div>'+
		    				'</div>' +
		    				'<div class="control-group">'+
		    					'<label class="control-label" for="command' + counter + '">Command</label>'+
		    					'<div class="controls">'+
		    						'<input type="text" id="command' + counter + '" name="command' + counter + '" placeholder="Command" />'+
		    					'</div>' +
		    				'</div>';
}

$(document).ready(function() {

	$("#add-command").on("click", function() {
		counter++;
		$(".commands").append(new_command_form(counter));
	});

	$("#submit-command").on("click", function() {
		// iterate through input boxes and make a json array of all commands and descriptions
		/*


		*/
	});

	$("#cancel-command").on("click",function() {
		$(".commands").remove(); // needs to restart page from square one
		$('<div class="commands">' + html_command_form +'</div>').insertBefore(".btn-group");
	});
});