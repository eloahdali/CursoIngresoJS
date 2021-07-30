/*
Enunciado:
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/
function mostrar()
{
	var mesIngresado;
	mesIngresado = txtIdMes.value;

	switch (mesIngresado)
	{
		case "Febrero":
			alert ("Este mes no tiene más de 29 días");
		break;
		
		default:
			alert ("Este mes tiene 30 días o más");
		break;
	}
}//FIN DE LA FUNCIÓN