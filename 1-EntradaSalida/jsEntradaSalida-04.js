/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

function mostrar ()
{
	var nombreIngresado; // utilizar lowerCamelCase, es una regla de estilo

	nombreIngresado = prompt ("Ingrese su nombre: "); // tomando dato por prompt
	
	document.getElementById ("txtIdNombre").value = nombreIngresado; // mostrando por Id
}

/*
Enunciado:
Debemos lograr tomar un dato por '=prompt()'
y lo muestro por ID.value
al presionar el botón 'mostrar'
*/

/*
Overview:
Ingresar datos mediante prompt
Ingresar datos mediante ID
Declarar una variable
Mostrar datos/información mediante alert
Console.log
*/
