class Juego{
 constructor(){
  this.crearPersonaje();
  this.crearEnemigo();  
  }
  
 dibujar(){
   this.personaje.dibujar();
   this.enemigo.dibujar();
  }
  
 iniciar(){
  }
  
 crearEnemigo(){
   this.enemigo = new ReinaMalvada;
  }
  
 crearPersonaje(){
   this.personaje = new Blancanieves;
  }

 BlancanievesGano(){
  }
  
 BlancanievesPerdio(){
  }
  
}
