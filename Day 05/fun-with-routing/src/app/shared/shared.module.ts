import { NgModule } from "@angular/core";
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [TitleComponent], 
  exports: [TitleComponent]
})
export class SharedModule {

}