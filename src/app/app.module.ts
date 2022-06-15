import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChessGameComponent } from './components/chess-game/chess-game.component';
import { ChessBoardComponent } from './components/chess-board/chess-board.component';
import { ChessTileComponent } from './components/chess-tile/chess-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    ChessGameComponent,
    ChessBoardComponent,
    ChessTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
