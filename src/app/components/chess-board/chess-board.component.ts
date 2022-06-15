import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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

  lines = [0, 1, 2, 3, 4, 5, 6, 7];

  constructor() {
  }

  ngOnInit(): void {
  }

  public getLines() {
    if(this.whiteView) {
      return [0, 1, 2, 3, 4, 5, 6, 7];
    } else {
      return [7, 6, 5, 4, 3, 2, 1, 0];
    }
  }
}
