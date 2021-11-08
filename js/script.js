
// var btnInicioPartida = document.getElementById("inicioPartida");
// var btnRankingJugadores = document.getElementById("rankingJugadores");
// var btnRankingPartidas = document.getElementById("rankingPartidas");


// document.getElementById("inicioPartida").addEventListener("click", function(){
//     window.location.href = "../partida.html";
//     return false;
// });
// document.getElementById("rankingJugadores").addEventListener("click", function(){
//     window.location.href = "../ranking.html";
//     return false;
// });
// document.getElementById("rankingPartidas").addEventListener("click", function(){
//     window.location.href = "../partidas.html";
//     // return false;
// });


var partidaOn=false;

 
// USUARIOS
// -----------------------------------------------------------------------------------
var User = function(nombre, email, pass , rol) {
    this.nombre = nombre;
    this.email = email;
    this.pass = pass;
    this.rol = rol;
    this.conectado = false;
}

User.prototype.inicioTurno = function() {
};

User.prototype.verRanking = function() {
};


// Constructor Administrador
var UserEditor = function(nombre, email, pass) {
    User.call(this, nombre, email ,pass);
    this.nombre = nombre;
    this.email = email;
    this.pass = pass;
    this.rol = "editor";
    this.conectado = false;
};


UserEditor.prototype = Object.create(User.prototype);
UserEditor.prototype.constructor = UserEditor;


UserEditor.prototype.editarPreguntas = function() {
};

// var editor_01 = new UserEditor('pablogrcdaw90@gmail.com', "******");
  

// Constructor Administrador
var Admin = function(nombre,email, pass) {

    User.call(this,nombre, email, pass);
    this.nombre = email;
    this.email = email;
    this.pass = pass;
    this.rol = "admin";
    this.conectado = false;
};

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.validarUser = function(emailUser) {
};

// var admin_01 = new Admin('pablo@gmail.com', "******");





// JUGADORES 
// -----------------------------------------------------------------------------------
var Player = function(email, nombre) {
    this.email = email;
    this.nombre = nombre;
    this.puntos = 0;
    this.record = 0;
    this.llaves = 0;
    this.activado = false;
}

// Los métodos que añadimos serán compartidos por todos los Jugadores
Player.prototype.UnirseAPartida = function() {
};

Player.prototype.verRanking = function() {
};

Player.prototype.resolverEnigma = function() {
};



//TURNO
// -----------------------------------------------------------------------------------
var Turno = function( almirante, jugadores , enigmaActivo, jugadorActivo){
    this.almirante=almirante;
    this.jugadores=jugadores;
    this.enigmaActivo=enigmaActivo;
    this.jugadorActivo=jugadorActivo;
}

var turno_01 = new Turno (false, [], [], []);



// Instanciamos un nuevo Jugador
// var player_01 = new Player('pablosiege@gmail.com', "******" , "pablo", "marine");
  

// Constructor para un tipo especializado de Almirante
var Almirante = function(email, nombre ) {


    Player.call(this, email, nombre);
    this.email = email;
    this.nombre = nombre;
    // this.online = true;
    // this.jugando = true;
    // this.puntos = 0;
    // this.record = 0;
    // this.llaves = 0;
};


Almirante.prototype = Object.create(Player.prototype);
Almirante.prototype.constructor = Almirante;

Almirante.prototype.designarEnigmas = function() {
};

Almirante.prototype.penalizar = function() {
};


// Instanciamos un nuevo Almirante
// var almirante_01 = new Almirante('pablosiege@gmail.com', "******" , "pablo");
  



// PARTIDA
// -----------------------------------------------------------------------------------
var Partida = function(id) {
    this.id = id;
    this.jugadores = [];
    this.almirante = false;
    this.tiempo = 1800;
    this.llaves = 0;
    this.puntos = 0;
}


Partida.prototype.nuevoTurno = async function() {
    
    console.log("Nuevo Turno");
    var enigmaActivo= await this.lanzarEnigma();
    turno_01.enigmaActivo = enigmaActivo;

    console.log(turno_01.enigmaActivo);

    if (partida_test.llaves==0){
        turno_01.jugadorActivo = turno_01.jugadores[Math.floor(Math.random()*turno_01.jugadores.length)];
    }else{
        mostrarPanelAlmirante();
    }
    jugadorActivoFunct();
};



Partida.prototype.inicioTurno = async function() {
    
    console.log("COMIENZA LA PARTIDA");
    
    this.jugadores=await cargarUserOnline();

    var arrayJugadores = [];

    for (let i = 0 ; i < this.jugadores.length; i++){
        arrayJugadores.push(new Player(this.jugadores[i].email, this.jugadores[i].nombre));
    }

    turno_01.jugadores=arrayJugadores;
    partidaOn=true;
    this.nuevoTurno();
};


Partida.prototype.lanzarEnigma = async function() {

    var enigmaActivo=[];

    const enigma = document.getElementById("p-enigma");
    const palabra1 = document.getElementById("spn-pal1");
    const palabra2 = document.getElementById("spn-pal2");
    const palabra3 = document.getElementById("spn-pal3");
    
    enigmaActivo=await cargarEnigma();

    enigma.innerHTML = enigmaActivo[3];
    palabra1.innerHTML = enigmaActivo[0];
    palabra2.innerHTML = enigmaActivo[1];
    palabra3.innerHTML = enigmaActivo[2];

    document.getElementById("palabra-1").value = enigmaActivo[0];
    document.getElementById("palabra-2").value = enigmaActivo[1];
    document.getElementById("palabra-3").value = enigmaActivo[2];

    return enigmaActivo;

};


Partida.prototype.comprobarResultado = function(){
    if ((this.llaves==5) && (this.tiempo>0)){
        alert("Habéis salido");
        window.location.href = "exito.php";
    }else{
        if (this.tiempo<=0){
            alert("habéis pedido");
            window.location.href = "fracaso.php";
        }
    }
}


async function cargarEnigma(){

    return await fetch('./json/enigmas.json')
        .then(respuesta => respuesta.json()) 
        
        .then(enigmas => {
            
            var lineas=enigmas.length;

            numRand1=Math.floor(Math.random() * (lineas-1));
            numRand2=Math.floor(Math.random() * (lineas-1));
            numRand3=Math.floor(Math.random() * (lineas-1));

            numRandSolucion=Math.floor(Math.random() * (2));

            switch (numRandSolucion) {
                case 0:
                    numRandSolucion=numRand1;
                  break;
                case 1:
                    numRandSolucion=numRand2;
                  break;
                case 2:
                    numRandSolucion=numRand3;
                  break;
              }

            var enigmasArray=[
                enigmas[numRand1].solucion,
                enigmas[numRand2].solucion,
                enigmas[numRand3].solucion,
                enigmas[numRandSolucion].enigma,
                enigmas[numRandSolucion].solucion
            ];

            console.log(enigmasArray[3]);
            return enigmasArray;
        });

    }



async function cargarUserOnline(){
    return await fetch('./json/userOnline.json')
    .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
    // .then(respuesta => console.log(respuesta))
    
    .then(jugadores => {
        
        numJugadores=Math.floor(Math.random() * (5 - 3) + 3);
        jugadoresPartida=[];

        for (let i=0 ; i<numJugadores; i++){
            jugadoresPartida[i]=jugadores[i];
        }
        return jugadoresPartida;             
    }) 
}

var partida_test = new Partida(999);



function iniciarPartidaMain(){

    // document.getElementById("empezarPartida").addEventListener("click", function(e){
    //     var tiempoReloj = partida_test.tiempo;
    //     console.log(tiempoReloj);
    //     function actualizarReloj() {
    //         document.getElementById('tiempo').innerHTML = tiempoReloj + '"';
    //         if (tiempoReloj == 0) {
    //             // Cuenta regresiva ha finalizado
    //             document.getElementById('tiempo').innerHTML = "Fin";
    //         } else {
    //             tiempoReloj--;
    //             setTimeout(actualizarReloj(), 1000);
    //         }
    //     }
    //     actualizarReloj();
    // });
  

    partida_test.inicioTurno();

    document.getElementById("input-resolver").addEventListener("click", function(e){
        e.preventDefault();
        validarEnigma();
        partida_test.nuevoTurno(); 
    });
    // actualizarReloj();
}


function recargarDisplay(llaves,tiempo){
    var vllaves = document.getElementById("llaves");
    var vtiempo = document.getElementById("tiempo");

    vllaves.innerHTML=llaves;
    vtiempo.innerHTML=tiempo;
}


function validarEnigma(){

    var acierto=false;
    var respuesta = document.querySelector('.radio-pal:checked').value;

    if (respuesta==turno_01.enigmaActivo[4]){
        if (partida_test.llaves==0){
            var almiranteActivo=new Almirante(turno_01.jugadorActivo.email, turno_01.jugadorActivo.nombre)
            turno_01.almirante=almiranteActivo;
        }
        partida_test.llaves+=1;
        turno_01.jugadorActivo.llaves+=1;
        alert("correcto");
        acierto=true;
    }else{
        alert("has fallado");
        acierto=false;
        partida_test.tiempo-=60;
    }
    partida_test.comprobarResultado();
    recargarDisplay(partida_test.llaves, partida_test.tiempo);
}


function jugadorActivoFunct(){
    var nombreJugador = document.getElementById("partida-jugador");

    if (turno_01.almirante){
        nombreJugador.innerHTML="Almirante: " + turno_01.almirante.nombre;
    }else{
        nombreJugador.innerHTML="Jugador: " + turno_01.jugadorActivo.nombre;
    }
}


function mostrarPanelAlmirante(){
    document.getElementById("select-jugador").style.display="";
    
    var select = document.getElementsByName("select-jugador")[0];

    for (var i = 0 ; i<turno_01.jugadores.length ; i++){
        var option = document.createElement("option");
        option.text = turno_01.jugadores[i].nombre;
        option.value = turno_01.jugadores[i].nombre;
        select.add(option);
    }
}

function cambiarJugador(){
    var newActivePlayer = document.getElementById("select-jugador").value;
    var nombreJugador = document.getElementById("partida-jugador");

    for (var i = 0 ; i<turno_01.jugadores.length ; i++){
       if (turno_01.jugadores[i].nombre==newActivePlayer){
           turno_01.jugadorActivo=turno_01.jugadores[i];
       } 
    }
    nombreJugador.innerHTML="Jugador: " + turno_01.jugadorActivo.nombre;    
}


function selectPlayerAlmirante(){
    
    var select = document.getElementsByName("select-jugador")[0];

    if (select.hasChildNodes()){
        while (select.childNodes.length >= 1 ){
            select.removeChild(select.firstChild );
        }
    }
        
    for (var i = 0 ; i<turno_01.jugadores.length ; i++){
        var option = document.createElement("option");
        option.text = turno_01.jugadores[i].nombre;
        option.value = turno_01.jugadores[i].nombre;
        select.add(option);
    }

}





