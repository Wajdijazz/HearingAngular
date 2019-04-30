import { Component, OnInit } from '@angular/core';
import { Questionnaire } from '../questionnaire/questionnaire.interface';
import { QuestionnaireService } from '../questionnaire/questionnaire.service';
import { PointVenteService } from '../point-vente/point-vente.service';
import { PointVente } from '../point-vente/point-vente.interface';
import { ThemeService} from '../theme/theme.service';
import { Theme } from  '../theme/theme.interface';
import { DetailQuestionnaire } from '../detail-questionnaire/detail-questionnaire.interface';
import { DetailQuestionnaireService} from '../detail-questionnaire/detail-questionnaire.service';
import { ServicequestionnairesService } from '../services-speciales/servicequestionnaires.service';

 import {Questions} from '../questions/questions.interface';
import{QuestionsService} from '../questions/questions.service';
	import { from } from 'rxjs';
import { last } from 'rxjs/operators';
import { findLast } from '@angular/compiler/src/directive_resolver';
import { LCONTAINER_LENGTH } from '@angular/core/src/render3/interfaces/container';
import { Services } from '@angular/core/src/view';
@Component({
  selector: 'app-ajout-questionnaire',
  templateUrl: './ajout-questionnaire.component.html',
  styleUrls: ['./ajout-questionnaire.component.scss']
})
export class AjoutQuestionnaireComponent implements OnInit {

  
	selection=[true,true,false,false,false,false,false,false,false,false,false];

	pointsVente : PointVente[];
	theme : Theme[];
	id_q : any;
	id_th :any;

	 detailquestionnaires: DetailQuestionnaire[];
	 detailquestionnaire : DetailQuestionnaire={
		
		id_theme : null,
		id_questionnaire : null
	 }
	 
	questions : Questions[];

   

	questionnaires : Questionnaire[];
	
	questionnaire : Questionnaire ={
		id: 0,
		id_societe :2, //a changer depuis la session
		id_pointvente : null,
		sujet : ''
	}
	

  constructor(private servicesquestionnaires : ServicequestionnairesService,   private detailqestionnaireService : DetailQuestionnaireService,private questionsService :  QuestionsService,  private themeService : ThemeService, private questionnaireService : QuestionnaireService, private pointVenteService: PointVenteService) { }

  ngOnInit() {
  	//On récupère les points de vente du client pour le sélecteur dans le formulaire
  	this.pointVenteService.getPointVente().subscribe((data:PointVente[])=>{
  	//	console.log(data);
  		this.pointsVente=data;
  		this.pointsVente.forEach((pointvente)=>{
  			
  		});
  	//	console.log("Points de vente de cette société d'id=",this.questionnaire.id_societe," :",this.pointsVente);
  		//On set le selecteur au premier point de vente de la liste
  		this.questionnaire.id_pointvente=this.pointsVente[0].id;
		});



		
		this.themeService
  	.geThemes()
  	.subscribe((data:Theme[])=>{
  		console.log(data);
		  this.theme=data;
		
			  
		})

			
  }

  createSelectedTheme(data:DetailQuestionnaire){

var i=0;




		this.servicesquestionnaires
		.getIdQuestionnaire()
		.subscribe((data1:Questionnaire[])=>{

			this.selection.forEach((selected)=>{
				if(selected){
					console.log(this.theme[i].id)
					this.id_th=this.theme[i].id;
			this.questionnaires=data1;
						
			this.questionnaires.forEach((questionnaires)=>{
				this.id_q= (questionnaires.id);
				this.detailquestionnaire.id_questionnaire=this.id_q;

			
			})
			this.detailquestionnaire.id_theme=this.id_th;

			this.detailqestionnaireService.createSelectedQuestions(data);
		}
		i++;

		})


	
});


			}
   



  


	
 

  creerQuestionnaire(data:Questionnaire){
    
  	console.log("data avant envoi serveur",data);
	
		data.id_pointvente=Number(data.id_pointvente);
		
		this.questionnaireService.createQuestionnaire(data);
	
	}

	

}
