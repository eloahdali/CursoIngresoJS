/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe; // guardo los datos que me llegan a mí por la página en una variable
	importe = txtIdImporte.value;
	importe = parseInt (importe);

	var descuento;
	descuento = importe * (25/100); // o * 0.25

	var resultado;
	resultado = importe - descuento;

	document.getElementById ("txtIdResultado").value = resultado;
}

/*
Enunciado:
Debemos lograr tomar el importe por ID.value ,
transformarlo a entero "parseInt()", luego
mostrar el importe con un descuento del 25 %. en el cuadro de texto "txtIdResultado"
*/

/*
Entradas
   el importe -> por id
Procesos
   calculo el descuento
   aplico el descuento
Salidas
   el resultado -> por id
*/

/*
Orientado al usuario:
  id
  document.write
  alert
Orientado al programador:
  console.log
*/

// HACER LOS 3 TPS DEL INDEX