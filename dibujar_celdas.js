function dibujarCelda (x, y, tam, fondo, figura, circulo) {

  noStroke();
  fill(fondo);
  rect(x, y, tam, tam); // CELDA

  // Tamaños máximos y mínimos FIGURAS
  let diametroMin = 3;
  let diametroMax = 30.3;
  let ladoMin = 1.5;
  let ladoMax = 28.3;

  //CENTRO FIGURA
  let centroX = 400 + anchoX + x + tam / 2;
  let centroY = anchoY + y + tam / 2;

  //SUPERFICIE IMAGEN
  let d1 = dist(centroX, centroY, 410, 8);
  let d2 = dist(centroX, centroY, 790, 8);
  let d3 = dist(centroX, centroY, 410, 392);
  let d4 = dist(centroX, centroY, 790, 392);

  // Distancia máxima real posible desde el punto (centroX, centroY) al área de la imagen
  let dMax = max(max(d1, d2), max(d3, d4));

  // Distancia real del mouse al centro de la figura
  let distancia;

  // Si el mouse está dentro del área interactiva
  if (mouseX >= 410 && mouseX <= 790 && mouseY >= 8 && mouseY <= 392) {
    distancia = dist(mouseX, mouseY, centroX, centroY);
  } else {
    distancia = dMax; // Si está fuera, el tamaño es máximo (sin interacción)
  }

  // INTERPOLAR TAMAÑOS
  let proporcion = distancia / dMax;
  // RANGO 0-1
  if (proporcion < 0) proporcion = 0;
  if (proporcion > 1) proporcion = 1;

  fill(figura);
  if (circulo) {
    let diametroCirculo = diametroMin + (diametroMax - diametroMin) * proporcion;
    ellipse(x + tam / 2, y + tam / 2, diametroCirculo, diametroCirculo);
  } else {
    let ladoCuadrado = ladoMin + (ladoMax - ladoMin) * proporcion;
    let centrarCuadrado = (tam - ladoCuadrado) / 2; // Forma de centrar el cuadrado dentro de la celda, sin importar su tamaño.
    rect(x + centrarCuadrado, y + centrarCuadrado, ladoCuadrado, ladoCuadrado);
  }
}
