import { Component, OnInit } from '@angular/core';
import {PointVenteService} from './point-vente.service';
import {PointVente} from './point-vente.interface';
import {Router} from "@angular/router";
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-point-vente',
  templateUrl: './point-vente.component.html',
  styleUrls: ['./point-vente.component.scss']
})
export class PointVenteComponent implements OnInit {

	pointsvente : PointVente[];
  userInfo: { id: any; id_societe: any; name: any; email: any; };
  board: any;
  errorMessage: string;

  constructor(private userService:UserService,private pointventeService : PointVenteService, private router : Router) { }

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

  goToAddPointVente(){
  	this.router.navigateByUrl('/ajout-point-vente');
  }

}
