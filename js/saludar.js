// alert("Hola mundo segunda forma");

console.log("Mensaje por consola");

document.write("<h1>Mensaje HTML</h1>");

var nombre = "Juan";
let correo = 'juan@correo.com';
const mayor = 18;
let edad = 28;
let altura = 1.84;
let extranjero = true;

let mensaje = "Mi nombre es "+nombre+", mi correo es "+correo+", "+ 
"mi edad es "+edad;

nombre = prompt("Escriba su nombre...");
correo = prompt("Escriba su correo...");
edad = parseInt(prompt("Escriba su edad.."));
altura = parseFloat(prompt("Escriba su altura..."));

let mensaje2 = `Hola mi nombre es ${nombre}, mi correo es ${correo},
                mi edad es ${edad}, \nmido ${altura} metros`;

document.write("<a href='index.html'>"+mensaje+"</a>");

if (edad>mayor){
    mensaje2 += `, soy mayor de edad`;
}else{
    mensaje2 += `, soy menor de edad`;
}


document.write(`<h2>${mensaje2}</h2>`);
console.log(mensaje2);