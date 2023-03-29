// Declarar variables y objetos necesarios para simular el proceso seleccionado
let input1, input2, resultado;
let datos = [];

// Capturar entradas mediante prompt() y procesarlas con una función
function simular() {
	input1 = document.getElementById("input1").value;
	input2 = document.getElementById("input2").value;
	procesar(input1, input2);
}

// Crear funciones y/o métodos para realizar operaciones (suma, resta, concatenación, división, porcentaje, etc)
function procesar(input1, input2) {
	resultado = input1 + input2;
	datos.push(resultado);
	mostrarResultado(resultado);
}

// Efectuar una salida, que el resultado de los datos procesados, la cual puede hacerse por alert() o console.log()
function mostrarResultado(resultado) {
	document.getElementById("output").innerHTML = resultado;
	console.log(datos);
}

// Métodos de búsqueda y filtrado sobre el array
let datoBuscado = datos.find((dato) => dato === "valorBuscado");
let datosFiltrados = datos.filter((dato) => dato.includes("valorFiltrado"));
