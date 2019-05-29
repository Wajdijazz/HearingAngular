


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


  

  getQualiteMaterielSociete(id:number) {
      return this.http.get('http://localhost:3000/noteQualiteMateriel/'+id);
  }
  getQualiteMaterielMagasin(id2,pointevente) {
    
    return this.http.get('http://localhost:3000/themepointevente/'+id2+'/'+pointevente+'/');
  }

  getQualiteMaterielSocieteConcurrent(idsociete:number) {
  
    return this.http.get('http://localhost:3000/themeconcurrent/'+idsociete);}


getQualiteMaterielMagasinConcurrent(selectedpointvenete,concurrent) {
  return this.http.get('http://localhost:3000/themeconcurrent/'+selectedpointvenete+'/'+concurrent+'/');
}
}