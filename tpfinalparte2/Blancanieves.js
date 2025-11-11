class Blancanieves {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.colorpersonaje = color(0, 255, 0);
    this.vida = 1;
  }

  dibujar() {
    fill(this.colorpersonaje);
    rect(this.posX, this.posY, 50, 50);
  }
 
 moverIzquierda(){
  }
 
 moverDerecha(){
  }
}
