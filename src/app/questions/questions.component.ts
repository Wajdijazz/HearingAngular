import { Component, OnInit, Input } from '@angular/core';
import { SharedServiceService } from '../services-speciales/shared-service.service';
import { ChoixQuestionnaireService } from '../choix-questionnaire/choix-questionnaire.service';
import { ChoixQuestionnaire }   from '../choix-questionnaire/choix-questionnaire.interface';
import { QuestionsService } from './questions.service';
import {PointVenteService} from '../services-speciales/point-vente.service';
import { Questions } from './questions.interface';
import { ActivatedRoute } from "@angular/router";
import { FormGroup }        from '@angular/forms';



@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  choixquestionnaires : ChoixQuestionnaire[];
  questions : Questions[];
  sondageId=null;

    id_questionnaire:any;

  constructor(private route: ActivatedRoute,private pointventeIdService  : PointVenteService, private questionsService : QuestionsService,   private choixquestionnaireService: ChoixQuestionnaireService,  private sharedService : SharedServiceService) { }
  ngOnInit() {
   
    
  //  this.id_questionnaire=this.sharedService.getIdselected();
   

/*  this.questionsService.getQuestions(this.id_questionnaire).subscribe((data:ChoixQuestionnaire[])=>{
    this.choixquestionnaires=data;

    console.log(this.choixquestionnaires);
  })
*/
 
  }


  scrollToForm(){
    //Scroll jusqu'à la première question
    let element = document.getElementById(String(2));
    console.log(element);
      if(element!=null)
      {
        element.scrollBy({behavior:"smooth"});
      }

   
    


  }
  

}
