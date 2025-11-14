let objJuego;
let imgPersonaje;
let imgEnemigo;
let imgManzana;

function preload() {
  imgPersonaje = loadImage("data/personaje.png");
  imgEnemigo = loadImage("data/enemigo.png");
  imgManzana = loadImage("data/manzana.png");
}

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego();
}

function draw() {
  background(200);
  objJuego.dibujar();
}

function keyPressed() {
  objJuego.teclaPresionada(keyCode);
}

function keyReleased() {
  objJuego.teclaSoltada(keyCode);
}

// clic del mouse para botones
function mousePressed() {
  objJuego.click(mouseX, mouseY);
}
