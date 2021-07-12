/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	Ingresar tres precios de productos y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	precioUno = txtIdPrecioUno.value;
	precioUno = parseFloat (precioUno);

	var precioDos;
	precioDos = txtIdPrecioDos.value;
	precioDos = parseFloat (precioDos);

	var precioTres;
	precioTres = txtIdPrecioTres.value;
	precioTres = parseFloat (precioTres);

	var resultado;
	resultado = precioUno + precioDos + precioTres;

	alert ("El la suma es: " + resultado);


}
function Promedio () 
{
	var precioUno;
	precioUno = txtIdPrecioUno.value;
	precioUno = parseFloat (precioUno);

	var precioDos;
	precioDos = txtIdPrecioDos.value;
	precioDos = parseFloat (precioDos);

	var precioTres;
	precioTres = txtIdPrecioTres.value;
	precioTres = parseFloat (precioTres);

	var resultado;
	resultado = (precioUno + precioDos + precioTres) / 3;

	alert ("El promedio es: " + resultado);
}
function PrecioFinal () 
{
	var precioUno;
	precioUno = txtIdPrecioUno.value;
	precioUno = parseFloat (precioUno);

	var precioDos;
	precioDos = txtIdPrecioDos.value;
	precioDos = parseFloat (precioDos);

	var precioTres;
	precioTres = txtIdPrecioTres.value;
	precioTres = parseFloat (precioTres);

	var valorIva;
	valorIva = (precioUno + precioDos + precioTres) * 21/100;

	var resultado;
	resultado = precioUno + precioDos + precioTres + valorIva;

	alert ("El precio final es: " + resultado);

}

/*
Enunciado:
1. Para el departamento de facturación:
A. Ingresar tres precios de productos y mostrar la suma de los mismos.
B. Ingresar tres precios de productos y mostrar el promedio de los mismos.
C. Ingresar tres precios de productos sumarlos y mostrar precio final (más IVA 21%).
*/