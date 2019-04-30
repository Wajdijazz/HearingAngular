import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class ChoixQuestionnaireService {

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  url = 'http://localhost:3000';


/*getQuestions(id:number) {
    console.log("getQuestions");
    
      return this.http.get(`${this.url}/choix-questionnaire/${id}`);
  }*/
}
