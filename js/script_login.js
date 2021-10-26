$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});





function validacion()
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











