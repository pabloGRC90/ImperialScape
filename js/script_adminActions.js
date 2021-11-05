
 function cargar_Usuarios(){

    var usuariosCargados=[];

     fetch('json/userData.json')
    
    .then(respuesta => respuesta.json()) 
    .then(usuarios => {
        usuarios.forEach(usuario => {
            usuariosCargados.push(usuario.nombre); 
        });

        usuariosCargados.sort();
        var select = document.getElementsByName("usuario")[0];

        for (value in usuariosCargados) {
            var option = document.createElement("option");
            option.text = usuariosCargados[value];
            select.add(option);
        }
    })

    // return usuariosCargados;
}





// Cargar usuarios al campo <select>
// function pintar_Usuarios() {

//     // var array = ["Cantabria", "Asturias", "Galicia", "Andalucia", "Extremadura"];
//     var array = cargar_Usuarios();
//     console.log(array);
    
   
//     array.sort();
//     // addOptions("usuario", array);


//     var select = document.getElementsByName("usuario")[0];

//     for (value in array) {
//         var option = document.createElement("option");
//         option.text = array[value];
//         select.add(option);
//     }

// }
   




// Agregar opciones a un <select>
//  function addOptions(domElement, array) {

    // var select = document.getElementsByName(domElement)[0];

    // for (value in array) {
    //     var option = document.createElement("option");
    //     option.text = array[value];
    //     select.add(option);
    // }


    // for (let i= 0; i<array.length; i++){
    //     var option= document.createElement("option");
    //     option.text = array[i];
    //     select.add(option);
    // }


// }



   


