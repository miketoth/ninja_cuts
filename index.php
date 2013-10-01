<!DOCTYPE html>
<html lang="em">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Ninja Cuts</title>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css">
    <script type"text/javascript" src="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/index.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row-fluid">
            <div class="span2">
                <div id="wrapper">  
                  <!-- Sidebar -->
                  <div id="sidebar-wrapper">
                    <ul id="lesson-list" class="sidebar-nav">
                    <!-- import list of lessons from server -->
                    <?php include("files.php"); ?> 
                    </ul>
                  </div>
                </div>
            <div class="span10">
                <div class="text-center">
                    <br />
                    <br />
                    <form>
                        <label id="lesson-explanation"> Select a lesson </label> <br />
                        <input class="span2" id="lesson-box" placeholder="" >
                    </form>
                </div>
            </div>
        </div>
    </div>

</body>
</html>
