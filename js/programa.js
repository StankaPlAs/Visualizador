var imagenes = [ "00.jpg", "01.jpg",
				"02.jpg", "03.jpg", "04.jpg",
				"05.jpg", "06.jpg", "07.jpg",
				"08.jpg", "09.jpg" ];
var cont=0;
var temp;
window.onload = start;
function start() {
 	document.getElementById("imagen").src = "img/" + imagenes[0];

	document.getElementById('primera').onclick = rebobinar;
	document.getElementById('atras').onclick = volver;
    document.getElementById('adelante').onclick = avanzar;
	document.getElementById('ultima').onclick = final;

	document.getElementById('play').onclick = play;
	document.getElementById('stop').onclick = stop;

}

function rebobinar() {
	cont = 0;
	document.getElementById("imagen").src = "img/" + imagenes[cont];
		console.log(cont);
}
function volver() {
	if (cont == 0 ) {
		document.getElementById("imagen").src = "img/" + imagenes[cont];
		alert('Has llegado al principio');

	} else {
	document.getElementById("imagen").src = "img/" + imagenes[--cont];
	}
	console.log(cont + "funcion volver");
}
function avanzar() {
	if (cont == 9 ){
		document.getElementById("imagen").src = "img/" + imagenes[cont];
		alert('Has llegado al final');
	} else {
	document.getElementById("imagen").src = "img/" + imagenes[++cont];
	}
	console.log(cont + "funcion avanzar");
}
function final() {
	cont = 9;
	document.getElementById("imagen").src = "img/" + imagenes[cont];
		console.log(cont);
}

function play() {
    console.log(cont + " has entrado en play");
	if(cont == 10){
		cont=0;
		play();
	} else {
    document.getElementById("imagen").src = "img/" + imagenes[cont++];
	temp = setTimeout(play, 1000);
	}
}

function stop() {
	console.log('parada');
	clearTimeout(temp);
}
