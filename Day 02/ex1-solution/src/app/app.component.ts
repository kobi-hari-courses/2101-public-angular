import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly question = 'How much is 6 * 7';
  readonly answers = ['36', '42', '49', '56'];
  readonly correctAnswer = '42';

  selectedAnswer: string | null = null;
  isCorrect: boolean | null = null;
  wasAnswered: boolean = false;

  selectAnswer(value: string) {
    if (this.wasAnswered) return;

    this.selectedAnswer = value;
    this.isCorrect = (value === this.correctAnswer);
    this.wasAnswered = true;
  }

}
