<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Actions</title>
    
    
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="css/isotope.css" media="screen" />	
    <link rel="stylesheet" href="js/fancybox/jquery.fancybox.css" type="text/css" media="screen" />
    <link rel="stylesheet" type="text/css" href="css/da-slider.css" />

    <link rel="stylesheet" href="css/styles.css"/>
    <link rel="stylesheet" href="./css/style_login.css">
    
    <link rel="stylesheet" type="text/css" href="css/validacion.css" />
    
    <!-- Font Awesome -->
    <!-- <link href="font/css/font-awesome.min.css" rel="stylesheet"> -->

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>

    <script src="js/script_validate.js" type="text/javascript"></script>	
    <script src="js/script_adminActions.js" type="text/javascript"></script>	
    




</head>

<body class="body" onload="cargar_Usuarios()">

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
            <form class="admin-form" id="admin-form" method="POST" novalidate>

                <h1 class="title-form">Administrar</h1>
              

                <p class="p-usuario">
                    <label for="user">

                        <select name="usuario" id="usuario" class="usuario">
                            <option selected id="seleccioneUsuario" >Seleccione Usuario</option>
                        </select>

                    </label>
                </p>


                <p>
                    <label for="nombre">
                        <!-- <span>Por favor, introduzca una dirección de correo electrónico: </span> -->
                        <input placeholder="Modificar nombre" type="text" id="nombre" name="nombre" required minlength="8">
                        <span class="error" aria-live="polite"></span>
                    </label>
                </p>

                <p>
                    <label for="password">
                        <!-- <span>Por favor, introduzca una dirección de correo electrónico: </span> -->
                        <input placeholder="Modificar Password" type="password" id="password" name="password" required minlength="8">
                        <span class="error" aria-live="polite"></span>
                    </label>
                </p>
                
                <div class="checks-admin">
                    <label class="checks-admin-label">
                        <input class="check-admin" type="checkbox" name="baja" id="baja" value="baja"> <span class="check-span">Baja</span>
                    </label>

                    <label class="checks-admin-label">
                        <input class="check-admin" type="checkbox" name="activo" id="activo" value="activo"> <span class="check-span">Activo</span>
                    </label>

                    <label class="checks-admin-label">
                        <input class="check-admin" type="checkbox" name="admin" id="admin" value="admin"> <span class="check-span">Administrador</span>
                    </label>
                </div>  
                
                <input type="submit" id="form-btn" value="Enviar">

            </form>
        </div>
    </div>




    <script src="js/bootstrap.min.js" type="text/javascript"></script>	 
      
</body>
</html>