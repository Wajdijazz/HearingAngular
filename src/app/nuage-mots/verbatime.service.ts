import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VerbatimeService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000';




  getverbatime(id:number) {
    return this
      .http
      .get(`${this.url}/verbatime/${id}`);
      }

}