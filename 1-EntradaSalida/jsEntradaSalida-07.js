/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	numeroUno = txtIdNumeroUno.value;
	numeroUno = parseInt (numeroUno); // siempre parsear después de tomar el dato

	var numeroDos;
	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt (numeroDos);

	var resultado;
	resultado = numeroUno + numeroDos;

	alert ("La suma es " + resultado);

}

function restar()
{
    var numeroUno;
	numeroUno = txtIdNumeroUno.value;
	numeroUno = parseInt (numeroUno);

	var numeroDos;
	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt (numeroDos);

	var resultado;
	resultado = numeroUno - numeroDos;

	alert ("La resta es " + resultado);
}

function multiplicar()
{ 
	var numeroUno;
	numeroUno = txtIdNumeroUno.value;
	numeroUno = parseInt (numeroUno);

	var numeroDos;
	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt (numeroDos);

	var resultado;
	resultado = numeroUno * numeroDos;

	alert ("La multiplicación es " + resultado);
}

function dividir()
{
	var numeroUno;
	numeroUno = txtIdNumeroUno.value;
	numeroUno = parseInt (numeroUno);

	var numeroDos;
	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt (numeroDos);

	var resultado;
	resultado = numeroUno / numeroDos;

	alert ("La división es " + resultado);
}

/*
Enunciado:
Debemos lograr tomar Los numeros por ID.value ,
transformarlos a enteros "parseInt()",realizar la operación correcta y
mostrar el resulto por medio de "alert()"
ej.: "la Resta es 750"
*/