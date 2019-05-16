import { Component, OnInit } from '@angular/core';
import {QuestionnaireService} from './questionnaire.service';
import {Questionnaire} from './questionnaire.interface';
import {Router} from "@angular/router";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  questionnaires : Questionnaire[];

  constructor(private questionnaireService : QuestionnaireService, private router : Router) { }

  ngOnInit() {
  	this.questionnaireService
  	.getQuestionnaire()
  	.subscribe((data:Questionnaire[])=>{
      console.log(data);
      this.questionnaires=data;
      /*this.questionnaires.forEach((questionnaire)=>{
      var str=questionnaire.id_theme;
      var num=parseInt(str);
      console.log(num);
       
      

      
      })*/
    
  	})
  

  }

  goToAddQuestionnaire(){
  	this.router.navigateByUrl('/ajout-questionnaire');
  }

  getQuestionnaire(Idquestionnaire){
    

    this.router.navigateByUrl(`sondage/${Idquestionnaire}`);

  }


}
