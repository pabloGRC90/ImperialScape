$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});




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
                showErrorMail();
                // Luego evitamos que se envíe el formulario cancelando el evento
                event.preventDefault();
                
            }
            if (!pass.validity.valid) {
                // Si no es así, mostramos un mensaje de error apropiado
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

