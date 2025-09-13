// enlace youtube: https://youtu.be/mYPxNrOAxJw

// CAROLINA PORRECA - COMISIÓN 4

let miImagen;

function setup() {
createCanvas(800, 400);
anchoX = 10; anchoY = 8; //margen blanco
cantidad = 10; //CELDAS
tam = 38.4; //TAMAÑO DE CADA CELDA
esCirculo = true; //figura celdas

//colores celdas
fondo = color(255);
figura = color(0);
rojo = color (255, 43, 8);
azul = color (9, 95, 255);
azulClaro = color (10, 136, 217);
violetaAzul = color (62, 81, 242);
naranja = color (254, 122, 3);
rosa = color (243, 123, 245);
verde = color (0, 165, 77);
amarillo = color (253, 223, 0);
celeste = color (148, 251, 254);
negro = color (0);
violeta = color (75, 41, 141);
verdeClaro = color (26, 243, 70);
bordo = color (161, 29, 60);
amarilloNaranja = color (254, 202, 4);
}

function preload (){
  miImagen = loadImage("data/opp.jpg");
}

function draw() {
background(0);
  image(miImagen, 0, 0, 400, 400);
  marcoBlanco();

  push();
  translate(400 + anchoX, anchoY);
  dibujarCuadrilla();
  pop();
}
