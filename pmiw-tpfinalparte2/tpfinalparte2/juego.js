class Juego {
  constructor() {
    this.estado = "instrucciones";  // estados: instrucciones, jugando, final

    // crear objetos de pantallas
    this.pantallaInstrucciones = new Instrucciones();
    this.pantallaFinal = null; // se crea al ganar o perder ???????????
  }

  iniciarPartida() {
    this.crearPersonaje();
    this.crearEnemigo();

    this.manzanasEsquivadas = 0;

    this.estado = "jugando";
  }

  crearEnemigo() {
    this.enemigo = new Enemigo(width / 2, 20, imgEnemigo);
  }

  crearPersonaje() {
    this.personaje = new Personaje(width / 2, 380, imgPersonaje);
  }

  dibujar() {

    if (this.estado === "instrucciones") {
      this.pantallaInstrucciones.dibujar();
    } else if (this.estado === "jugando") {
      this.personaje.mover();
      this.personaje.dibujar();
      this.enemigo.dibujar();
      this.controlarColisiones();
    } else if (this.estado === "final") {
      this.pantallaFinal.dibujar();
    }
  }

  manzanaEsquivada() {
    if (this.estado !== "jugando") return; // si el estado no es jugando, la función de esquivar manzanas no existe 

    this.manzanasEsquivadas++;

    if (this.manzanasEsquivadas >= 40) {
      this.estado = "final";
      this.pantallaFinal = new Final("¡Ganaste!");
    }
  }

  controlarColisiones() {
    for (let i = 0; i < this.enemigo.manzanas.length; i++) {
      let m = this.enemigo.manzanas[i];
      let distancia = dist(m.posX, m.posY, this.personaje.posX, this.personaje.posY);

      if (distancia < 40) {
        this.estado = "final";
        this.pantallaFinal = new Final("¡Perdiste!");
      }
    }
  }

  // botones
  click(mx, my) {
    if (this.estado === "instrucciones") {
      this.pantallaInstrucciones.click(mx, my);
    } else if (this.estado === "final") {
      this.pantallaFinal.click(mx, my);
    }
  }

  // teclas del personaje
  teclaPresionada(keyCode) {
    if (this.estado !== "jugando") return;

    if (keyCode === LEFT_ARROW) this.personaje.moverIzquierda = true;
    if (keyCode === RIGHT_ARROW) this.personaje.moverDerecha = true;
  }

  teclaSoltada(keyCode) {
    if (keyCode === LEFT_ARROW) this.personaje.moverIzquierda = false;
    if (keyCode === RIGHT_ARROW) this.personaje.moverDerecha = false;
  }
}
