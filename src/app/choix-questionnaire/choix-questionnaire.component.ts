import { Component, OnInit } from '@angular/core';
import { Questionnaire } from '../questionnaire/questionnaire.interface';
import { QuestionnaireService } from '../questionnaire/questionnaire.service';
import { ChoixQuestionnaireService} from '../choix-questionnaire/choix-questionnaire.service';
import { ChoixQuestionnaire } from '../choix-questionnaire/choix-questionnaire.interface';
import { SharedServiceService } from '../services-speciales/shared-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-choix-questionnaire',
  templateUrl: './choix-questionnaire.component.html',
  styleUrls: ['./choix-questionnaire.component.scss']
})
export class ChoixQuestionnaireComponent implements OnInit {

  constructor( private router : Router,private sharedService : SharedServiceService, private choixquestionnaireService : ChoixQuestionnaireService,  private questionnaireService : QuestionnaireService) { }

  questionnaires : Questionnaire[];
  questionnaire : Questionnaire ={

    id:null,
  
    id_societe:null,
    sujet:'',
  
  }
  choixquestionnaires : ChoixQuestionnaire[];
  choixquestionnaire : ChoixQuestionnaire={
    nom: '',
    questions : ''

  }
  aux : any;
  IdSelectedQuestionnaire : any;
  ngOnInit() {

    this.questionnaireService.getQuestionnaire().subscribe((data:Questionnaire[])=>{
      this.questionnaires=data;
    })





  }

onQestionnaireSelected(IdSelectedQuestionnaire){   
console.log(IdSelectedQuestionnaire);
this.aux=IdSelectedQuestionnaire;



}



  
onClickgetQuestion(){


this.router.navigateByUrl(`sondage/${this.aux}`);









}




}
