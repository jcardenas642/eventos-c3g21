// Eventos

let cliente = prompt("Escriba su nombre");
let documento = prompt("Escriba su documento");
let salon = parseInt(prompt("Seleccione el salón (1. Normal/2. Grande)"));
let meseroExtra = confirm("Desea meseros extras???");

if(meseroExtra){
    let cantidad = parseInt(prompt("Escriba la cantidad de meseros..."));
}
let servicioComida = confirm("Desea incluir el servicio de comida???");

if(servicioComida){
    let cantidadComida = parseInt(prompt("Escriba la cantidad de platos..."));
}

let total = 0;
if (salon==1) {
    total += 1000000
    let valorMeseros = cantidad*150000
    let valorComida = cantidadComida*50000;
}else{
    total += 2000000;
    let valorMeseros = cantidad*100000
    let valorComida = cantidadComida*40000;
}

total += valorComida + valorMeseros;

document.write(`
        <h3>Estimad@, ${cliente}</h3>
    <h4>La cotización para su evento es:</h4>
    <ul>
        <li><b>Salón:</b> xxxx</li>
        <li><b>Cantidad meseros:</b> ${cantidad}</li>
        <li><b>Cantidad Platos:</b> ${cantidadComida}</li>
    </ul>
    <h3>Total cotización evento: $${total}</h3>
`);