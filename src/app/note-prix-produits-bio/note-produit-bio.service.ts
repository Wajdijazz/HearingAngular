

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


  getPrixProduitBioMagasin(id1:number,id2:number) {
    
      return this.http.get('http://localhost:3000/notePrixProduitBio/'+id1+'/'+id2+'/');
  }

  getPrixProduitBiosociete(id:number) {
    
      return this.http.get('http://localhost:3000/notePrixProduitBio/'+id);
  }


  getPrixProduitBioEnseigneConcurrent(idsociete:number) {
  
    return this.http.get('http://localhost:3000/notePrixProduitBioConcurrent/'+idsociete);
}


getPrixProduitBioMagasinConcurrent(idpointevenete,concurrent) {
    return this.http.get('http://localhost:3000/notePrixProduitBioConcurrent/'+idpointevenete+'/'+concurrent+'/');
}
}