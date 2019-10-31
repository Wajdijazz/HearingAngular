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
        },
        err => {
          console.log('Error occured:' , err);
        }
      );
  }

  
  getpointventbyid(id:number) {
    console.log("getpointvent");
    
      return this.http.get(`${this.url}/point-vente/${id}`);
  }

  DeletePointeVenteById(id:number,id_societe) {
    console.log("getpointvent");
    
      return this.http.delete(`${this.url}/point-vente/${id}/${id_societe}`);

  }
  DeletePointeVenteByIdSociete(id_societe) {
    console.log("getpointvent");
    
      return this.http.delete(`${this.url}/point-vente/${id_societe}`);

  }
  DeletePointeVenteByNom(pointvente) {
    console.log("getpointvent");
    
      return this.http.delete(`${this.url}/themes/${pointvente}`);

  }
  DeletePointeVenteConcurrentByNom(pointvente) {
    console.log("getpointvent");
    
      return this.http.delete(`${this.url}/concurrent/${pointvente}`);

  }
  
}