

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ReponseService {

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  url = 'http://localhost:3000';
  getreponses(id1:number,id2:number) {
    console.log("getreponses");
    
      return this.http.get('http://localhost:3000/services/'+id1+'/'+id2+'/');
  }
}
