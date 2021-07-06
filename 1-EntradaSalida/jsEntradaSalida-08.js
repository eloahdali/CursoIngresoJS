/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroUno;
	numeroUno = txtIdNumeroDividendo.value;
	numeroUno = parseInt (numeroUno);

	var numeroDos;
	numeroDos = txtIdNumeroDivisor.value;
	numeroDos = parseInt (numeroDos);

	var resultado;
	resultado = numeroUno % numeroDos;

	alert ("El resto es " + resultado);
}

/*
Enunciado:
Debemos lograr tomar Los numeros por ID.value , transformarlos a enteros "parseInt()",realizar la operación correcta y mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."
*/