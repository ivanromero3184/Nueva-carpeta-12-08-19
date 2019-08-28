/*setear la fecha para la cuenta regresiva*/

var fechaCuentaRegresiva = new Date("aug 1, 2019 00:00:00").getTime();
/*actualizar la cuenta  cada segundo*/

var x = setInterval(function()
{
	/*capturar la fecha y hora de hoy*/

	var ahora = new Date() getTime();

	/*encontrar la distancia entre ahora y la fecha limite de nuestra cuenta regresiva*/

	var distancia = fechaCuentaRegresiva-ahora;

	/*calculo de tiempo para dias,horas,minutos y segundos*/

	var Dias = Match.floor(distancia/(1000*60*60*24));

	var horas = Match.floor((distancia % (1000*60*60*24))/(1000*60*60));

	var	minutos = ((distancia % (1000*60*60)))/(1000*60);

	var segundos = Match.floor((distancia %(1000*60)/(1000));

	/*mostrar el resultado en un elemento con la id "demo"*/

	document.getElementById("demo").InnerHTML= dias + "d" + "horas" + "h" + "minutos" + "m" + "segundos" + "s";

	/*si la cuenta regresiva termino, escribimos algun texto*/

	{
		clearInterval(x);

		document.getElementById("demo").InnerHTML = "expirado";
	}
}, 1000);

