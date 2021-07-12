/*
Enunciado:
Al ingresar una edad que sea igual a 15, mostrar
el mensaje "niña bonita".
*/
function mostrar()
{
	var edad;
	edad = txtIdEdad.value; //tomo la edad
	edad = parseInt (edad);

	if (edad == 15) // no escribir " ; "
	{
		alert ("Niña bonita");
	}
}
//FIN DE LA FUNCIÓN



/*
if (condición) // puede tomar un valor verdadero o falso
{
	código...
}

Operadores
  - aritméticos: para cálculos aritméticos (+,-,*,/)
  - relacionales: nos permite realizar relaciones entre cosas (<, >, ==, <=, >=, !=)
  estos siempre van a devolver verdadero o falso
  - lógicos: y (&&), o (||) , no (!)
*/