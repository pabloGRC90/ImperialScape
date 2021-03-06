<!doctype html>
<!--[if IE 7 ]>    <html lang="en-gb" class="isie ie7 oldie no-js"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en-gb" class="isie ie8 oldie no-js"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en-gb" class="isie ie9 no-js"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> <html lang="en-gb" class="no-js"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <!--[if lt IE 9]> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <![endif]-->	
	<title>Imperial Escape</title>	
	<meta name="description" content="">
	<meta name="author" content="Pablo García">    
    <!--[if lt IE 9]>
        <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->     
<link rel="stylesheet" href="css/bootstrap.min.css" />     
<link rel="stylesheet" type="text/css" href="css/isotope.css" media="screen" />	
<link rel="stylesheet" href="js/fancybox/jquery.fancybox.css" type="text/css" media="screen" />
<link rel="stylesheet" type="text/css" href="css/da-slider.css" />
<link rel="stylesheet" href="css/styles.css"/>
<!-- Font Awesome -->
<link href="font/css/font-awesome.min.css" rel="stylesheet">

<script src="js/script.js"></script>

</head>

<body onload="iniciarPartidaMain()">
<header class="header">
	<div class="container">
		<nav class="navbar navbar-inverse" role="navigation">
        	<div class="navbar-header">
	            <button type="button" id="nav-toggle" class="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
		            <span class="sr-only">Toggle navigation</span>
		            <span class="icon-bar"></span>
		            <span class="icon-bar"></span>
		            <span class="icon-bar"></span>
	            </button>
	            <a href="./index.html" class="navbar-brand scroll-top logo"><b>Imperial</b>Escape</a>
        	</div>
        	<!--/.navbar-header-->
	        <!--/.navbar-collapse-->
	    </nav>
	    <!--/.navbar-->
	</div>
	<!--/.container-->
</header>
<!--/.header-->
<div id="#top"></div>




<section id="datos" class="page-section section-one-partida">
	<div class="container">
       
        <div class="heading text-center title-datos-partida">
            <!-- Heading -->
            <!-- <button id="empezarPartida">Empezar</button> -->
            <h2>Resumen</h2>							
        </div>
		
        <section class="grid row clearfix clearfix-for-2cols">
            <!-- grid item -->
            <div class="grid-item col-md-6 col-datos-partida">
                <div class="item-content clearfix">
                    <i class="fa fa-key llave icon-datos-partida"></i>
                    <div class="text-content">
                    <h4 class="llaves" id="llaves">0</h4>
                    <p></p>
                    </div>
                </div><!-- end: .item-content -->
            </div><!-- end: .grid-item -->

            <!-- grid item -->
            <div class="grid-item col-md-6 col-datos-partida">
                <div class="item-content clearfix">
                    <i class="fa fa-clock-o fa-5x icon-datos-partida"></i>
                    <div class="text-content">
                    <h4 class="tiempo" id="tiempo">1800"</h4>
                    </div>
                </div><!-- end: .item-content -->
            </div><article class="clearfix"></article><!-- end: .grid-item -->
        </section>
	</div>
	<!--/.container-->
</section> 


<section id="background" class="bg-partida">
</section> 

<section id="enigmas" class="page-section darkBg pDark pdingBtm30 section-two-partida">
	<div class="container">
        <form>
            <h2 class="h2-player" id="partida-jugador">Jugador</h2>

            <select name="select-jugador" id="select-jugador" class="selectJugadorAlmirante" style="display:none" onchange="cambiarJugador()">
                <option disabled selected>¿Quién lo resuelve?</option>
            </select>

            <div class="heading text-center" id="div-enigma" class="div-enigma">         								 
                <p class="p-enigma" id="p-enigma">Enigma........</p>
            </div>

            <div class="container-palabras">
            
                <div class="row">
                    <div class="col-md-4 col-sm-4">	
                        <label class="lbl-palabras">
                            <input type="radio" name="palabra" id="palabra-1" value="palabra-1" class="radio-pal"> <span id="spn-pal1">Palabra 1</span>
                        </label>
                    </div>
                    <div class="col-md-4 col-sm-4">										
                        <label class="lbl-palabras">
                            <input type="radio" name="palabra" id="palabra-2" value="palabra-2" class="radio-pal"> <span id="spn-pal2">Palabra 2</span>
                        </label>
                    </div>
                    <div class="col-md-4 col-sm-4">	
                        <label class="lbl-palabras">
                            <input type="radio" name="palabra" id="palabra-3" value="palabra-3" class="radio-pal"> <span id="spn-pal3">Palabra 3</span>
                        </label>									
                        <!-- <h3 class="color-white" id="palabra-3">Palabra 3</h3> -->
                    </div>
                </div>

            </div>

            <button value="Resolver" class="btn-partida" id="input-resolver">Resolver</button>

            
        </form>
	<!--/.container-->
</section> 



<footer class="page-section">
	<div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 about">
            <a href="#" class="logoDark"><h4>Imperial Escape</h4></a>
            <p>Gracias por visitar nuestro sitio Imperial Escape, esperamos que disfrutes del juego propuuesto.
				Juega, disfruta y comparte si has disfrutado con nosotros.
			</p>
            <ul class="socialIcons">
              <li><a href="#" class="fbIcon" target="_blank"><i class="fa fa-facebook-square fa-lg"></i></a></li>
              <li><a href="#" class="twitterIcon" target="_blank"><i class="fa fa-twitter-square fa-lg"></i></a></li>
              <li><a href="#" class="googleIcon" target="_blank"><i class="fa fa-google-plus-square fa-lg"></i></a></li>
              <li><a href="#" class="pinterest" target="_blank"><i class="fa fa-pinterest-square fa-lg"></i></a></li>
            </ul>
          </div>
          
        </div><!-- END Row -->
      </div>
</footer>

    <a href="#top" class="topHome"><i class="fa fa-chevron-up fa-2x"></i></a>

<!--[if lte IE 8]><script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script><![endif]-->
<script src="js/modernizr-latest.js"></script>
<script src="js/jquery-1.8.2.min.js" type="text/javascript"></script>    
<script src="js/bootstrap.min.js" type="text/javascript"></script>	 
<script src="js/jquery.isotope.min.js" type="text/javascript"></script>
<script src="js/fancybox/jquery.fancybox.pack.js" type="text/javascript"></script> 
<script src="js/jquery.nav.js" type="text/javascript"></script>
<script src="js/jquery.cslider.js" type="text/javascript"></script>
<script src="js/custom.js" type="text/javascript"></script>

</body>
</html>