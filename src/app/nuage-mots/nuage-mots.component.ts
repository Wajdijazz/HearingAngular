import { Component, OnInit } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import { VerbatimeService } from './verbatime.service';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud"; 
import { Verbatime } from './verbatime.interface';
import { element } from '@angular/core/src/render3';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nuage-mots',
  templateUrl: './nuage-mots.component.html',
  styleUrls: ['./nuage-mots.component.scss']
})
export class NuageMotsComponent  implements OnInit  {
 dataset=[{tag:'',count:null}]
  userInfo: { id: any; id_societe: any; name: any; email: any; };
  id_societe:any
constructor(private userService:UserService,private verbatimeService:VerbatimeService){

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
        this.id_societe=this.userInfo.id_societe

this.verbatimeService.getverbatime(this.id_societe).subscribe((data1:Verbatime[])=>{

data1.forEach(element=>{

  this.dataset.push({tag:element.prix_motivation,count:1765836})
  this.dataset.push({tag:element.promotions_motivation,count:500})
  this.dataset.push({tag:element.Amabilite_personnel_motivation,count:10000})
  this.dataset.push({tag:element.Choix_produits_motivation,count:1765836})
  this.dataset.push({tag:element.Facilite_trouver_produits_motivation,count:5000})
  this.dataset.push({tag:element.Prix_produits_bio_motivation,count:1765836})
  this.dataset.push({tag:element.Qualite_Produit_motivation,count:5000})
  this.dataset.push({tag:element.Qualite_materiel_motivation,count:1765836})
  this.dataset.push({tag:element.Qualite_produits_bio_motivation,count:10000})
  this.dataset.push({tag:element.Rapidite_facilite_payer_motivation,count:1765836})
  this.dataset.push({tag:element.Rapport_qualite_prix_motivation,count:500})

})
console.log(this.dataset)

this. NuageMot(this.dataset)


    
  })

})

  }







  NuageMot(dataset){

 
    // Themes end
    
    let chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
    chart.fontFamily = "Courier New";
    let series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
    series.randomness = 0.1;
    series.rotationThreshold = 0.5;
    
    series.data = dataset
    series.dataFields.word = "tag";
    series.dataFields.value = "count";
    
    series.heatRules.push({
     "target": series.labels.template,
     "property": "fill",
     "min": am4core.color("#0000CC"),
     "max": am4core.color("#17a2b8"),
     "dataField": "value"
    });
    
   
    
    
    let subtitle = chart.titles.create();
    subtitle.text = "";
    
    let title = chart.titles.create();
    title.text = "Les verbatims des répandants    ";
    title.fontSize = 20;
    title.fontWeight = "800";



  }
  

}
