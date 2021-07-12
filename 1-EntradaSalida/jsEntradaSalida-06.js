// CLASE 2 - MARTES 06/07/21

/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

function sumar ()
{
	// variables de entrada, guardan temporalmente en la ram los datos que ingrese el usuario
	var numeroUno; // variable que se identifique con el id
	numeroUno = txtIdNumeroUno.value; // guardar previamente todos los ids en un comentario
	numeroUno = parseInt (numeroUno); // lo convertí a un valor numérico, proceso que se llama "parseo"

//toda variable, si no le asignamos un valor, toma un valor por defecto que es "undefined"

	var numeroDos;
	numeroDos = txtIdNumeroDos.value; // si le asigno dos valores, el último es el que queda guardado
	numeroDos = parseInt (numeroDos);

	var resultado;
	resultado = numeroUno + numeroDos; // los operadores aritméticos básicos son: + ; - ; * ; / ; %

	alert ("La suma es " + resultado);

}

/*
Enunciado:
Debemos lograr tomar Los numeros por ID.value , transformarlos a enteros "parseInt()" y Sumarlos.
mostrar el resulto por medio de "alert()"
ej.: "la suma es 750"
*/

/*
- Entradas (como ingreso la información):
  prompt
  id.value (se asocia a un componente dentro del html)

- Procesos (transformaciones que se hace con esas entradas)

- Salidas (como muestro estos datos/información al usuario):
  alert
  id.value o document.getElementById("id").value (se cambia el flujo)
  console.log (el usuario comun no lo ve)
  document.write
*/