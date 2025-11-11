let objJuego;

function setup() {
  createCanvas(400, 400);
  objJuego = new Juego();
}

function draw() {
  background(220);
  objJuego.dibujar();
}

function keyPressed() {
 objJuego.teclaPresionada(key);
}
