<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
    <link rel="stylesheet" href="css/styles.css"/>
    <link rel="stylesheet" href="./css/style_login.css">
    <link rel="stylesheet" href="css/bootstrap.min.css" /> 
    <link rel="stylesheet" type="text/css" href="css/isotope.css" media="screen" />	
    <link rel="stylesheet" href="js/fancybox/jquery.fancybox.css" type="text/css" media="screen" />
    <link rel="stylesheet" type="text/css" href="css/da-slider.css" />
    <link rel="stylesheet" type="text/css" href="css/validacion.css" />
    <!-- Font Awesome -->

    <link href="font/css/font-awesome.min.css" rel="stylesheet">

    <script src="js/script_validate.js" type="text/javascript"></script>	 

</head>


<body onload="validate_registro()">

    <header class="header-forms">
        
        <nav class="navbar navbar-inverse" role="navigation">
            <div class="navbar-header">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <a href="./index.html" class="navbar-brand scroll-top logo"><b>Imperial</b>Escape</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
     
    </header>


    <div class="login-page">
        <div class="form">
            <form class="login-form" action="./userActions.php" novalidate>

                <h1 class="title-form">Regístrate</h1>
              
                <p>
                    <label for="mail">
                        <!-- <span>Por favor, introduzca una dirección de correo electrónico: </span> -->
                        <input placeholder="Email" type="email" id="mail" name="mail" required minlength="8">
                        <span class="error" aria-live="polite"></span>
                    </label>
                </p>
                
                <p>
                    <label for="password">
                        <!-- <span>Por favor, introduzca una dirección de correo electrónico: </span> -->
                        <input placeholder="Password" type="password" id="password" name="password" required minlength="8">
                        <span class="error" aria-live="polite"></span>
                    </label>
                </p>

                <p>
                    <label for="nombre">
                        <!-- <span>Por favor, introduzca una dirección de correo electrónico: </span> -->
                        <input placeholder="Nombre" type="text" id="name" name="name" required minlength="8">
                        <span class="error" aria-live="polite"></span>
                    </label>
                </p>

                <button type="submit">Enviar</button>

                <p class="message">¿Ya está registrado? <a href="./login.php">Conéctate</a></p>
                
            </form>
        </div>
    </div>

      <script src="js/bootstrap.min.js" type="text/javascript"></script>	 
</body>
</html>