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
    <script src="js/script_editActions.js" type="text/javascript"></script>	
    




</head>

<body class="body" onload="cargar_Enigmas()">

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
            <form class="edit-form" novalidate>

                <h1 class="title-form">Editar</h1>
              

                <p class="parr-enigma">
                    <label for="enigma">
                        <select name="enigma" id="enigma" class="enigma">
                            <option disabled selected>Seleccione Enigma</option>
                        </select>
                    </label>
                </p>


                <p>
                    <label for="palabra">
                        <input placeholder="Modificar palabra" type="text" id="palabra" name="palabra" minlength="8">
                        <span class="error" aria-live="polite"></span>
                    </label>
                </p>

                <p>
                    <label for="definicion">
                        <input placeholder="Modificar definición" type="text" id="definicion" name="definicion" minlength="10">
                        <span class="error" aria-live="polite"></span>
                    </label>
                </p>
                
                <div class="checks-admin">
                    <label class="checks-admin-label">
                        <input class="check-admin" type="checkbox" name="baja" id="baja" value="baja"> <span class="check-span">Borrar Enigma</span>
                    </label>
                </div> 
                
                
                <button type="submit" id="enviar-admin-form">Modificar</button>
                <!-- <input type="submit" id="form-btn" value="Enviar"> -->

            </form>


            <div class="item"><br/>Para ver las Estadísticas de Partidas <a href="./partidas.php" class="enlaces-userActions">aquí</a></div>

        </div>
    </div>


    <div class="login-page">
        <div class="form">
            <form class="add-form" novalidate>

                <h1 class="title-form">Añadir</h1>
            
            
                <p>
                    <label for="new_palabra">
                        <input placeholder="Añadir palabra" type="text" id="new_palabra" name="new_palabra" minlength="8">
                        <span class="error" aria-live="polite"></span>
                    </label>
                </p>

                <p>
                    <label for="new_definicion">
                        <input placeholder="Añadir definición" type="text" id="new_definicion" name="new_definicion" minlength="10">
                        <span class="error" aria-live="polite"></span>
                    </label>
                </p>
                
                <button type="submit" id="enviar-admin-form">Añadir</button>
                <!-- <input type="submit" id="form-btn" value="Enviar"> -->

            </form>


        </div>
    </div>




    <script src="js/bootstrap.min.js" type="text/javascript"></script>	 
      
</body>
</html>