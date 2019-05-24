import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class QualiteProduitService {


  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  url = 'http://localhost:3000';


  getQualiteproduitMagasin(id1:number,id2:number) {
    console.log("get qualite produit ");
    
      return this.http.get('http://localhost:3000/noteQualiteProduit/'+id1+'/'+id2+'/');
  }

  getQualiteproduitSociete(id:number) {
    console.log("get qualite produit societe")
      return this.http.get('http://localhost:3000/noteQualiteProduit/'+id);
  }


  getQualiteproduitSocieteConcurrent(idsociete:number) {
  console.log("get qualité produit concurrent");
  
    return this.http.get('http://localhost:3000/noteQualiteProduitConcurrent/'+idsociete);
}


getqualiteproduitMagasinConcurrent(idpointevenete,concurrent) {
  console.log("get qualite produit Concurrent Magasin ");
    return this.http.get('http://localhost:3000/noteQualiteProduitConcurrent/'+idpointevenete+'/'+concurrent+'/');
}
}