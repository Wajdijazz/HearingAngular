import { Component, OnInit } from '@angular/core';
import {SocieteService} from './societe.service';
import {Societe} from './societe.interface';
import {Router} from "@angular/router";
import { SharedServiceService } from '../services-speciales/shared-service.service';

@Component({
  selector: 'app-societe',
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.scss']
})
export class SocieteComponent implements OnInit {

	societes: Societe[];
	constructor(private societeService: SocieteService,private sharedservice:SharedServiceService ,private router: Router) { }

  ngOnInit() {
  	this.societeService
  	.getSociete()
  	.subscribe((data:Societe[])=>{
  		console.log(data);
  		this.societes=data;
  	})
  }

  goToAddSociete(){
  	this.router.navigateByUrl('/ajout-societe');
	}
	

	getSociete(id_Societe){
		console.log(id_Societe)
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
			this.router.navigateByUrl(`/signup`);


		})
	




	}
}
