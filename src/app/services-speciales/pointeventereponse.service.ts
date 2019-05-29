import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class PointeventereponseService {

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { 
  }


  url = 'http://localhost:3000';


  getPointeventeName() {
  
       
    return this.http.get(`${this.url}/pointeVenteReponse`);

}
}