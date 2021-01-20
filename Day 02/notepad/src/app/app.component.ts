import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  readonly colors = ['red', 'green', 'blue', 'black', 'brown', 'magenta', 'cyan'];
  readonly fonts = ['Arial', 'David', 'Tahoma', 'Segoe UI', 'Times new Roman', 'Consolas', 'Verdana'];
  readonly sizes = ['12px', '16px', '20px', '28px', '42px', '72px'];

  selectedColor = this.colors[0];
  selectedFont = this.fonts[0];
  selectedSize = this.sizes[0];

  selectColor(value: string) {
    this.selectedColor = value;
  }

  selectFont(value: string) {
    this.selectedFont = value;
  }

  selectSize(value: string) {
    this.selectedSize = value;
  }


  /*
  Types of Binding in Angular

  Input Binding (Vm ----> View)
  -----------------------------
  1. Attribute Directive Binding: [mashu]
  2. Structural Directive Binding: *ngMashu=""
  3. Content Binding: {{mashu}}

  ======================================


  Out Binding (View ----> Vm)
  --------------------------
  4. Event Binding: (mashu)

  */
}
