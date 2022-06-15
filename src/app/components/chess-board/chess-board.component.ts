import { Component, Input, OnInit } from '@angular/core';
import { Chess, PieceType, Square } from 'chess.js';
import { SquareModel } from '../models/square-model';

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.css']
})
export class ChessBoardComponent implements OnInit {
  @Input()
  board: Array<Array<{ type: PieceType; color: "w" | "b"; square: Square; } | null>> | undefined;
  @Input()
  whiteView: boolean = true;

  lineWhite = [0, 1, 2, 3, 4, 5, 6, 7];
  lineBlack = [7, 6, 5, 4, 3, 2, 1, 0];

  constructor() {
  }

  ngOnInit(): void {
  }
}
