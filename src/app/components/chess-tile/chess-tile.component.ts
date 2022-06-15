import { Component, Input, OnInit } from '@angular/core';
import { PieceType, Square } from 'chess.js';

@Component({
  selector: 'app-chess-tile',
  templateUrl: './chess-tile.component.html',
  styleUrls: ['./chess-tile.component.css']
})
export class ChessTileComponent implements OnInit {

  @Input()
  info?: { type: PieceType; color: "w" | "b"; square: Square; } | null;

  @Input()
  number: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public getImage() {
    if(this.info?.type) {
      return "assets/images/" + this.info?.type + "-" + this.info?.color + ".png";
    }
    return null;
  }
}
