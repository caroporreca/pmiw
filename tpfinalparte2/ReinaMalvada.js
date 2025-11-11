class ReinaMalvada {
  constructor(cantidadManzanas) {
    this.cantidadManzanas = 20;
    this.posX = 200;
    this.posY = 50;
    this.colorenemigo = color(0, 0, 255);
    this.manzanas = [];
    for (let i = 0; i < this.cantidadManzanas; i++) {
      this.manzanas[i] = new Manzana(i*20, 100);
    }
  }

  dibujar() {
    fill(this.colorenemigo);
    rect(this.posX, this.posY, 50, 50);

    for (let i = 0; i < this.cantidadManzanas; i++) {
      this.manzanas[i].dibujar();
    }
  }
}
