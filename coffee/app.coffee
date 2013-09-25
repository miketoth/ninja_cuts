# first plan should be to rotate placeholder on a time basis sort of thing

###
	Now create a class that holds an array of options
	It needs to support adding and delting options
###

class Lesson
	constructor: (@command_list) ->

	addCommand: (command) ->
		@command_list.push command


$ ->
	# Query Database for list of options and put them into an array
	options = ["h", "j", "k", "l"] # replace with DB call
	lesson = new Lesson(options)
	counter = 0

	lesson.addCommand "p"

	# set first character
	$('#new-todo').attr('placeholder', lesson.command_list[0])

	# after the user types a character into the box, check and switch if the letter is correct
	$('#new-todo').on "input", -> 

		if lesson.command_list[counter] == $('#new-todo').val()
			console.log $('#new-todo').val()
			console.log "come on!"
			counter++

		# After a pause clear what has been typed regardless if it is correct or not
		callback = -> $('#new-todo').val("")
		setTimeout callback, 450

		# loop the counter
		if counter > lesson.command_list.length-1
			counter = 0

		# check if it was the correct character
		$('#new-todo').keypress((e) ->
			code = String.fromCharCode(e.which)

			# check against current code
			if lesson.command_list[counter] == code
				counter++
		)
		$("#new-todo").attr("placeholder", lesson.command_list[counter])


