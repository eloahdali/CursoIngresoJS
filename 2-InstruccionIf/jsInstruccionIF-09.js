/*
Enunciado:
Al presionar el botón, mostrar un número random del 1 al 10 inclusive
*/
function mostrar()
{
	var maximo;
	maximo = 10;

	var minimo;
	minimo = 1;

	var numero;
	numero = Math.round(Math.random() * (maximo - minimo) + minimo);

	alert (numero);
}
//o numero = Math.round(Math.random() * 9 + 1);