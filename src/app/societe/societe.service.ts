import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Injectable()
export class SocieteService {
  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  url = 'http://localhost:3000';
  getSociete() {
    console.log("getSociete");
    return this
      .http
      .get(`${this.url}/societe`);
      }

getSocieteById(id :Number) {
    console.log("getSociete by id");
    return this
      .http
      .get(`${this.url}/societe/${id}`);
      }



  createSociete(data) {
    this.http.post(`${this.url}/societe`, data)
      .subscribe(
        res => {
          console.log(res);
          this.toastr.success('Votre societe a été créer avec succès.', 'Success');
          this.router.navigateByUrl('/societe');
        },
        err => {
          console.log('Error occured:' , err);
          this.toastr.error(err.message, 'Error occured');
        }
      );
  }


  DeleteSocieteById(id:number) {
    
      return this.http.delete(`${this.url}/societe/${id}`);

  }

  DeleteUserById(id:number) {
    
    return this.http.delete(`${this.url}/services/${id}`);

}

}