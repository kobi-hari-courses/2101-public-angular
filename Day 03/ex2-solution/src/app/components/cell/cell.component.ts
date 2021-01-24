import { Component, Input, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {
  @Input()
  rowIndex: number;

  @Input()
  colIndex: number;

  constructor(public game: GameService) { }

  ngOnInit(): void {
  }

  async onUserClick() {
    await this.game.setItem(this.colIndex, this.rowIndex);
  }

}
