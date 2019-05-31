import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConcurrentService {
  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  url = 'http://localhost:3000';

  getConcurrent() {
    return this
      .http
      .get(`${this.url}/concurrent-societe`);
      }

  createConcurrent(data) {
    this.http.post(`${this.url}/concurrent-societe`, data)
      .subscribe(
        res => {
          this.toastr.success('.', 'Success');
        },
        err => {
          this.toastr.error(err.message, 'Error occured');
        }
      );
  }

  DeleteConcurrentId(id:number,id_societe) {
    
      return this.http.delete(`${this.url}/concurrent-societe/${id}/${id_societe}`);

}
}
