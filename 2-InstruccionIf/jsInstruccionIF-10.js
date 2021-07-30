/*
Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/
function mostrar()
{
	var maximo;
	maximo = 10;

	var minimo;
	minimo = 0;

	var numero;
	numero = Math.round(Math.random() * (maximo - minimo) + minimo);

	if (numero > 8)
	{
		alert ("Excelente! Nota: " + numero);
	}

	else
	{
		if (numero > 3)
		{
			alert ("Aprobó. Nota: " + numero);
		}

		else 
		{
			alert ("Vamos, la próxima se puede. Nota: " + numero);
		}
	}

}//FIN DE LA FUNCIÓN