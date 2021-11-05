
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
// USUARIOS 
// USUARIOS 
// USUARIOS 
// USUARIOS 
// USUARIOS 
// USUARIOS 
// USUARIOS 
// USUARIOS 
// USUARIOS 
// USUARIOS 
// USUARIOS 
// USUARIOS




var User = function(nombre, email, pass , rol) {
    this.nombre = nombre;
    this.email = email;
    this.pass = pass;
    this.rol = rol;
    this.conectado = false;
  
}

  
// Los métodos que añadimos serán compartidos por todos los zombies
User.prototype.iniciarPartida = function() {
    
    // console.log(this.nombre + " ataca a " + objetivo.nombre + " y le causa " + this.potencia + " puntos de daño");

};

User.prototype.verRanking = function() {

    // console.log(this.nombre + " camina " + this.movimiento + " metros");

};


// Instanciamos un nuevo 
var usuario_01 = new User('pablosiege@gmail.com', "******", "usuario");
  

//PASOS PARA HERENCIA
//- Call para llamar al constructor con el contexto this.
//- Estaclecimiento del prototipo del padre
//- Corrección del constructor

// Constructor para un tipo especializado de Usuario
var UserEditor = function(nombre, email, pass) {

    //Se ha de llamar a la clase padre pasándole el contexto this y los datos del usuario como parámetro
    User.call(this, nombre, email ,pass);

    //Se añaden o modifican las propiedades necesarias
    this.nombre = nombre;
    this.email = email;
    this.pass = pass;
    this.rol = "editor";
    this.conectado = false;
};

//Se establece como prototipo de UserEditor el prototipo del padre
UserEditor.prototype = Object.create(User.prototype);
//Corregimos el constructor ya que se ha creado a partir del objeto padre
UserEditor.prototype.constructor = UserEditor;


//Aumentamos el prototipo de UserEditor con nuevos métodos
UserEditor.prototype.editarPreguntas = function() {
    
};


// Instanciamos un nuevo ZombieNadador
var editor_01 = new UserEditor('pablogrcdaw90@gmail.com', "******");
  

// Se comprueba que se han añadido los métodos
// editor_01.editarPreguntas();


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


var admin_01 = new Admin('pablo@gmail.com', "******");
  
// admin_01.validarUser('pablosiege@gmail.com');






// JUGADORES 
// JUGADORES 
// JUGADORES 
// JUGADORES 
// JUGADORES 
// JUGADORES 
// JUGADORES 
// JUGADORES 
// JUGADORES 
// JUGADORES 
// JUGADORES 
// JUGADORES 


var Player = function(email, pass, nombre, rol) {
    this.email = email;
    this.pass = pass;
    this.nombre = nombre;
    this.rol = rol;
    this.online = false;
    this.jugando = false;
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


// Instanciamos un nuevo Jugador
var player_01 = new Player('pablosiege@gmail.com', "******" , "pablo");
  

//PASOS PARA HERENCIA
//- Call para llamar al constructor con el contexto this.
//- Estaclecimiento del prototipo del padre
//- Corrección del constructor

// Constructor para un tipo especializado de Almirante
var Almirante = function(email, pass, nombre, rol ) {

    //Se ha de llamar a la clase padre pasándole el contexto this y los datos del jugador como parámetros
    Player.call(this, email ,pass, nombre, rol);

    //Se añaden o modifican las propiedades necesarias
    this.email = email;
    this.pass = pass;
    this.nombre = nombre;
    this.rol = rol;
    this.online = true;
    this.jugando = true;
    this.puntos = 0;
    this.record = 0;
    this.llaves = 0;
};

//Se establece como prototipo de Almirante el prototipo del padre
Almirante.prototype = Object.create(Player.prototype);
//Corregimos el constructor ya que se ha creado a partir del objeto padre
Almirante.prototype.constructor = Almirante;


//Aumentamos el prototipo de Almirante con nuevos métodos
Almirante.prototype.designarEnigmas = function() {
    
};

Almirante.prototype.penalizar = function() {
    
};


// Instanciamos un nuevo Almirante
var almirante_01 = new Almirante('pablosiege@gmail.com', "******" , "pablo");
  

// Se comprueba que se han añadido los métodos
almirante_01.designarEnigmas();




// PARTIDA



var Partida = function(id) {
    this.id = id;
    this.jugadores = [];
    this.almirante = false;
    this.tiempo = 1800000;
    this.llaves = 0;
    this.puntos = 0;
}






  
// Los métodos que añadimos serán compartidos por todos los zombies
Partida.prototype.inicioPartida = async function() {
    
    console.log("COMIENZA LA PARTIDA");
    
    this.jugadores=await cargarUserOnline();

    console.log(this.jugadores.length);
    var arrayJugadores = [];

    for (let i = 0 ; i < this.jugadores.length; i++){
        arrayJugadores.push(new Player(this.jugadores[i].email));
    }

    console.log(arrayJugadores);

    
    // setTimeout(function(){
    //     partidaOn=false;    
    // },this.tiempo);

    partidaOn=true;

    this.lanzarEnigmas();

};




Partida.prototype.lanzarEnigmas = async function(partida) {

    var enigmaActivo=[];
    var i = 0;

    const enigma = document.getElementById("p-enigma");
    const palabra1 = document.getElementById("spn-pal1");
    const palabra2 = document.getElementById("spn-pal2");
    const palabra3 = document.getElementById("spn-pal3");

    

    // console.log(this.jugadores)
    do {
        enigmaActivo=await cargarEnigma();

        // console.log("test------");
        // console.log(enigmaActivo);
        
        // enigma.innerHTML = "hola";
        enigma.innerHTML = enigmaActivo[3];
        palabra1.innerHTML = enigmaActivo[0];
        palabra2.innerHTML = enigmaActivo[1];
        palabra3.innerHTML = enigmaActivo[2];

        document.getElementById("palabra-1").value = enigmaActivo[0];
        document.getElementById("palabra-2").value = enigmaActivo[1];
        document.getElementById("palabra-3").value = enigmaActivo[2];

        i++;

    } while(i<this.jugadores.length);


    document.getElementById("input-resolver").addEventListener("click", function(e , partida){
        
        var respuesta = document.querySelector('.radio-pal:checked').value;

        console.log("---------------------------------------");
        console.log(this.llaves);
        // console.log(partida_test.llaves)
        console.log(tiempo);

        if (respuesta==enigmaActivo[4]){
            this.llaves+=1;
            alert("correcto");
            recargarDisplay(this.llaves, this.tiempo);

        }else{
            alert("intentar de nuevo");
        }
        // console.log(respuesta)



        console.log(enigmaActivo)

        e.preventDefault();
    })


   

    
};






async function cargarEnigma(){


    return await fetch('./json/enigmas.json')
        .then(respuesta => respuesta.json()) //Indicamos el formato en que se desea obtener la información
        // .then(respuesta => console.log(respuesta))
        
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

        }) 

        console.log("fetch");
        
    }



// Instanciamos un nuevo
// var usuario_01 = new User('pablosiege@gmail.com', "******");
  



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





function iniciarPartidaMain(){
    var partida_test = new Partida(999);
    partida_test.inicioPartida();
}




function recargarDisplay(llaves,tiempo){
    var vllaves = document.getElementById("llaves");
    var vtiempo = document.getElementById("tiempo");

    vllaves.innerHTML=llaves;
    vtiempo.innerHTML=tiempo;

}