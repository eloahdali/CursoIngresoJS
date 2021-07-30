/*
Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/
function mostrar()
{
	var edad;
	edad = parseInt (edad);
	edad = txtIdEdad.value;

	var estado;
	estado = estadoCivil.value;

	if (edad > 17 && estado == "Soltero")
	{
		alert ("Es soltero y no es menor");
	}
}
// o if ( !(edad < 18 || estado != "Soltero") ) la directa es más fácil de entender que la negada

//-> Hacer los demás ejercicios If y TP 4