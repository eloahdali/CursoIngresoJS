/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. x
2-Suma de los positivos. x
3-Cantidad de positivos. x
4-Cantidad de negativos. x
5-Cantidad de ceros. x
6-Cantidad de números pares.
7-Promedio de positivos. x
8-Promedios de negativos. x
9-Diferencia entre positivos y negativos, (positvos-negativos). x
*/
function mostrar()
{
	var numero;
	var positivos; // acumuladores
	var negativos;
	var seguir;
	var contadorPositivos; // contadores
	var contadorNegativos;
	var contadorCeros;
	var contadorPares;
	var diferencia;
	var promedioPositivos;
	var promedioNegativos;

	positivos = 0;
	negativos = 0;
	contadorPositivos = 0;
	contadorNegativos = 0;
	contadorCeros = 0;
	contadorPares = 0;
	promedioPositivos = 0;
	promedioNegativos = 0;

	do
	{

		numero = prompt ("Ingrese un número");
		numero = parseInt (numero);

		if (numero > 0)
		{
			positivos = positivos + numero;
			contadorPositivos = contadorPositivos + 1;
		}

		else
		{
			if (numero < 0)
			{
				negativos = negativos + numero;
				contadorNegativos = contadorNegativos + 1;
			}

			else
			{
				contadorCeros = contadorCeros + 1;
			}

		}
		
		if (numero % 2 == 0) 
		{
			contadorPares = contadorPares +1;
		}

		seguir =  prompt ("Quiere ingresar otro número? s/n");

	} while (seguir == 's');

	if (contadorPositivos > 0) 
	{
		promedioPositivos = positivos / contadorPositivos;
	}

	if (contadorNegativos > 0) 
	{
		promedioNegativos = negativos / contadorNegativos;
	}


	diferencia = positivos + negativos; // - (-) = +

	document.write ("1. Suma de los negativos: " + negativos + "<br>");
	document.write ("2. Suma de los positivos: " + positivos + "<br>");
	document.write ("3. Cantidad de positivos: " + contadorPositivos + "<br>");
	document.write ("4. Cantidad de negativos: " + contadorNegativos + "<br>");
	document.write ("5. Cantidad de ceros: " + contadorCeros + "<br>");
	document.write ("6. Cantidad de números pares: " + contadorPares + "<br>");
	document.write ("7. Promedio de positivos: " + promedioPositivos + "<br>");
	document.write ("8. Promedio de negativos: " + promedioNegativos + "<br>");
	document.write ("9. Diferencia entre positivos y negativos: " + diferencia + "<br>");

}


/*
- Cuando no sé la cantidad de repeticiones,
selecciono el WHILE. (puede no ejecutarse)
- FOR cuando la conozco. (puede no ejecutarse)
- DO WHILE cuando tiene que ejecutarse por
lo menos una vez.
*/