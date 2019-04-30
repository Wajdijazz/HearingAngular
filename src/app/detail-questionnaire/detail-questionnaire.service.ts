import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class DetailQuestionnaireService {

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  url = 'http://localhost:3000';
  getDetails() {
    console.log("getQDetailQuestionnaires");
    return this
      .http
      .get(`${this.url}/details`);
      }
      createSelectedQuestions(data) {
        this.http.post(`${this.url}/details`, data)
          .subscribe(
            res => {
              console.log(res);
              this.toastr.success('Votre societe a été créer avec succès.', 'Success');
              this.router.navigateByUrl('/questionnaire');
            },
            err => {
              console.log('Error occured:' , err);
              this.toastr.error(err.message, 'Error occured');
            }
          );
      }
  
}
