// Eventos

let nombreSalones=["Normal", "Grande"];
let precioSalones=[1000000, 2000000];

let salonNormal = {"nombre":"Normal", "precio":1000000};
let salonGrande = {"nombre":"Grande", "precio":2000000};

document.write(`Precio: ${salonNormal.precio}`);

salonNormal['precio']=800000;

document.write(`Precio: ${salonNormal.precio}`);
console.log(salonNormal);

let precioMeseros=[150000, 100000];
let precioComida =[50000, 40000];

// for (let salon of precioSalones) {
//     document.write(`Dato ${salon}`);
//     document.write("</br>");
    
// }





/*
let cliente = prompt("Escriba su nombre");
let documento = prompt("Escriba su documento");
let salon = parseInt(prompt("Seleccione el salón (1. Normal/2. Grande)"));
let meseroExtra = confirm("Desea meseros extras???");
let cantidad =0;
let cantidadComida =0;
let total = 0;
let nombreSalones=["Normal", "Grande"];
let precioSalones=[1000000, 2000000];
let precioMeseros=[150000, 100000];
let precioComida =[50000, 40000];


if(meseroExtra){
    cantidad = parseInt(prompt("Escriba la cantidad de meseros..."));
}
let servicioComida = confirm("Desea incluir el servicio de comida???");

if(servicioComida){
    cantidadComida = parseInt(prompt("Escriba la cantidad de platos..."));
}

let valorMeseros =0;
let valorComida =0;


total += precioSalones[salon-1];
valorMeseros = cantidad*precioMeseros[salon-1];
valorComida = cantidadComida*precioComida[salon-1];

total += valorComida + valorMeseros;

document.write(`
        <h3>Estimad@, ${cliente}</h3>
    <h4>La cotización para su evento es:</h4>
    <ul>
        <li><b>Salón:</b> ${nombreSalones[salon-1]}</li>
        <li><b>Cantidad meseros:</b> ${cantidad}</li>
        <li><b>Cantidad Platos:</b> ${cantidadComida}</li>
    </ul>
    <h3>Total cotización evento: $${total}</h3>
`);*/