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
import { Concurrent } from './concurrent.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  //@Input() form: FormGroup;
  
  id_societe=null// pull from session
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

  concurrent : Concurrent={
   id : null,
   id_pointevente : null,
   id_societe : null, 
   date_reponse_concurrent : null,
   concurrent : "",
   prix_concurrent : "",
   promotions_concurrent :"",
   Qualite_Produit_concurrent :"" ,
   Amabilite_personnel_concurrent :"",
   Rapport_qualite_prix_concurrent:"",
   Rapidite_facilite_payer_concurrent:"",
   Qualite_materiel_concurrent:"",
   Choix_produits_concurrent:"",
   Facilite_trouver_produits_concurrent:"",
   Prix_produits_bio_concurrent:"",
   Qualite_produits_bio_concurrent:""

  }
  iden :any 

ids : any=null;
  userInfo: { id: any; id_societe: any; name: any; email: any; };
  constructor(private userService:UserService,private sharedService : SharedServiceService,   private questionsService : QuestionsService, private route: ActivatedRoute,private  questionService : QuestionService,  private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.sondageId = Number(this.route.snapshot.paramMap.get('sondageid'));
   this.iden=0
   

  
    this.form = this.qcs.toFormGroup(this.questions);

    
  }

  onSubmit() {

    this.userService.getUserBoard().subscribe(
			data => {
			  this.userInfo = {
				id: data.user.id,
				id_societe:data.user.id_societe,
				name: data.user.name,
				email: data.user.email
			  };
		  
		
			this.id_societe=this.userInfo.id_societe
		

    this.id_societe=this.userInfo.id_societe
this.questionsService.getQuestions(this.sondageId).subscribe((data1:Questions[])=>{
  this.question=data1;

 

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



        

      
  }); 
       var date_confirmation = new Date();
       var idpointevente= this.sharedService.getIdSelectedpointevente()
       this.concurrent.id_societe=this.id_societe
       this.concurrent.id_pointevente=idpointevente;
      this.concurrent.date_reponse_concurrent=date_confirmation;


      if(this.form.value.frequentation3==null)
      {
        this.form.value.frequentation3=""
      }
      else{
        this.concurrent.concurrent=this.form.value.frequentation3
      }


      if(this.form.value.prix_concurrent==null)
      {
        this.form.value.prix_concurrent=""
      }
      else{
        this.concurrent.prix_concurrent=this.form.value.prix_concurrent
      }


      if(this.form.value.promotions_concurrent==null)
      {
        this.form.value.promotions_concurrent=""
      }
      else{
        this.concurrent.promotions_concurrent=this.form.value.promotions_concurrent
      }



      if(this.form.value.Qualite_Produit_concurrent==null)
      {
        this.concurrent.Qualite_Produit_concurrent=""
      }
      else{
        this.concurrent.Qualite_Produit_concurrent=this.form.value.Qualite_Produit_concurrent
      }


      if(this.form.value.Amabilite_personnel_concurrent==null)
      {
        this.form.value.Amabilite_personnel_concurrent=""
      }
      else{
        this.concurrent.Amabilite_personnel_concurrent=this.form.value.Amabilite_personnel_concurrent
      }


      if(this.form.value.Rapport_qualite_prix_concurrent==null)
      {
        this.form.value.Rapport_qualite_prix_concurrent=""
      }
      else{
        this.concurrent.Rapport_qualite_prix_concurrent=this.form.value.Rapport_qualite_prix_concurrent
      }


      if(this.form.value.Rapidite_facilite_payer_concurrent==null)
      {
        this.form.value.Rapidite_facilite_payer_concurrent=""
      }
      else{
        this.concurrent.Rapidite_facilite_payer_concurrent=this.form.value.Rapidite_facilite_payer_concurrent
      }


      if(this.form.value.Qualite_materiel_concurrent==null)
      {
        this.form.value.Qualite_materiel_concurrent=""
      }
      else{
        this.concurrent.Qualite_materiel_concurrent=this.form.value.Qualite_materiel_concurrent
      }

      if(this.form.value.Choix_produits_concurrent==null)
      {
        this.form.value.Choix_produits_concurrent=""
      }
      else{
        this.concurrent.Choix_produits_concurrent=this.form.value.Choix_produits_concurrent
      }

      if(this.form.value.Facilite_trouver_produits_concurrent==null)
      {
        this.form.value.Facilite_trouver_produits_concurrent=""
      }
      else{
        this.concurrent.Facilite_trouver_produits_concurrent=this.form.value.Facilite_trouver_produits_concurrent
      }

      if(this.form.value.Prix_produits_bio_concurrent==null)
      {
        this.form.value.Prix_produits_bio_concurrent=""
      }
      else{
        this.concurrent.Prix_produits_bio_concurrent=this.form.value.Prix_produits_bio_concurrent
      }

      if(this.form.value.Qualite_produits_bio_concurrent==null)
      {
        this.form.value.Qualite_produits_bio_concurrent=""
      }
      else{
        this.concurrent.Qualite_produits_bio_concurrent=this.form.value.Qualite_produits_bio_concurrent
      }





       this.questionService.createreponseconcurrent(this.concurrent)  
       console.log(this.concurrent)


})
},
		
);
  }
  
}
