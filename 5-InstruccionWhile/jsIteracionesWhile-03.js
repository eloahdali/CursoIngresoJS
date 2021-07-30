/*
Al presionar el botón pedir la CLAVE (ayuda: es utn750)
*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt ("Ingrese el número clave");
	
	while (claveIngresada != "utn750")
	{
		claveIngresada = prompt ("Clave incorrecta, reingrese el número clave");
	}

	alert ("Accedió al sistema"); // el alert muestra, pero no permite que el usario ingrese datos
}

/*
Validar un dato es hacer que una variable contenga un valor específico
o que un valor cumpla con un criterio determinado. Toda validación se
va a hacer con "while" o con alguna estructura repetitiva.

Me pide el dato hasta que el usuario ponga los datos correctos.
*/

/*
{

var clave;
var flag;
flag = 0;

do 
{
	if (flag == 0)
	{
		clave = prompt ("Ingrese clave");
		flag = 1;
	}

	else
	{
		clave = prompt ("Reingrese clave");
	}
	
} while (clave != "utn750");

alert ("Accedió al sistema");
}
*/