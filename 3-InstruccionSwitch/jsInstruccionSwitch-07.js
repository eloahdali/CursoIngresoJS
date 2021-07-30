/*
Enunciado:
Al selecionar un destino, indicar el punto cardinal de 
nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/
function mostrar()
{
	var destinoIngresado;
	destinoIngresado = txtIdDestino.value;

	if (destinoIngresado == "Bariloche")
	{
	alert ("Oeste");
	}

	else
	{
		if (destinoIngresado == "Cataratas")
		{
			alert ("Norte");
		}

		else
		{
			if (destinoIngresado == "Mar del Plata")
			{
				alert ("Este");
			}

			else
			{
				alert ("Sur");
			}
		}
	}
}

/*Un ejercicio como ese donde no hay rangos,
cae mejor utilizar el switch*/

/*	switch (destinoIngresado)
	{
		case "Bariloche":
			alert ("Oeste");
		break;

		case "Cataratas":
			alert ("Norte");
		break;

		case "Mar del Plata":
			alert ("Este");
		break;

		case "Ushuaia":
			alert ("Sur");
		break;
	}

}*/