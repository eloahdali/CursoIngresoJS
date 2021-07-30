/*
Enunciado:
Al ingresar una edad solo debemos informar si
la persona NO es adolescente.
*/
function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt (edad);

	if (edad < 13 || edad > 17) // acá no importa si es inclusivo o exclusivo, basta que la primera sea verdadera para que se ejecute
	{
		alert ("La persona no es adolescente");
	}
}
//FIN DE LA FUNCIÓN

// podría poner también if !(edad > 12 && edad < 18), pero se complica más