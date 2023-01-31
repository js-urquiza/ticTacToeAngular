import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  squares: any[] = []; // Representa los 9 movimientos en el tablero
  xIsNext: boolean = false; // Determina el jugar en turno
  winner!: string | null; //Indica si gano X o O;

  ngOnInit() {

    this.newGame(); //Método que configura los valrores iniciales al iniciar un juego nuevo

  }

  newGame() {
    this.squares = Array(9).fill(null); //Crea un array de 9 elementos y los llena con valores 'null'
    this.winner = null;
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O'; //Si xIsNext es verdadero, entonces el próximo es X, sino O
  }

  makeMove(idx: number) {  //Este método sirve como un manejador de eventos para cuando el usuario clickea en un botón para hacer algún movimiento
    if (!this.squares[idx]) { //Cuando suceda el evento, chequeamos el index en el array y, si se clickeó un cuadrado, no hacemos nada
      this.squares.splice(idx, 1, this.player); //Pero si está vacío o null, elimina ese valor y agrega con el valor del jugador de turno
      this.xIsNext = !this.xIsNext; //Asignamos el turno al jugador contrario
    }
  }

}
