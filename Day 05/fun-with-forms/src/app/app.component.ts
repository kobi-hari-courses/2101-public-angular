import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MyValidators } from './validators/my-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(8)]), 
    email:new FormControl('', [Validators.email, Validators.maxLength(20)]), 
    age: new FormControl('40', [Validators.min(20), Validators.max(120)]), 
    description: new FormControl('', MyValidators.minWords(4)), 
    address: new FormGroup({
      city: new FormControl(''), 
      street: new FormControl('')
    })  
  });

  // firstLetterCapital(control: AbstractControl): null | ValidationErrors {
  //   let value = control.value;

  //   if (typeof(value) != 'string') return null;
  //   if (value.length < 1) return null;

  //   let firstChar = value[0];
  //   if (firstChar === firstChar.toUpperCase()) return null;

  //   return {'firstLetterCaptial': true};
  // }

  getControl(name: string): AbstractControl {
    return this.form.get(name);
  }


  ngOnInit(): void {

  }


}
