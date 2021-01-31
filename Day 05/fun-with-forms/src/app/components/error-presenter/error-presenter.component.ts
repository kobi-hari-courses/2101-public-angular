import { Component, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-error-presenter',
  templateUrl: './error-presenter.component.html',
  styleUrls: ['./error-presenter.component.css']
})
export class ErrorPresenterComponent implements OnInit {
  @Input()
  errors: ValidationErrors | null = null;


  constructor() { }

  ngOnInit(): void {
  }

}
