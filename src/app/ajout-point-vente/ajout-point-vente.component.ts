import { Component, OnInit } from '@angular/core';
import {PointVenteService} from '../point-vente/point-vente.service';
import {PointVente} from "../point-vente/point-vente.interface";
import { Societe } from '../societe/societe.interface';
import { SocieteService } from '../societe/societe.service'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-ajout-point-vente',
  templateUrl: './ajout-point-vente.component.html',
  styleUrls: ['./ajout-point-vente.component.scss']
})
export class AjoutPointVenteComponent implements OnInit {


	societes : Societe[];

	pointvente: PointVente={
		id: null,
		id_societe:null, 
		nom: '',
		adresse: '',
	};
	userInfo: { id: any; id_societe: any; name: any; email: any; };
	board: any;
  errorMessage: string;
  societe:any
  pointsvente: PointVente[];

	
	
  constructor(private userService: UserService,private pointventeService: PointVenteService,private societeService : SocieteService) { }

  ngOnInit() {
	

    this.pointventeService
  	.getPointVente()
  	.subscribe((data1:PointVente[])=>{
    this.userService.getUserBoard().subscribe(
			data => {
			  this.userInfo = {
				id: data.user.id,
				id_societe:data.user.id_societe,
				name: data.user.name,
				email: data.user.email
			  };
		
        this.pointsvente=data1.filter((word =>word.id_societe==this.userInfo.id_societe) );
        console.log(this.pointsvente)
			
		   this.board = data.description;
			},
			error => {
			  this.errorMessage = `${error.status}: ${error.error}`;
			}
		  );
  

    })



	  
  }


	
	

  creerPointVente(data:PointVente){

		data.id_societe=this.userInfo.id_societe;
    this.pointventeService.createPointVente(data);

    this.pointventeService
  	.getPointVente()
  	.subscribe((data1:PointVente[])=>{
    this.userService.getUserBoard().subscribe(
			data => {
			  this.userInfo = {
				id: data.user.id,
				id_societe:data.user.id_societe,
				name: data.user.name,
				email: data.user.email
			  };
		
        this.pointsvente=data1.filter((word =>word.id_societe==this.userInfo.id_societe) );
			
		   this.board = data.description;
			},
			error => {
			  this.errorMessage = `${error.status}: ${error.error}`;
			}
		  );
  

    })



	  
  }

}