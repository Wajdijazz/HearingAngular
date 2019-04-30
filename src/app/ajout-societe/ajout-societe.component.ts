import { Component, OnInit } from '@angular/core';
import {SocieteService} from '../societe/societe.service';
import {Societe} from "../societe/societe.interface";

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

  constructor(private societeService : SocieteService) { }

  ngOnInit() {
  }

  creerSociete(data:Societe){
  	this.societeService.createSociete(data);
  }

}
