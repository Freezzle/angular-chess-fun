import { Component, OnInit } from '@angular/core';
import { Chess } from 'chess.js';

@Component({
  selector: 'app-chess-game',
  templateUrl: './chess-game.component.html',
  styleUrls: ['./chess-game.component.css']
})
export class ChessGameComponent implements OnInit {

  chess = new Chess();

  constructor() { }

  ngOnInit(): void {
  }
}
