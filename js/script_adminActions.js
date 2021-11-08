
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

    validate_adminActions();

}






   


