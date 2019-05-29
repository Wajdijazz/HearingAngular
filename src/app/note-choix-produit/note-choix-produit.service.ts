


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class NoteChoixProduitService {

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  url = 'http://localhost:3000';


  getChoixProduitsMagasin(id2,pointevente) {
    console.log("get qualite produit ");
    
    return this.http.get('http://localhost:3000/themepointevente/'+id2+'/'+pointevente+'/');
  
  }

  getChoixProduits(id:number) {
      return this.http.get('http://localhost:3000/noteChoixProduits/'+id);
  }


  getChoixProduitsConcurrentSociete(idsociete:number) {
  
    return this.http.get('http://localhost:3000/themeconcurrent/'+idsociete);}


getChoixProduitsConcurrentMagasin(selectedpointvenete,concurrent) {
  console.log("get qualite produit Concurrent Magasin ");
  return this.http.get('http://localhost:3000/themeconcurrent/'+selectedpointvenete+'/'+concurrent+'/');
}
}