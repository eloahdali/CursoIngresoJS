/*
Bienvenidos.
A una pareja se le pide los datos para mostrar un mensaje 
"ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados 
son xx kilos y el promedio de peso xx ".
*/
function mostrar()
{
	var nombrePersonaUno;
	nombrePersonaUno = prompt ("Ingrese el nombre de la persona uno");

	var nombrePersonaDos;
	nombrePersonaDos = prompt ("Ingrese el nombre de la persona dos");

	var pesoPersonaUno;
	pesoPersonaUno = prompt ("Ingrese el peso de la persona uno");
	pesoPersonaUno = parseInt (pesoPersonaUno);

	var pesoPersonaDos;
	pesoPersonaDos = prompt ("Ingrese el peso de la persona dos");
	pesoPersonaDos = parseInt (pesoPersonaDos);

	var sumaPesos;
	sumaPesos = pesoPersonaUno + pesoPersonaDos;

	var promedioPesos;
	promedioPesos = sumaPesos / 2;

	var mensaje;
	mensaje = "Ustedes se llaman " + nombrePersonaUno + " y " + nombrePersonaDos + ", pesan ";
	mensaje = mensaje + pesoPersonaUno + " y " + pesoPersonaDos + " kilos, que sumados son ";
	mensaje = mensaje + sumaPesos + " kilos y el promedio de peso es " + promedioPesos + ".";

	alert (mensaje);
}
