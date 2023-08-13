function calcularArea(base, altura)
{
	return base * altura;
}
	//Almacenamos el lugar en donde ser mostrara el mensaje y el valor obtenido de la funcion base+altura.
	var zonaResultado = document.querySelector('#resultado>pre'); 
	//Almacenamos/captamos la accion que se ejecuta con el boton calcular
	var botonCalcular = document.querySelector('#calcular');

	

	//Llamamos a la variable que toma la accion (boton calcular) para que llame a la ejecucion de que "si clickea" haga la funsion anonima event y ejecute las acciones de dentro.

	botonCalcular.addEventListener('click', function(event) //(2*)
	{	

		//Guardamos el valor ingresado de cada variable
		var base = document.querySelector('#base').value;
		var altura = document.querySelector('#altura').value;

		//Entonces aca decirmos, que zonaResultado sera igual al resultado de la funcion (arriba), osea base+altura.
		zonaResultado.innerHTML = calcularArea(base, altura);
	}); 

	


	//Esta funcion hace que cuando se pose el mouse sobre el boton, primero se corra un boton un margen de 20px y que cambie el texto del boton por la palabra click. INNERHTML significa meter algo HTML dentro de el al igualar=.
	botonCalcular.addEventListener('mouseover',function(event)
	{
		event.target.className+=' sobre'; //event.target singifica que se refiere al boton.
		event.target.innerHTML='Click';

		
	}); 
 

	//Como ya nos posamos y adquiere el boton el nombre Click, con esta funcion le decimos que sea reemplazado ese valor de clase "sobre" a una clase vacia (para que quite el margen) y luego tambien adquiera el nombre Calcular nuevamente.

	botonCalcular.addEventListener('mouseout',function(event)
	{
		event.target.className=event.target.className.replace('sobre', '');
		event.target.innerHTML='Calcular';

		
	}); 