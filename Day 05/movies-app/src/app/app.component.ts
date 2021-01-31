import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './core/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn$: Observable<string>;

  constructor(private auth: AuthenticationService){}

  ngOnInit(): void {
    this.isLoggedIn$ = this.auth.getValue().pipe(
      map(value => value ? 'Logged In' : 'Logged Out')
    )
  }
}
