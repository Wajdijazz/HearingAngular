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
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
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
		id_societe :null, 
		sujet : '',

	}
	userInfo: { id: any; id_societe: any; name: any; email: any; };
	board: any;
	errorMessage: string;
	

  constructor(private userService: UserService,private servicesquestionnaires : ServicequestionnairesService,   private detailqestionnaireService : DetailQuestionnaireService,private questionsService :  QuestionsService,  private themeService : ThemeService, private questionnaireService : QuestionnaireService, private pointVenteService: PointVenteService,private router: Router) { }

  ngOnInit() {
	  //On récupère les points de vente du client pour le sélecteur dans le formulaire
	  this.questionnaireService
  	.getQuestionnaire()
  	.subscribe((data1:Questionnaire[])=>{
    

    this.userService.getUserBoard().subscribe(
			data => {
			  this.userInfo = {
				id: data.user.id,
				id_societe:data.user.id_societe,
				name: data.user.name,
				email: data.user.email
        };
    

	
  
        this.questionnaires=data1.filter((word =>word.id_societe==this.userInfo.id_societe) );
			
		   this.board = data.description;
			},
			error => {
			  this.errorMessage = `${error.status}: ${error.error}`;
			}
		  );


  

    
  	})


		
		this.themeService
  	.geThemes()
  	.subscribe((data2:Theme[])=>{
  		console.log(data2);
		  this.theme=data2;
		
			  
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

		this.questionnaireService
		.getQuestionnaire()
		.subscribe((data1:Questionnaire[])=>{
	  
  
	  this.userService.getUserBoard().subscribe(
			  data => {
				this.userInfo = {
				  id: data.user.id,
				  id_societe:data.user.id_societe,
				  name: data.user.name,
				  email: data.user.email
		  };
	  
  
	  
	
		  this.questionnaires=data1.filter((word =>word.id_societe==this.userInfo.id_societe) );
			  
			 this.board = data.description;
			  },
			  error => {
				this.errorMessage = `${error.status}: ${error.error}`;
			  }
			);
  
  
	
  
	  
		})
	
	
});


			}
   



  


	
 

  creerQuestionnaire(data:Questionnaire){
	console.log(  this.userInfo.id_societe)

    
	  console.log("data avant envoi serveur",data);
	  data.id_societe=Number(this.userInfo.id_societe)
	
	//	data.id_pointvente=Number(data.id_pointvente);
		
		this.questionnaireService.createQuestionnaire(data);

		
	}

	getQuestionnaire(Idquestionnaire){
    

		this.router.navigateByUrl(`sondage/${Idquestionnaire}`);
	
	  }

}
