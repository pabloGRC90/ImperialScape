// $('.message a').click(function(){
//     $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
// });




//VALIDACIÓN LOGIN PAGE
function validate_login()
{

    const form = document.getElementsByTagName('form')[0];

    const email = document.getElementById('mail');
    const pass = document.getElementById('password');

    const emailError = document.querySelector('#mail + span.error');
    const passError = document.querySelector('#password + span.error');
 
    email.addEventListener('input', function (event) {
        if (email.validity.valid) {
            emailError.innerHTML = 'OK';
            emailError.className = 'noerror';
            emailError.classList.remove("error active");
            emailError.classList.add("noerror");
        } else {
            
            showError();
        }
    });
   
    pass.addEventListener('input', function (event) {
        if (pass.validity.valid) {
            passError.innerHTML = 'OK';
            passError.className = 'noerror';
            emailError.classList.remove("error active");
            emailError.classList.add("noerror");
        } else {
            
            showError();
        }
    });

    
    form.addEventListener('submit', function (event) {
        if ((!email.validity.valid) || (!pass.validity.valid)){
      
            // si el campo de correo electrónico es válido, dejamos que el formulario se envíe
            if (!email.validity.valid) {
                // Si no es así, mostramos un mensaje de error apropiado
                emailError.className = 'error active';
                showErrorMail();
                // Luego evitamos que se envíe el formulario cancelando el evento
                 event.preventDefault();
            }
            if (!pass.validity.valid) {
                // Si no es así, mostramos un mensaje de error apropiado
                passError.className = 'error active';
                showErrorPass();
                // Luego evitamos que se envíe el formulario cancelando el evento
                event.preventDefault();
            }
        }else{
            alert("Usuario Conectado");
            window.location.href = "../userActions.php";
        }
    });


    function showErrorMail() {
        if (email.validity.valueMissing) {
            // Si el campo está vacío
            // muestra el mensaje de error siguiente.
            emailError.textContent = 'Introduzca una dirección email.';
        } else if (email.validity.typeMismatch) {
            // Si el campo no contiene una dirección de correo electrónico
            // muestra el mensaje de error siguiente.
            emailError.textContent = 'El valor introducido debe ser un email.';
        } else if (email.validity.tooShort) {
            // Si los datos son demasiado cortos
            // muestra el mensaje de error siguiente.
            emailError.textContent = 'Debe tener al menos '+ email.minLength +' caracteres; ha introducido '+ email.value.length +'.';
        }
        emailError.className = 'error active';
    }
   
    function showErrorPass() {
        if (pass.validity.valueMissing) {
            // Si el campo está vacío
            // muestra el mensaje de error siguiente.
            passError.textContent = 'Debe introducir una contraseña.';
        } else if (pass.validity.tooShort) {
            // Si los datos son demasiado cortos
            // muestra el mensaje de error siguiente.
            passError.textContent = 'La contraseña debe tener al menos '+ pass.minLength +' caracteres; ha introducido '+ pass.value.length +'.';
        }
        passError.className = 'error active';
    }
}




//VALIDACIÓN REGISTRO PAGE
function validate_registro()
{

    const form = document.getElementsByTagName('form')[0];

    const email = document.getElementById('mail');
    const pass = document.getElementById('password');
    const name = document.getElementById('name');

    const emailError = document.querySelector('#mail + span.error');
    const passError = document.querySelector('#password + span.error');
    const nameError = document.querySelector('#name + span.error');
 
    email.addEventListener('input', function (event) {
        if (email.validity.valid) {
            emailError.innerHTML = 'OK';
            emailError.className = 'noerror';
            emailError.classList.remove("error active");
            emailError.classList.add("noerror");
        } else {
            emailError.className = 'error';
            emailError.classList.remove("noerror");
            emailError.classList.add("error active");
            showError();
        }
    });
   
    pass.addEventListener('input', function (event) {
        if (pass.validity.valid) {
            passError.innerHTML = 'OK';
            passError.className = 'noerror';
            passError.classList.remove("error active");
            passError.classList.add("noerror");
        } else {
            passError.className = 'error';
            passError.classList.remove("noerror");
            passError.classList.add("error active");
            showError();
        }
    });

    name.addEventListener('input', function (event) {
        if (name.validity.valid) {
            nameError.innerHTML = 'OK';
            nameError.className = 'noerror';
            nameError.classList.remove("error active");
            nameError.classList.add("noerror");
        } else {
            nameError.className = 'error';
            nameError.classList.remove("noerror");
            nameError.classList.add("error active");
            showError();
        }
    });

   


    
    form.addEventListener('submit', function (event) {
        if ((!email.validity.valid) || (!pass.validity.valid) || (!name.validity.valid)){
            // si el campo de correo electrónico es válido, dejamos que el formulario se envíe
            if (!email.validity.valid) {
                // Si no es así, mostramos un mensaje de error apropiado
                emailError.className = 'error active';
                showErrorMail();
                // Luego evitamos que se envíe el formulario cancelando el evento
                event.preventDefault();
            }
            if (!pass.validity.valid) {
                // Si no es así, mostramos un mensaje de error apropiado
                passError.className = 'error active';
                showErrorPass();
                // Luego evitamos que se envíe el formulario cancelando el evento
                event.preventDefault();
            }
            if (!name.validity.valid) {
                // Si no es así, mostramos un mensaje de error apropiado
                nameError.className = 'error active';
                showErrorName();
                // Luego evitamos que se envíe el formulario cancelando el evento
                event.preventDefault();
            }
        }else{
            alert("Registro Exitoso");
        }
        
    });

    function showErrorMail() {
        if (email.validity.valueMissing) {
            // Si el campo está vacío
            // muestra el mensaje de error siguiente.
            emailError.textContent = 'Introduzca una dirección email.';
        } else if (email.validity.typeMismatch) {
            // Si el campo no contiene una dirección de correo electrónico
            // muestra el mensaje de error siguiente.
            emailError.textContent = 'El valor introducido debe ser un email.';
        } else if (email.validity.tooShort) {
            // Si los datos son demasiado cortos
            // muestra el mensaje de error siguiente.
            emailError.textContent = 'Debe tener al menos '+ email.minLength +' caracteres; ha introducido '+ email.value.length +'.';
        }
        emailError.className = 'error active';
    }
   
    function showErrorPass() {
       
        if (pass.validity.valueMissing) {
            // Si el campo está vacío
            // muestra el mensaje de error siguiente.
            passError.textContent = 'Debe introducir una contraseña.';
        } else if (pass.validity.tooShort) {
            // Si los datos son demasiado cortos
            // muestra el mensaje de error siguiente.
            passError.textContent = 'La contraseña debe tener al menos '+ pass.minLength +' caracteres; ha introducido '+ pass.value.length +'.';
        }
        passError.className = 'error active';
    }

    function showErrorName() {
       
        if (name.validity.valueMissing) {
            // Si el campo está vacío
            // muestra el mensaje de error siguiente.
            nameError.textContent = 'Debe introducir un nombre.';
        } else if (name.validity.tooShort) {
            // Si los datos son demasiado cortos
            // muestra el mensaje de error siguiente.
            nameError.textContent = 'El nombre debe tener al menos '+ name.minLength +' caracteres; ha introducido '+ name.value.length +'.';
        }
        nameError.className = 'error active';
    }
}



//VALIDACIÓN RECUPERACIÓN PAGE
function validate_recuperacion()
{

    const form = document.getElementsByTagName('form')[0];

    const email = document.getElementById('mail');

    const emailError = document.querySelector('#mail + span.error');
   
 
    email.addEventListener('input', function (event) {
        if (email.validity.valid) {
            emailError.innerHTML = 'OK';
            emailError.className = 'noerror';
            emailError.classList.remove("error active");
            emailError.classList.add("noerror");
        } else {
            emailError.className = 'error';
            emailError.classList.remove("noerror");
            emailError.classList.add("error active");
            showError();
        }
    });

    
    form.addEventListener('submit', function (event) {
        if (!email.validity.valid){
            // si el campo de correo electrónico es válido, dejamos que el formulario se envíe
            if (!email.validity.valid) {
                // Si no es así, mostramos un mensaje de error apropiado
                emailError.className = 'error active';
                showErrorMail();
                // Luego evitamos que se envíe el formulario cancelando el evento
                event.preventDefault();
            }
        }else{
            alert("Hemos enviado un mensaje a su correo electrónico");
        }
    });

    function showErrorMail() {
        if (email.validity.valueMissing) {
            // Si el campo está vacío
            // muestra el mensaje de error siguiente.
            emailError.textContent = 'Introduzca una dirección email.';
        } else if (email.validity.typeMismatch) {
            // Si el campo no contiene una dirección de correo electrónico
            // muestra el mensaje de error siguiente.
            emailError.textContent = 'El valor introducido debe ser un email.';
        } else if (email.validity.tooShort) {
            // Si los datos son demasiado cortos
            // muestra el mensaje de error siguiente.
            emailError.textContent = 'Debe tener al menos '+ email.minLength +' caracteres; ha introducido '+ email.value.length +'.';
        }
        emailError.className = 'error active';
    }
}







//VALIDACIÓN ADMIN FORM

function validate_adminActions()
{

    const form = document.getElementsByTagName('form')[0];

    const email = document.getElementById('mail');

    const emailError = document.querySelector('#mail + span.error');
   
 
    email.addEventListener('input', function (event) {
        if (email.validity.valid) {
            emailError.innerHTML = 'OK';
            emailError.className = 'noerror';
            emailError.classList.remove("error active");
            emailError.classList.add("noerror");
        } else {
            emailError.className = 'error';
            emailError.classList.remove("noerror");
            emailError.classList.add("error active");
            showError();
        }
    });

    
    form.addEventListener('submit', function (event) {
        if (!email.validity.valid){
            // si el campo de correo electrónico es válido, dejamos que el formulario se envíe
            if (!email.validity.valid) {
                // Si no es así, mostramos un mensaje de error apropiado
                emailError.className = 'error active';
                showErrorMail();
                // Luego evitamos que se envíe el formulario cancelando el evento
                event.preventDefault();
            }
        }else{
            alert("Hemos enviado un mensaje a su correo electrónico");
        }
    });

    function showErrorMail() {
        if (email.validity.typeMismatch) {
            // Si el campo no contiene una dirección de correo electrónico
            // muestra el mensaje de error siguiente.
            emailError.textContent = 'El valor introducido debe ser un email.';
        } else if (email.validity.tooShort) {
            // Si los datos son demasiado cortos
            // muestra el mensaje de error siguiente.
            emailError.textContent = 'Debe tener al menos '+ email.minLength +' caracteres; ha introducido '+ email.value.length +'.';
        }
        emailError.className = 'error active';
    }
}









function validate_editActions()
{
    alert("validación")
    const form = document.getElementsByTagName('form')[0];

    const palabra = document.getElementById('palabra');
    const palabraError = document.querySelector('#palabra + span.error');
    
    const definicion = document.getElementById('definicion');
    const definicionError = document.querySelector('#definicion + span.error');
    
    const new_palabra = document.getElementById('new_palabra');
    const new_palabraError = document.querySelector('#new_palabra + span.error');
    
    const new_definicion = document.getElementById('new_definicion');
    const new_definicionError = document.querySelector('#new_definicion + span.error');
   
 
    palabra.addEventListener('input', function (event) {
        if (palabra.validity.valid) {
            palabraError.innerHTML = 'OK';
            palabraError.className = 'noerror';
            palabraError.classList.remove("error active");
            palabraError.classList.add("noerror");
        } else {
            palabraError.className = 'error';
            palabraError.classList.remove("noerror");
            palabraError.classList.add("error active");
            showError();
        }
    });
    
    definicion.addEventListener('input', function (event) {
        if (definicion.validity.valid) {
            definicionError.innerHTML = 'OK';
            definicionError.className = 'noerror';
            definicionError.classList.remove("error active");
            definicionError.classList.add("noerror");
        } else {
            definicionError.className = 'error';
            definicionError.classList.remove("noerror");
            definicionError.classList.add("error active");
            showError();
        }
    });
   
    new_palabra.addEventListener('input', function (event) {
        if (new_palabra.validity.valid) {
            new_palabraError.innerHTML = 'OK';
            new_palabraError.className = 'noerror';
            new_palabraError.classList.remove("error active");
            new_palabraError.classList.add("noerror");
        } else {
            new_palabraError.className = 'error';
            new_palabraError.classList.remove("noerror");
            new_palabraError.classList.add("error active");
            showError();
        }
    });

    new_definicion.addEventListener('input', function (event) {
        if (new_definicion.validity.valid) {
            new_definicionError.innerHTML = 'OK';
            new_definicionError.className = 'noerror';
            new_definicionError.classList.remove("error active");
            new_definicionError.classList.add("noerror");
        } else {
            new_definicionError.classList.remove("noerror");
            new_definicionError.classList.add("error active");
            showError();
        }
    });

    
    form.addEventListener('submit', function (event) {
        if (!palabra.validity.valid){
            // si el campo de correo electrónico es válido, dejamos que el formulario se envíe
            if (!palabra.validity.valid) {
                // Si no es así, mostramos un mensaje de error apropiado
                palabraError.className = 'error active';
                showErrorPalabra();
                // Luego evitamos que se envíe el formulario cancelando el evento
                event.preventDefault();
            }
        }else{
            // alert("Hemos enviado un mensaje a su correo electrónico");
        }
        
        if (!definicion.validity.valid){
            // si el campo de correo electrónico es válido, dejamos que el formulario se envíe
            if (!definicion.validity.valid) {
                // Si no es así, mostramos un mensaje de error apropiado
                definicionError.className = 'error active';
                showErrorDefinicion();
                // Luego evitamos que se envíe el formulario cancelando el evento
                event.preventDefault();
            }
        }else{
            // alert("Hemos enviado un mensaje a su correo electrónico");
        }
       
        if (!new_palabra.validity.valid){
            // si el campo de correo electrónico es válido, dejamos que el formulario se envíe
            if (!new_palabra.validity.valid) {
                // Si no es así, mostramos un mensaje de error apropiado
                new_palabraError.className = 'error active';
                showErrorNew_palabra();
                // Luego evitamos que se envíe el formulario cancelando el evento
                event.preventDefault();
            }
        }else{
            // alert("Hemos enviado un mensaje a su correo electrónico");
        }
        
        if (!new_definicion.validity.valid){
            // si el campo de correo electrónico es válido, dejamos que el formulario se envíe
            if (!new_definicion.validity.valid) {
                // Si no es así, mostramos un mensaje de error apropiado
                new_definicionError.className = 'error active';
                showErrorNew_definicion();
                // Luego evitamos que se envíe el formulario cancelando el evento
                event.preventDefault();
            }
        }else{
            // alert("Hemos enviado un mensaje a su correo electrónico");
        }
    });

    function showErrorPalabra() {
        if (palabra.validity.tooShort) {
            // Si los datos son demasiado cortos
            // muestra el mensaje de error siguiente.
            palabraError.textContent = 'Debe tener al menos '+ palabra.minLength +' caracteres; ha introducido '+ palabra.value.length +'.';
        }
        palabraError.className = 'error active';
    }
    function showErrorDefinicion() {
        if (definicion.validity.tooShort) {
            // Si los datos son demasiado cortos
            // muestra el mensaje de error siguiente.
            definicionError.textContent = 'Debe tener al menos '+ definicion.minLength +' caracteres; ha introducido '+ definicion.value.length +'.';
        }
        palabraError.className = 'error active';
    }
    function showErrorNew_palabra() {
        if (new_palabra.validity.tooShort) {
            // Si los datos son demasiado cortos
            // muestra el mensaje de error siguiente.
            new_palabraError.textContent = 'Debe tener al menos '+ newPalabra.minLength +' caracteres; ha introducido '+ new_palabra.value.length +'.';
        }
        newPalabraError.className = 'error active';
    }
    function showErrorPalabra() {
        if (new_definicion.validity.tooShort) {
            // Si los datos son demasiado cortos
            // muestra el mensaje de error siguiente.
            definicionError.textContent = 'Debe tener al menos '+ new_definicion.minLength +' caracteres; ha introducido '+ new_definicion.value.length +'.';
        }
        new_definicionError.className = 'error active';
    }
}


