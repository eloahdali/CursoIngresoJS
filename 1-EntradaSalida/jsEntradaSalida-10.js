/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	importe = txtIdImporte.value;
	importe = parseInt (importe);

	var resultado;
	resultado = importe - (importe % 25);

	document.getElementById ("txtIdResultado").value = resultado;
}

/*
Enunciado:
Debemos lograr tomar el importe por ID.value ,
transformarlo a entero "parseInt()", luego
mostrar el importe con un descuento del 25 %. en el cuadro de texto "txtIdResultado"
*/