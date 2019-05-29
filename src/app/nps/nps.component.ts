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
import { ReponsePointeVente } from '../question/reponse-pointe-vente.interface';
import { PointeventereponseService } from '../services-speciales/pointeventereponse.service';



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
  chart1 : any;
  NpsInfSix=[];
  NpsInfDix= [];
  NpsInfOuit=[]
  id_selectedpointvenete: any;
  nom_Societe: String;
  
  Nps_values=[]
  Nps_values_Selected=[]
  Nps_Val:any
  userInfo: { id: any; id_societe: any; name: any; email: any; };

  constructor( private pointeventereponseService:PointeventereponseService,   private userService:UserService,private zone: NgZone, amChartService: AmchartsService,private societeService :SocieteService,private pointeventeService: PointVenteService,private npsService : NpsService,   private pointventeBySocieteService : PointventeBySocieteService,public chartService : ChartService, private dialog:MatDialog) { }

  






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
      this.nom_Societe=this.userInfo.name
      
		
      this.pointeventereponseService .getPointeventeName().subscribe((datap:ReponsePointeVente[])=>{
        var datapointevenete=datap.filter(word => word.id_societe==this.id_societe && word. Fin_Sondage !=null);
          
       datapointevenete.forEach(element=>{
        var index1 = this.magasins.findIndex(x => x.viewValue==element.nom)
            if (index1=== -1){
              this.magasins.push({value: 'Magasin-0', viewValue: element.nom, Idmagasin:element.id})   
            }
            else console.log("object already exists")
  })
  })

  
    /****************************** NPS Enseigne *********************************/

    this.npsService.getNpsSociete(this.id_societe).subscribe((data1:Nps[])=>{
      console.log(data1)
      var InfSix
      var InfOuit
      var InfDix
      var dateTime;
    
      var TotalReponse
     const monthNames = ["January", "February", "March", "April", "May", "June",
     "July", "August", "September", "October", "November", "December"
               ];
    this.npsSociete=data1
    var yearTime=new Date()
    var year = yearTime.getFullYear()
    monthNames.forEach(element=>{
      InfSix=0
      InfOuit=0
      InfDix=0
    const result = this.npsSociete.filter(word => monthNames[new Date(word.date_reponse).getMonth()]==element);
    console.log(result)
  
    TotalReponse=result.length
    result.forEach(el=>{
      
      var d = new Date(el.date_reponse)
   
       dateTime=monthNames[d.getMonth()]
       if(dateTime==element){
      var reponseNps=el.reponse
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
     

   
   
       

    var infDix=(InfDix/TotalReponse)*100
    var infSix=(InfSix/TotalReponse)*100
    var infouit=(InfOuit/TotalReponse)*100
        this.Nps_Val=infDix-infSix
        console.log(this.Nps_Val)
      
if(this.Nps_Val==0){
  this.Nps_Enseigne.push({ label: element+"-"+year, y:0})

}
    var index1 =  this.Nps_Enseigne.findIndex(x => x.label==element+"-"+year,y=>y.Math.round(this.Nps_Val))
    if (index1=== -1){
     this.Nps_Enseigne.push({ label: element+"-"+year, y:Math.round(this.Nps_Val)})
     }
  
    var index=  this.Nps_values.findIndex(x => x.label==element+"-"+year)
   if (index === -1){
   this.Nps_values.push({label: element+"-"+year,inf6 : Math.round(infSix), inf8: Math.round(infouit),inf10: Math.round(infDix)})
   }

    })
     /*************************************************************** Chart NPS Enseigne *********************************************/ 
  this.Histogramme(this.Nps_values,"chartupperright")
 this.lineChart(this.nom_Societe,this.Nps_Enseigne,"chartupperleft");
   
  
  
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
this.lineChart("",this.Month,"chartbottomleft");
  
this.Histogramme(this.Month,"chartbottomright");


  }
  
  onSelected(pointevente): void{

 
  

    this.npsService.getNps(this.id_societe,pointevente).subscribe((data:ReponsePointeVente[])=>{
      var InfSix
      var InfOuit;
      var InfDix
      var dateTime;
      var Nps_Val
      var TotalReponse
     const monthNames = ["January", "February", "March", "April", "May", "June",
     "July", "August", "September", "October", "November", "December"
               ];
    monthNames.forEach(element=>{
      InfSix=0
      InfDix=0
      InfOuit=0
    const result = data.filter(word => monthNames[new Date(word.date_reponse_pointevente).getMonth()]==element && word.Fin_Sondage!=null);
    var yearTime=new Date()
    var year = yearTime.getFullYear()
    TotalReponse=result.length
    result.forEach(el=>{ 
      var d = new Date(el.date_reponse_pointevente)
       dateTime=monthNames[d.getMonth()]
       if(dateTime==element){ 
      let reponseNps=el.Fin_Sondage
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
     if(Nps_Val==0){
      this.Nps_Enseigne.push({ label: element+"-"+year, y:0})
    
    }
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
    
  this.lineChart(pointevente,this.Nps_Magasin,"chartbottomleft");
  this.Histogramme(this.Nps_values_Selected,"chartbottomright")





   this.Nps_Magasin=[]
   this.Nps_values_Selected=[]

  })









  }
    



  lineChart(name1,dataPoints,baliseid){
    am4core.useTheme(am4themes_animated);
  // Themes end
  // Create chart instance
  let chart = am4core.create(baliseid, am4charts.XYChart);
  
  // Add data

  chart.data = dataPoints
  let titre = chart.titles.create();
  titre.fontSize = 20;


  let label = chart.createChild(am4core.Label);
//  label.text=title
  label.fontSize = 20;
label.align = "center";
label.isMeasured = false;
  label.x = 150;
label.y = -20

  let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "label";
  categoryAxis.renderer.inside = false;
  categoryAxis.renderer.line.strokeOpacity = 1;
  categoryAxis.renderer.line.strokeWidth = 2;
  categoryAxis.renderer.line.stroke = am4core.color("#111");



  
  // Create value axis
  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

  valueAxis.renderer.inside = true;



  valueAxis.renderer.minLabelPosition = 0.1;
  valueAxis.renderer.maxLabelPosition =0.9;

  valueAxis.renderer.line.strokeOpacity = 1;
  valueAxis.renderer.line.strokeWidth = 2;
  valueAxis.renderer.line.stroke = am4core.color("#111");
  
  // Create series
  let series1 = chart.series.push(new am4charts.LineSeries());
  series1.dataFields.valueY = "y";
  series1.dataFields.categoryX = "label";
  series1.name = name1;
  series1.strokeWidth = 2;
  series1.bullets.push(new am4charts.CircleBullet());
  series1.tooltipText = " {name} : {valueY}";
  series1.legendSettings.valueText = "{valueY}";
  series1.visible  = true;
  series1.fill=am4core.color("#f44336")
  series1.stroke=am4core.color("#f44336")



  
  
  
  // Add chart cursor
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.behavior = "zoomY";
   
  // Add legend
  chart.legend = new am4charts.Legend();

  
    
  
    return chart
  }






  Histogramme(dataPoints,baliseid){

  

    //am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance

let chart = am4core.create(baliseid, am4charts.XYChart);
let titre = chart.titles.create();
titre.fontSize = 20;




chart.data = dataPoints

// Create axes
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "label";

categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;
categoryAxis.renderer.line.strokeOpacity = 1;
categoryAxis.renderer.line.strokeWidth = 2;
categoryAxis.renderer.line.stroke = am4core.color("#111");

let  valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.renderer.line.strokeOpacity = 1;
valueAxis.renderer.line.strokeWidth = 2;
valueAxis.renderer.line.stroke = am4core.color("#111");

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

