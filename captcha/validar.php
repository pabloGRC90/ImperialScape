<?php
	define('CLAVE', '6LcprvgcAAAAAG7EB2k1itdR_DnAKej_WJ1SHD0X');
	
	$token = $_POST['token'];
	$action = $_POST['action'];
	
	$cu = curl_init();
	curl_setopt($cu, CURLOPT_URL, "https://www.google.com/recaptcha/api/siteverify");
	curl_setopt($cu, CURLOPT_POST, 1);
	curl_setopt($cu, CURLOPT_POSTFIELDS, http_build_query(array('secret' => CLAVE, 'response' => $token)));
	curl_setopt($cu, CURLOPT_RETURNTRANSFER, true);
	$response = curl_exec($cu);
	curl_close($cu);
	
	$datos = json_decode($response, true);

	if($datos['success'] == 1 && $datos['score'] >= 0.5){
		if($datos['action'] == 'validarUsuario'){
            echo "Validación rechaptcha exitosa<br/>";	
		    // print_r($datos);
            header("Location: ../userActions.php");
            // die();
            // validación PHP EN BASE DE DATOS
		}
		
    } else {
        echo "Validación rechaptcha fallida<br/>";	
        // print_r($datos);
        header("Location: ../userActions.php");   
    }
?>