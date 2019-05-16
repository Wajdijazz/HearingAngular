import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AmabilitePersonnelService {

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }



  url = 'http://localhost:3000';


  getAmabilitePersonnelMagasin(id1:number,id2:number) {
    
      return this.http.get('http://localhost:3000/NoteAmabilitePersonnel/'+id1+'/'+id2+'/');
  }

  getAmabilitePersonnelSociete(id:number) {
      return this.http.get('http://localhost:3000/NoteAmabilitePersonnel/'+id);
  }


  getAmabilitePersonnelSocieteConcurrent(idsociete:number) {
  
    return this.http.get('http://localhost:3000/NoteAmabilitePersonnelConcurrent/'+idsociete);
}


getAmabilitePersonnelMagasinConcurrent(idpointevenete,concurrent) {
    return this.http.get('http://localhost:3000/NoteAmabilitePersonnelConcurrent/'+idpointevenete+'/'+concurrent+'/');
}
}
