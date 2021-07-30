/*
Enunciado:
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
*/
function mostrar()
{
	var horaIngresada;
	horaIngresada = txtIdHora.value;
	horaIngresada = parseInt (horaIngresada);

	switch (horaIngresada)
	{
		case 7: // no hace falta las comillas por el parseo, es equivalente al ===
		case 8:
		case 9:
		case 10:
		case 11:
			alert ("Es de mañana");
		break;
	}
}//FIN DE LA FUNCIÓN