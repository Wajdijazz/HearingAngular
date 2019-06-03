import { Component, OnInit } from '@angular/core';
import { Societe } from '../societe/societe.interface';
import { SocieteService } from '../societe/societe.service';
import { PointeventereponseService } from '../services-speciales/pointeventereponse.service';
import { ReponsePointeVente } from '../question/reponse-pointe-vente.interface';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss']
})
export class DashboardAdminComponent implements OnInit {
  societes: Societe[];
  Month=[]
  enseigne: any;

  constructor(private societeService:SocieteService,private pointeventereponseService:PointeventereponseService) { }

  ngOnInit() {
    this.societeService
  	.getSociete()
  	.subscribe((data:Societe[])=>{
  		console.log(data);
  		this.societes=data;
  	})
  }


  onSelected(id_societe){
    this.pointeventereponseService.getReponseEnseigne(id_societe).subscribe((data1:ReponsePointeVente[])=>{
      this.societeService
      .getSociete()
      .subscribe((data:Societe[])=>{
        console.log(data);
        var nom =data.filter((word =>word.id==id_societe) );	
      nom.forEach(element=>{
    this.enseigne=element.nom

      })
          
  
      })
      var  series=[]
var  TotalReponse

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
              ];
   monthNames.forEach(element=>{
    const result=data1.filter(word => monthNames[new Date(word.date_reponse_pointevente).getMonth()]==element );
    TotalReponse=result.length
    var yearTime=new Date()

    var year = yearTime.getFullYear()

    series.push({ label: element+"-"+year, y:TotalReponse}) 



   })
   this.lineChart(this.enseigne,series,"dailySalesChart")

  })
  }
  ngAfterViewInit(){
    
    const Monthes =['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
              ];
    /*********************** Chart Init NPS Magasin **************************/
              var yearTime=new Date()
              var year = yearTime.getFullYear()
              Monthes.forEach(element=>{
              this.Month.push({ label: element+"-"+year, y : null})
              })
              this.lineChart("",this.Month,"dailySalesChart")

  


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

  
 

  let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "label";
  categoryAxis.renderer.inside = false;
  
  categoryAxis.renderer.line.strokeOpacity = 1;
  categoryAxis.renderer.line.strokeWidth = 2;
  categoryAxis.renderer.line.stroke = am4core.color("#111");
  
  // Create value axis
  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

  valueAxis.renderer.inside = false




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
  series1.tooltipText = "  {valueY}";
  series1.legendSettings.valueText = "{valueY}";
  series1.fill=am4core.color("#fff")
series1.stroke=am4core.color("#fff")


  
  
  
  // Add chart cursor
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.behavior = "zoomY";
   
  
  
    return chart
  }
}
