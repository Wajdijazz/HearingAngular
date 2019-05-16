import { Component, OnInit,NgZone } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { ChartService } from '../chart/chart.service';
import {MatDialog,MatDialogRef, MAT_DIALOG_DATA,MatDialogModule} from '@angular/material/dialog';
import { PointventeBySocieteService } from '../services-speciales/pointvente-by-societe.service';
import { PointVente } from '../point-vente/point-vente.interface';
import { NoteImagePrixService } from './note-image-prix.service';
import { NoteImagePrix } from './note-image-prix.infterface';
import * as CanvasJS from '../../assets/canvasjs';
import { Societe } from '../societe/societe.interface';
import { SocieteService } from '../societe/societe.service';
import { element } from '@angular/core/src/render3';
import { IfStmt, WrappedNodeExpr } from '@angular/compiler';
import { PointVenteService } from '../point-vente/point-vente.service';
import { ConcurrentService } from '../services-speciales/concurrent.service';
import { ImagePrixConcurrent } from './image-prix-concurrent.interface';
import { ChartDataItem } from '@amcharts/amcharts4/charts';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


@Component({
  selector: 'app-note-image-prix',
  templateUrl: './note-image-prix.component.html',
  styleUrls: ['./note-image-prix.component.scss']
})



export class NoteImagePrixComponent implements OnInit {
  societe : Societe[]
	magasins=[];
	magasinselected="";
	concurrents=[];
	concurrenselected="";
  expandedtile=-1;
  pointventes : PointVente [];
  id_societe : number;
  NoteImagePrix : NoteImagePrix[]
  NoteImagePrixConcurrent: ImagePrixConcurrent[]
 


  NoteImagePrixEnseigne=[]
  NoteImagePrixMagasin=[]
  NoteImagePrixEnseigneconcurrent1=[]
  concurrent1 : any
  NoteImagePrixEnseigneconcurrent2=[]
  concurrent2 : any 

 NoteImagePrixEnseigneconcurrent3=[]
  concurrent3 : any 

  NoteImagePrixEnseigneconcurrent4=[]
  concurrent4 : any 

  NoteImagePrixEnseigneconcurrent5=[]
  concurrent5: any 

  NoteImagePrixEnseigneconcurrent6=[]
  concurrent6 : any 

  NoteImagePrixMagasinConcurrent=[]

  Month=[]
  Month1=[]
  nom_Societe: any;
  nom_concurrent : any
  id_selectedpointvenete : any
  reponse_concurrent=[]
  concurrent_list=[]
  a=[]

 chartdata=[]
  constructor(private zone: NgZone,private concurrentService: ConcurrentService ,  private pointeventeService: PointVenteService, private societeService :SocieteService, private noteimageprixService:NoteImagePrixService, private pointventeBySocieteService : PointventeBySocieteService,public chartService : ChartService, private dialog:MatDialog) { }

  ngOnInit() {
    this.id_societe=2//  Todo Load from session Societe

     /***************** get societe name by id *******************************/
     this.societeService.getSocieteById(this.id_societe).subscribe((data:Societe[])=>{
       this.societe=data
       this.societe.forEach(element=>{
         this.nom_Societe=element.nom
      

   /***************** Pointe vente  from dataBase ******************/
    this.pointventeBySocieteService .getPointVenteBySociete(this.id_societe).subscribe((data:PointVente[])=>{
        this.pointventes=data;
      this.pointventes.forEach(element=>{
      this.nom_concurrent=element.concurrents 
      var index1 = this.magasins.findIndex(x => x.viewValue==element.nom)
          if (index1=== -1){
            this.magasins.push({value: 'Magasin-0', viewValue: element.nom, Idmagasin:element.id})   
          }
          else console.log("object already exists")
})
})

   /***************** Concurrent   from dataBase ******************/
   this.concurrentService.getConcurrent().subscribe((data:ImagePrixConcurrent[])=>{
      data.forEach(concurrent => {
    this.nom_concurrent=concurrent.concurrent
    var index = this.concurrents.findIndex(x => x.viewValue==this.nom_concurrent)
    if (index === -1){
     this.concurrents.push({value: 'Concurrent-0', viewValue:this.nom_concurrent })
    }
    else console.log("object already exists")
  
  })
})

   /******************************************************* Image prix Satisfaction enseigne et Calcul **************************************************/
      this.noteimageprixService.getImageprixsociete(this.id_societe).subscribe((data:NoteImagePrix[])=>{
        
     this.NoteImagePrix=data
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
  var yearTime=new Date()
  var year = yearTime.getFullYear()
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
        if(el.reponse=="Pas très satisfait"){
          PTS=PTS+1
          }
         if(el.reponse=="Pas du tout satisfait"){
          PDTS=PDTS+1
          }
       }
    })
    ScoreTheme=0
    ScoreTheme=((((TS/TotalReponse)*3)+((AS/TotalReponse)*1)+((PTS/TotalReponse)*(-2))+((PDTS/TotalReponse)*(-6)))*100)


    var index1 = this.magasins.findIndex(x => x.viewValue==element+"-"+year,y=> y.Math.round(ScoreTheme))
    if (index1=== -1){
      this.NoteImagePrixEnseigne.push({ label: element+"-"+year, y:Math.round(ScoreTheme)}) 
    }
    })
    this.lineChart1("Evolution de l'image prix Enseigne", this.nom_Societe,this.NoteImagePrixEnseigne,"chartupperleft")

  });

   /*************************************************************** Chart Image prix Enseigne *********************************************/ 
  /*let chartImagePrixEnseigen=this.chartService.lineChart("Evolution de l'image prix Enseigne",  this.nom_Societe,this.NoteImagePrixEnseigne,"chartupperleft");
   setTimeout(function(){ chartImagePrixEnseigen.render(); }, 100);
   */
  
   /****************************************** Image Prix  Enseigne concurrent et calcul ***************************************************/

   this.noteimageprixService.getImageprixConcurrent(this.id_societe).subscribe((data:ImagePrixConcurrent[])=>{


   this.NoteImagePrixConcurrent=data
    var tab_concurrent=[]
    var i=0
    data.forEach(concurrent=>{
      console.log(concurrent)

      var index1 = tab_concurrent.findIndex(x => x.concurrent==concurrent.concurrent)
      if (index1=== -1){
     
        tab_concurrent.push({index :++i,concurrent :concurrent.concurrent})
      }
  
  })


    var M;
    var AMN;
    var P;
    var dateTime;
    var TotalReponse;
    var ScoreRelatif1
    var ScoreRelatif2
    var ScoreRelatif3
    var ScoreRelatif4
    var ScoreRelatif5

    var yearTime=new Date()
var year = yearTime.getFullYear()

   const monthNames = ["January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"
             ];
  monthNames.forEach(element=>{
    tab_concurrent.forEach(ta=>{
      M=0
      AMN=0
      P=0
var res=this.NoteImagePrixConcurrent.filter((word => monthNames[new Date(word.date_reponse_concurrent).getMonth()]==element && word.concurrent==ta.concurrent && word.prix_concurrent != ""))
TotalReponse=res.length
if (ta.index==1)
{
  this.concurrent1=ta.concurrent
  res.forEach(el=>{  
    var d = new Date(el.date_reponse_concurrent)
     dateTime=monthNames[d.getMonth()]
     if(dateTime==element){
       if(el.concurrent==ta.concurrent){
  

      if(el.prix_concurrent=="Moins cher"){
         M=M+1

       }
        if(el.prix_concurrent=="Au même niveau de prix"){
          AMN=AMN+1
        }
       if(el.prix_concurrent=="Plus cher"){
          P=P+1
        }
     }
    }
    
    
  })
  
  ScoreRelatif1=0
  ScoreRelatif1=((M/TotalReponse)-(P/TotalReponse))*100

}



if (ta.index==2)
{
  this.concurrent2=ta.concurrent
  res.forEach(el=>{  
    var d = new Date(el.date_reponse_concurrent)
     dateTime=monthNames[d.getMonth()]
     if(dateTime==element){
       if(el.concurrent==ta.concurrent){
  

      if(el.prix_concurrent=="Moins cher"){
         M=M+1

       }
        if(el.prix_concurrent=="Au même niveau de prix"){
          AMN=AMN+1
        }
       if(el.prix_concurrent=="Plus cher"){
          P=P+1
        }
     }
    }
    
    
  })
  
  ScoreRelatif2=0
  ScoreRelatif2=((M/TotalReponse)-(P/TotalReponse))*100

}


if (ta.index==3)
{
  this.concurrent3=ta.concurrent
  res.forEach(el=>{  
    var d = new Date(el.date_reponse_concurrent)
     dateTime=monthNames[d.getMonth()]
     if(dateTime==element){
       if(el.concurrent==ta.concurrent){
  

      if(el.prix_concurrent=="Moins cher"){
         M=M+1

       }
        if(el.prix_concurrent=="Au même niveau de prix"){
          AMN=AMN+1
        }
       if(el.prix_concurrent=="Plus cher"){
          P=P+1
        }
     }
    }
    
    
  })
  
  ScoreRelatif3=0
  ScoreRelatif3=((M/TotalReponse)-(P/TotalReponse))*100



}

if (ta.index==4)
{
  this.concurrent4=ta.concurrent
  res.forEach(el=>{  
    var d = new Date(el.date_reponse_concurrent)
     dateTime=monthNames[d.getMonth()]
     if(dateTime==element){
       if(el.concurrent==ta.concurrent){
  

      if(el.prix_concurrent=="Moins cher"){
         M=M+1

       }
        if(el.prix_concurrent=="Au même niveau de prix"){
          AMN=AMN+1
        }
       if(el.prix_concurrent=="Plus cher"){
          P=P+1
        }
     }
    }
    
    
  })
  
  ScoreRelatif4=0
  ScoreRelatif4=((M/TotalReponse)-(P/TotalReponse))*100







    

}
if (ta.index==5)
{
  this.concurrent5=ta.concurrent
  res.forEach(el=>{  
    var d = new Date(el.date_reponse_concurrent)
     dateTime=monthNames[d.getMonth()]
     if(dateTime==element){
       if(el.concurrent==ta.concurrent){
  

      if(el.prix_concurrent=="Moins cher"){
         M=M+1

       }
        if(el.prix_concurrent=="Au même niveau de prix"){
          AMN=AMN+1
        }
       if(el.prix_concurrent=="Plus cher"){
          P=P+1
        }
     }
    }
    
    
  })
  
  ScoreRelatif5=0
  ScoreRelatif5=((M/TotalReponse)-(P/TotalReponse))*100







}



  








//this.chartdata.push({label : element+"-"+year,y1:Math.round(ScoreRelatif1),y2: Math.round(ScoreRelatif2)})

})
this.chartdata.push({label : element+"-"+year,y1:Math.round(ScoreRelatif1),y2:Math.round(ScoreRelatif2),y3:Math.round(ScoreRelatif3),y4:Math.round(ScoreRelatif4),y5:Math.round(ScoreRelatif5)})

this.lineChart("En relatif vs la concurrence",this.concurrent1,this.concurrent2,this.concurrent3,this.concurrent4, this.chartdata,"chartupperright")


  })



 
})
})

})

}
 

  

  ///***********************************************Chart Image Ensigne Concurrent *********************************************************$*/
 /* let chartImagePrixConcurrent=this.chartService.lineChart("Evolution de l'image prix Concurrents","Concurrents",this.NoteImagePrixEnseigneconcurrent,"chartupperright");  
  let chartImagePrixConcurrent1=this.chartService.lineChart1("Evolution de l'image prix Concurrents","Concurrents",this.NoteImagePrixEnseigne,"chartupperright");  
  setTimeout(function(){ chartImagePrixConcurrent1.render();chartImagePrixConcurrent.render();
                               }, 100);




   
 

  /*********************************************** Init Charts ****************************************************************************/
  ngAfterViewInit(){
    const Monthes = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
              ];
    /*********************** Chart Init Image prix Magasin **************************/
              var yearTime=new Date()
              var year = yearTime.getFullYear()
              Monthes.forEach(element=>{
              this.Month.push({ label: element+"-"+year, y : null})
              })
 this.lineChart1("Evolution de l'image prix Magasin","",this.Month,"chartbottomleft");

  /*********************** Chart Init Image Prix Magasin Concurrent ****************/
            var yearTime1=new Date()
            var year1 = yearTime1.getFullYear()
            Monthes.forEach(element=>{
            this.Month1.push({ label: element+"-"+year1, y : null})
            })
this.lineChart1("En relatif vs la concurrence","",this.Month1,"chartbottomright");


  }




  /*********************************  Image prix Selected Magasin  et Calcul **********************************************************************/
onSelected(Idselected): void{
  this.id_selectedpointvenete=Idselected
  var nom_selected_point_vente=''
   /********** Get pointe vente name By Id Selected *********/
  this.pointeventeService.getpointventbyid(this.id_selectedpointvenete).subscribe((data:PointVente[])=>{
  
    data.forEach(pointvente=>{
      nom_selected_point_vente=pointvente.nom

  this.noteimageprixService.getImageprixMagasin(Idselected,this.id_societe).subscribe((data:NoteImagePrix[])=>{

    this.NoteImagePrix=data
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
  var yearTime=new Date()
  var year = yearTime.getFullYear()
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
        if(el.reponse=="Pas très satisfait"){
          PTS=PTS+1
          }
         if(el.reponse=="Pas du tout satisfait"){
          PDTS=PDTS+1
          }
       }
    })
    ScoreTheme=0
    ScoreTheme=((((TS/TotalReponse)*3)+((AS/TotalReponse)*1)+((PTS/TotalReponse)*(-2))+((PDTS/TotalReponse)*(-6)))*100)

   var index =  this.NoteImagePrixMagasin.findIndex(x => x.label==element+"-"+year)
    if (index === -1){
      this.NoteImagePrixMagasin.push({ label: element+"-"+year, y:Math.round(ScoreTheme)}) 
    }
   
    })
 this.lineChart1("Evolution de l'image prix Magasin",nom_selected_point_vente,this.NoteImagePrixMagasin,"chartbottomleft");
    this.NoteImagePrixMagasin=[]
  })
 
    })
  })
}


  /*********************************  Image prix Selected Magasin Concurrent  et Calcul **********************************************************************/

onSelectedConcurrent(concuurent){
  var nom_selected_point_vente=''
  /********** Get pointe vente name By Id Selected *********/
  this.pointeventeService.getpointventbyid(this.id_selectedpointvenete).subscribe((data:PointVente[])=>{
  
    data.forEach(pointvente=>{
      nom_selected_point_vente=pointvente.nom

  /********** Data concurrent magasin ********/
this.noteimageprixService.getImageprixMagasinConcurrent(this.id_selectedpointvenete,concuurent).subscribe((data:ImagePrixConcurrent[])=>{
  var M;
  var AMN;
  var P;
  var dateTime;
  var TotalReponse;
  var ScoreRelatif
 const monthNames = ["January", "February", "March", "April", "May", "June",
 "July", "August", "September", "October", "November", "December"
           ];
monthNames.forEach(element=>{
   M=0
  AMN=0
  P=0 
const result = data.filter(word => monthNames[new Date(word.date_reponse_concurrent).getMonth()]==element);
var yearTime=new Date()
var year = yearTime.getFullYear()
TotalReponse=result.length
result.forEach(el=>{  

  var d = new Date(el.date_reponse_concurrent)
   dateTime=monthNames[d.getMonth()]
   if(dateTime==element){
     if(el.prix_concurrent=="Moins cher"){
     M=M+1
     }
      if(el.prix_concurrent=="Au même niveau de prix"){
        AMN=AMN+1
      }
     if(el.prix_concurrent=="Plus cher"){
        P=P+1
      }
   }
})
ScoreRelatif=0
ScoreRelatif=((M/TotalReponse)-(P/TotalReponse))*100
this.NoteImagePrixMagasinConcurrent.push({ label: element+"-"+year, y:Math.round(ScoreRelatif)}) 
})
this.lineChart1("En relatif vs la concurrence",concuurent,this.NoteImagePrixMagasinConcurrent,"chartbottomright");  
  this.NoteImagePrixMagasinConcurrent=[]
})
})
})

}


  //TODO: aggrandissement, changer le css cette fonction fonctionne.
    
  lineChart(title,name1,name2,name3,name4,dataPoints,baliseid){
    am4core.useTheme(am4themes_animated);
  // Themes end
  

  
  // Create chart instance
  let chart = am4core.create(baliseid, am4charts.XYChart);
  // Set cell size in pixels


  chart.responsive.enabled = true;

  chart.data = dataPoints
  let titre = chart.titles.create();
  titre.text = title
  titre.fontSize = 20;
  // Add data
   // Add chart cursor
   chart.cursor = new am4charts.XYCursor();
   chart.cursor.behavior = "zoomY";
    
   // Add legend
   chart.legend = new am4charts.Legend();
  chart.data = dataPoints
  
  // Create category axis
  let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "label";
  categoryAxis.renderer.inside = false;
  
  // Create value axis
  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.inside = false;

  
  valueAxis.renderer.minLabelPosition = 0.1;
  valueAxis.renderer.maxLabelPosition = 1

    
  // Create series
  let series1 = chart.series.push(new am4charts.LineSeries());
  series1.dataFields.valueY = "y1";
  series1.dataFields.categoryX = "label";
  series1.name = name1;
  series1.strokeWidth = 2;
  series1.bullets.push(new am4charts.CircleBullet());
  series1.tooltipText = " {name} : {valueY}";
  series1.legendSettings.valueText = "{valueY}";
  series1.visible  = true;
  series1.fill=am4core.color("green")
series1.stroke=am4core.color("green")



  let series2 = chart.series.push(new am4charts.LineSeries());
  series2.dataFields.valueY = "y2";
  series2.dataFields.categoryX = "label";
  series2.name = name2;
  series2.strokeWidth = 2;
  series2.bullets.push(new am4charts.CircleBullet());
  series2.tooltipText = " {name} : {valueY}";
  series2.legendSettings.valueText = "{valueY}";
  series2.visible  = true;
series2.fill=am4core.color("red")
series2.stroke=am4core.color("red")


  

  let series3 = chart.series.push(new am4charts.LineSeries());
  series3.dataFields.valueY = "y3";
  series3.dataFields.categoryX = "label";
  series3.name = name3;
  series3.strokeWidth = 2;
  series3.bullets.push(new am4charts.CircleBullet());
  series3.tooltipText = " {name} : {valueY}";
  series3.legendSettings.valueText = "{valueY}";
  series3.visible  = true;
  series3.fill=am4core.color("blue")
series3.stroke=am4core.color("blue")
  

let series4= chart.series.push(new am4charts.LineSeries());
  series4.dataFields.valueY = "y4";
  series4.dataFields.categoryX = "label";
  series4.name = name4;
  series4.strokeWidth = 2;
  series4.bullets.push(new am4charts.CircleBullet());
  series4.tooltipText = " {name} : {valueY}";
  series4.legendSettings.valueText = "{valueY}";
  series4.visible  = true;
  series4.fill=am4core.color("#6D6D6D")
 series4.stroke=am4core.color("#6D6D6D")

  
  
  
 
 
  
    return chart
  }



   
  lineChart1(title,name1,dataPoints,baliseid){
    am4core.useTheme(am4themes_animated);
  // Themes end
  // Create chart instance
  let chart = am4core.create(baliseid, am4charts.XYChart);
  
  // Add data

  chart.data = dataPoints
  let titre = chart.titles.create();
  titre.text = title
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




  
  // Create value axis
  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

  valueAxis.renderer.inside = false;



  valueAxis.renderer.minLabelPosition = 0.1;
  valueAxis.renderer.maxLabelPosition =0.9;


  
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
  series1.fill=am4core.color("green")
series1.stroke=am4core.color("green")



  
  
  // Add chart cursor
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.behavior = "zoomY";
   
  // Add legend
  chart.legend = new am4charts.Legend();

  
    
  
    return chart
  }



  
}

