import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Injectable()
export class PointVenteService {
  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  url = 'http://localhost:3000';
  getPointVente() {
    console.log("getPointVente");
    return this
      .http
      .get(`${this.url}/point-vente`);
      }

  createPointVente(data) {
    this.http.post(`${this.url}/point-vente`, data)
      .subscribe(
        res => {
          console.log(res);
          this.toastr.success('Votre point de vente a été créer avec succès.', 'Success');
          this.router.navigateByUrl('/point-vente');
        },
        err => {
          console.log('Error occured:' , err);
          this.toastr.error(err.message, 'Error occured');
        }
      );
  }
}