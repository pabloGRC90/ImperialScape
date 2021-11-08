<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="css/styles.css"/>
    <link rel="stylesheet" href="./css/style_login.css">
    <link rel="stylesheet" href="css/bootstrap.min.css" /> 
    <link rel="stylesheet" type="text/css" href="css/isotope.css" media="screen" />	
    <link rel="stylesheet" href="js/fancybox/jquery.fancybox.css" type="text/css" media="screen" />
    <link rel="stylesheet" type="text/css" href="css/da-slider.css" />
    <link rel="stylesheet" type="text/css" href="css/validacion.css" />
    <!-- Font Awesome -->
    <link href="font/css/font-awesome.min.css" rel="stylesheet">

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>

    <script src="js/script_validate.js" type="text/javascript"></script>	
    
    <script src="https://www.google.com/recaptcha/api.js?render=6LcprvgcAAAAAGEzoy68F67McMymAggsT0TkK6DH"></script>


    <script>
        // $(document).ready(function() {
        //     // $('#form-btn').click(function(event) {
        //     $('#login-form').submit(function(event) {
        //         // event.preventDefault();
        //         grecaptcha.ready(function() {
        //             grecaptcha.execute('6LcprvgcAAAAAGEzoy68F67McMymAggsT0TkK6DH', {
        //                 action: 'validarUsuario'
        //                 }).then(function(token) {
        //                 $('#login-form').prepend('<input type="hidden" name="token" value="' + token + '" >');
        //                 $('#login-form').prepend('<input type="hidden" name="action" value="validarUsuario" >');
        //                 $('#login-form').submit();
        //             });
        //         });
        //     });
        // });
       
        // $(document).ready(function() {
            // $('#form-btn').click(function() {
            // $('#login-form').submit(function(event) {
            //     event.preventDefault();
            //     grecaptcha.ready(function() {
            //         grecaptcha.execute('6LcprvgcAAAAAGEzoy68F67McMymAggsT0TkK6DH', {
            //             action: 'validarUsuario'
            //             }).then(function(token) {
            //             $('#login-form').prepend('<input type="hidden" name="token" value="' + token + '" >');
            //             $('#login-form').prepend('<input type="hidden" name="action" value="validarUsuario" >');
            //             $('#login-form').submit();
            //         });
            //     });
            // });
        // });

    </script>

</head>

<body onload="validate_login()">

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
            <!-- <form class="login-form" id="login-form" action="./captcha/validar.php" method="POST" novalidate> -->
            <!-- <form class="login-form" id="login-form" novalidate> -->
            <form class="login-form" action="./userActions.php" novalidate>

                <h1 class="title-form">Conéctate</h1>
              
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
                
                <button type="submit">Enviar</button>
                <!-- <input type="submit" id="form-btn" value="Login"> -->

                <p class="message">¿No estás registrado? <a href="./registro.php">Crea una cuenta</a></p>
                <span class="message">¿Has olvidado la contraseña? Pulsa <a href="./recuperarPass.php"> aquí</a></span>

            </form>
        </div>
    </div>

    <script src="js/bootstrap.min.js" type="text/javascript"></script>	 
      
</body>
</html>