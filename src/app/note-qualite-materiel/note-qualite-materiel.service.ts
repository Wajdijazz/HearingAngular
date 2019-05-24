


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class NoteQualiteMaterielService {


  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  url = 'http://localhost:3000';


  getQualiteMaterielMagasin(id1:number,id2:number) {
    
      return this.http.get('http://localhost:3000/noteQualiteMateriel/'+id1+'/'+id2+'/');
  }

  getQualiteMaterielSociete(id:number) {
      return this.http.get('http://localhost:3000/noteQualiteMateriel/'+id);
  }


  getQualiteMaterielSocieteConcurrent(idsociete:number) {
  
    return this.http.get('http://localhost:3000/noteQualiteMaterielConcurrent/'+idsociete);
}


getQualiteMaterielMagasinConcurrent(idpointevenete,concurrent) {
    return this.http.get('http://localhost:3000/noteQualiteMaterielConcurrent/'+idpointevenete+'/'+concurrent+'/');
}
}