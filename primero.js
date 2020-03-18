//console.log("Hola a todos :D");
console.log("Hola mundo"); //imprime hola mundo en la consola
alert("Hola Migue"); //Manda una alerta en el navegador
prompt(); //Muestra una ventana(modal) que solicita un dato al usuario
//tipado dinamico; Variables pueden iniciar con gion bajo o simbolo de pesos
let nombre = ""; //Variable
var Nombre = ""; //Variable
const pi = 3.1416 //Constante
//tipo number
let numero = 24;
let cambio  = 24.2;
// Libreria Math pueede entregar el vaor de Pi, elevador numeros
Math.PI;
Math.pow(10, 2);// 10 elavado a 2
Math.round(6.5); //Nos permite rendondear cantidades
Math.sqrt(4); // Raiz de un numero
//https://www.w3schools.com/js/js_math.asp
// Valores tipo Bool
let booleano = new Boolean(1);//Queremos saber que valor booleano (true)
//let booleano = new Boolean(0); //Queremos saber que valor booleano (false)
//let booleano = new Boolean("");//Queremos saber que valor booleano (false)
console.log(booleano.toString());
//Operadores de comparaciòn
let edad = 24;
edad == 24; //edad es lo mismo que 24
edad == 20;
edad != 18; //edad es diferente de 18
edad != 24;
edad < 24;
edad > 28;
edad >= 24;
24 == "24"; //ambos conservan el mismo valor(true)
24 === "24" // tambien compara el que tipo de dato sea el mismo (false)
24 !== "24" // Sean diferentes en valor y en tipo (true)
24 !== 24 //(false)
//Operadores Lgicos
24 == 24 && "hola" == "hola"; //&& evalua dos expresiones y retorna verdadero si ambas empresiones devuelven verdadero
24 == 24 && 13 === "13"; //(false)
24 == 24 && 13 === "13"; // || Varia en que solo un miembro de la expresion devielva verdadero (true)
!true; //
!false; //negacion de false es true
//condiciones
if (5 == 5 && 10 > 2) console.log("Condiciòn exitosa"); //si solo es una instrucciòn no es necesario el uso de llaves
if (5 == 5 && 10 > 2){ //Para un par de instruciones es necesario usar llevar en nuestro bloque de codigo
  console.log("Condiciòn exitosa");
  console.log("Condiciòn exitosa");
}
let edad = 18; // condiciòn else nos sirve para cuando nuestra condicion no se cumple y entonces ejecuta el  bloque de codigo de else {
}
if (edad > 18){
  console.log("Eres meyor de edad");
}else{
  console.log("Eres menor de edad");
}
let calificacion = 9; //Condiciòn elseif
if (calificacion == 10) {
  console.log("Excelente")
}else if (calificacion > 8) {
  console.log("Muy bien");
}else{
  console.log("Regular");
}
//Ciclos
// ciclo for, primero una instrucion  donde iniciara el ciclo,segunda instrucion definimos donde terminara el ciclo, instruccion que se ejecuta despues de cada iteraciòn(repeticiòn)
for (let i = 1; i < 10; i++) {
  //if (i >= 5) break; //break termina el ciclo
  if (i % 2 == 0) continue; //solo imprime los impares//continue terminar la iteraciòn altual para que pase a la siguiente
  console.log(i);
}
//ciclo while
//while (promt()) {
  //console.log("Presiona cancelar para terminar el ciclo");
//}
let i = 1;
while (i <= 10) {
  i++;
  console.log(i);
}//ciclo imprime hasta el 11
// do while Nos asegura que almenos una vez se ejecutara nuestro bloque de codigo
do {
  i++;
  console.log(i);
} while (i <= 10);
// undefined, Nan, null
//undefined;indica que a una variable no se le ha asignado un valor o no se a declarado (tipo de dato)
abasd
typeof abas; //typeof retorna el tipo de dato
let numero;
numero;
typeof numero; // "undefined"
// null objeto especial en js que indica la ausencia de valor
numero = null;
numero;
typeof numero; // "object"
null == undefined; //(true)
null === undefined; //(false)
//NaN not a number
"hola" * 3;//retorna un NaN
//Declaraciòn de funciones
function saludo(){
  alert("Hola!");
}
saluda();
function(){ //funciòn anonima

}
function cuadrado(numero){
  return numero * numero;
}
let cuadrado_de_dos = cuadrado(2);
console.log(function(){}); //undefined
//Que es el scope (alcance) colecciòn de variables objetos funciones al alcance
let nombre = "Miguel"; //scope global
function decir_hola(){
  //scope local
  console.log("Hola " + nombre);
}
decir_hola();
var nombre = "Angel"
function switch_nombre(){
  var nombre = "Miguel";
  console.log(nombre);
}
switch_nombre();
console.log(nombre);
//Principio Menor acceso
/* No declarar variables sin su indicador(let,var,const) ya que se tomarian de
 scope global*/
 //Diferencias entre let y var
function mayor_edad(edad){
  if(edad >= 18){
    var resultado = "Mayor de edad"
  }else {
    var resultado  = "Menor de edad"
  }
  console.log(resultado);
}
mayor_edad();
function mayor_de_edad(edad){
  if(edad >= 18){
    /* la diferencia de var que tiene alcance dentro del bloque de la funciones
    , los indicadores let y const solo tiene alcance
    dentro del bloque de codigo mas cercano
    */
    let resultado = "Mayor de edad"
  }else {
    let resultado  = "Menor de edad"
  }
  console.log(resultado);
}
// usa const si quieres declarar una Constante
//usa var si quieres que la variable que estas declarando si quieres que se
//añada al scope global o al scope local
//usa let para todo lo demas, por efecto usa let

//Argumentos a funciones
/*Argumentos y Parametros */
function cuadrado(numero){/*El Parametro es "numero" (es algo que tiene que ser
  llenado cuando se llama a una funcion)
y el argumento es "(2)"(es lo que se le envia al parametro,llena el parametro)*/
  return numero * numero;
}
cuadrado(2)//
// funciones anonimas
function executor(function){
  function();
}
function decirhola(){
  console.log("Hola");
}
executor(decirhola);
executor(function(){
  console.log("Hola");
});

/* Contextos */
console.log(this);
let objeto = {
  demo: function() {
  console.log(this);
  }
}

let executor = {
  funcion: null,
  execute: function(f){
    f();
   this.funcion = f;
   this.funcion();
  }
}
executor.execute(objeto.demo);
let usuario = {
  nombre: 'Miguel',
  apellido: 'jimenez',
  nombrecompleto: function(){
    console.log(this.nombre + ' ' + this.apellido)
  }
}

let executor = {
  funcion: null,
  execute: function(f){
    f();
   this.funcion = f;
   this.funcion();
  }
}
//usuario.nombrecompleto();
executor.execute(usuario.nombrecompleto);
