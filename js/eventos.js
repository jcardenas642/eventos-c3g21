

let celdas = document.getElementsByTagName("button");

let texto_h2 = document.querySelectorAll("h2");

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

let listaEventos=[
    {
        cliente:"Jose",
        documento:"741963852",
        meseros:2,
        platos:150,
        salon:salonNormal,
        total:3200000
    },
    {
        cliente:"Laura",
        documento:"852753951",
        meseros:5,
        platos:50,
        salon:salonGrande,
        total:3200000
    },
];



const limpiarFormulario = ()=>{
    let formulario = document.getElementById("formulario_evento");

    let ipCliente = formulario.cliente;
    ipCliente.value="";

    let ipDocumento = formulario.documento.value;
    ipDocumento.value="";
    
};

const cargarDatos = ()=>{

    let tabla = document.getElementById("datos_eventos");
    tabla.innerHTML="";
    for (const evento of listaEventos) {
        tabla.innerHTML += `<tr>
                            <td>${evento.cliente}</td>
                            <td>${evento.salon.nombre}</td>
                            <td>${evento.meseros}</td>
                            <td>${evento.platos}</td>
                            <td>${evento.total}</td>
                        </tr>`;
    }


};

cargarDatos();

const agregarEvento = (evento)=>{

    let tabla = document.getElementById("datos_eventos");
    // console.log(tabla.innerHTML);
    tabla.innerHTML += `<tr>
                            <td>${evento.cliente}</td>
                            <td>${evento.salon.nombre}</td>
                            <td>${evento.meseros}</td>
                            <td>${evento.platos}</td>
                            <td>${evento.total}</td>
                        </tr>`;
};

const procesarInformacion = ()=>{
    
    let formulario = document.getElementById("formulario_evento");
    
    let evento = {};
    evento['cliente'] = formulario.cliente.value;
    evento['documento'] = formulario.documento.value;
    let salon = formulario.salon.value;
    evento['salon']= listaSalones[salon-1];
    let meseroExtra = formulario.meseros_extra.value;
    if(meseroExtra=="Si"){
        evento['meseros'] = formulario.cantidad.value;
    }else{
        evento['meseros']=0;
    }
    let servicioComida = formulario.servicio_comida.value;
    
    if(servicioComida=="Si"){
        evento['platos'] = formulario.platos.value;
    }else{
        evento['platos']=0;
    }
    
    let valorMeseros = evento.meseros*evento.salon.extra_mesero;
    let valorComida = evento.platos*evento.salon.plato;
    
    evento['total'] = valorComida + valorMeseros + evento.salon.precio;
    
    console.log(evento);

    listaEventos.push(evento);
    
    formulario.reset();
    cargarDatos();
    // agregarEvento(evento);
    // limpiarFormulario();
    
};