import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { ChartService } from '../chart/chart.service';
import {MatDialog,MatDialogRef, MAT_DIALOG_DATA,MatDialogModule} from '@angular/material/dialog';
import { PointVente } from '../point-vente/point-vente.interface';
import { PointventeBySocieteService }  from '../services-speciales/pointvente-by-societe.service';

import { element } from '@angular/core/src/render3';
import { Nps } from './nps.intfeface';
import { NpsService } from './nps.service';
import * as CanvasJS from '../../assets/canvasjs';
import { from } from 'rxjs';




@Component({
  selector: 'app-nps',
  templateUrl: './nps.component.html',
  styleUrls: ['./nps.component.scss']
})



export class NpsComponent implements OnInit {

  magasins=[];
  
	magasinselected="";
	concurrents=[];
	concurrenselected="";
  expandedtile=-1;
  pointventes : PointVente [];
  Idselected: any;
  IdPointVenteSelected : any =null;
  pointvente : PointVente={
    id : null,
    id_societe:null,
     nom: '',
     adresse:'',
     concurrents:''   
  }
  id_societe : number;
  npsPointeVente : Nps[]
  npsSociete : Nps[]
  Nps_Magasin=[]
  Nps_Enseigne=[]
  Month=[]



  InfSix: any;
  InfOuit : any;
  InfDix : any;
  n : any=0;
  Nps_Val : any
  chart1 : any;
  


  constructor(private npsService : NpsService,   private pointventeBySocieteService : PointventeBySocieteService,public chartService : ChartService, private dialog:MatDialog) { }

  onSelected(Idselected): void{
    //NPS Selected Point vente
    this.npsService.getNps(Idselected,this.id_societe).subscribe((data:Nps[])=>{
      var InfSix
      var InfDix
      var dateTime;
      var Nps_Val
      var TotalReponse
     const monthNames = ["January", "February", "March", "April", "May", "June",
     "July", "August", "September", "October", "November", "December"
               ];
    this.npsPointeVente=data
    monthNames.forEach(element=>{
      InfSix=0
      InfDix=0
    const result = this.npsPointeVente.filter(word => monthNames[new Date(word.date_reponse).getMonth()]==element);
    TotalReponse=result.length
    result.forEach(el=>{ 
      var d = new Date(el.date_reponse)
       dateTime=monthNames[d.getMonth()]
       if(dateTime==element){ 
      let reponseNps=parseInt(el.reponse)
       if( (reponseNps>=0) && (reponseNps<=6)){ 
        InfSix= InfSix+1
       }  
      if(( reponseNps >= 9) &&( reponseNps <= 10)){     
        InfDix=InfDix+1
         }
        }
        } )  
     Nps_Val=(((InfDix/TotalReponse)-(InfSix/TotalReponse))*100) 
   this.Nps_Magasin.push({ label: element, y:Math.round(Nps_Val)})
    })
      var chart = new CanvasJS.Chart("chartContainer1", {
      theme: "light2",
      title:{
        text: "Net Promoter Score Magasin"
      },
      axisY:{
        includeZero: false
      },
      data: [{        
        type: "line",       
        dataPoints: this.Nps_Magasin
       
      }]
    });
 
    chart.render();
   this.Nps_Magasin=[]

  })
  }






  ngOnInit() {
    this.id_societe=2//  Todo Load from session Societe
    const Monthes = ["January", "February", "March", "April", "May", "June",
     "July", "August", "September", "October", "November", "December"
               ];
               Monthes.forEach(element=>{
               this.Month.push({ label: element, y : null})
               })

               //NPS Enseigne
    var chart = new CanvasJS.Chart("chartContainer1", {
      theme: "light2",
      title:{
        text: "Net Promoter Score Magasin"
      },
      axisY:{
        includeZero: false
      },
      data: [{        
        type: "line",  
        dataPoints: this.Month
     
       
      }]
    });
    chart.render();
    



    this.npsService.getNpsSociete(this.id_societe).subscribe((data:Nps[])=>{
      var InfSix=0
      var InfDix=0
      var dateTime;
      var Nps_Val
      var TotalReponse
     const monthNames = ["January", "February", "March", "April", "May", "June",
     "July", "August", "September", "October", "November", "December"
               ];
    this.npsSociete=data
    monthNames.forEach(element=>{
      InfSix=0
      InfDix=0
    const result = this.npsSociete.filter(word => monthNames[new Date(word.date_reponse).getMonth()]==element);
    TotalReponse=result.length
    result.forEach(el=>{
      
      var d = new Date(el.date_reponse)
       dateTime=monthNames[d.getMonth()]
       if(dateTime==element){
      let reponseNps=parseInt(el.reponse)
       if( (reponseNps>=0) && (reponseNps<=6)){ 
        InfSix= InfSix+1
       }  
       
      if(( reponseNps >= 9) &&( reponseNps <= 10)){     
        InfDix=InfDix+1
        
        }
        }
        } )  
     Nps_Val=0
  
     Nps_Val=(((InfDix/TotalReponse)-(InfSix/TotalReponse))*100)
     
   
    
   this.Nps_Enseigne.push({ label: element, y:Math.round(Nps_Val)})

   

    })

    
      var chart = new CanvasJS.Chart("chartContainer2", {
      theme: "light2",
      title:{
        text: "Net Promoter Score Enseigne"
      },
      axisY:{
        includeZero: false
      },
      data: [{        
        type: "line",       
        dataPoints: this.Nps_Enseigne

       
      }]
    });
 
    chart.render();
  
  })
    
      //TODO: pull from database   
      this.pointventeBySocieteService
      .getPointVenteBySociete(this.id_societe)
      .subscribe((data:PointVente[])=>{
        this.pointventes=data;
      //exemple
      this.pointventes.forEach(element=>{
    this.magasins.push({value: 'Magasin-0', viewValue: element.nom, Idmagasin:element.id})   
  //TODO: pull from database
  //  this.concurrents.push({value: 'Concurrent-0', viewValue: element.concurrents})
})
})




  }

 


    
  //TODO: aggrandissement, changer le css cette fonction fonctionne.
  zoom(tilenumber:number){
    if(this.expandedtile==tilenumber){
      this.expandedtile=-1;
    }else{
      this.expandedtile=tilenumber;
    }
  }
}

