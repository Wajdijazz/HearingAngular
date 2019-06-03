import { Component, OnInit } from '@angular/core';
import { SocieteService } from '../societe/societe.service';
import { Societe } from '../societe/societe.interface';
import { PointeventereponseService } from '../services-speciales/pointeventereponse.service';
import { ReponsePointeVente } from '../question/reponse-pointe-vente.interface';

@Component({
  selector: 'app-facturation',
  templateUrl: './facturation.component.html',
  styleUrls: ['./facturation.component.scss']
})
export class FacturationComponent implements OnInit {
  year: number;
  societes: Societe[];
  month: string;
  abonnement_mensuel1: number;
  abonnement_mensuel2: number;
  constructor(private pointeventereponseService:PointeventereponseService,private societeService:SocieteService) { }
  forfait:any
  abonnement_mensuel:any
  prix_reponse_traite:any
  equivalent_annuel:any
  
  ngOnInit() {
    var c=0
    var yearTime=new Date()
  this.year = yearTime.getFullYear()
  this.societeService
  .getSociete()
  .subscribe((data:Societe[])=>{
    console.log(data);
    this.societes=data;
    this.societes.forEach(societe=>{
      var idsociete=societe.id
      this.pointeventereponseService.getReponseEnseigne(idsociete).subscribe((data1:ReponsePointeVente[])=>{

        var  TotalReponse
        this.equivalent_annuel=0

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
              ];
   monthNames.forEach(element=>{
     this.month=element
   
 

    const result=data1.filter(word => monthNames[new Date(word.date_reponse_pointevente).getMonth()]==element );
    TotalReponse=result.length
 
    if(TotalReponse<=1){
      this.forfait=1

      this.prix_reponse_traite=0.2 
      this.equivalent_annuel=this.equivalent_annuel+(TotalReponse*this.prix_reponse_traite)
      console.log(this.equivalent_annuel)


    }
   else if(TotalReponse>1 && TotalReponse <= 2){
      this.forfait=2

      this.prix_reponse_traite=0.18
      this.equivalent_annuel=this.equivalent_annuel+(TotalReponse*this.prix_reponse_traite)
      console.log(this.equivalent_annuel)

    }
    else if(TotalReponse>2 && TotalReponse <= 5){
      this.forfait=2
    
      this.prix_reponse_traite=0.160
      this.equivalent_annuel=this.equivalent_annuel+(TotalReponse*this.prix_reponse_traite)
      console.log(this.equivalent_annuel)

    }
    else if(TotalReponse>5 && TotalReponse <= 10){
      this.forfait=2
    
      this.prix_reponse_traite=0.140
      this.equivalent_annuel=this.equivalent_annuel+(TotalReponse*this.prix_reponse_traite)
      console.log(this.equivalent_annuel)

    }
    else if(TotalReponse>10 && TotalReponse <= 20){
      this.forfait=2
    
      this.prix_reponse_traite=0.120
      this.equivalent_annuel=this.equivalent_annuel+(TotalReponse*this.prix_reponse_traite)
      console.log(this.equivalent_annuel)

    }
    else if(TotalReponse>20 && TotalReponse <= 50){
      this.forfait=2
    
      this.prix_reponse_traite=0.100
      this.equivalent_annuel=this.equivalent_annuel+(TotalReponse*this.prix_reponse_traite)
      console.log(this.equivalent_annuel)

    }
    else if(TotalReponse>50 && TotalReponse <= 100){
      this.forfait=2
    
      this.prix_reponse_traite=0.100
      this.equivalent_annuel=this.equivalent_annuel+(TotalReponse*this.prix_reponse_traite)
      console.log(this.equivalent_annuel)

    }

  
  



   })
   console.log(this.equivalent_annuel)



      })


    })
  })
  }

}
