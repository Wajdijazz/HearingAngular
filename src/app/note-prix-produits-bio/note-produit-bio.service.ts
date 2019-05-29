

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NoteProduitBioService {

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  url = 'http://localhost:3000';


  getPrixProduitBioMagasin(id2,pointevente) {
    
    return this.http.get('http://localhost:3000/themepointevente/'+id2+'/'+pointevente+'/');
  }

  getPrixProduitBiosociete(id:number) {
    
      return this.http.get('http://localhost:3000/notePrixProduitBio/'+id);
  }


  getPrixProduitBioEnseigneConcurrent(idsociete:number) {
  
    return this.http.get('http://localhost:3000/themeconcurrent/'+idsociete);}


getPrixProduitBioMagasinConcurrent(selectedpointvenete,concurrent) {
  return this.http.get('http://localhost:3000/themeconcurrent/'+selectedpointvenete+'/'+concurrent+'/');
}
}