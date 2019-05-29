import { Component, Input, HostListener } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { QuestionBase }     from './question-base';
import {MatRadioModule, MatRadioChange} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import { PointVenteService } from '../point-vente/point-vente.service';
import{ PointVente } from '../point-vente/point-vente.interface';
import {SharedServiceService} from '../services-speciales/shared-service.service'
import { NEXT } from '@angular/core/src/render3/interfaces/view';
import { ComponentFactoryResolver, element } from '@angular/core/src/render3';
import { QuestionService } from '../question/question.service'
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from '../questions/questions.service';
import { Questions } from '../questions/questions.interface';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
	userInfo: { id: any; id_societe: any; name: any; email: any; };
  get isValid() { return this.form.controls[this.question.key].valid; };
  labeltemporaire=''
  labeltemporaire1='SOC';
  labeltemporaire2='REC';
  MatRadioChange : MatRadioChange
  pointeventes : PointVente[];
societe:any=""
  a:any=null;
  numbers: number[] = [];
  sondageId=null;
 questions : Questions [];


  constructor( private userService:UserService,private route: ActivatedRoute,private questionService : QuestionsService , private sharedService : SharedServiceService){
  }

  ngOnInit(){

		this.userService.getUserBoard().subscribe(
			data => {
			  this.userInfo = {
				id: data.user.id,
				id_societe:data.user.id_societe,
				name: data.user.name,
				email: data.user.email
			  };
		  
      
this.societe=this.userInfo.name


	this.question.label=this.question.label.replace(this.labeltemporaire1,this.societe);

   

    if(this.question.controlType==='radio'){

		
	this.form.get(this.question.key).valueChanges.subscribe(()=>{
		var element = document.getElementById(String(this.question.order+1));


			if(element!=null)
  		{   

			element.scrollIntoView({ inline: "nearest"});

      }else{				
				var objDiv = document.getElementById(String(38));
				objDiv.scrollIntoView({inline: "nearest"})


			}	

	
		});
	

	
	

	}


	


  	//Si la question a une dépendance
  	
	if(this.question.dependance.key!=''){	
		//On récupère la value de la question dont elle dépend
		this.form.get(this.question.dependance.key).valueChanges.subscribe((value)=>{
	  //Si la réponse n'est pas la réponses négative
			if(value!=this.question.dependance.value)
				{
					if(this.labeltemporaire!=''){
					//Remplace le nom de l'enseigne en cas de changement
					this.question.value=this.question.label.replace(this.labeltemporaire1,this.societe);
					this.labeltemporaire1=value;
				}else{
					//Remplace le 'REC' du label de la question
					this.question.label=this.question.label.replace(this.question.dependance.label,value);
					this.labeltemporaire=value;
				}
			}
		});
	  }

	})
		
	}


scrolltextbox(){


	if(this.question.controlType==='textbox'){


		

		let	element = document.getElementById(String(this.question.order+1));

			if(element!=null)
  		{
				element.scrollIntoView({ inline: "nearest"});

      }else{
				//TODO: scroll vers le bouton Valider
				var objDiv = document.getElementById(String(38));
				objDiv.scrollIntoView({inline: "nearest"})
				var objDiv2= document.getElementById(String("fin"));
				objDiv2.scrollIntoView({inline: "nearest"})

			}	

		
		

		
		  
		   

	
	}


}





onPointventeselected(Selectedpointvente){
	
	if(this.question.controlType==='dropdown'){
		
		let	element = document.getElementById(String(this.question.order+1));
			if(element!=null)
  		{
				element.scrollIntoView({ inline: "nearest"});

      }else{
				//TODO: scroll vers le bouton Valider
				var objDiv = document.getElementById(String(38));
				objDiv.scrollIntoView({inline: "nearest"})

			}	

	}
return Selectedpointvente

}







click($event){
	console.log($event)
	if(this.form.value.frequentation1=="non"){

		let	element = document.getElementById(("fin"));

		if(element!=null)
		{
			element.scrollIntoView({ inline: "nearest"});

		}else{
			//TODO: scroll vers le bouton Valider
			var objDiv = document.getElementById(String(38));
			objDiv.scrollIntoView({inline: "nearest"})

		}	

}



	

	
	

			
}
}


