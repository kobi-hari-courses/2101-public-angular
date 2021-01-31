import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(
    private auth: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  async login() {
    await this.auth.login();
  }

  async logout() {
    await this.auth.logout();
  }

}
