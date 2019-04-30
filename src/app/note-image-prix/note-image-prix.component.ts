import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { ChartService } from '../chart/chart.service';
import {MatDialog,MatDialogRef, MAT_DIALOG_DATA,MatDialogModule} from '@angular/material/dialog';
import { PointventeBySocieteService } from '../services-speciales/pointvente-by-societe.service';
import { PointVente } from '../point-vente/point-vente.interface';
import { NoteImagePrixService } from './note-image-prix.service';
import { NoteImagePrix } from './note-image-prix.infterface';

@Component({
  selector: 'app-note-image-prix',
  templateUrl: './note-image-prix.component.html',
  styleUrls: ['./note-image-prix.component.scss']
})



export class NoteImagePrixComponent implements OnInit {

	magasins=[];
	magasinselected="";
	concurrents=[];
	concurrenselected="";
  expandedtile=-1;
  pointventes : PointVente [];
  id_societe : number;
  NoteImagePrix : NoteImagePrix[]
  NoteImagePrixEnseigne=[]
  constructor(private noteimageprixService:NoteImagePrixService, private pointventeBySocieteService : PointventeBySocieteService,public chartService : ChartService, private dialog:MatDialog) { }

  ngOnInit() {
    this.id_societe=2//  Todo Load from session Societe

   //Prix Satfisfaction Enseigne
   this.noteimageprixService.getImageprixsociete(this.id_societe).subscribe((data:NoteImagePrix[])=>{
    this.NoteImagePrix=data
    console.log(this.NoteImagePrix)
      var TS
      var AS
      var PTS
      var PDTS
      var ScoreTheme

      var dateTime;
      var TotalReponse;
     const monthNames = ["January", "February", "March", "April", "May", "June",
     "July", "August", "September", "October", "November", "December"
               ];
    monthNames.forEach(element=>{
       TS=0
       AS=0
       PTS=0
       PDTS=0
       

  const result = this.NoteImagePrix.filter(word => monthNames[new Date(word.date_reponse).getMonth()]==element);
  TotalReponse=result.length
    result.forEach(el=>{
      
      var d = new Date(el.date_reponse)
       dateTime=monthNames[d.getMonth()]
       if(dateTime==element){

         if(el.reponse=="Très satisfait"){
           TS=TS+1
          }

         if(el.reponse=="Assez satisfait"){
          AS=AS+1
          }

        if(el.reponse=="Pas tellement satisfait"){
          PTS=PTS+1
          }
         
         if(el.reponse=="Pas du tout satisfait"){
          PDTS=PDTS+1
          }
       }
    })
    console.log(TotalReponse)
    ScoreTheme=0

    //arrondi (%TS X 3 + %ASX 1 + %PTS X -2 + %PDTS X -6) x 100
    var TSVAL=(TS/TotalReponse)*3
    console.log(TSVAL)
    var ASVAL=(AS/TotalReponse)*1
    console.log(ASVAL)

    var PTSVAL=(PTS/TotalReponse)*(-2)
    console.log(PTSVAL)

    var PDTSVAL=(PDTS/TotalReponse)*(-6)
    console.log(PDTSVAL)


    ScoreTheme=((((TS/TotalReponse)*3)+((AS/TotalReponse)*1)+((PTS/TotalReponse)*(-2))+((PDTS/TotalReponse)*(-6)))*100)
    console.log(element)
    this.NoteImagePrixEnseigne.push({ label: element, y:5})
   
    })




  let chartImagePrixEnseigen=this.chartService.lineChart("Evolution de l'image prix Enseigne",this.NoteImagePrixEnseigne,"chartupperleft");
setTimeout(function(){ chartImagePrixEnseigen.render(); }, 100);




   })



       




   // Pointe vente and concurrent from dataBase
    this.pointventeBySocieteService
      .getPointVenteBySociete(this.id_societe)
      .subscribe((data:PointVente[])=>{
        this.pointventes=data;
      this.pointventes.forEach(element=>{
    this.magasins.push({value: 'Magasin-0', viewValue: element.nom, Idmagasin:element.id})   
   this.concurrents.push({value: 'Concurrent-0', viewValue: element.concurrents})
})
})

      
  
  }

  ngAfterViewInit(){

  //TODO: pull from database et mettre dans ngOnInit()
  let points1=[
        { x: new Date(2012, 0, 1), y: 128 },
        { x: new Date(2012, 1, 1), y: 100 },
        { x: new Date(2012, 2, 1), y: 101 },
        { x: new Date(2012, 3, 1), y: 101 },
        { x: new Date(2012, 4, 1), y: 106},
        { x: new Date(2012, 5, 1), y: 107 },
        { x: new Date(2012, 6, 1), y: 111 },
        { x: new Date(2012, 7, 1), y: 93 },
        { x: new Date(2012, 8, 1), y: 98 },
        { x: new Date(2012, 9, 1), y: 102 },
        { x: new Date(2012, 10, 1), y: 106 },
        { x: new Date(2012, 11, 1), y: 102 },
      ]
  let chart1=this.chartService.lineChart("Evolution de l'image prix",points1,"chartupperleft");

  //Rends le graphique après un délai de 100ms pour attendre que la taille de la div soit définie par Angular
  setTimeout(function(){ chart1.render(); }, 100);

  //TODO: pull from database et mettre dans ngOnInit()
  let points2=[
        { x: new Date(2012, 0, 1), y: 112 },
        { x: new Date(2012, 1, 1), y: 110 },
        { x: new Date(2012, 2, 1), y: 107 },
        { x: new Date(2012, 3, 1), y: 104 },
        { x: new Date(2012, 4, 1), y: 113 },
        { x: new Date(2012, 5, 1), y: 94 },
        { x: new Date(2012, 6, 1), y: 91 },
        { x: new Date(2012, 7, 1), y: 81 },
        { x: new Date(2012, 8, 1), y: 81 },
        { x: new Date(2012, 9, 1), y: 121 },
        { x: new Date(2012, 10, 1), y: 96 },
        { x: new Date(2012, 11, 1), y: 80 },
      ]
  let chart2=this.chartService.lineChart("Evolution du Net Promoter",points2,"chartbottomleft");

  //Rends le graphique après un délai de 100ms pour attendre que la taille de la div soit définie par Angular
  setTimeout(function(){ chart2.render(); }, 100);
  
  //TODO: pull from database et mettre dans ngOnInit()
  let points11=[
        { x: new Date(2012, 0, 1), y: -2 },
        { x: new Date(2012, 1, 1), y: 0 },
        { x: new Date(2012, 2, 1), y: 16 },
        { x: new Date(2012, 3, 1), y: 11 },
        { x: new Date(2012, 4, 1), y: 0 },
        { x: new Date(2012, 5, 1), y: 3 },
        { x: new Date(2012, 6, 1), y: 5 },
        { x: new Date(2012, 7, 1), y: 13 },
        { x: new Date(2012, 8, 1), y: 8 },
        { x: new Date(2012, 9, 1), y: 4 },
        { x: new Date(2012, 10, 1), y: 19 },
        { x: new Date(2012, 11, 1), y: 34 },
      ]
      //TODO: pull from database et mettre dans ngOnInit()
  let points12=[
        { x: new Date(2012, 0, 1), y: 13 },
        { x: new Date(2012, 1, 1), y: 9 },
        { x: new Date(2012, 2, 1), y: 10 },
        { x: new Date(2012, 3, 1), y: 7 },
        { x: new Date(2012, 4, 1), y: -3 },
        { x: new Date(2012, 5, 1), y: 2 },
        { x: new Date(2012, 6, 1), y: -1 },
        { x: new Date(2012, 7, 1), y: -1 },
        { x: new Date(2012, 8, 1), y: 27 },
        { x: new Date(2012, 9, 1), y: 23 },
        { x: new Date(2012, 10, 1), y: 18 },
        { x: new Date(2012, 11, 1), y: 18 },
      ]
      //TODO: pull from database et mettre dans ngOnInit()
  let points13=[
        { x: new Date(2012, 0, 1), y: 22 },
        { x: new Date(2012, 1, 1), y: 4 },
        { x: new Date(2012, 2, 1), y: 18 },
        { x: new Date(2012, 3, 1), y: 14 },
        { x: new Date(2012, 4, 1), y: -7},
        { x: new Date(2012, 5, 1), y: 2 },
        { x: new Date(2012, 6, 1), y: 7 },
        { x: new Date(2012, 7, 1), y: 3 },
        { x: new Date(2012, 8, 1), y: 8 },
        { x: new Date(2012, 9, 1), y: 12 },
        { x: new Date(2012, 10, 1), y: 28 },
        { x: new Date(2012, 11, 1), y: 23 },
      ]
  let chart3=this.chartService.tripleLineChart("Evolution du Net Promoter",points11,points12,points13,"chartupperright");  

  //Rends le graphique après un délai de 100ms pour attendre que la taille de la div soit définie par Angular
  setTimeout(function(){ chart3.render(); }, 100);

 // let chart4=this.chartService.tripleHistogramme("Evolution du Net Promoter","","chartbottomright");  

  //Rends le graphique après un délai de 100ms pour attendre que la taille de la div soit définie par Angular
  //setTimeout(function(){ chart4.render(); }, 100);

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

