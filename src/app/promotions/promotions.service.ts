import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class PromotionsService {

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  url = 'http://localhost:3000';


  

  getpromotionsEnseigne(id:number) {
    console.log("get promotions enseigne");
    
      return this.http.get('http://localhost:3000/promotions/'+id);
  }

  getPromotionsMagasin(id1:number,id2:number) {
    console.log("get Image prix");
    
      return this.http.get('http://localhost:3000/promotions/'+id1+'/'+id2+'/');
  }


getpromotionsConcurrent(idsociete:number) {
  console.log("get promotions concurrent");
  
    return this.http.get('http://localhost:3000/promotionsConcurrent/'+idsociete);
}


getPromotionsMagasinConcurrent(idpointevenete,concurrent) {
  console.log("get Image prix Concurrent Magasin ");
    return this.http.get('http://localhost:3000/promotionsConcurrent/'+idpointevenete+'/'+concurrent+'/');
}
}