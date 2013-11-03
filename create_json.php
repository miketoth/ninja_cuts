<?php

// do something on splash page to let user know the file has been created.

// TODO figure how to do PHP error codes
if(!isset($_POST['lesson-name'])) {
	exit("Please set file name");
}
else {
	$filename = $_POST['lesson-name'];
	$filename = strtolower($filename); // lowercase is prettier
	// TODO handle file name conflicts
}

// for each command description and name, iterate through the list and make an associative array 
// what to do if POST variables are not set? TODO figure that shit out

echo var_dump($_POST);

$command_description = "command-description";
$command_name = "command";
$counter = 0;

$json_array = array();

// increments by 2 because it uses two elements from the array each time
// if input is well-formed this shouldn't be a problem
// start at 1 to avoid filename
// TODO handle poorly-formed input
for($i=0;$i<sizeof($_POST)-1;$i+=2){
	$temp_array = array();

	echo "<br />";
	echo $_POST[$command_name . $counter];

	if(isset($_POST[$command_name . $counter])) {
		$temp_array['command'] = $_POST[$command_name . $counter];
	}
	if(isset($_POST[$command_description . $counter])) {
		$temp_array['explanation'] = $_POST[$command_description . $counter];
	}
	$counter++;
	$json_array[] = $temp_array;
	echo "<br />";
	echo json_encode($json_array);
}

// create a file with name filename and put json_array encoded contents into it.

file_put_contents("lessons/" . $filename . ".js", json_encode($json_array));

header("Location: index.php");

?>