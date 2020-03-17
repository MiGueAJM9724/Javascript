//tomando como entrada un numero entero, imprimi r si es par o impar
let numero = prompt("Ingrese un numero");
if (numero % 2 == 0) alert("El numero: " + numero +" es par");
else alert("El numero: " + numero + " es impar");
//Recibir dos numeros usando prompt y sumarlos, restarlos, multiplacarlos y dividirlos
let a = parseInt(prompt("Ingrese un numero(a)"));
let b = prompt("Ingrese un numero(b)");
let suma = a + parseInt(b);
let resta = a - parseInt(b);
let multiplicacion = a * parseInt(b);
let division = a / parseInt(b);
alert(a + " + " + b + " = " + suma + "\n" + a + " - " + b + " = " + resta + "\n" + a + " * " + b + " = " +
multiplicacion + "\n" + a + " / " + b + " = " + division + "\n");
//Imprimir la sucesiòn fibonacci el nùmero de veces que indico el usuario
