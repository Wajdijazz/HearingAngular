import { Component, Input, OnInit, ViewChild }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionBase }              from './question-base';
import { QuestionControlService }    from './question-control.service';
import {QuestionService}   from './question.service'
import { ActivatedRoute } from "@angular/router";


import { SharedServiceService } from '../services-speciales/shared-service.service'

import { Concurrent } from './concurrent.interface';
import { UserService } from '../services/user.service';
import { ReponsePointeVente } from './reponse-pointe-vente.interface';
import { AlertComponent } from '../alert/alert.component';
import { Message } from '../alert/message';
import { Verbatime } from './verbatime';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {
  @ViewChild(AlertComponent) alert: AlertComponent;

  @Input() questions: QuestionBase<any>[] = [];
  //@Input() form: FormGroup;
  
  id_societe=null// pull from session
  form: FormGroup;
  payLoad = '';
  sondageId=null;
 


  concurrent : Concurrent={
   id : null,
  
   id_questionnaire : null, 
   pointevente:'',
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

  pointVenteReponse : ReponsePointeVente={
    id : null,
    id_questionnaire:null,
    id_societe : null, 
    date_reponse_pointevente: null,
    nom : "",
    prix_satisfaction : "",
    promotions_satisfaction :"",
    Qualite_Produit_satisfaction :"" ,
    Amabilite_personnel_satisfaction :"",
    Rapport_qualite_prix_satisfaction:"",
    Rapidite_facilite_payer_satisfaction:"",
    Qualite_materiel_satisfaction:"",
    Choix_produits_satisfaction:"",
    Facilite_trouver_produits_satisfaction:"",
    Prix_produits_bio_satisfaction:"",
    Qualite_produits_bio_satisfaction:"",
    Fin_Sondage:null

    
  }

verbatime : Verbatime={
  id :null,
  id_questionnaire: null,
  prix_motivation: "",
  promotions_motivation: "",
  Qualite_Produit_motivation:"",
  Amabilite_personnel_motivation:"",
  Rapport_qualite_prix_motivation : "",
  Rapidite_facilite_payer_motivation:"",
  Qualite_materiel_motivation: "",
  Choix_produits_motivation: "",
  Facilite_trouver_produits_motivation:"",
  Prix_produits_bio_motivation:"",
  Qualite_produits_bio_motivation:""
}
  iden :any 

ids : any=null;
  userInfo: { id: any; id_societe: any; name: any; email: any; };
  constructor(private userService:UserService,  private route: ActivatedRoute,private  questionService : QuestionService,  private qcs: QuestionControlService) {  }

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
 


// Save responses PointeVente
var date_confirmation = new Date();
this.pointVenteReponse.id_questionnaire=this.sondageId
this.pointVenteReponse.id_societe=this.id_societe
this.pointVenteReponse.date_reponse_pointevente=date_confirmation;


if(this.form.value.frequentationPointeVente==null)
{
 this.form.value.frequentationPointeVente=""
}
else{
 this.pointVenteReponse.nom=this.form.value.frequentationPointeVente
}


if(this.form.value.prix_satisfaction==null)
{
 this.form.value.prix_satisfaction=""
}
else{
 this.pointVenteReponse.prix_satisfaction=this.form.value.prix_satisfaction
}


if(this.form.value.promotions_satisfaction==null)
{
 this.form.value.promotions_satisfaction=""
}
else{
 this.pointVenteReponse.promotions_satisfaction=this.form.value.promotions_satisfaction
}



if(this.form.value.Qualite_Produit_satisfaction==null)
{
 this.pointVenteReponse.Qualite_Produit_satisfaction=""
}
else{
 this.pointVenteReponse.Qualite_Produit_satisfaction=this.form.value.Qualite_Produit_satisfaction
}


if(this.form.value.Amabilite_personnel_satisfaction==null)
{
 this.form.value.Amabilite_personnel_satisfaction=""
}
else{
 this.pointVenteReponse.Amabilite_personnel_satisfaction=this.form.value.Amabilite_personnel_satisfaction
}


if(this.form.value.Rapport_qualite_prix_satisfaction==null)
{
 this.form.value.Rapport_qualite_prix_satisfaction=""
}
else{
 this.pointVenteReponse.Rapport_qualite_prix_satisfaction=this.form.value.Rapport_qualite_prix_satisfaction
}


if(this.form.value.Rapidite_facilite_payer_satisfaction==null)
{
 this.form.value.Rapidite_facilite_payer_satisfaction=""
}
else{
 this.pointVenteReponse.Rapidite_facilite_payer_satisfaction=this.form.value.Rapidite_facilite_payer_satisfaction
}


if(this.form.value.Qualite_materiel_satisfaction==null)
{
 this.form.value.Qualite_materiel_satisfaction=""
}
else{
 this.pointVenteReponse.Qualite_materiel_satisfaction=this.form.value.Qualite_materiel_satisfaction
}

if(this.form.value.Choix_produits_satisfaction==null)
{
 this.form.value.Choix_produits_satisfaction=""
}
else{
 this.pointVenteReponse.Choix_produits_satisfaction=this.form.value.Choix_produits_satisfaction
}

if(this.form.value.Facilite_trouver_produits_satisfaction==null)
{
 this.form.value.Facilite_trouver_produits_satisfaction=""
}
else{
 this.pointVenteReponse.Facilite_trouver_produits_satisfaction=this.form.value.Facilite_trouver_produits_satisfaction
}

if(this.form.value.Prix_produits_bio_satisfaction==null)
{
 this.form.value.Prix_produits_bio_satisfaction=""
}
else{
 this.pointVenteReponse.Prix_produits_bio_satisfaction=this.form.value.Prix_produits_bio_satisfaction
}

if(this.form.value.Qualite_produits_bio_satisfaction==null)
{
 this.form.value.Qualite_produits_bio_satisfaction=""
}
else{
 this.pointVenteReponse.Qualite_produits_bio_satisfaction=this.form.value.Qualite_produits_bio_satisfaction
}


 this.pointVenteReponse.Fin_Sondage=parseInt(this.form.value.Fin_Sondage)





this.questionService.createreponsepointevenete(this.pointVenteReponse)  



  // Save responses concurrent
       var date_confirmation = new Date();
       this.concurrent.id_questionnaire=this.sondageId
       this.concurrent.pointevente=this.form.value.frequentationPointeVente
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
 

    

       //saved verbatime
       this.verbatime.id_questionnaire=this.sondageId

    

      if(this.form.value.prix_motivation==null)
      {
        this.form.value.prix_motivation=""
      }
      else{
        this.verbatime.prix_motivation=this.form.value.prix_motivation
      }


      if(this.form.value.promotions_motivation==null)
      {
        this.form.value.promotions_motivation=""
      }
      else{
        this.verbatime.promotions_motivation=this.form.value.promotions_motivation
      }



      if(this.form.value.Qualite_Produit_motivation==null)
      {
        this.form.value.Qualite_Produit_motivation=""
      }
      else{
        this.verbatime.Qualite_Produit_motivation=this.form.value.Qualite_Produit_motivation
      }


      if(this.form.value.Amabilite_personnel_motivation==null)
      {
        this.form.value.Amabilite_personnel_motivation=""
      }
      else{
        this.verbatime.Amabilite_personnel_motivation=this.form.value.Amabilite_personnel_motivation
      }


      if(this.form.value.Rapport_qualite_prix_motivation==null)
      {
        this.form.value.Rapport_qualite_prix_motivation=""
      }
      else{
        this.verbatime.Rapport_qualite_prix_motivation=this.form.value.Rapport_qualite_prix_motivation
      }


      if(this.form.value.Rapidite_facilite_payer_motivation==null)
      {
        this.form.value.Rapidite_facilite_payer_motivation=""
      }
      else{
        this.verbatime.Rapidite_facilite_payer_motivation=this.form.value.Rapidite_facilite_payer_motivation
      }

      if(this.form.value.Qualite_materiel_motivation==null)
      {
        this.form.value.Qualite_materiel_motivation=""
      }
      else{
        this.verbatime.Qualite_materiel_motivation=this.form.value.Qualite_materiel_motivation
      }

      if(this.form.value.Choix_produits_motivation==null)
      {
        this.form.value.Choix_produits_motivation=""
      }
      else{
        this.verbatime.Choix_produits_motivation=this.form.value.Choix_produits_motivation
      }

      if(this.form.value.Facilite_trouver_produits_motivation==null)
      {
        this.form.value.Facilite_trouver_produits_motivation=""
      }
      else{
        this.verbatime.Facilite_trouver_produits_motivation=this.form.value.Facilite_trouver_produits_motivation
      }

      if(this.form.value.Prix_produits_bio_motivation==null)
      {
        this.form.value.Prix_produits_bio_motivation=""
      }
      else{
        this.verbatime.Prix_produits_bio_motivation=this.form.value.Prix_produits_bio_motivation
      }

      if(this.form.value.Qualite_produits_bio_motivation==null)
      {
        this.form.value.Qualite_produits_bio_motivation=""
      }
      else{
        this.verbatime.Qualite_produits_bio_motivation=this.form.value.Qualite_produits_bio_motivation
      }

this.questionService.createreponseverbatime(this.verbatime)
console.log(this.verbatime)

    },
		
    );
    Swal.fire("", "Merci pour vos réponses", "success");

      }
}
