/*
Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/
function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt (edad);

	var estado;// las listas despegables se manejan de la misma manera que el text box a través del id
	estado = estadoCivil.value; // diferenciar el nombre de la variable y del id

	if (edad < 18 && estado != "Soltero")
	{
		alert ("Es muy pequeño para NO ser soltero");
	}

}
//FIN DE LA FUNCIÓN