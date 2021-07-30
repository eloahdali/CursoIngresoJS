/*
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes,
se cobra $15.000 por cada estadia como base, se pide el ingreso
de una estacion del año y localidad para vacacionar para poder 
calcular el precio final

en Invierno: bariloche tiene un aumento del 20%; cataratas y 
Cordoba tiene un descuento del 10%; Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20%; cataratas y 
Cordoba tiene un aumento del 10%; Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un 
aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/
function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var precioBase;
	var precioFinal;

	precioBase = 15000;

	estacionIngresada = txtIdEstacion.value;
	destinoIngresado = txtIdDestino.value;

	switch (estacionIngresada)
	{
		case "Invierno":
			if (destinoIngresado == "Bariloche")
			{
				//aumento 20%
				precioFinal = precioBase + precioBase * (20/100);
				alert ("El precio final es " + precioFinal);
			}

			else
			{
				if (destinoIngresado == "Mar del Plata")
				{
					//descuento 20%
					precioFinal = precioBase - precioBase * (20/100);
					alert ("El precio final es " + precioFinal);
				}

				else 
				{
					//descuento 10%
					precioFinal = precioBase - precioBase * (10/100);
					alert ("El precio final es " + precioFinal);
				}
			}
		break;

		case "Verano":
			if (destinoIngresado == "Bariloche")
			{
				//descuento 20%
				precioFinal = precioBase - precioBase * (20/100);
				alert ("El precio final es " + precioFinal);
			}

			else
			{
				if (destinoIngresado == "Mar del Plata")
				{
					//aumento 20%
					precioFinal = precioBase + precioBase * (20/100);
					alert ("El precio final es " + precioFinal);
				}

				else 
				{
					//aumento 10%
					precioFinal = precioBase + precioBase * (10/100);
					alert ("El precio final es " + precioFinal);
				}
			}
		break;

		case "Otoño":
		case "Primavera":
			if (destinoIngresado == "Cordoba")
			{
				alert ("El precio final es " + precioBase);
			}

			else
			{
				//aumento 10%
				precioFinal = precioBase + precioBase * (10/100);
				alert ("El precio final es " + precioFinal);
			}
		break;
	}

}//FIN DE LA FUNCIÓN