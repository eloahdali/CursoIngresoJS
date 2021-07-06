// CLASE 2 - MARTES 06/07/21

/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

function sumar ()
{
	var numeroUno;
	numeroUno = txtIdNumeroUno.value;
	numeroUno = parseInt (numeroUno);


	var numeroDos;
	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt (numeroDos);

	var resultado;
	resultado = numeroUno + numeroDos;

	alert ("La suma es " + resultado);

}

/*
Enunciado:
Debemos lograr tomar Los numeros por ID.value , transformarlos a enteros "parseInt()" y Sumarlos.
mostrar el resulto por medio de "alert()"
ej.: "la suma es 750"
*/