import { Component, OnInit, NgZone} from '@angular/core';
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
import { PointVenteService } from '../point-vente/point-vente.service';
import { SocieteService } from '../societe/societe.service';
import { Societe } from '../societe/societe.interface';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { AmchartsService } from '../am-charts/amcharts.service';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-nps',
  templateUrl: './nps.component.html',
  styleUrls: ['./nps.component.scss']
})



export class NpsComponent implements OnInit {
  private chart: am4charts.XYChart;

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
  NpsInfSix=[];
  NpsInfDix= [];
  NpsInfOuit=[]
  id_selectedpointvenete: any;
  nom_Societe: String;
  
  Nps_values=[]
  Nps_values_Selected=[]
  userInfo: { id: any; id_societe: any; name: any; email: any; };

  constructor(    private userService:UserService,private zone: NgZone, amChartService: AmchartsService,private societeService :SocieteService,private pointeventeService: PointVenteService,private npsService : NpsService,   private pointventeBySocieteService : PointventeBySocieteService,public chartService : ChartService, private dialog:MatDialog) { }

  






  ngOnInit() {
   
    this.userService.getUserBoard().subscribe(
			data => {
			  this.userInfo = {
				id: data.user.id,
				id_societe:data.user.id_societe,
				name: data.user.name,
				email: data.user.email
			  };
		  
      
			this.id_societe=this.userInfo.id_societe
		
 /***************** get societe name by id *******************************/
 this.societeService.getSocieteById(this.id_societe).subscribe((data:Societe[])=>{
  data.forEach(element=>{
    this.nom_Societe=element.nom  
  
    /****************************** NPS Enseigne *********************************/

    this.npsService.getNpsSociete(this.id_societe).subscribe((data:Nps[])=>{
      var InfSix
      var InfOuit
      var InfDix
      var dateTime;
      var Nps_Val
      var TotalReponse
     const monthNames = ["January", "February", "March", "April", "May", "June",
     "July", "August", "September", "October", "November", "December"
               ];
    this.npsSociete=data
    var yearTime=new Date()
    var year = yearTime.getFullYear()
    monthNames.forEach(element=>{
      InfSix=0
      InfOuit=0
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
       
       if( (reponseNps>6) && (reponseNps<=8)){ 
        InfOuit= InfOuit+1
       } 

      if(( reponseNps >= 9) &&( reponseNps <= 10)){     
        InfDix=InfDix+1
        }
        }
        } )  
     Nps_Val=0
     Nps_Val=(((InfDix/TotalReponse)-(InfSix/TotalReponse))*100)
     

     var index =  this.Nps_Enseigne.findIndex(x => x.label==element+"-"+year,y=>y.Math.round(Nps_Val))
     if (index === -1){
      this.Nps_Enseigne.push({ label: element+"-"+year, y:Math.round(Nps_Val)})
      }
 


    
    var infDix=(InfDix/TotalReponse)*100
    var index=  this.NpsInfDix.findIndex(x => x.label==element+"-"+year,y=>y.infDix)
     if (index === -1){
      this.NpsInfDix.push({label: element+"-"+year,y:infDix})
    }


    var infSix=(InfSix/TotalReponse)*100
    var index=  this.NpsInfSix.findIndex(x => x.label==element+"-"+year,y=>y.infSix)
     if (index === -1){
      this.NpsInfSix.push({label: element+"-"+year,y:infSix})
    }

    var infouit=(InfOuit/TotalReponse)*100
  
    var index=  this.NpsInfOuit.findIndex(x => x.label==element+"-"+year,y=>y.infouit)
     if (index === -1){
      this.NpsInfOuit.push({label: element+"-"+year,y:infouit})
    }
    var index=  this.Nps_values.findIndex(x => x.label==element+"-"+year)
   if (index === -1){
   this.Nps_values.push({label: element+"-"+year,inf6 : infSix,inf8:infouit,inf10:infDix})
   }

   
    })
     /*************************************************************** Chart NPS Enseigne *********************************************/ 
  this.Histogramme("Evolution de Net Promoter Enseigne",this.Nps_values,"chartupperright")
  this.lineChart("Evolution de Net Promoter Enseigne",this.nom_Societe,this.Nps_Enseigne,"chartupperleft");
   
  
  
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
  })
})
      })
  }

 
  ngAfterViewInit(){
    
    const Monthes = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
              ];
    /*********************** Chart Init NPS Magasin **************************/
              var yearTime=new Date()
              var year = yearTime.getFullYear()
              Monthes.forEach(element=>{
              this.Month.push({ label: element+"-"+year, y : null})
              })
this.lineChart("Evolution du Net Promoter Magasin","",this.Month,"chartbottomleft");
  
this.Histogramme("Evolution du Net Promoter Magasin",this.Month,"chartbottomright");


  }
  
  onSelected(Idselected): void{
    //NPS Selected Point vente
    this.id_selectedpointvenete=Idselected
  var nom_selected_point_vente=''
   /********** Get pointe vente name By Id Selected *********/
  this.pointeventeService.getpointventbyid(this.id_selectedpointvenete).subscribe((data:PointVente[])=>{
  
    data.forEach(pointvente=>{
      nom_selected_point_vente=pointvente.nom

    this.npsService.getNps(Idselected,this.id_societe).subscribe((data:Nps[])=>{
      var InfSix
      var InfOuit;
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
      InfOuit=0
    const result = this.npsPointeVente.filter(word => monthNames[new Date(word.date_reponse).getMonth()]==element);
    var yearTime=new Date()
    var year = yearTime.getFullYear()
    TotalReponse=result.length
    result.forEach(el=>{ 
      var d = new Date(el.date_reponse)
       dateTime=monthNames[d.getMonth()]
       if(dateTime==element){ 
      let reponseNps=parseInt(el.reponse)
       if( (reponseNps>=0) && (reponseNps<=6)){ 
        InfSix= InfSix+1
       }  
       if( (reponseNps>6) && (reponseNps<=8)){ 
        InfOuit= InfOuit+1
       } 

      if(( reponseNps >= 9) &&( reponseNps <= 10)){     
        InfDix=InfDix+1
         }
        }
        } )  
        Nps_Val=0
     Nps_Val=(((InfDix/TotalReponse)-(InfSix/TotalReponse)) * 100) 

   var index =  this.Nps_Magasin.findIndex(x => x.label==element+"-"+year,y=>y.Math.round(Nps_Val))
    if (index === -1){
      this.Nps_Magasin.push({ label: element+"-"+year, y:Math.round(Nps_Val)})
    }

    var infDix=(InfDix/TotalReponse)*100
    var infSix=(InfSix/TotalReponse)*100
    var infouit=(InfOuit/TotalReponse)*100
  
    var index=  this.Nps_values_Selected.findIndex(x => x.label==element+"-"+year)
    if (index === -1){
    this.Nps_values_Selected.push({label: element+"-"+year,inf6 : infSix, inf8:infouit, inf10:infDix})
    }
 
    })
    

 /*   let chartImagePrixConcurrent=this.chartService.lineChart("Evolution de l'image prix Concurrents","Concurrents",this.Nps_Magasin,"chartbottomleft");  
  setTimeout(function(){ chartImagePrixConcurrent.render()});*/
    
  this.lineChart("Evolution du Net Promoter Magasin",nom_selected_point_vente,this.Nps_Magasin,"chartbottomleft");
  this.Histogramme("Evolution de Net Promoter Magasin",this.Nps_values_Selected,"chartbottomright")





   this.Nps_Magasin=[]
   this.Nps_values_Selected=[]

  })






    })
  })


  }
    
  lineChart(title,name,dataPoints,baliseid){
    am4core.useTheme(am4themes_animated);
  // Themes end
  
  // Create chart instance
  let chart = am4core.create(baliseid, am4charts.XYChart);
  chart.background.fill = am4core.color("white");
  chart.background.stroke = am4core.color("black");


  let titre = chart.titles.create();
  titre.text = title
  titre.fontSize = 20;
  
  // Add data
  chart.data = dataPoints
  
  // Create category axis
  let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "label";
  categoryAxis.renderer.inside = false;
  
  // Create value axis
  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.inside = false;
  valueAxis.renderer.minLabelPosition = 0.1;
  valueAxis.renderer.maxLabelPosition = 0.9;

  // Create series
  let series1 = chart.series.push(new am4charts.LineSeries());
  series1.dataFields.valueY = "y";
  series1.dataFields.categoryX = "label";
  series1.name = name;
  series1.strokeWidth = 2;
  series1.bullets.push(new am4charts.CircleBullet());
  series1.tooltipText = "NPS  {name} in  {categoryX}: {valueY}";
  series1.legendSettings.valueText = "{valueY}";
  series1.visible  = true;
  
  
  
  // Add chart cursor
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.behavior = "zoomY";
   
  // Add legend
  chart.legend = new am4charts.Legend();
  
    
  
    return chart
  }






  Histogramme(title,dataPoints,baliseid){

  

    //am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance

let chart = am4core.create(baliseid, am4charts.XYChart);
let titre = chart.titles.create();
titre.text = title
titre.fontSize = 20;
chart.background.fill = am4core.color("white");
chart.background.stroke = am4core.color("black");



chart.data = dataPoints

// Create axes
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "label";

categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;


let  valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;

valueAxis.renderer.labels.template.adapter.add("text", function(text) {
  return text + "%";
});




  let series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueY = "inf6";
  series.dataFields.categoryX = "label";
  series.name = "Note de 0 à 6";
  series.columns.template.tooltipText = "{name} : [bold]{valueY}[/] %";
  series.columns.template.fill = am4core.color("#ff0000"); 


  let series2= chart.series.push(new am4charts.ColumnSeries());
  series2.dataFields.valueY = "inf8";
  series2.dataFields.categoryX = "label";
  series2.name = "Note de 7 à 8";
  series2.columns.template.tooltipText = "{name} : [bold]{valueY}[/] % ";
  series2.columns.template.fill = am4core.color("#C0C0C0"); 



  let series3= chart.series.push(new am4charts.ColumnSeries());
  series3.dataFields.valueY = "inf10";
  series3.dataFields.categoryX = "label";
  series3.name = "Note de 9 à 10";
  series3.columns.template.tooltipText = "{name} : [bold]{valueY}[/] %";
  series3.columns.template.fill = am4core.color("#008000"); 




// Add legend
chart.legend = new am4charts.Legend();



  }

}

