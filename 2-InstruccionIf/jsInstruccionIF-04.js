// CLASE 4 - MARTES 13/07/21
/*
Enunciado:
Al ingresar una edad debemos informar si la persona es
adolescente, edad entre 13 y 17 años (inclusive).
*/
function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt (edad);

    if (edad > 12 && edad < 18)
	{
		alert ("La persona es adolescente");
	}
}
//FIN DE LA FUNCIÓN