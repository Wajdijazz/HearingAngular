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
  	
		




	}
}
