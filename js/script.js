
var User = function(email, pass) {
   
    this.email = email;
    this.pass = pass;
    this.rol = usuario;
    this.conectado = false;
  
}

  
// Los métodos que añadimos serán compartidos por todos los zombies
User.prototype.iniciarPartida = function(objetivo) {

    console.log(this.nombre + " ataca a " + objetivo.nombre + " y le causa " + this.potencia + " puntos de daño");

};

User.prototype.verRanking = function() {

    console.log(this.nombre + " camina " + this.movimiento + " metros");

};


// Instanciamos un nuevo Zombie
var usuario_01 = new User('pablosiege@gmail.com', "******");
  

//PASOS PARA HERENCIA
//- Call para llamar al constructor con el contexto this.
//- Estaclecimiento del prototipo del padre
//- Corrección del constructor

// Constructor para un tipo especializado de zombie
var UserEditor = function(email, pass) {

    //Se ha de llamar a la clase padre pasándole el contexto this y el nombre del zombie como parámetro
    User.call(this, email ,pass);

    //Se añaden o modifican las propiedades necesarias
    this.email = nombre;
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
  

// Se comprueba que se han añadido los métodos atacar y caminar
zn001.editarPreguntas();


// Constructor Administrador
var Admin = function(email, pass) {

    Admin.call(this, email, pass);

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

