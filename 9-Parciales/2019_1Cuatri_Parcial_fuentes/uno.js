/*
Bienvenidos.
Realizar el algoritmo que pida los datos necesarios para un
triángulo equilátero por prompt y que muestre el perímetro por alert.
*/
function mostrar()
{
	var datosTriangulo;
	datosTriangulo = prompt ("Ingrese el tamaño de uno de los lados del triángulo");
	datosTriangulo = parseFloat (datosTriangulo);

	var perimetroTriangulo;
	perimetroTriangulo = datosTriangulo *3;
	alert ("El perímetro del triángulo es " + perimetroTriangulo);
}
