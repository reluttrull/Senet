import { Component, input } from '@angular/core';
import { CurrentScorePipe } from '../../pipes/current-score-pipe';

@Component({
  selector: 'app-score',
  imports: [CurrentScorePipe],
  templateUrl: './score.html',
  styleUrl: './score.css'
})
export class Score {
  whitePawns = input.required<number[]>();
  blackPawns = input.required<number[]>();
}
