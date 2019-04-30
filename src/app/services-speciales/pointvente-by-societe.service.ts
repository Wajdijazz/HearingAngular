import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PointventeBySocieteService {


  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { 
  }
  url = 'http://localhost:3000';


  getPointVenteBySociete(id:number) {
    console.log("getPointVentebySociete");
       
    return this.http.get(`${this.url}/services/${id}`);

}
}