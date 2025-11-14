class Final {

  constructor(texto) {
    this.texto = texto;

    this.botonX = 240;
    this.botonY = 330;
    this.botonAncho = 160;
    this.botonAlto = 50;
  }

  dibujar() {

    fill(0, 0, 0, 150);
    rect(0, 0, width, height);

    fill(255);
    textAlign(CENTER, CENTER);

    textSize(36);
    text(this.texto, width / 2, 100);

    textSize(20);
    text("\nProgramación VideoJuego Web \nCarolina Porreca \nKai Tobias Aguado", width / 2, 240); //créditos

    // botón reiniciar
    fill(255);
    rect(this.botonX, this.botonY, this.botonAncho, this.botonAlto, 10);

    fill(0);
    textSize(22);
    text("Reiniciar", this.botonX + this.botonAncho / 2, this.botonY + this.botonAlto / 2);
  }

  click(mx, my) {
    if (mx > this.botonX && mx < this.botonX + this.botonAncho && my > this.botonY && my < this.botonY + this.botonAlto) {
      objJuego.estado = "jugando";       // volver a jugar
    }
  }
}
