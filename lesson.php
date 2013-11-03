<html>

<head>
	    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	    <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
	    <link rel="stylesheet" href="css/bootstrap/css/bootstrap.min.css">
	    <script type"text/javascript" src="css/bootstrap/js/bootstrap.min.js"></script>
	    <script type="text/javascript" src="js/lesson.js"></script>
</head>

<body style="background-image: url('css/geometry/geometry.png');">
	<div class="container-fluid">
        <div class="row-fluid">
        	<div class="span8">
	    		<div class="text-center">
	    			<p><h4>Create a Lesson</h4></p>
	    			<form class="form-horizontal" method="post" name="input" action="create_json.php">	
		    				<div class="control-group well well-lg">
		    					<label class="control-label" for="lesson-name">Name</label>
		    					<div class="controls">
		    						<input type="text" name="lesson-name" id="lesson-name" placeholder="Name" />
		    					</div>
		    				</div>

		    				<!-- Name and description for each command -->
		    				<div class="commands">
		    				<div class="well well-lg">
			    				<div class="control-group">
			    					<label class="control-label" for="command-description0">Description</label>
			    					<div class="controls">
			    						<input type="text" name="command-description0" id="command-description0" placeholder="Description" />
			    					</div>
			    				</div>
			    				<div class="control-group">
			    					<label class="control-label" for="command0">Command</label>
			    					<div class="controls">
			    						<input type="text" name="command0" id="command0" placeholder="Command" />
			    					</div>
			    				</div>
		    				</div>
		    			</div>
	    				<div class="btn-group">
		    					<button id="add-command" class="btn btn-default" type="button">Add Another</button>
		    					<input type="submit" value="Submit" class="btn btn-default" />
		    					<button id="cancel-command" class="btn btn-default" type="button">Cancel</button>
		    			</div>
	    			</form>
	    		</div>
	    	</div>
	    	</div>
        </div>
    </div>
</body>
</html>