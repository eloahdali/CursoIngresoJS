/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto() // ninguna variable se puede llamar de la misma manera que la función
{
	var numeroUno;
	numeroUno = txtIdNumeroDividendo.value;
	numeroUno = parseInt (numeroUno);

	var numeroDos;
	numeroDos = txtIdNumeroDivisor.value;
	numeroDos = parseInt (numeroDos);

	var resultado; // no usar el nombre "SacarResto", por ejemplo
	resultado = numeroUno % numeroDos; // si me da 0 es par, si me da 1 es impar

	alert ("El resto es " + resultado);
}

// El resto en el ejemplo de la división de 7 / 2 es 1

/*
Enunciado:
Debemos lograr tomar Los numeros por ID.value , transformarlos a enteros 
"parseInt()",realizar la operación correcta y mostrar el resto entre 
el dividendo y el divisor.
ej.: "El resto es 0 ."
*/