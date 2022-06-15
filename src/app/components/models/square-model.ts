import { PieceType } from "chess.js";

export class SquareModel {
    piece: PieceType | null = null;
    color: string | null = null;

    public SquareModel(piece: PieceType, color: string) {
        this.piece = piece;
        this.color = color;
    }
}