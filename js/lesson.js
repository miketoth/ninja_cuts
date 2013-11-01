
/**
Need to make sure each input box has a uniqure name and id
*/

var html_command_form = '<div class="well well-lg">'+
		    				'<div class="control-group">' +
		    					'<label class="control-label" for="command-description">Description</label>' +
		    					'<div class="controls">'+
		    						'<input type="text" id="command-description" placeholder="Description" />' +
		    					'</div>'+
		    				'</div>' +
		    				'<div class="control-group">'+
		    					'<label class="control-label" for="command">Command</label>'+
		    					'<div class="controls">'+
		    						'<input type="text" id="command" placeholder="Command" />'+
		    					'</div>' +
		    				'</div>';

$(document).ready(function() {

	$("#add-command").on("click", function() {
		$(".commands").append(html_command_form);
	});

	$("#cancel-command").on("click",function() {
		$(".commands").remove(); // needs to restart page from square one
		$('<div class="commands">' + html_command_form +'</div>').insertBefore(".btn-group");
	});
});