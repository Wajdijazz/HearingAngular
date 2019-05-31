import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class NpsService {

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  url = 'http://localhost:3000';
  getNps(id2,pointevente) {
    
    return this.http.get('http://localhost:3000/themepointevente/'+id2+'/'+pointevente+'/');
  }

  getNpsSociete(id:number) {
    console.log("getNps");
    
      return this.http.get('http://localhost:3000/pointeVenteReponse/'+id);
  }
}