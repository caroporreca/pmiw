class Juego {
  constructor() {
    this.crearPersonaje();
    this.crearEnemigo();
  }

  dibujar() {
    this.personaje.dibujar();
    this.enemigo.dibujar();
  }

  crearEnemigo() {
    this.enemigo = new ReinaMalvada();
  }

  crearPersonaje() {
    this.personaje = new Blancanieves(width/2, 300);
  }

  BlancanievesGana() {
  }

  BlancanievesPierde() {
  }

}
