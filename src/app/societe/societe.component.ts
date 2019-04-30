import { Component, OnInit } from '@angular/core';
import {SocieteService} from './societe.service';
import {Societe} from './societe.interface';
import {Router} from "@angular/router";

@Component({
  selector: 'app-societe',
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.scss']
})
export class SocieteComponent implements OnInit {

	societes: Societe[];
	constructor(private societeService: SocieteService, private router: Router) { }

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
}
