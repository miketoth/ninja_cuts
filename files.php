<?php

$lesson_array = array();
$dir = "lessons";

if($dh = opendir($dir)) {
	while(($file = readdir($dh)) !== FALSE) {
		if(substr($file, 0, 1) !== ".") {
			$lesson_array[] = $file;
		}
	}
}

$html = "<li class='sidebar-brand'><a id='lesson-brand' href='#'>Lessons</a></li>";

foreach ($lesson_array as $lesson) {
	$html .= "<li><a id='" . $lesson . "' href='#'>" . substr($lesson, 0, sizeof($lesson) - 4) . "</a></li>"; 
}

echo $html;
?>