
 function cargar_Enigmas(){

    

    var enigmasCargados=[];

     fetch('json/enigmas.json')
    
    .then(respuesta => respuesta.json()) 
    .then(enigmas => {
        enigmas.forEach(enigma => {
            enigmasCargados.push(enigma.solucion); 
        });

        enigmasCargados.sort();
        var select = document.getElementsByName("enigma")[0];

        for (value in enigmasCargados) {
            var option = document.createElement("option");
            option.text = enigmasCargados[value];
            select.add(option);
        }
    })

    validate_editActions();

    
}



