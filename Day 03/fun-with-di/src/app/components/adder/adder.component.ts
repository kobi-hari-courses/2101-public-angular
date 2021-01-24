import { Component, OnInit } from '@angular/core';
import { AdditionService } from 'src/app/services/addition.service';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-adder',
  templateUrl: './adder.component.html',
  styleUrls: ['./adder.component.css'], 
  providers: []
})
export class AdderComponent implements OnInit {
  result: number | null = null;
  serviceId: number;

  constructor(
    private addition: AdditionService
  ) {
    this.serviceId = addition.id;

  }

  ngOnInit(): void {
  }

  calc(op1: string, op2: string) {
    let a = Number(op1);
    let b = Number(op2);

    this.result = this.addition.add(a, b);
  }

}
