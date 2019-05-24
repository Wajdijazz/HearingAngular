import { Component, OnInit } from '@angular/core';
import {QuestionnaireService} from './questionnaire.service';
import {Questionnaire} from './questionnaire.interface';
import {Router} from "@angular/router";
import { UserService } from '../services/user.service';
import { PointVenteService } from '../point-vente/point-vente.service';
import { element } from '@angular/core/src/render3';
import { PointVente } from '../point-vente/point-vente.interface';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {

  questionnaires : Questionnaire[];
  userInfo: any;
  board: any;
  errorMessage: string;
  

  constructor(private pointventeService: PointVenteService, private userService: UserService,private questionnaireService : QuestionnaireService, private router : Router) { }

  ngOnInit() {
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
        data1.forEach(element=>{
     this.pointventeService.getpointventbyid(element.id_pointvente).subscribe((da:PointVente[])=>{
       console.log(da)

        

           da.forEach(element2=>{

              element.pointvente=element2.nom
            })

      })
    })

	
  
        this.questionnaires=data1.filter((word =>word.id_societe==this.userInfo.id_societe) );
			
		   this.board = data.description;
			},
			error => {
			  this.errorMessage = `${error.status}: ${error.error}`;
			}
		  );


  

    
  	})
  

  }

  goToAddQuestionnaire(){
  	this.router.navigateByUrl('/ajout-questionnaire');
  }

  getQuestionnaire(Idquestionnaire){
    

    this.router.navigateByUrl(`sondage/${Idquestionnaire}`);

  }


}
