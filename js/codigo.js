var imagenes = [ "inicio-fin.png", "00.jpg", "01.jpg",
					"02.jpg", "03.jpg", "04.jpg",
                	  "05.jpg", "06.jpg", "07.jpg",
						"08.jpg", "09.jpg", "inicio-fin.png"];
var cont = 0;
//var idBucle;
//var tInicio;
window.onload = start;
function start() {
	document.getElementById("imagen").src = "img/" + imagenes[cont];

	document.getElementById('primera').onclick = rebobinar;
	document.getElementById('atras').onclick = volver;
    document.getElementById('adelante').onclick = avanzar;
	document.getElementById('ultima').onclick = final;
	//	tInicio = setTimeout(play, 1000);
	document.getElementById('play').onclick = play;
	//  document.getElementById('stop').onclick = stop;

}

function rebobinar() {
	cont = 1;
	document.getElementById("imagen").src = "img/" + imagenes[cont];
		console.log(cont);
}
function volver() {
	if (cont == 0 ) {
		document.getElementById("imagen").src = "img/" + imagenes[cont];
	} else {
	document.getElementById("imagen").src = "img/" + imagenes[--cont];
	}
	console.log(cont + "funcion volver");
}
function avanzar() {
	if (cont == 11 ){
		document.getElementById("imagen").src = "img/" + imagenes[cont];
	} else {
	document.getElementById("imagen").src = "img/" + imagenes[++cont];
	}
	console.log(cont + "funcion avanzar");
}
function final() {
	cont = 10;
	document.getElementById("imagen").src = "img/" + imagenes[cont];
		console.log(cont);
}

function play() {
    console.log(cont + " has entrado en play");
	for(i in imagenes){
        document.getElementById("imagen").src = "img/" + imagenes[i++];
	//idBucle = setInterval(avanzar, 1000);
	}
}

/*function stop() {
	console.log('parada');
	clearInterval(idBucle);
	clearTimeout(tInicio);
}*/










