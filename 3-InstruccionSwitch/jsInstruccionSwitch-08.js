/*
Enunciado:
Al seleccionar un destino informar si hace
FRIO o CALOR en ese destino
*/
function mostrar()
{
	var destinoIngresado;
	destinoIngresado = txtIdDestino.value;

	switch (destinoIngresado)
	{
		case "Bariloche":
			alert ("Frío");
		break;

		case "Cataratas":
			alert ("Calor");
		break;

		case "Mar del Plata":
			alert ("Calor");
		break;

		case "Ushuaia":
			alert ("Frío");
		break;
	}

}//FIN DE LA FUNCIÓN