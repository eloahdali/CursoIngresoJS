/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
*/
function mostrar()
{	
	var numero;
	var maximo;
	var minimo;
	var seguir;
	var flag;

	flag = 0;

	do
	{

		numero = parseInt (numero);
		numero = prompt ("Ingrese un número");

		if (flag == 0) // if puede vivir sin su else, else no puede vivir sin su if
		{
			maximo = numero;
			minimo = numero;

			flag = 1;
		}

		else
		{
			if (numero > maximo)
			{
				maximo = numero;
			}

			else
			{
				if (numero < minimo) 
				{
					minimo = numero;
				}
			}
		}

		seguir = prompt ("Quiere ingresar otro número? s/n")

	} while (seguir == 's');

	txtIdMaximo.value = maximo;
	txtIdMinimo.value = minimo;

}
//HACER LOS RESTANTES EJERCICIOS Y TP12

/*
- declaración de variable
- armar un bucle del tipo mientras el usuario quiera (do while)
- -> dentro del bucle
	- pedir un número
	- reconocer si estou pidiendo por primera vez
	- si es así, inicializo max y min
	- caso contrario, me fijo si tengo un nuevo max o nuevo min
	- y los actualizo de ser necesario
- -> fuera del bucle
	- muestro la información (max y min)
*/

/*
var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	numeroMaximo = -1000;
	numeroMinimo = 1000;

	banderaDelPrimero="es el primero";
	respuesta = 'si';

	while(respuesta == "si")
	{
		
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimmo.value=numeroMinimo;
*/