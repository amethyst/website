<!DOCTYPE html>
<html>
    <head>
	<meta charset="utf-8">
    	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    	<meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Amethyst</title>

	<!-- Latest compiled and minified CSS -->
     	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

      	<!-- Optional theme -->
     	<!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">-->
      <link rel="stylesheet" href="./cover.css" />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
      	<!-- Latest compiled and minified JavaScript -->
     	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
    </head>
    <body>

    <div class="site-wrapper">
      <div class="site-wrapper-inner">

        <div class="masthead clearfix">
          <div class="inner">
            <h3 class="masthead-brand"><img src="./amethyst.svg">Amethyst</h3>
            <nav>
              <ul class="nav masthead-nav">
                <li class="active"><a href="#">Home<hr /></a></li>
                <li><a href="./book">Book<hr /></a></li>
                <li><a href="./doc">Docs<hr /></a></li>
                <li><a href="https://github.com/ebkalderon/amethyst">GitHub<hr /></a></li>
              </ul>
            </nav>
          </div>
        </div>

        {{ content }}

      </div>
    </div>

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="../../assets/js/ie10-viewport-bug-workaround.js"></script>
    </body>
</html>
