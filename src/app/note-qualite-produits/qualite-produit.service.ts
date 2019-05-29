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



  getQualiteproduitSociete(id:number) {
    console.log("get qualite produit societe")
      return this.http.get('http://localhost:3000/noteQualiteProduit/'+id);
  }

  getQualiteproduitMagasin(id2,pointevente) {
    console.log("get qualite produit ");
    
    return this.http.get('http://localhost:3000/themepointevente/'+id2+'/'+pointevente+'/');
  }

  getQualiteproduitSocieteConcurrent(idsociete:number) {
  console.log("get qualité produit concurrent");
  
  return this.http.get('http://localhost:3000/themeconcurrent/'+idsociete);
}


getqualiteproduitMagasinConcurrent(selectedpointvenete,concurrent) {
  console.log("get qualite produit Concurrent Magasin ");
  return this.http.get('http://localhost:3000/themeconcurrent/'+selectedpointvenete+'/'+concurrent+'/');
}
}