/*
Al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.
*/
function mostrar()
{
	var i; // variable de control del while
	i = 10; //  inicialización de la variable de control

	while (i > 0) // condición de continuidad
	{
		document.write (i + "<br>");

		i = i - 1; // decremento de la variable de control
	}

}