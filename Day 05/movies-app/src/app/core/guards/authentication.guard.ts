import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, first, take } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(
    private auth: AuthenticationService, 
    private router: Router){}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  Promise<boolean | UrlTree>  {

      console.log('authentication guard started');

      let isLoggedIn = await this.auth.getValue().pipe(
        first()
      ).toPromise();
      
      if (isLoggedIn) return true;

      let requestedUrl = state.url;

      this.auth.getValue().pipe(
        filter(status => status === true), 
        take(1)
      ).subscribe(_ => {
        this.router.navigateByUrl(requestedUrl);
        });
      
      return this.router.createUrlTree(['account']);

  }
  
}
