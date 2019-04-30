import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PointVenteService {


  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  url = 'http://localhost:3000';
  getpointventbyid(id:number) {
    console.log("getpointvent");
    
      return this.http.get(`${this.url}/point-vente-id/${id}`);
  }
}
