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



  getAmabilitePersonnelSociete(id:number) {
      return this.http.get('http://localhost:3000/NoteAmabilitePersonnel/'+id);
  }

  getAmabilitePersonnelMagasin(id2,pointevente) {
    
    return this.http.get('http://localhost:3000/themepointevente/'+id2+'/'+pointevente+'/');
  }

  getAmabilitePersonnelSocieteConcurrent(idsociete:number) {
  
    return this.http.get('http://localhost:3000/themeconcurrent/'+idsociete);
}


getAmabilitePersonnelMagasinConcurrent(selectedpointvenete,concurrent) {
  return this.http.get('http://localhost:3000/themeconcurrent/'+selectedpointvenete+'/'+concurrent+'/');
}
}

