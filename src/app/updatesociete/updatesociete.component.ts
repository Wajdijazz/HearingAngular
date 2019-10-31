import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../services-speciales/shared-service.service';
import { SocieteService } from '../societe/societe.service';
import { Societe } from '../societe/societe.interface';
import { Update } from './update';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-updatesociete',
  templateUrl: './updatesociete.component.html',
  styleUrls: ['./updatesociete.component.scss']
})
export class UpdatesocieteComponent implements OnInit {
  societeName: any;
  id_societe: any;

societe : Societe ={
id:null,
nom : '',
type_abonnement : '',
date_facturation : null

};

update: Update={

name:''
  
}


  abonnement: any;
  dateFact: any;
  constructor(private sharedservice:SharedServiceService,private societeService : SocieteService,private router: Router) { }

  ngOnInit() {
    
    
    this.societeName= this.sharedservice.getSociete()
    this.id_societe=this.sharedservice.getIdSociete()
    this.abonnement=this.sharedservice.getTypeSociete()
    this.dateFact=this.sharedservice.getdateSociete()
    console.log(this.dateFact)


  }
  updatetSocieteView(data:Societe){
    if(data.nom==''){
    this.societe.nom= this.societeName
    }

    if(data.type_abonnement==''){
      this.societe.type_abonnement= this.abonnement
      }

      if(data.date_facturation==null){
        this.societe.date_facturation= this.dateFact
        }
this.societeService.modifierSocieteById(this.id_societe,data).subscribe((data1:Societe[])=>{

})

this.update.name=data.nom
this.societeService.UpdateSocieteuserById(this.id_societe,this.update).subscribe((data1:Societe[])=>{

})
Swal.fire("Félicitations", "Enseigne modifiée avec succés", "success");

this.router.navigateByUrl(`/admin/ajout-societe`);
  }
}
