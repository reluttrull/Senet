import { Component, input } from '@angular/core';


@Component({
  selector: 'app-board',
  standalone: true,
  imports: [],
  templateUrl: './board.html',
  styleUrls: ['./board.css']
})
export class Board {
  sticksValue = input();
  whitePawns = input.required<number[]>();
  blackPawns = input.required<number[]>();

  movePawn(indexToMove:number) {
    console.log(`ready to move pawn at index ${indexToMove} by ${this.sticksValue()} spaces.`);
  }
}
