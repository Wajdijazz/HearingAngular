import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class NavbarSearchService {

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }

  url = 'http://localhost:3000';

  stop() {
   
    
      return this.http.get('http://localhost:3000/search');
  }
  poststart(data) {
    this.http.post(`${this.url}/search`,data)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured:' , err);
        }
      );
  }
}
