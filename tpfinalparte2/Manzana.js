class Manzana {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.colormanzana = color(255, 0, 0);
  }

  dibujar() {
    fill(this.colormanzana);
    ellipse(this.posX, this.posY, 20, 20);
  }
}
