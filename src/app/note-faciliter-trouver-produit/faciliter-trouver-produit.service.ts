import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";




@Injectable({
  providedIn: 'root'
})
export class FaciliterTrouverProduitService {

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  url = 'http://localhost:3000';


  getFaciliteTrouverProduitMagasin(id1:number,id2:number) {
    
      return this.http.get('http://localhost:3000/noteFaciliteTrouverProduit/'+id1+'/'+id2+'/');
  }

  getFaciliteTrouverProduit(id:number) {
      return this.http.get('http://localhost:3000/noteFaciliteTrouverProduit/'+id);
  }


  getFaciliteTrouverProduitConcurrentSociete(idsociete:number) {
  
    return this.http.get('http://localhost:3000/noteFaciliteTrouverProduitConcurrent/'+idsociete);
}


getFaciliteTrouverProduitConcurrentMagasin(idpointevenete,concurrent) {
    return this.http.get('http://localhost:3000/noteFaciliteTrouverProduitConcurrent/'+idpointevenete+'/'+concurrent+'/');
}
}