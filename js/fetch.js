const tabla = document.querySelector('#lista-jugadores tbody');

function cargarRanking(){
    fetch('json/rankingJugadores.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        // .then(respuesta => console.log(respuesta))
        .then(jugadores => {
            jugadores.forEach(jugador => {
                const row = document.createElement('tr');
                // console.log(jugador);
                row.innerHTML += `
                    <td>${jugador.nombre}</td>
                    <td>${jugador.puntuacion}</td>
                `;
                tabla.appendChild(row);                
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}



const tabla2 = document.querySelector('#lista-partidas tbody');

function cargarPartidas(){
    fetch('./json/partidas.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        // .then(respuesta => console.log(respuesta))
        .then(partidas => {
            partidas.forEach(partida => {
                const row = document.createElement('tr');
                // console.log(jugador);
                var exito = partida.exito;
                if (exito){
                    exito = "si";
                }else{
                    exito = "no";
                }

                row.innerHTML += `
                    <td>${partida.id}</td>
                    <td>${partida.jugadores.length}</td>
                    <td>${partida.llaves}</td>
                    <td>${partida.puntuacion}</td>
                    <td>${partida.tiempo}</td>
                    <td>${exito}</td>
                `;
                tabla2.appendChild(row);                
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}



const tabla3 = document.querySelector('#lista-conectados tbody');

function cargarConectados(){
    fetch('./json/userOnline.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        // .then(respuesta => console.log(respuesta))
        .then(jugadores => {
            jugadores.forEach(jugador => {
                const row = document.createElement('tr');
                // console.log(jugador);
                
                row.innerHTML += `
                    <td>${jugador.nombre}</td>
                    <td>${jugador.puntuacion}</td>
                `;
                tabla3.appendChild(row);                
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error : ' + error.message))
}