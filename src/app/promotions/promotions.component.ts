import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { ChartService } from '../chart/chart.service';
import {MatDialog,MatDialogRef, MAT_DIALOG_DATA,MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.scss']
})
export class PromotionsComponent implements OnInit {

	magasins=[];
	magasinselected="";
	concurrents=[];
	concurrenselected="";
  expandedtile=-1;

  constructor( public chartService : ChartService, private dialog:MatDialog) { }

  ngOnInit() {
      //TODO: pull from database
    this.magasins=[
    {value: 'Magasin-0', viewValue: 'Marie Blanchère'},
    {value: 'Magasin-1', viewValue: '3Fontaines'},
    {value: 'Magasin-2', viewValue: 'Art de vivre'}
  ];
  //TODO: pull from database
    this.concurrents=[
    {value: 'Concurrent-0', viewValue: 'Carrefour'},
    {value: 'Concurrent-1', viewValue: 'Auchan'},
    {value: 'Concurrent-2', viewValue: 'Booper'}
  ];
  }

  ngAfterViewInit(){

  //TODO: pull from database et mettre dans ngOnInit()
  let points1=[
        { x: new Date(2012, 0, 1), y: 10 },
        { x: new Date(2012, 1, 1), y: 9 },
        { x: new Date(2012, 2, 1), y: 10 },
        { x: new Date(2012, 3, 1), y: 10 },
        { x: new Date(2012, 4, 1) },
        { x: new Date(2012, 5, 1), y: 6 },
        { x: new Date(2012, 6, 1), y: 4 },
        { x: new Date(2012, 7, 1), y: 5 },
        { x: new Date(2012, 8, 1), y: 9 },
        { x: new Date(2012, 9, 1), y: 14 },
        { x: new Date(2012, 10, 1), y: 17 },
        { x: new Date(2012, 11, 1), y: 25 },
      ]
  let chart1=this.chartService.lineChart("Evolution de la perception Promotions",points1,"chartupperleft");

  //Rends le graphique après un délai de 100ms pour attendre que la taille de la div soit définie par Angular
  setTimeout(function(){ chart1.render(); }, 100);

  //TODO: pull from database et mettre dans ngOnInit()
  let points2=[
        { x: new Date(2012, 0, 1), y: 14 },
        { x: new Date(2012, 1, 1), y: 33 },
        { x: new Date(2012, 2, 1), y: 34 },
        { x: new Date(2012, 3, 1), y: 20 },
        { x: new Date(2012, 4, 1) },
        { x: new Date(2012, 5, 1), y: 27 },
        { x: new Date(2012, 6, 1), y: 38 },
        { x: new Date(2012, 7, 1), y: 27 },
        { x: new Date(2012, 8, 1), y: 34 },
        { x: new Date(2012, 9, 1), y: 54 },
        { x: new Date(2012, 10, 1), y: 54 },
        { x: new Date(2012, 11, 1), y: 56 },
      ]
  let chart2=this.chartService.lineChart("Evolution de la perception Promotions",points2,"chartbottomleft");

  //Rends le graphique après un délai de 100ms pour attendre que la taille de la div soit définie par Angular
  setTimeout(function(){ chart2.render(); }, 100);
  
  //let chart3=this.chartService.tripleHistogramme("Par rapport à la concurrence","","chartupperright");  

  //Rends le graphique après un délai de 100ms pour attendre que la taille de la div soit définie par Angular
  //setTimeout(function(){ chart3.render(); }, 100);

  //let chart4=this.chartService.tripleHistogramme("Par rapport à la concurrence","","chartbottomright");  

  //Rends le graphique après un délai de 100ms pour attendre que la taille de la div soit définie par Angular
 // setTimeout(function(){ chart4.render(); }, 100);

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
