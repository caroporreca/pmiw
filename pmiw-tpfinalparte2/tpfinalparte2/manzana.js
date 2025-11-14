class Manzana {
  constructor(posX, posY, imagen) {
    this.posX = posX;
    this.posY = posY;
    this.imagen = imagen;

    this.movX = random(-3, 3);
    this.velocidad = 3;
  }

  dibujar() {
    image(this.imagen, this.posX, this.posY, 60, 60);
  }

  mover() {
    this.posX += this.movX;
    this.posY += this.velocidad;

    if (this.posY > height) {
      this.reset();
    }
  }

  reset() { // vuelve a salir desde el enemigo
    this.posX = objJuego.enemigo.posX;  
    this.posY = objJuego.enemigo.posY;

    this.movX = random(-3, 3);
    objJuego.manzanaEsquivada();
  }
}
