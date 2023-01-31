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

}
