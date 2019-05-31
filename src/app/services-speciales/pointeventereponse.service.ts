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


  getReponseMagasin(id2,pointevente) {
    
    return this.http.get('http://localhost:3000/themepointevente/'+id2+'/'+pointevente+'/');
  }

  getReponseEnseigne(id:number) {
    console.log("getNps");
    
      return this.http.get('http://localhost:3000/pointeVenteReponse/'+id);
  }
}