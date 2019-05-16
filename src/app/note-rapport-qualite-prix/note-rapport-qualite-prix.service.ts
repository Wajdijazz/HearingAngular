import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class NoteRapportQualitePrixService {

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }



  url = 'http://localhost:3000';


  getRapportQualitePrixMagasin(id1:number,id2:number) {
    
      return this.http.get('http://localhost:3000/NoteRapportQualitePrix/'+id1+'/'+id2+'/');
  }

  getRapportQualitePrix(id:number) {
      return this.http.get('http://localhost:3000/NoteRapportQualitePrix/'+id);
  }


  getRapportQualitePrixConcurrentSociete(idsociete:number) {
  
    return this.http.get('http://localhost:3000/NoteRapportQualitePrixConcurrent/'+idsociete);
}


getRapportQualitePrixConcurrentMagasin(idpointevenete,concurrent) {
    return this.http.get('http://localhost:3000/NoteRapportQualitePrixConcurrent/'+idpointevenete+'/'+concurrent+'/');
}
}
