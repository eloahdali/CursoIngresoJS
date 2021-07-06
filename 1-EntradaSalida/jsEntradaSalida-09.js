/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	sueldo = txtIdSueldo.value;
	sueldo = parseInt (sueldo);

	var resultado;
	resultado = sueldo + (sueldo % 10);

	document.getElementById ("txtIdResultado").value = resultado;
}

/*
Enunciado:
Debemos lograr tomar el importe por ID.value ,
transformarlo a entero "parseInt()", luego
mostrar el importe con un aumento del 10 %. en el cuadro de texto "txtIdResultado"
*/