class Instrucciones {

  constructor() {
    this.botonX = 220;
    this.botonY = 360;
    this.botonAncho = 200;
    this.botonAlto = 50;
  }

  dibujar() {
    fill(0);
    textSize(28);
    textAlign(CENTER, CENTER);
    text("Instrucciones", width / 2, 80);

    textSize(20);
    text("Esquivar las manzanas con ← →\n" +
         "Esquivar todas las manzanas para ganar\n" +
         "Si te toca una manzana perdés",
         width / 2, 300);

    // Botón empezar
    fill(255);
    rect(this.botonX, this.botonY, this.botonAncho, this.botonAlto, 10);

    fill(0);
    textSize(22);
    text("Comenzar", this.botonX + this.botonAncho / 2, this.botonY + this.botonAlto / 2);
  }

  click(mx, my) {
    if (mx > this.botonX && mx < this.botonX + this.botonAncho && my > this.botonY && my < this.botonY + this.botonAlto) {
      objJuego.iniciarPartida();
    }
  }
}
