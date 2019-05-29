import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NoteImagePrixService {

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  url = 'http://localhost:3000';


 

  getImageprixsociete(id:number) {
    console.log("get Image prix");
    
      return this.http.get('http://localhost:3000/noteImagePrix/'+id);
  }
  getImageprixMagasin(id2,pointevente) {
    console.log("get Image prix");
    
      return this.http.get('http://localhost:3000/themepointevente/'+id2+'/'+pointevente+'/');
  }

getImageprixConcurrent(idsociete:number) {
  console.log("get Image prix concurrent");
  
    return this.http.get('http://localhost:3000/themeconcurrent/'+idsociete);
}


getImageprixMagasinConcurrent(selectedpointvenete,concurrent) {
  console.log("get Image prix Concurrent Magasin ");
    return this.http.get('http://localhost:3000/themeconcurrent/'+selectedpointvenete+'/'+concurrent+'/');
}
}