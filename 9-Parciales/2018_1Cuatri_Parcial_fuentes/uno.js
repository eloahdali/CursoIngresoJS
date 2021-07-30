/*
Enunciado:
Bienvenidos.
Realizar el algoritmo que pida el ancho y el largo de un rectángulo
por prompt y que muestre el perímetro por alert.
*/
function mostrar()
{
	var ancho;
	ancho = prompt ("Ingrese el ancho del rectángulo");
	ancho = parseFloat (ancho);

	var largo;
	largo = prompt ("Ingrese el largo del rectángulo");
	largo = parseFloat (largo);

	var perimetro;
	perimetro = 2 * (ancho + largo);

	alert ("El perímetro del rectángulo es " + perimetro);
}
