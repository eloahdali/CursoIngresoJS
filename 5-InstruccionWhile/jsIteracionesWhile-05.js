/*
Al presionar el botón pedir un sexo
'F' para femenino, 'M' para masculino.
*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt ("Ingrese f o m");

	while (sexoIngresado != "f" && sexoIngresado != "m") // se tiene que cumplir las dos, por eso no usar "||"
	{
		sexoIngresado = prompt ("Incorrecto, ingrese F o M");
	}

	txtIdSexo.value = sexoIngresado;
}