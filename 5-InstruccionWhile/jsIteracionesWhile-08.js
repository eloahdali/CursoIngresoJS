/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
*/
function mostrar()
{
	var numero;
	var positivos;
	var negativos;
	var seguir; // no hace falta inicializar si usamos do while
	var flag;

	positivos = 0;
	negativos = 1;
	flag = 0;

	do
	{

		numero = prompt ("Ingrese un número");
		numero = parseInt (numero);

		if (numero >= 0)
		{
			positivos = positivos + numero;
		}

		else
		{
			flag = 1;
			negativos = negativos * numero;
		}
		

		seguir =  prompt ("Quiere ingresar otro número? s/n");

	} while (seguir == 's');


	if (flag == 0)
	{
		negativos = 0;
	}
	
	txtIdProducto.value = negativos;
	txtIdSuma.value = positivos;

}

/* 
- declaración de variable
- armar un bucle del tipo mientras el usuario quiera (do while)
- pedir los números -> dentro del bucle
- analizar el signo de cada número (definir la condición) -> dentro del bucle
- acumulamos el número en el acumulador correspondiente -> dentro del bucle
- mostrar resultados -> fuera del bucle
*/