/*
Enunciado:
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/
function mostrar()
{
	var mesIngresado;
	mesIngresado = txtIdMes.value;

	switch (mesIngresado)
	{
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert ("Falta para el invierno");
		break;

		case "Julio":
		case "Agosto":
			alert ("Abrígate, que hace frío");
		break;

		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert ("Ya pasamos el frío, ahora calor!");
		break;
	}
}//FIN DE LA FUNCIÓN

/*
Convertir el TP4:
- Solo con If
- Solo con Switch (meter un If para el cálculo del impuesto)
- Switch + If
*/