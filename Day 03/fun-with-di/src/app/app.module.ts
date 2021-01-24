import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AdderComponent } from './components/adder/adder.component';
import { AdditionService } from './services/addition.service';
import { GroupComponent } from './components/group/group.component';
import { HistoryService } from './services/history.service';
import { WrongAdditionService } from './services/wrong-addition.service';

@NgModule({
  declarations: [
    AppComponent,
    AdderComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: AdditionService, useClass: WrongAdditionService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
