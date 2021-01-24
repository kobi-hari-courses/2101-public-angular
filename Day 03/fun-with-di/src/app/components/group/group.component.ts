import { Component, OnInit } from '@angular/core';
import { AdditionService } from 'src/app/services/addition.service';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'], 
  providers: [AdditionService, HistoryService]
})
export class GroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
