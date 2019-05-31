import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Injectable()
export class QuestionnaireService {
  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  url = 'http://localhost:3000';
  getQuestionnaire(id:number=-1) {
    console.log("getQuestionnaire");
    if(id<0){
      return this
      .http
      .get(`${this.url}/questionnaire`);
    }
      return this
      .http
      .get(`${this.url}/questionnaire/${id}`);
    }

  createQuestionnaire(data) {
    this.http.post(`${this.url}/questionnaire`, data)
      .subscribe(
        res => {
          console.log(res);
          this.toastr.success('Votre questionnaire a été créer avec succès.', 'Success');
        //  this.router.navigateByUrl('/questionnaire');
        },
        err => {
          console.log('Error occured:' , err);
          this.toastr.error(err.message, 'Error occured');
        }
      );
  }




  DeleteQuestionnaireEById(id:number,id_societe) {
    
      return this.http.delete(`${this.url}/questionnaire/${id}/${id_societe}`);

  }
}
