import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ConcurrentService } from '../services-speciales/concurrent.service';
import { PointVenteService } from '../point-vente/point-vente.service';
import { SocieteService } from '../societe/societe.service';
import { NoteProduitBioService } from './note-produit-bio.service';
import { PointventeBySocieteService } from '../services-speciales/pointvente-by-societe.service';
import { MatDialog } from '@angular/material';
import { Societe } from '../societe/societe.interface';
import { PointVente } from '../point-vente/point-vente.interface';
import { NoteProduitBioConcurrent } from './note-produit-bio-concurrent.interface';
import { NoteProduitBioReponse } from './note-produit-bio-reponse.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-note-prix-produits-bio',
  templateUrl: './note-prix-produits-bio.component.html',
  styleUrls: ['./note-prix-produits-bio.component.scss']
})
export class NotePrixProduitsBioComponent implements OnInit {
  id_societe: number;
  societe: Societe[];
  nom_Societe: String;
  pointventes: PointVente[];
  nom_concurrent: string;
  magasins=[]
  concurrents=[]
  PrixProduitBio: NoteProduitBioReponse[];
  NotePrixProduitEnseigne=[]
  NotePrixProduitBioConcurrent: NoteProduitBioConcurrent[];
  concurrent1: any;
  concurrent2: any;
  concurrent3: any;
  concurrent4: any;
  concurrent5: any;
  chartdata=[]
  Month=[]
  Month1=[]
  id_selectedpointvenete: any;
  PrixProduitBioMagasin: NoteProduitBioReponse[];
  NotePrixProduitBioMagasin=[]
  NoteprixProduitBioMagasinConcurrent=[]
  userInfo: { id: any; id_societe: any; name: any; email: any; };
  constructor(    private userService:UserService ,private zone: NgZone,private concurrentService: ConcurrentService ,  private pointeventeService: PointVenteService, private societeService :SocieteService, private prixProduitBioService:NoteProduitBioService, private pointventeBySocieteService : PointventeBySocieteService, private dialog:MatDialog) { }

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
   this.concurrentService.getConcurrent().subscribe((data:NoteProduitBioConcurrent[])=>{
    var res=data.filter((word =>word.Prix_produits_bio_concurrent != "" && word.id_societe==this.id_societe) )

     
      res.forEach(concurrent => {
    this.nom_concurrent=concurrent.concurrent
    var index = this.concurrents.findIndex(x => x.viewValue==this.nom_concurrent)
    if (index === -1){
     this.concurrents.push({value: 'Concurrent-0', viewValue:this.nom_concurrent })
    }
    else console.log("object already exists")
  
  })
})

   /******************************************************* Prix produit bio Satisfaction enseigne et Calcul **************************************************/
      this.prixProduitBioService.getPrixProduitBiosociete(this.id_societe).subscribe((data:NoteProduitBioReponse[])=>{
        
     this.PrixProduitBio=data
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
  const result = this.PrixProduitBio.filter(word => monthNames[new Date(word.date_reponse).getMonth()]==element);
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
      this.NotePrixProduitEnseigne.push({ label: element+"-"+year, y:Math.round(ScoreTheme)}) 
    }
    })
    this.lineChart1("Evolution de Prix de nos produits bio Enseigne", this.nom_Societe,this.NotePrixProduitEnseigne,"chartupperleft")

  });

  
  
   /****************************************** Prix Produit Bio Enseigne concurrent et calcul ***************************************************/

   this.prixProduitBioService.getPrixProduitBioEnseigneConcurrent(this.id_societe).subscribe((datac:NoteProduitBioConcurrent[])=>{
    this.NotePrixProduitBioConcurrent=datac.filter((word =>word.Prix_produits_bio_concurrent != "") )



    var tab_concurrent=[]
    var i=0
    this.NotePrixProduitBioConcurrent.forEach(concurrent=>{
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
var res=this.NotePrixProduitBioConcurrent.filter((word => monthNames[new Date(word.date_reponse_concurrent).getMonth()]==element && word.concurrent==ta.concurrent && word.Prix_produits_bio_concurrent != ""))
TotalReponse=res.length
if (ta.index==1)
{
  this.concurrent1=ta.concurrent
  res.forEach(el=>{  
    var d = new Date(el.date_reponse_concurrent)
     dateTime=monthNames[d.getMonth()]
     if(dateTime==element){
       if(el.concurrent==ta.concurrent){
  

      if(el.Prix_produits_bio_concurrent=="moins chers"){
         M=M+1

       }
        if(el.Prix_produits_bio_concurrent=="globalement au même prix"){
          AMN=AMN+1
        }
       if(el.Prix_produits_bio_concurrent=="plus chers"){
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
  

        if(el.Prix_produits_bio_concurrent=="moins chers"){
           M=M+1
  
         }
          if(el.Prix_produits_bio_concurrent=="globalement au même prix"){
            AMN=AMN+1
          }
         if(el.Prix_produits_bio_concurrent=="plus chers"){
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
     if(el.concurrent==ta.concurrent){
  

      if(el.Prix_produits_bio_concurrent=="moins chers"){
         M=M+1

       }
        if(el.Prix_produits_bio_concurrent=="globalement au même prix"){
          AMN=AMN+1
        }
       if(el.Prix_produits_bio_concurrent=="plus chers"){
          P=P+1
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
  

        if(el.Prix_produits_bio_concurrent=="moins chers"){
           M=M+1
  
         }
          if(el.Prix_produits_bio_concurrent=="globalement au même prix"){
            AMN=AMN+1
          }
         if(el.Prix_produits_bio_concurrent=="plus chers"){
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
  

        if(el.Prix_produits_bio_concurrent=="moins chers"){
           M=M+1
  
         }
          if(el.Prix_produits_bio_concurrent=="globalement au même prix"){
            AMN=AMN+1
          }
         if(el.Prix_produits_bio_concurrent=="plus chers"){
            P=P+1
          }
       }
    }
    
    
  })
  
  ScoreRelatif5=0
  ScoreRelatif5=((M/TotalReponse)-(P/TotalReponse))*100







}



  


})
this.chartdata.push({label : element+"-"+year,y1:Math.round(ScoreRelatif1),y2:Math.round(ScoreRelatif2),y3:Math.round(ScoreRelatif3),y4:Math.round(ScoreRelatif4),y5:Math.round(ScoreRelatif5)})

this.lineChart("En relatif vs la concurrence",this.concurrent1,this.concurrent2,this.concurrent3,this.concurrent4, this.chartdata,"chartupperright")


  })



 
})
})

     })
    })

}
 





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




  /********************************* Priox Bio Selected Magasin  et Calcul **********************************************************************/
onSelected(Idselected): void{
  this.id_selectedpointvenete=Idselected
  var nom_selected_point_vente=''
   /********** Get pointe vente name By Id Selected *********/
  this.pointeventeService.getpointventbyid(this.id_selectedpointvenete).subscribe((data:PointVente[])=>{
  
    data.forEach(pointvente=>{
      nom_selected_point_vente=pointvente.nom

  this.prixProduitBioService.getPrixProduitBioMagasin(Idselected,this.id_societe).subscribe((data:NoteProduitBioReponse[])=>{

    this.PrixProduitBioMagasin=data
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
  const result = this.PrixProduitBioMagasin.filter(word => monthNames[new Date(word.date_reponse).getMonth()]==element);
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

   var index =  this.NotePrixProduitBioMagasin.findIndex(x => x.label==element+"-"+year)
    if (index === -1){
      this.NotePrixProduitBioMagasin.push({ label: element+"-"+year, y:Math.round(ScoreTheme)}) 
    }
   
    })
 this.lineChart1("Evolution de Prix de nos produits bio Magasin",nom_selected_point_vente,this.NotePrixProduitBioMagasin,"chartbottomleft");
    this.NotePrixProduitBioMagasin=[]
  })
 
    })
  })
}


  /*********************************  Image prix Selected Magasin Concurrent  et Calcul **********************************************************************/

onSelectedConcurrent(concuurent){
 
  this.userService.getUserBoard().subscribe(
    data => {
      this.userInfo = {
      id: data.user.id,
      id_societe:data.user.id_societe,
      name: data.user.name,
      email: data.user.email
      };
    
    
    this.id_societe=this.userInfo.id_societe
  

  /********** Data concurrent magasin ********/
this.prixProduitBioService.getPrixProduitBioMagasinConcurrent(this.id_selectedpointvenete,concuurent).subscribe((datac:NoteProduitBioConcurrent[])=>{
  var PrixProduitBioConcurrentMagasin= datac.filter((word =>word.Prix_produits_bio_concurrent != "") )

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
const result = PrixProduitBioConcurrentMagasin.filter(word => monthNames[new Date(word.date_reponse_concurrent).getMonth()]==element);
var yearTime=new Date()
var year = yearTime.getFullYear()
TotalReponse=result.length
result.forEach(el=>{  

  var d = new Date(el.date_reponse_concurrent)
   dateTime=monthNames[d.getMonth()]
   if(dateTime==element){
     if(el.Prix_produits_bio_concurrent=="moins chers"){
      M=M+1

    }
     if(el.Prix_produits_bio_concurrent=="globalement au même prix"){
       AMN=AMN+1
     }
    if(el.Prix_produits_bio_concurrent=="plus chers"){
       P=P+1
     }
   }
})
ScoreRelatif=0
ScoreRelatif=((M/TotalReponse)-(P/TotalReponse))*100
this.NoteprixProduitBioMagasinConcurrent.push({ label: element+"-"+year, y:Math.round(ScoreRelatif)}) 
})
this.lineChart1("En relatif vs la concurrence",concuurent,this.NoteprixProduitBioMagasinConcurrent,"chartbottomright");  
  this.NoteprixProduitBioMagasinConcurrent=[]
})
})


}


  lineChart(title,name1,name2,name3,name4,dataPoints,baliseid){
    am4core.useTheme(am4themes_animated);
  // Themes end
  

  
  // Create chart instance
  let chart = am4core.create(baliseid, am4charts.XYChart);
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
