import { Component, OnInit } from '@angular/core';
import {SocieteService} from '../societe/societe.service';
import {Societe} from "../societe/societe.interface";
import { SharedServiceService } from '../services-speciales/shared-service.service';
import { Router } from '@angular/router';
import { PointVenteService } from '../point-vente/point-vente.service';
import { PointVente } from '../point-vente/point-vente.interface';
import { QuestionnaireService } from '../questionnaire/questionnaire.service';
import { Questionnaire } from '../questionnaire/questionnaire.interface';
import { ConcurrentService } from '../concurrent-societe/concurrent.service';
import { Concurrent } from '../concurrent-societe/concurrent.interface';
import { VerbatimeService } from '../nuage-mots/verbatime.service';
import { Verbatime } from '../nuage-mots/verbatime.interface';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-ajout-societe',
  templateUrl: './ajout-societe.component.html',
  styleUrls: ['./ajout-societe.component.scss']
})
export class AjoutSocieteComponent implements OnInit {

	societe: Societe = {
    id: null,
    nom: '',
    type_abonnement: null,
    date_facturation: null
  };
  societes: Societe[];

  constructor( private verbatimeService:VerbatimeService,private  concurrentService :ConcurrentService,private questionnaireService : QuestionnaireService,private pointventeService:PointVenteService,private sharedservice:SharedServiceService,private societeService : SocieteService, private router: Router) { }

  ngOnInit() {
    this.societeService
  	.getSociete()
  	.subscribe((data:Societe[])=>{
  		console.log(data);
  		this.societes=data;
  	})
  }

  creerSociete(data:Societe){
		this.societeService.createSociete(data);
//		this.societeService.postsearch(data)


  }
	getSocieteView(){

		this.societeService
  	.getSociete()
  	.subscribe((data:Societe[])=>{
			this.societes=data;
		
		})
		Swal.fire("Félicitations", "Enseigne ajoutée avec succés", "success");
	}
  modifierSociete(id_Societe){
		this.societeService
  	.getSociete()
  	.subscribe((data:Societe[])=>{
			this.societes=data;
		
		})

		var nomById= this.societes.filter((word =>word.id==id_Societe) )
		nomById.forEach(nom=>{
			console.log(nom.nom)
			this.sharedservice.setSociete(nom.nom)
			this.sharedservice.setIdSociete(nom.id)
			this.sharedservice.setTypeSociete(nom.type_abonnement)
			this.sharedservice.setdateSociete(nom.date_facturation)
			this.router.navigateByUrl('/admin/update');


		})
	




	}


	getSociete(id_Societe){
		this.societeService
  	.getSociete()
  	.subscribe((data:Societe[])=>{
			this.societes=data;
		
		})

		var nomById= this.societes.filter((word =>word.id==id_Societe) )
		nomById.forEach(nom=>{
			console.log(nom.nom)
			this.sharedservice.setSociete(nom.nom)
			this.sharedservice.setIdSociete(nom.id)
			this.router.navigateByUrl('/admin/signup');

		

		})
	




	}
	DeleteSociete(idsociete){
  
  this.societeService.DeleteSocieteById(idsociete).subscribe((data:Societe[])=> {
		console.log(idsociete)
		this.societeService
  	.getSociete()
  	.subscribe((data:Societe[])=>{
			this.societes=data;
		
		})

	})

	this.societeService.DeleteUserById(idsociete).subscribe((data:Societe[])=> {

	})
     this.pointventeService.DeletePointeVenteByIdSociete(idsociete).subscribe((data:PointVente[])=> {
		 })
		 this.questionnaireService.DeleteQuestionnaireEByIdSociete(idsociete).subscribe((data:Questionnaire[])=> {
		 })
		 this.concurrentService.DeleteConcurrentIdSociete(idsociete).subscribe((data:Concurrent[])=> {
		 })

		 Swal.fire("Félicitations", "Enseigne supprimée avec succés", "success");

}

}
