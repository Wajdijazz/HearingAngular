import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class ServicequestionnairesService {

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  url = 'http://localhost:3000';
  getIdQuestionnaire() {
    console.log("getidQuestionnaire");
    
      return this
      .http
      .get(`${this.url}/services`);
  
  }
}