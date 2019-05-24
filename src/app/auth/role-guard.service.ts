import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';
import decode from 'jwt-decode';
import { TokenStorageService } from './token-storage.service';
import { element } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
@Injectable()

export class RoleGuardService implements CanActivate {
  role:any
  constructor(private tokenStorage: TokenStorageService,public auth: AuthService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    const token = this.tokenStorage.getToken();
    // decode the token to get its payload
    const tokenPayload = this.tokenStorage.getAuthorities();
  
    tokenPayload.forEach(element=>{
      this.role=element

    })
    console.log(this.role)


    if (
      !this.auth.isAuthenticated() || 
      this.role !== expectedRole
    ) {
      this.router.navigateByUrl('');
      return false;
    }

    return true;
  }
}