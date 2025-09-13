// Límites de distancia para el área de interacción
let distanciaMax = dist(410, 8, 790, 392); // desde una esquina a la otra
 
function keyPressed () {
  // BLANCO Y NEGRO (1)
  if (key == '0') {
    colores0 ();
  } else if (key === '1') {
    colores1 ();
  } else if (key === '2') {
    colores2 ();
  } else if (key === '3') {
    colores3 ();
  }
}
function mousePressed () {
  reiniciarValores ();
}
