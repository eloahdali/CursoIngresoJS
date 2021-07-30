/*
Al presionar el botón 
pedir un número entre 0 y 9 inclusive.
*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt ("Ingrese un número entre 0 y 9");
	numeroIngresado = parseInt (numeroIngresado);
	
	while (numeroIngresado < 0 || numeroIngresado > 9)
	{
		numeroIngresado = prompt ("Incorrecto, ingrese un número entre 0 y 9");
	}

	txtIdNumero.value = numeroIngresado;
}

/* while (isNaN (numeroIngresado) || (numeroIngresado < 0 || numeroIngresado > 9));
caso el usuario ponga una letra en lugar de un número */