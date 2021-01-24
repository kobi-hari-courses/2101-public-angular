import { Injectable } from '@angular/core';
import { Board } from '../models/board';
import { CellValue } from '../models/cell-value';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  nextItem: 'X' | 'O' = 'X';

  board: Board = {
    winner: null, 
    items: [
      [null, null, null, null, null], 
      [null, null, null, null, null], 
      [null, null, null, null, null], 
      [null, null, null, null, null], 
      [null, null, null, null, null], 
    ]
  };

  private isRowOf(rowIndex: number, value: CellValue): boolean {
    return this.board.items[rowIndex].every(item => item === value);
  }

  private isColumnOf(columnIndex: number, value: CellValue): boolean {
    return this.board.items
      .map(row => row[columnIndex])
      .every(item => item === value);
  }

  private isMainDiagonalOf(value: CellValue) {
    return this.board.items
      .map((row, index) => row[index])
      .every(item => item === value);
  }

  private isSubDiagonalOf(value: CellValue) {
    let totalLength = this.board.items.length - 1;

    return this.board.items
      .map((row, index) => row[totalLength - index])
      .every(item => item === value);
  }


  private whoIsTheWinder() : CellValue {
    for (let index = 0; index < this.board.items.length; index++) {
      if (this.isRowOf(index, 'X')) return 'X';
      if (this.isRowOf(index, 'O')) return 'O';  
      if (this.isColumnOf(index, 'X')) return 'X';
      if (this.isColumnOf(index, 'O')) return 'O';  
    }

    if (this.isMainDiagonalOf('X')) return 'X';
    if (this.isMainDiagonalOf('O')) return 'O';
    if (this.isSubDiagonalOf('X')) return 'X';
    if (this.isSubDiagonalOf('O')) return 'O';

    return null;
  }

  private getNextItem(): 'X' | 'O' {
    if (this.nextItem === 'X')  {
      this.nextItem = 'O';
      return 'X';
    } else {
      this.nextItem = 'X';
      return 'O'
    }
  }

  private delay(millis: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, millis));
  }

  async setItem(column: number, row: number): Promise<void> {
    this.board.items[row][column] = this.getNextItem();

    await this.delay(2000);

    this.board.winner = this.whoIsTheWinder();
  }


  constructor() { }
}
