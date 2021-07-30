/* CLASE 6 - LUNES 19/07
Al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.
*/
function mostrar()
{
	var i; // el contador (variable de control), uno de los pocos casos en que se permite que una variable sea solamente una letra
	i = 0;
	
	while (i < 10) // condición; si acá fuera un if, se hace una sola vez
	{
		i = i + 1; // incremento/modificación de la variable de control, en algún momento esa condición deja de ser verdadera -> ESTOY CONTANDO
		
		document.write (i + "<br>"); // etiqueta html que me permite hacer "enter", saltar una línea
	} // console.log (i); mostra en el console
}

/*
La estructura While es muy parecida al If; va a evaluar una condición que de ser
verdadera va a entrar dentro de la estructura while y va a hacer lo que quiero 
que se repita. A diferencia del If, la estructura While repite, vuelve a chequear 
si la condición es verdadera y repite el proceso.

while (condición) // true o false
{
	sentencias... (lo que quiero que se repita)

	sentencias... (que cambien el valor de la condición)
	Si yo no tengo esa sentencia se genera un bug infinito, este
	while sigue dando vueltas.
}
*/

/*
Los contadores suelen empezar por 0. Por regla de estilo se incrementa la variable de control al final.
Para evitar que muestre el 0 la otra opción sería poner document.write ( (i + 1) + "<br>") -> NO ESTOY CONTANDO
*/