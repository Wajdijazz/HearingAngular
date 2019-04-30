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
  getImageprixMagasin(id1:number,id2:number) {
    console.log("getNps");
    
      return this.http.get('http://localhost:3000/noteImagePrix/'+id1+'/'+id2+'/');
  }

  getImageprixsociete(id:number) {
    console.log("getNps");
    
      return this.http.get('http://localhost:3000/noteImagePrix/'+id);
  }
}