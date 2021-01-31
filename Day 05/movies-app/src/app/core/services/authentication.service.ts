import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isLoggedIn: boolean = false;
  private isLoggedIn$ = new BehaviorSubject<boolean>(this.isLoggedIn);

  constructor() { }

  getValue(): Observable<boolean> {
    return this.isLoggedIn$.asObservable();
  }

  async login(): Promise<void> {
    this.isLoggedIn = true;
    this.isLoggedIn$.next(this.isLoggedIn);
  }

  async logout(): Promise<void> {
    this.isLoggedIn = false;
    this.isLoggedIn$.next(this.isLoggedIn);
  }
}
