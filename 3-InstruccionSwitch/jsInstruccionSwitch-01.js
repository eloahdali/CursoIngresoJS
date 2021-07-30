/*
Enunciado:
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/
function mostrar()
{
	var mesIngresado;
	mesIngresado = txtIdMes.value;

	switch (mesIngresado)
	{
		case "Enero":
			alert ("Que comiences bien el año!");
		break;

		case "Marzo":
			alert ("A clases!");
		break;

		case "Julio":
			alert ("Se vienen las vacaciones!");
		break;

		case "Diciembre":
			alert ("Felices fiestas!");
		break;
	}

}
/* podría también definir la variable "mensaje", poner 
cada mensaje específico en cada case y definir el alert 
al final afuera del switch, pero en los demás meses
aparecería el mensaje "undefined" */