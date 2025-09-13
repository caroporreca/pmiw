function dibujarCuadrilla() {
  for (i = 0; i < cantidad; i++) { // cantidad de COLUMNAS (sobre la horizontal)
    for (j = 0; j < cantidad; j++) { // cantidad de FILAS (sobre la vertical)
      let x =  i * tam; // X de celda
      let y =  j * tam; // Y de celda

      // 1 FILA (j = 0)
      if (i == 0 && j == 0) {
        fondo = rojo; 
        figura = azul;
        esCirculo = true;
      }
      if (i == 1 && j == 0) {
        fondo = negro; 
        figura = violeta; 
        esCirculo = true;
      }
      if (i == 2 && j == 0) {
        fondo = azulClaro;
        figura = rojo; 
        esCirculo = true;
      }
      if (i == 3 && j == 0) {
        fondo = violetaAzul; 
        figura = verde; 
        esCirculo = true;
      }
      if (i == 4 && j == 0) {
        fondo = verde; 
        figura = azul; 
        esCirculo = true;
      }
      if (i == 5 && j == 0) {
        fondo = rojo; 
        figura = azulClaro; 
        esCirculo = true;
      }
      if (i == 6 && j == 0) {
        fondo = azulClaro; 
        figura = verde; 
        esCirculo = true;
      }
      if (i == 7 && j == 0) {
        fondo = rojo; 
        figura = celeste; 
        esCirculo = true;
      }
      if (i == 8 && j == 0) {
        fondo = verdeClaro; 
        figura = celeste; 
        esCirculo = true;
      }
      if (i == 9 && j == 0) {
        fondo = rosa; 
        figura = amarillo; 
        esCirculo = true;
      }

      // FILA 2 j = 1
      if (i == 0 && j == 1) {
        fondo = negro; 
        figura = bordo; 
        esCirculo = true;
      }
      if (i == 1 && j == 1) {
        fondo = verde; 
        figura = negro; 
        esCirculo = true;
      }
      if (i == 2 && j == 1) {
        fondo = violetaAzul; 
        figura = azul; 
        esCirculo = true;
      }
      if (i == 3 && j == 1) {
        fondo = rojo; 
        figura = azulClaro;
        esCirculo = true;
      }
      if (i == 4 && j == 1) {
        fondo = azul; 
        figura = rojo;
        esCirculo = true;
      }
      if (i == 5 && j == 1) {
        fondo = verde; 
        figura = rosa; 
        esCirculo = true;
      }
      if (i == 6 && j == 1) {
        fondo = rosa; 
        figura = rojo;
        esCirculo = true;
      }
      if (i == 7 && j == 1) {
        fondo = verde; 
        figura = naranja; 
        esCirculo = true;
      }
      if (i == 8 && j == 1) {
        fondo = celeste;
        figura = rojo;
        esCirculo = true;
      }
      if (i == 9 && j == 1) {
        fondo = naranja;
        figura = rosa;
        esCirculo = true;
      }

      // FILA 3 j = 2
      if ( i == 0 && j == 2) {
        fondo = azul;
        figura = verde;
        esCirculo = true;
      }
      if ( i == 1 && j == 2) {
        fondo = bordo;
        figura = azul;
        esCirculo = true;
      }
      if ( i == 2 && j == 2) {
        fondo = celeste;
        figura = amarillo;
        esCirculo = false;
      }
      if ( i == 3 && j == 2) {
        fondo = naranja;
        figura = celeste;
        esCirculo = false;
      }
      if ( i == 4 && j == 2) {
        fondo = verde;
        figura = rojo;
        esCirculo = false;
      }
      if ( i == 5 && j == 2) {
        fondo = azul;
        figura = verde;
        esCirculo = false;
      }
      if ( i == 6 && j == 2) {
        fondo = violeta;
        figura = azul;
        esCirculo = false;
      }
      if ( i == 7 && j == 2) {
        fondo = negro;
        figura = verde;
        esCirculo = false;
      }
      if ( i == 8 && j == 2) {
        fondo = amarillo;
        figura = celeste;
        esCirculo = true;
      }
      if ( i == 9 && j == 2) {
        fondo = verdeClaro;
        figura = rojo;
        esCirculo = true;
      }
      // FILA 4
      if ( i == 0 && j == 3) {
        fondo = bordo;
        figura = violetaAzul;
        esCirculo = true;
      }
      if ( i == 1 && j == 3) {
        fondo = violetaAzul;
        figura = verde;
        esCirculo = true;
      }
      if ( i == 2 && j == 3) {
        fondo = amarillo;
        figura = naranja;
        esCirculo = false;
      }
      if ( i == 3 && j == 3) {
        fondo = azulClaro;
        figura = verde;
        esCirculo = false;
      }
      if ( i == 4 && j == 3) {
        fondo = rojo;
        figura = azulClaro;
        esCirculo = false;
      }
      if ( i == 5 && j == 3) {
        fondo = verde;
        figura = rosa;
        esCirculo = false;
      }
      if ( i == 6 && j == 3) {
        fondo = bordo;
        figura = negro;
        esCirculo = false;
      }
      if ( i == 7 && j == 3) {
        fondo = violeta;
        figura = bordo;
        esCirculo = false;
      }
      if ( i == 8 && j == 3) {
        fondo = celeste;
        figura = naranja;
        esCirculo = true;
      }
      if ( i == 9 && j == 3) {
        fondo = rojo;
        figura = verdeClaro;
        esCirculo = true;
      }

      // FILA 5 j = 4
      if ( i == 0 && j == 4) {
        fondo = verde;
        figura = negro;
        esCirculo = true;
      }
      if ( i == 1 && j == 4) {
        fondo = azulClaro;
        figura = bordo;
        esCirculo = true;
      }
      if ( i == 2 && j == 4) {
        fondo = verde;
        figura = azulClaro;
        esCirculo = false;
      }
      if ( i == 3 && j == 4) {
        fondo = amarilloNaranja;
        figura = rojo;
        esCirculo = false;
      }
      if ( i == 4 && j == 4) {
        fondo = verde;
        figura = rosa;
        esCirculo = false;
      }
      if ( i == 5 && j == 4) {
        fondo = azul;
        figura = azulClaro;
        esCirculo = false;
      }
      if ( i == 6 && j == 4) {
        fondo = violetaAzul;
        figura = verde;
        esCirculo = false;
      }
      if ( i == 7 && j == 4) {
        fondo = azulClaro;
        figura = negro;
        esCirculo = false;
      }
      if ( i == 8 && j == 4) {
        fondo = naranja;
        figura = amarillo;
        esCirculo = true;
      }
      if ( i == 9 && j == 4) {
        fondo = celeste;
        figura = rojo;
        esCirculo = true;
      }

      // FILA 6 j = 5
      if ( i == 0 && j == 5) {
        fondo = rojo;
        figura = violetaAzul;
        esCirculo = false;
      }
      if ( i == 1 && j == 5) {
        fondo = violetaAzul;
        figura = verde;
        esCirculo = false;
      }
      if ( i == 2 && j == 5) {
        fondo = amarillo;
        figura = celeste;
        esCirculo = true;
      }
      if ( i == 3 && j == 5) {
        fondo = naranja;
        figura = amarilloNaranja;
        esCirculo = true;
      }
      if ( i == 4 && j == 5) {
        fondo = azulClaro;
        figura = rojo;
        esCirculo = true;
      }
      if ( i == 5 && j == 5) {
        fondo = rojo;
        figura = rosa;
        esCirculo = true;
      }
      if ( i == 6 && j == 5) {
        fondo = azulClaro;
        figura = rojo;
        esCirculo = true;
      }
      if ( i == 7 && j == 5) {
        fondo = negro;
        figura = rojo;
        esCirculo = true;
      }
      if ( i == 8 && j == 5) {
        fondo = verdeClaro;
        figura = amarillo;
        esCirculo = false;
      }
      if ( i == 9 && j == 5) {
        fondo = rojo;
        figura = celeste;
        esCirculo = false;
      }

      // FILA 7 j = 6
      if ( i == 0 && j == 6) {
        fondo = negro;
        figura = violeta;
        esCirculo = false;
      }
      if ( i == 1 && j == 6) {
        fondo = bordo;
        figura = celeste;
        esCirculo = false;
      }
      if ( i == 2 && j == 6) {
        fondo = verdeClaro;
        figura = amarilloNaranja;
        esCirculo = true;
      }
      if ( i == 3 && j == 6) {
        fondo = celeste;
        figura = verdeClaro;
        esCirculo = true;
      }
      if ( i == 4 && j == 6) {
        fondo = rojo;
        figura = azul;
        esCirculo = true;
      }
      if ( i == 5 && j == 6) {
        fondo = verde;
        figura = rojo;
        esCirculo = true;
      }
      if ( i == 6 && j == 6) {
        fondo = bordo;
        figura = azul;
        esCirculo = true;
      }
      if ( i == 7 && j == 6) {
        fondo = violeta;
        figura = negro;
        esCirculo = true;
      }
      if ( i == 8 && j == 6) {
        fondo = naranja;
        figura = azulClaro;
        esCirculo = false;
      }
      if ( i == 9 && j == 6) {
        fondo = verdeClaro;
        figura = rojo;
        esCirculo = false;
      }

      // FILA 8 j = 7
      if ( i == 0 && j == 7) {
        fondo = violeta;
        figura = violetaAzul;
        esCirculo = false;
      }
      if ( i == 1 && j == 7) {
        fondo = violetaAzul;
        figura = negro;
        esCirculo = false;
      }
      if ( i == 2 && j == 7) {
        fondo = amarillo;
        figura = naranja;
        esCirculo = true;
      }
      if ( i == 3 && j == 7) {
        fondo = naranja;
        figura = celeste;
        esCirculo = true;
      }
      if ( i == 4 && j == 7) {
        fondo = verde;
        figura = rosa;
        esCirculo = true;
      }
      if ( i == 5 && j == 7) {
        fondo = azul;
        figura = verde;
        esCirculo = true;
      }
      if ( i == 6 && j == 7) {
        fondo = violeta;
        figura = negro;
        esCirculo = true;
      }
      if ( i == 7 && j == 7) {
        fondo = negro;
        figura = violetaAzul;
        esCirculo = true;
      }
      if ( i == 8 && j == 7) {
        fondo = amarilloNaranja;
        figura = amarillo;
        esCirculo = false;
      }
      if ( i == 9 && j == 7) {
        fondo = celeste;
        figura = naranja;
        esCirculo = false;
      }

      // FILA 9 j = 8
      if ( i == 0 && j == 8) {
        fondo = azulClaro;
        figura = negro;
        esCirculo = false;
      }
      if ( i == 1 && j == 8) {
        fondo = verde;
        figura = violetaAzul;
        esCirculo = false;
      }
      if ( i == 2 && j == 8) {
        fondo = bordo;
        figura = rojo;
        esCirculo = false;
      }
      if ( i == 3 && j == 8) {
        fondo = verde;
        figura = violetaAzul;
        esCirculo = false;
      }
      if ( i == 4 && j == 8) {
        fondo = azul;
        figura = bordo;
        esCirculo = false;
      }
      if ( i == 5 && j == 8) {
        fondo = verde;
        figura = azulClaro;
        esCirculo = false;
      }
      if ( i == 6 && j == 8) {
        fondo = rosa;
        figura = naranja;
        esCirculo = false;
      }
      if ( i == 7 && j == 8) {
        fondo = celeste;
        figura = rojo;
        esCirculo = false;
      }
      if ( i == 8 && j == 8) {
        fondo = rojo;
        figura = verde;
        esCirculo = false;
      }
      if ( i == 9 && j == 8) {
        fondo = amarillo;
        figura = rosa;
        esCirculo = false;
      }

      // FILA 10 j = 9
      if ( i == 0 && j == 9) {
        fondo = violetaAzul;
        figura = rojo;
        esCirculo = false;
      }
      if ( i == 1 && j == 9) {
        fondo = negro;
        figura = violeta;
        esCirculo = false;
      }
      if ( i == 2 && j == 9) {
        fondo = azul;
        figura = verde;
        esCirculo = false;
      }
      if ( i == 3 && j == 9) {
        fondo = violeta;
        figura = negro;
        esCirculo = false;
      }
      if ( i == 4 && j == 9) {
        fondo = rojo;
        figura = azul;
        esCirculo = false;
      }
      if ( i == 5 && j == 9) {
        fondo = azulClaro;
        figura = rosa;
        esCirculo = false;
      }
      if ( i == 6 && j == 9) {
        fondo = rojo;
        figura = verde;
        esCirculo = false;
      }
      if ( i == 7 && j == 9) {
        fondo = verde;
        figura = celeste;
        esCirculo = false;
      }
      if ( i == 8 && j == 9) {
        fondo = rosa;
        figura = naranja;
        esCirculo = false;
      }
      if ( i == 9 && j == 9) {
        fondo = celeste;
        figura = verde;
        esCirculo = false;
      }
  
      dibujarCelda(x, y, tam, fondo, figura, esCirculo);
    }
  }
}
