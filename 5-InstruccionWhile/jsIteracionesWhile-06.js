/*
Enunciado:
Al presionar el botón pedir 5 números e informar la suma 
acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;

	contador = 0;
	acumulador = 0; // casi siempre deben estar inicializados en 0

	while (contador < 5)
	{
		numeroIngresado = prompt ("Ingrese un número");
		numeroIngresado = parseInt (numeroIngresado); // primero tengo que pedir un número y después parsearlo

		acumulador = acumulador + numeroIngresado; 

		contador = contador + 1; // me aseguro que ese while en algún momento va a dejar de interar
	}
	
	promedio = acumulador / contador;

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = promedio;
}

/*
Entradas: 5 números (dentro del while)
Procesos: calcular la suma de los números (dentro del while) y el promedio (fuera del while)
Salidas: suma y promedio
*/

/*
Diferencia entre acumulador y contador
- acumulador se acumula valores variables
- contador se acumula valores constantes 
*/