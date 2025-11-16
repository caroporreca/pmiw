// FUNCIÓN PARA CARGAR LAS IMÁGENES
function cargarImagen () {
for (let i=0; i<total; i++) {
    imagen [i] = loadImage('data/pantalla' + i + '.jpg');
  }
}


// FUNCIÓN PARA DIBUJAR LAS IMÁGENES
function dibujarImagen () {
 image(imagen[estado], width/2, height/2);
 cajaTexto (10, 400);
 dibujarBoton (600, 440);
 textAlign(CENTER);
 textSize (17);
 fill(255);
 text(textos[estado], 15, 405, 600, 80);
 }


// FUNCIÓN PARA DIBUJAR CAJA DE TEXTO
function cajaTexto(){
fill (0, 150);
rect (10, 400, 620, 70);
}


// FUNCIÓN PARA DIBUJAR BOTÓN "SIGUIENTE"
  function dibujarBoton() {
  stroke(5);
  if (modoDecision || modoFinal) {
    fill(150); // se muestra gris al estar desactivado
  } else {
    fill(100, 150, 255);
  }
  rect(570, 440, 60, 30);
  fill(255);
  noStroke();
  rect(590, 451, 15, 7);
  triangle(605, 447, 605, 462, 615, 455);
  stroke(5);
}

function dibujarCartelOpciones() {
  fill(100, 150, 255);
  rect (100, 440, 200, 30);
  rect (300, 440, 200, 30);
  
  // valor del índice en las diapositivas que no tienen desiciones
  let indice = -1;
  
  // para reconocer si la pantalla tiene desición
  for (let i = 0; i < pantallasConDecision.length; i++) {
    if (estado == pantallasConDecision[i]) {
      indice = i; // variable que se usa para relacionar la pantalla con desición con sus opciones correspondientes
    }
  }
  
  // si se encuentra coincidencia se muestran las opciones
  if (indice != -1) {
    let opciones = opcionesPantallas[indice];
    textSize(18);
    fill(255);
    textAlign(CENTER);
    text(opciones[0], 200, 460);
    text(opciones[1], 400, 460);
  }
}
