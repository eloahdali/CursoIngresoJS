/*
Enunciado:
Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento,
mostrar el precio final con descuento por id.
*/
function mostrar()
{
	var precio;
	precio = prompt ("Ingrese el precio");
	precio = parseFloat (precio);

	var porcentaje;
	porcentaje = prompt ("Ingrese el porcentaje de descuento");
	porcentaje = parseInt (porcentaje);

	var descuento;
	descuento = precio * (porcentaje / 100);

	var precioFinal;
	precioFinal = precio - descuento;

	document.getElementById ("elPrecioFinal").value = precioFinal;
}
