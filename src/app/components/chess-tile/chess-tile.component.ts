import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PieceType, Square } from 'chess.js';

@Component({
  selector: 'chess-tile',
  templateUrl: './chess-tile.component.html',
  styleUrls: ['./chess-tile.component.css']
})
export class ChessTileComponent implements OnInit {

  @Input()
  info?: { type: PieceType; color: "w" | "b"; square: Square; } | null;

  @Input()
  number: number = 0;

  @Input()
  name: string = '';

  @Output()
  clickEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public getImage():string {
    if(this.info?.type) {
      return "assets/images/" + this.info?.type + "-" + this.info?.color + ".png";
    }
    return '';
  }

  public onClickTile() {
    this.clickEvent.emit(this.info?.square);
  }
}
