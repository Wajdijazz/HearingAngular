import { Component, OnInit } from '@angular/core';
import {PointVenteService} from '../point-vente/point-vente.service';
import {PointVente} from "../point-vente/point-vente.interface";
import { Societe } from '../societe/societe.interface';
import { SocieteService } from '../societe/societe.service'
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2'

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
  pointsventes: PointVente[];
  id_societe: any;

	
	
  constructor(private userService: UserService,private pointventeService: PointVenteService,private societeService : SocieteService) { }

  ngOnInit() {
	

		this.userService.getUserBoard().subscribe(
			data => {
			  this.userInfo = {
				id: data.user.id,
				id_societe:data.user.id_societe,
				name: data.user.name,
				email: data.user.email
				};
				this.societe=this.userInfo.name
				this.id_societe=this.userInfo.id_societe			
			})
			this.pointventeService
			.getPointVente()
			.subscribe((data1:PointVente[])=>{
					this.pointsventes=data1.filter((word =>word.id_societe==this.id_societe) );
     
				
	
			})


	  
  }


	ngAfterViewInit(){
	
	
			this.pointventeService
			.getPointVente()
			.subscribe((data1:PointVente[])=>{
					this.pointsventes=data1.filter((word =>word.id_societe==this.id_societe) );
     
				
	
			})
	}
	
	getPointeVente(data:PointVente){
		this.pointventeService
		.getPointVente()
		.subscribe((data1:PointVente[])=>{
				this.pointsventes=data1.filter((word =>word.id_societe==this.id_societe) );

		})
		Swal.fire("Félicitations", "Point de vente ajouté avec succés", "success");

	}
  creerPointVente(data:PointVente){
   
		

		data.id_societe=this.id_societe;

		this.pointventeService.createPointVente(data);


	  
  }


  DeletPointeVente(idPointeVente,pointvente){
    console.log(pointvente)
    this.pointventeService.DeletePointeVenteById(idPointeVente,this.id_societe).subscribe((data:PointVente[])=> {
 
      // show an alert to tell the user if product was created or not
      console.log(data);
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
      
          this.pointsventes=data1.filter((word =>word.id_societe==this.userInfo.id_societe) );
        
         this.board = data.description;
        },
        error => {
          this.errorMessage = `${error.status}: ${error.error}`;
        }
        );
    
  
      })
  
	 })
	 this.pointventeService.DeletePointeVenteByNom(pointvente).subscribe((data:PointVente[])=> {
	 })
	 this.pointventeService.DeletePointeVenteConcurrentByNom(pointvente).subscribe((data:PointVente[])=> {
	})
   Swal.fire("Félicitations", "Poit de vente supprimé avec succés", "success");

}

  
}