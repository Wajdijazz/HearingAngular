


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


  getChoixProduitsMagasin(id1:number,id2:number) {
    
      return this.http.get('http://localhost:3000/noteChoixProduits/'+id1+'/'+id2+'/');
  }

  getChoixProduits(id:number) {
      return this.http.get('http://localhost:3000/noteChoixProduits/'+id);
  }


  getChoixProduitsConcurrentSociete(idsociete:number) {
  
    return this.http.get('http://localhost:3000/noteChoixProduitsConcurrent/'+idsociete);
}


getChoixProduitsConcurrentMagasin(idpointevenete,concurrent) {
    return this.http.get('http://localhost:3000/noteChoixProduitsConcurrent/'+idpointevenete+'/'+concurrent+'/');
}
}