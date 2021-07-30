/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var promedio;
	var seguir;

	contador = 0;
	acumulador = 0;
	seguir = "Sí";

	while (seguir == "Sí")
	{
		numeroIngresado = prompt ("Ingrese un número");
		numeroIngresado = parseInt (numeroIngresado);

		acumulador = acumulador + numeroIngresado; 

		contador = contador + 1;

		seguir = prompt ("Desea ingresar otro número? Sí/No");
	}
	
	promedio = acumulador / contador;

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = promedio;

}

/*
Otra forma de hacerlo es invés de asignarle a la variable "seguir" el valor "sí",
puedo preguntar por true.

seguir = true;
while (seguir == true)

seguir = confirm ("Desea ingresar otro número?");
*/

/*
	do
	{
			
	} while (condición);

- while: mientras se cumpla la condución, ejecutar las instrucciones que están adentro
- do while: hacer eso mientras se cumpla la condición; no tiene barrera de entrada,
sino de salida, el flujo del programa entra directamente y al final evalúa la condición;
si es verdadera, vuelve a la llave de abertura del do while y vuelve a ejecutar todas las
líneas de código del bloque. Cuando sea falsa, recíen ahí escapa del do while
*/