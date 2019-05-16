import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class NoteRapiditePayerService {

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  url = 'http://localhost:3000';


  getRapiditePayerMagasin(id1:number,id2:number) {
    
      return this.http.get('http://localhost:3000/noteRapiditePayer/'+id1+'/'+id2+'/');
  }

  getRapiditePayer(id:number) {
      return this.http.get('http://localhost:3000/noteRapiditePayer/'+id);
  }


  getRapiditePayerConcurrentSociete(idsociete:number) {
  
    return this.http.get('http://localhost:3000/noteRapiditePayerConcurrent/'+idsociete);
}


getRapiditePayerConcurrentMagasin(idpointevenete,concurrent) {
    return this.http.get('http://localhost:3000/noteRapiditePayerConcurrent/'+idpointevenete+'/'+concurrent+'/');
}
}