/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	sueldo = txtIdSueldo.value;
	sueldo = parseFloat (sueldo); // invés de convertir a entero, convierte a un número con coma

	var resultado;
	resultado = sueldo * 1.1; // el operador % no sirve para calcular el porcentaje

	document.getElementById ("txtIdResultado").value = resultado.toFixed(2); // podría simplemente poner txtIdSueldo.value = resultado
}

// toFixed es para determinar la cantidad de números después de la coma

/*
Forma 2 - Nos muestra el aumento que se hizo
aumento = sueldo * (10/100);
resultado = sueldo + aumento;

Forma 3 - Lo mismo que lo anterior
aumento = sueldo * 0.1;
resultado = sueldo + aumento;
*/

/*
Qué entra al programa?
  El importe del sueldo
Qué se procesa (para llegar al resultado)?
  Sumar al sueldo el 10%
Qué sale del programa?
  El importe con el aumento del 10%
*/

/*
Enunciado:
Debemos lograr tomar el importe por ID.value ,
transformarlo a entero "parseInt()", luego
mostrar el importe con un aumento del 10 %. en el cuadro de texto "txtIdResultado"
*/