import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionBase }              from './question-base';
import { QuestionControlService }    from './question-control.service';
import {QuestionService}   from './question.service'
import { ActivatedRoute } from "@angular/router";
import { Questions } from '../questions/questions.interface';
import { QuestionsService } from '../questions/questions.service';
import { QuestionnaireService } from '../questionnaire/questionnaire.service';
import { Reponse } from '../reponses/reponse.interface';
import { SharedServiceService } from '../services-speciales/shared-service.service'
import { Key } from 'protractor';
import { zip } from 'rxjs/internal/observable/zip';
import { forEach } from '@angular/router/src/utils/collection';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  //@Input() form: FormGroup;
  

  form: FormGroup;
  payLoad = '';
  sondageId=null;
  question : Questions[]
  reponses : Reponse={
    id : null,
    id_questionnaire:null,
    id_question: null,
    date_reponse :null,
    theme_key : '',
    reponse : ''
  }

ids : any=null;
  constructor(private sharedService : SharedServiceService,   private questionsService : QuestionsService, private route: ActivatedRoute,private  questionService : QuestionService,  private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.sondageId = Number(this.route.snapshot.paramMap.get('sondageid'));

   

  
    this.form = this.qcs.toFormGroup(this.questions);

    
  }

  onSubmit() {

this.questionsService.getQuestions(this.sondageId).subscribe((data:Questions[])=>{
  this.question=data;

 

  this.question.forEach(element=>{
    this.ids=element.id
    this.reponses.id_question=element.id
  })  


 this.payLoad = JSON.stringify(this.form.value);
   let rep=JSON.parse(this.payLoad)


   Object.entries(rep).forEach(
  ([key, value])=> {
       
        var date_confirmation = new Date();
        console.log(date_confirmation)
        this.reponses.id_questionnaire=this.sondageId;
        this.reponses.date_reponse=date_confirmation;
        this.reponses.theme_key=key
        this.reponses.reponse=value    
        this.sharedService.saverponses(this.reponses)
        console.log(this.reponses)

      
  }); 

})

  }
}
