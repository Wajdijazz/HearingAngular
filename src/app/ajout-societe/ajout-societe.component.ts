import { Component, OnInit } from '@angular/core';
import {SocieteService} from '../societe/societe.service';
import {Societe} from "../societe/societe.interface";
import { SharedServiceService } from '../services-speciales/shared-service.service';
import { Router } from '@angular/router';

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

  constructor(private sharedservice:SharedServiceService,private societeService : SocieteService, private router: Router) { }

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
    this.societeService
  	.getSociete()
  	.subscribe((data1:Societe[])=>{

  		this.societes=data1;
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
			this.router.navigateByUrl(`signup`);


		})
	




	}

}
