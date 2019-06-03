import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../auth/signup-info';
import { SocieteService } from '../societe/societe.service';
import { Societe } from '../societe/societe.interface';
import { SharedServiceService } from '../services-speciales/shared-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  societes : Societe[];
  id_societe: any;
   t:any="hhhhh"
   societe:any
 


  constructor(private authService: AuthService,private sharedservice:SharedServiceService ,private router: Router) { }

  ngOnInit() { 
   this.societe= this.sharedservice.getSociete()
   this.id_societe=this.sharedservice.getIdSociete()
   console.log(this.id_societe)


  }

  onSubmit() {
    

    this.signupInfo = new SignUpInfo(
      this.societe,
      this.form.username,
      this.form.email,
      this.form.password,
      this.id_societe
    );
    console.log( this.signupInfo)
  

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.router.navigateByUrl(`/admin/ajout-societe`);

        this.isSignUpFailed = false;
      },
      error => {
        console.log(error);
        this.errorMessage = error.error;
        this.isSignUpFailed = true;
      }
    );
  }
}
