import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {QuestionnaireService} from '../questionnaire/questionnaire.service';
import {Questionnaire} from '../questionnaire/questionnaire.interface';
import {PointVenteService} from '../point-vente/point-vente.service';
import {PointVente} from '../point-vente/point-vente.interface';
import { Observable } from 'rxjs';
import { QuestionService } from '../question/question.service';
import { QuestionBase } from '../question/question-base';
import {SharedServiceService} from '../services-speciales/shared-service.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormGroup }                 from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { SocieteService } from '../societe/societe.service';
import { Societe } from '../societe/societe.interface';

@Component({
  selector: 'app-sondage',
  templateUrl: './sondage.component.html',
  styleUrls: ['./sondage.component.scss']
})
export class SondageComponent implements OnInit {
  @Input() question: QuestionBase<any>;

  formReady=false;
	questionnaires : Questionnaire[];
	sondage : any;
	sondageId=99999;
  pointvente : PointVente;
  societe: Societe;
  reponseclient = [];
  observableQuestionnaire:Observable<any>;
  observableSociete:Observable<any>;
  reponsespossibles = ["Oui","Non"];

  questionsPromise: Promise<any>;
  questionnairePromise: Promise<any>;
  questions: QuestionBase<any>[] = [];

  constructor(private societeService: SocieteService,private sharedService :SharedServiceService,  private questionService : QuestionService ,private pointventeService : PointVenteService,private questionnaireService : QuestionnaireService,private route: ActivatedRoute) {
  }

  ngOnInit() {

    //On récupère l'id du sondage depuis l'URL
  	this.sondageId = Number(this.route.snapshot.paramMap.get('sondageid'));

    //On récupère les questions depuis la BDD
    this.questionsPromise = this.questionService.getQuestions(this.sondageId);
    this.questionsPromise
    .then((truc)=>{
      this.questions=truc;
      this.questions.forEach((question)=>{

      })
    });

  	//On récupère les infos du questionnaire depuis la BDD
    this.observableQuestionnaire=this.questionnaireService.getQuestionnaire(this.sondageId);
    this.questionnairePromise=this.observableQuestionnaire.toPromise();
    this.questionnairePromise
    .then((data:Questionnaire[])=>{
  		this.questionnaires=data;
      this.questionnaires.forEach((questionnaire)=>{
        if(questionnaire.id==this.sondageId){
          return this.sondage=questionnaire;
        }
      });
  	})
    .then((sondage)=>{
      //Une fois les infos du questionnaire stockés dans this.sondage
      //On récupère les infos sur le point de vente depuis la BDD
      this.observableSociete=this.societeService.getSociete();
      this.observableSociete.subscribe((data:Societe[])=>{
        data.forEach((societe)=>{
          if(societe.id==this.sondage.id_societe){
         
            
            return this.societe=societe;
          }
        })
      });
    })
    .then((truc)=>{
      //Une fois toutes les données chargées on affiche le formulaire
      //On mets quand même un délai de 300ms au cas ou
      var that = this;
      setTimeout(function(){ that.formReady=true; }, 300);
    });
  }

  scrollToForm(){
    //Scroll jusqu'à la première question
  //  console.log(this.question.order)
    let element = document.getElementById(String(1));

      if(element!=null)
      {
        element.scrollIntoView({inline: "nearest"});
      }
  }

  submitSondage(data){
    console.log("Submitted sondage :",data);
  }

}
