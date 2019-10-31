import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { ElasticsearchService } from './elasticsearch.service';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import {  ElasticsearchInterface } from './elasticsearch-interface';
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud"; 
import { element } from '@angular/core/src/render3';
import { UserService } from '../services/user.service';
import { Observable, interval, Subscription } from 'rxjs';
import { ConfirmationPopoverWindowOptions } from 'angular-confirmation-popover/confirmation-popover-window-options.provider';
import { NavbarSearchService } from '../components/navbar/navbar-search.service';
import { NavbarSearch } from '../components/navbar/navbar-search';
import 'rxjs/add/operator/delay';
import { SharedServiceService } from '../services-speciales/shared-service.service';
import 'rxjs/add/observable/interval';
import { Parametre } from '../settings/parametre';


@Component({
  selector: 'app-elasticsearch',
  templateUrl: './elasticsearch.component.html',
  styleUrls: ['./elasticsearch.component.scss']
})
export class ElasticsearchComponent implements OnInit {
  private updateSubscription: Subscription;

  isConnected = false;
  status: string;
  elasticsearchSources: ElasticsearchInterface[];
  elasticsearchSourcesInstagram: ElasticsearchInterface[];

  @Input() showCallBackPopUp: any=null
  @Input() customer: ElasticsearchInterface;
  Score=[]
  ScorePie=[]
  ScoreBar=[]
  HistoChart=[]
  Words=[]
  Langues=[]
  tweetNumber:any
  positiveNumber:any
  negativeNumber:any
  neutreNumber:any
  positiveword: any;
  negativeword: any;
  nuagedatapositive=[]
  nuagedatanegative=[]
  dataset=[]
  text: any;
  userInfo: { id: any; id_societe: any; name: any; email: any; };
  response: any;
  totalinstagram: number;
  ScoreInstagram=[]
  negativeNumberInstagram: any;
  positiveNumberInstagram: any;
  neutreNumberInstagram: any;
  totalpostif: any=0
  totalnegatif:any=0
  negativeSentiment: number
  positiveSentiment: number;
  neutreSentiment: number;
  negativeSentimentInstagram: number=0
  postiveSentimentInstagram: number=0
  neutreSentimentInstagram: number=0
  SentimentNeutre: number=0
  SentimentNegative: number=0
  SentimentPositive: number=0
  valserach: any
  totalTweet: any=0
  total: any;
  totalPositve: any=0
  totalNeutre: any=0
  totalFrançais: any=0
  totalAnglais: any=0
  totalDeutsh: any=0
  tweet: any;
  tweet_text: any;
  text_tweet: any;
  datasetext: any;
  index: any;
  totalPortugal: any;
  totalCorean: any;
  user: any;
  location: any;
  created: any;
  description: any;
  ScorePiechart=[]
  image: any;
  profile_image_url_https: any;
  coordinates: any;
  constructor( private sharedServiceService:SharedServiceService,private navbarSearchServiceprivate: NavbarSearchService  ,private userService:UserService,private es: ElasticsearchService, private cd: ChangeDetectorRef) {
    this.isConnected = false;
  }
 
  ngOnInit() {

    this.userService.getUserBoard().subscribe(
			data => {
			  this.userInfo = {
				id: data.user.id,
				id_societe:data.user.id_societe,
				name: data.user.name,
				email: data.user.email
			  };
		  this.es.getparametre(this.userInfo.id_societe).subscribe((data:Parametre[])=>{
        data.forEach(element => {
          this.index=element.mots
          
        });

      })

        setInterval(() => {
   
    
          this.es.ElasticsearchSearch(this.index.toLowerCase(),'tweet').
          then(response=>{
          
    
      
             this.totalTweet=response.hits.total
          
          
          })  
      
      
          
          this.es.ElasticsearchSearchPostive(this.index.toLowerCase(),'tweet').
          then(response=>{
          
       
             this.totalPositve=response.hits.total
          
          })  
      
        
       
          this.es.ElasticsearchSearchNegative(this.index.toLowerCase(),'tweet').
          then(response=>{
          
       
             this.totalnegatif=response.hits.total
          
          })
      
      
       
          this.es.ElasticsearchSearchNeutre(this.index.toLowerCase(),'tweet').
          then(response=>{
          
    
             this.totalNeutre=response.hits.total
          
          })
      
          this.es.ElasticsearchSearchFrançais(this.index.toLowerCase(),'tweet').
          then(response=>{
          
        
             this.totalFrançais=response.hits.total
            
            
          
          })
      
          this.es.ElasticsearchSearchAnglais(this.index.toLowerCase(),'tweet').
          then(response=>{
          
      
             this.totalAnglais=response.hits.total
            
            
          
          })
      
          this.es.ElasticsearchSearchDeutsh(this.index.toLowerCase(),'tweet').
          then(response=>{
          

             this.totalDeutsh=response.hits.total
            
            
          
          })
          this.es.ElasticsearchSearchPortugual(this.index.toLowerCase(),'tweet').
          then(response=>{
          

             this.totalPortugal=response.hits.total
            
            
          
          })
          this.es.ElasticsearchSearchCorean(this.index.toLowerCase(),'tweet').
          then(response=>{
          

             this.totalCorean=response.hits.total
            
            
          
          })
      
          this.es.ElasticsearchSearchAll(this.index.toLowerCase(),'tweet').  
          then(response=>{
  
      this.tweet=response.hits.hits
      this.tweet.forEach(element => {
   
      
       this.text_tweet= element._source.tweet_text
       this.user=element._source.user.name
       this.location=element._source.user.location


       this.description=element._source.user.description
       this.profile_image_url_https=element._source.user.profile_image_url_https


        
      });
     
         
         })
        
          this.ScorePie.push({type:"neutre", score:this.totalNeutre})
          this.ScorePie.push({type:"negative", score:this.totalnegatif})
          this.ScorePie.push({type:"positive", score:this.totalPositve})
      
      
          this.ScoreBar.push({lan:"Français",value: this.totalFrançais})
          this.ScoreBar.push({lan:"Anglais",value: this.totalAnglais})
          this.ScoreBar.push({lan:"Germany",value: this.totalDeutsh})
          this.ScoreBar.push({lan:"Portugais",value: this.totalPortugal})
          this.ScoreBar.push({lan:"Coréen",value: this.totalCorean})

      
          this.ScorePiechart.push({lan:"Français",value: this.totalFrançais})
          this.ScorePiechart.push({lan:"Anglais",value: this.totalAnglais})
          this.ScorePiechart.push({lan:"Germany",value: this.totalDeutsh})

      
      
      this.HistoChart.push({label:"negative",score:this.totalnegatif})
      this.HistoChart.push({label:"positive",score:this.totalPositve})
      
        }, 1000); 
      
   
  
})

this.Histogramme()
this.Piecharcht()
 

    
    let chart = am4core.create("chartdiv1", am4charts.PieChart);
      
      // Add data
      setInterval(() => {
      chart.data = this.ScorePie
      this.ScorePie=[]
    }, 1000);
      
      // Add and configure Series
      let pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "score";
      pieSeries.dataFields.category = "type";
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;
      
      // This creates initial animation
      pieSeries.hiddenState.properties.opacity = 1;
      pieSeries.hiddenState.properties.endAngle = -90;
      pieSeries.hiddenState.properties.startAngle = -90;
  


      // Create chart instance
let chart1 = am4core.create("chartdiv3", am4charts.XYChart);

// Add data
setInterval(() => {
chart1.data = this.ScoreBar
this.ScoreBar=[]
}, 1000);
// Create axes

let categoryAxis = chart1.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "lan";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 30;



let valueAxis = chart1.yAxes.push(new am4charts.ValueAxis());

// Create series
let series = chart1.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "value";
series.dataFields.categoryX = "lan";
series.name = "Langues";
series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
series.columns.template.fillOpacity = .8;

let columnTemplate = series.columns.template;
columnTemplate.strokeWidth = 2;
columnTemplate.strokeOpacity = 1;



}




Histogramme(){
  
  // Themes end
  
  // Create chart instance
  let chart = am4core.create("chartdiv2", am4charts.XYChart3D);
  
  // Add data
  setInterval(() => {
  chart.data = this.HistoChart
  this.HistoChart=[]
}, 1000);
  
  // Create axes
  let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "label";
  categoryAxis.numberFormatter.numberFormat = "#";
  categoryAxis.renderer.inversed = true;
  
  let  valueAxis = chart.xAxes.push(new am4charts.ValueAxis()); 
  
  // Create series
  let series = chart.series.push(new am4charts.ColumnSeries3D());
  series.dataFields.valueX = "score";
  series.dataFields.categoryY = "label";
  series.name = "score";
  series.columns.template.propertyFields.fill = "color";
  series.columns.template.tooltipText = "{valueX}";
  series.columns.template.column3D.stroke = am4core.color("#fff");
  series.columns.template.column3D.strokeOpacity = 0.2;




}
Piecharcht(){



  let chart = am4core.create("chartdiv4", am4charts.PieChart);

  setInterval(() => {
chart.data = this.ScorePiechart
this.ScorePiechart=[]
}, 1000);
// Set inner radius
chart.innerRadius = am4core.percent(50);

// Add and configure Series
let pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "value";
pieSeries.dataFields.category = "lan";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;

// This creates initial animation
pieSeries.hiddenState.properties.opacity = 1;
pieSeries.hiddenState.properties.endAngle = -90;
pieSeries.hiddenState.properties.startAngle = -90;

}




}