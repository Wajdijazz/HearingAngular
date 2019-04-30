import { Component, OnInit } from '@angular/core';
import {PointVenteService} from './point-vente.service';
import {PointVente} from './point-vente.interface';
import {Router} from "@angular/router";

@Component({
  selector: 'app-point-vente',
  templateUrl: './point-vente.component.html',
  styleUrls: ['./point-vente.component.scss']
})
export class PointVenteComponent implements OnInit {

	pointsvente : PointVente[];

  constructor(private pointventeService : PointVenteService, private router : Router) { }

  ngOnInit() {
  	this.pointventeService
  	.getPointVente()
  	.subscribe((data:PointVente[])=>{
  		console.log(data);
  		this.pointsvente=data;
    })
  }

  goToAddPointVente(){
  	this.router.navigateByUrl('/ajout-point-vente');
  }

}
