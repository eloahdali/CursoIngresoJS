/*2.	Para el departamento de Construcción:
A.	Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	largo = txtIdLargo.value;
	largo = parseFloat (largo);

	var ancho;
	ancho = txtIdAncho.value;
	ancho = parseFloat (ancho);

	var perimetro;
	perimetro = (largo * 2) + (ancho * 2);

	var alambre;
	alambre = perimetro * 3;

	alert ("La cantidad de alambre a comprar es " + alambre + " metros");
}
function Circulo () 
{
	var radio;
	radio = txtIdRadio.value;
	radio = parseFloat (radio); // circunferencia / (2 * 3.14) = radio

	var circunferencia;
	circunferencia = radio * (2 * 3.14);

	var alambre;
	var alambre = circunferencia * 3;

	alert  ("La cantidad de alambre a comprar es " + alambre.toFixed(2) + " metros");
}
function Materiales () 
{
	var largo;
	largo = txtIdLargo.value;
	largo = parseFloat (largo);

	var ancho;
	ancho = txtIdAncho.value;
	ancho = parseFloat (ancho);

	var area;
	area = (largo * ancho);

	var cemento;
	cemento = area * 2;

	var cal;
	cal = area * 3;

	alert ("Se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");

}

/*
Enunciado:
2. Para el departamento de Construcción:
A. mostrar la cantidad de alambre a comprar si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B. mostrar la cantidad de alambre a comprar si se ingresara el radio de un terreno circular y se debe alambra con tres hilos de alambre.
C. Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas del terreno rectangular.
*/