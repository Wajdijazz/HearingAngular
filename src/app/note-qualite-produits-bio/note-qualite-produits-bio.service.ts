

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class NoteQualiteProduitsBioService {

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  url = 'http://localhost:3000';

  getQualiteProduitBioMagasin(id1:number,id2:number) {
    
    return this.http.get('http://localhost:3000/noteQualiteProduitBio/'+id1+'/'+id2+'/');
}

getQualiteProduitBiosociete(id:number) {
  
    return this.http.get('http://localhost:3000/noteQualiteProduitBio/'+id);
}


getQualiteProduitBioEnseigneConcurrent(idsociete:number) {

  return this.http.get('http://localhost:3000/noteQualiteProduitBioConcurrent/'+idsociete);
}


getQualiteProduitBioMagasinConcurrent(idpointevenete,concurrent) {
  return this.http.get('http://localhost:3000/noteQualiteProduitBioConcurrent/'+idpointevenete+'/'+concurrent+'/');
}
}