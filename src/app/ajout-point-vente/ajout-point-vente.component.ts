import { Component, OnInit } from '@angular/core';
import {PointVenteService} from '../point-vente/point-vente.service';
import {PointVente} from "../point-vente/point-vente.interface";
import { Societe } from '../societe/societe.interface';
import { SocieteService } from '../societe/societe.service'

@Component({
  selector: 'app-ajout-point-vente',
  templateUrl: './ajout-point-vente.component.html',
  styleUrls: ['./ajout-point-vente.component.scss']
})
export class AjoutPointVenteComponent implements OnInit {


	societes : Societe[];

	pointvente: PointVente={
		id: null,
		id_societe:null, //A changer
		nom: '',
		adresse: '',
		concurrents: ''
	};

	
	
  constructor(private pointventeService: PointVenteService,private societeService : SocieteService) { }

  ngOnInit() {
	
		this.societeService
  	.getSociete()
  	.subscribe((data:Societe[])=>{
  		console.log(data);
			this.societes=data;
			
  	})




	}
	

  creerPointVente(data:PointVente){
		data.id_societe=Number(data.id_societe);
	  this.pointventeService.createPointVente(data);
	  
  }

}
