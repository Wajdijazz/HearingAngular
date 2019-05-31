import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ConcurrentService {

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { 
  }


  url = 'http://localhost:3000';


 
getAlConcurrent(id) {
  console.log("get Concurrent");
     
  return this.http.get('http://localhost:3000/concurrent/'+id);


}
getMagasinConcurrent(id,selectedpointvenete,concurrent) {
    return this.http.get('http://localhost:3000/themeconcurrent/'+id+'/'+selectedpointvenete+'/'+concurrent+'/');
}
}
