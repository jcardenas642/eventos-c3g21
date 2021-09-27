// Eventos

// let nombreSalones=["Normal", "Grande"];
// let precioSalones=[1000000, 2000000];


// document.write(`Precio: ${salonNormal.precio}`);

// salonNormal['precio']=800000;

// document.write(`Precio: ${salonNormal.precio}`);
// console.log(salonNormal);

// let precioMeseros=[150000, 100000];
// let precioComida =[50000, 40000];

// function saludar(nombre){
//      return `HOLA ${nombre} DESDE FUNCIÓN`;
// }

const saludar =  (nombre, edad)=>{

    if (edad>=18) {
        document.write(`Hola ${nombre} mayor de edad...`);
    ``
    } else {
        document.write(`Hola ${nombre} menor de edad...`);        
    }
    return 1;
};

const saludar_abreviado = (nombre)=> `Hola ${nombre}, con función flecha abreviada`;

let mensaje = saludar("JUAN", 25);
document.write(mensaje);


/*

let salonNormal = {"nombre":"Normal", 
                    "precio":1000000, 
                    "extra_mesero":150000,
                    "cantidad_meseros":1, 
                    "plato":50000
                };
let salonGrande = {"nombre":"Grande", 
                    "precio":2000000, 
                    "extra_mesero":100000, 
                    "cantidad_meseros":4,
                    "plato":40000
                };

let listaSalones = [salonNormal, salonGrande];
let listaEventos = [];

let continuar;

do {
    let evento = {};
    evento['cliente'] = prompt("Escriba su nombre");
    evento['documento'] = prompt("Escriba su documento");
    let salon = parseInt(prompt("Seleccione el salón (1. Normal/2. Grande)"));
    evento['salon']= listaSalones[salon-1];
    let meseroExtra = confirm("Desea meseros extras???");
    if(meseroExtra){
    evento['meseros'] = parseInt(prompt("Escriba la cantidad de meseros..."));
    }else{
        evento['meseros']=0;
    }
    let servicioComida = confirm("Desea incluir el servicio de comida???");

    if(servicioComida){
        evento['platos'] = parseInt(prompt("Escriba la cantidad de platos..."));
    }else{
        evento['platos']=0;
    }

    let valorMeseros = evento.meseros*evento.salon.extra_mesero;
    let valorComida = evento.platos*evento.salon.plato;

    evento['total'] = valorComida + valorMeseros + evento.salon.precio;

    listaEventos.push(evento);

    continuar = confirm("Registrar un nuevo evento?");
    
} while (continuar);

let xhtml = `<table>
                <thead>
                    <tr>
                        <th>CLIENTE</th>
                        <th>SALON</th>
                        <th>MESEROS</th>
                        <th>PLATOS</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>
                <tbody>`;

for (let evento of listaEventos) {
    
    let meseros = parseInt(evento.meseros) + parseInt(evento.salon.cantidad_meseros);
    xhtml += `<tr>
                <td>${evento.cliente} - ${evento.documento}</td>
                <td>${evento.salon.nombre}</td>
                <td>${meseros}</td>
                <td>${evento.platos}</td>
                <td>$${evento.total}</td>
            </tr>`;

}

xhtml += `</tbody>
        </table>`;

document.write(xhtml);
*/

// let evento = {
//     "cliente":"Juan",
//     "documento":123456,
//     "salon": salonNormal,
//     "meseros":0,
//     "platos":0,
//     "descuento":0,
//     "total":0
// }
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