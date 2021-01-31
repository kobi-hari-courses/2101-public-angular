import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sh-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input()
  caption: string = '';

  @Input()
  color: string = 'blue';


  constructor() { }

  ngOnInit(): void {
  }

}
