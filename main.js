function Afiliado(nombre, edad, localidad, actividad) {
  this.nombre = nombre;
  this.edad = edad;
  this.localidad = localidad;
  this.actividad = actividad;
}

const afiliado1 = new Afiliado("mariano", 35, "Flores", "preparacion Fisica");
console.log(afiliado1);

const afiliado2 = new Afiliado("Gerardo", 39, "Caballito", "practica deportiva");


console.log(afiliado1.nombre);
console.log(afiliado2.localidad);



class Abono {
  constructor(actividad, frecuencia, precio, vacante) {
    this.actividad = actividad;
    this.frecuencia = frecuencia;
    this.precio = precio;
    this.vacante = vacante;
  }

  vender() {
    this.vacante -= 1;
  }
}

const abonoanualgral = new Abono("actividad completa", "anual", 89000, 50);

const abonos = [];

abonos.push(new Abono("preparacion Fisica", "mensual", 5000, 10));
abonos.push(new Abono("preparacion Fisica", "trimestral", 13000, 10));
abonos.push(new Abono("practica Deportiva", "mensual", 7000, 10));
abonos.push(new Abono("practica Deportiva", "trimestral", 18000, 10));
abonos.push(new Abono("fisico Deportiva", "mensual", 10000, 10));
abonos.push(new Abono("fisico Deportiva", "trimestral", 27500, 10));


console.log(abonos);

console.log(abonoanualgral);
abonoanualgral.vender();
console.log(abonoanualgral);
abonoanualgral.vender();
console.log(abonoanualgral);


let actividad = prompt(" Ingrese nombre de actividad a realizar");



if (actividad === "preparacionFisica") {
  alert("Elegi la frecuencia");

  let frecuencia = prompt("Ingrese la frecuencia")

  if (frecuencia === "mensual") {
    alert("Abona 5000");
  } else if (frecuencia === "trimestral") {
    alert("Abona 13000");
  }

} if (actividad === "practicaDeportiva") {
  alert("Elegi la frecuencia");

  let frecuencia = prompt("Ingrese la frecuencia")

  if (frecuencia === "mensual") {
    alert("Abona 7000");
  } else if (frecuencia === "trimestral") {
    alert("Abona 18000");
  }



} if (actividad === "fisicoDeportiva") {
  alert("Elegi la frecuencia");

  let frecuencia = prompt("Ingrese la frecuencia")

  if (frecuencia === "mensual") {
    alert("Abona 10000");
  } else if (frecuencia === "trimestral") {
    alert("Abona 27500");
  }

} else {
  alert("no corresponde actividad")
}

const disponibilidad = ["mañana", "tarde", "noche"];


const eliminarPorTurno = (turno) => {

  let index = disponibilidad.indexOf(turno);

  if (index != -1) {

    disponibilidad.splice(index, 1);
    console.log(disponibilidad);
  }
};

eliminarPorTurno("tarde");


let turno = prompt("Ingrese el turno que desea");

if (disponibilidad.includes(turno)) {
  alert("Turno disponible");
} else {
  alert("Turno no disponible por el momento");
}

const resta = (x, y) => x - y;
const descuento = (abono) => abono * 0.1;

let precioAbono = Number(prompt("Ingrese el precio del abono"));


let nuevoPrecio = resta(precioAbono, descuento(precioAbono));
alert(nuevoPrecio);


