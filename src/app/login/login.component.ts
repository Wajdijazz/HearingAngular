import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { AuthLoginInfo } from '../auth/login-info';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth/auth-guard.service';
import decode from 'jwt-decode';
import { SignUpInfo } from '../auth/signup-info';
import { UserService } from '../services/user.service';
import { LoginService } from './login.service';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: AuthLoginInfo;
  private authority: string;
  signupInfo:SignUpInfo[]
  userInfo: { id: any; id_societe: any; name: any; email: any; };
  

  constructor(private loginService : LoginService,private userService:UserService,private authser :AuthGuardService,private authService: AuthService, private tokenStorage: TokenStorageService, private router:Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
      console.log(this.tokenStorage.getToken())


    }
  }

  onSubmit() {

    this.loginInfo = new AuthLoginInfo(
      this.form.username,
      this.form.password);


    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);


        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
     
        if (this.tokenStorage.getToken()) {
          this.roles = this.tokenStorage.getAuthorities();
          this.roles.every(role => {
            if (role === 'ROLE_ADMIN') {
              this.authority = 'admin/dashboard';

              this.router.navigateByUrl('/admin/dashboard');
              return true
            } else{
            this.authority = 'user';
            this.router.navigateByUrl('/admin-layout/about-hearing');
          

            return true;
            }
          });
        }
   
      },
      error => {
      
        this.errorMessage = error.error.reason;
        this.isLoginFailed = true;
        Swal.fire("Erreur", "Utilisateur ou mot de passe incorrect", "error");

      }
    );


		  
  }

  reloadPage() {
    window.location.reload();
  }
}
