import { Component, OnInit, ViewChild } from '@angular/core';
import { Chess } from 'chess.js';
import { ChessBoardComponent } from '../chess-board/chess-board.component';

@Component({
  selector: 'chess-game',
  templateUrl: './chess-game.component.html',
  styleUrls: ['./chess-game.component.css']
})
export class ChessGameComponent implements OnInit {
  chess = new Chess();
  isWhiteView: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public onClick() {
    this.isWhiteView = this.isWhiteView ? false : true;
  }
}
