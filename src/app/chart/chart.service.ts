import { Injectable } from '@angular/core';
import * as CanvasJS from '../../assets/canvasjs';

@Injectable()
export class ChartService {

  constructor() { }

  lineChart(title,name,dataPoints,baliseid){
  	//title: titre du graphique
  	//dataPoints: Points du graphique sous la forme : { x: new Date(2012, 0, 1), y: 10 }
  	//!!!Attention les mois doivent se suivre. Si il manque les données d'un mois envoyer un JSON avec uniquement x correspondant au mois
  	//baliseid: id du canvas où rendre le graphique
  	let chart = new CanvasJS.Chart(baliseid, {
			animationEnabled: true,
	  interactivityEnabled: true,
	  theme: "light2",
	  title:{
	    text: title
	  },
      axisX: {
        valueFormatString: "MMM-YYYY",
       interval:1,
				intervalType: "month"

      },
	  axisY:{
	    includeZero: true
	  },
	  data: [{    
		 indexLabel: "",
		 name: name,
		 showInLegend: true,    

	 indexLabelPlacement: "auto",
	 	indexLabelFontColor: "black",
	 	indexLabelFontSize: 16, 
	  	markerSize: 15,  
	    type: "line",       
	    dataPoints: dataPoints
	  }]
	});
	//console.log(chart);hggh

	return chart;
	}
	

  lineChart1(title,name,dataPoints,baliseid){
  	//title: titre du graphique
  	//dataPoints: Points du graphique sous la forme : { x: new Date(2012, 0, 1), y: 10 }
  	//!!!Attention les mois doivent se suivre. Si il manque les données d'un mois envoyer un JSON avec uniquement x correspondant au mois
  	//baliseid: id du canvas où rendre le graphique
  	let chart = new CanvasJS.Chart(baliseid, {
			animationEnabled: true,
	  interactivityEnabled: true,
	  theme: "light2",
	  title:{
	    text: title
	  },
      axisX: {
        valueFormatString: "MMM-YYYY",
       interval:1,
				intervalType: "month"

      },
	  axisY:{
	    includeZero: true
	  },
	  data: [{    
		 indexLabel: "",
		 name: name,
		 color: "red",  
		 showInLegend: true,    

	 indexLabelPlacement: "auto",
	 	indexLabelFontColor: "black",
	 	indexLabelFontSize: 16, 
	  	markerSize: 15,  
	    type: "line",       
	    dataPoints: dataPoints
	  }]
	});
	//console.log(chart);hggh

	return chart;
  }


  //TODO: à adapter pour les donnees depuis la bdd
  tripleHistogramme(title,dataPoints1,dataPoints2,dataPoints3,baliseid){
  	return new CanvasJS.Chart(baliseid, {
	//exportEnabled: true,
	axisX: {
		valueFormatString: "MMM-YYYY",
	 interval:1,
		intervalType: "month"

	},
	 axisY:{
		includeZero: true,
		labelFormatter: function ( e ) {
			return ((e.value)*100);  
    } ,
     suffix: " %"


        },
	animationEnabled: true,
	title:{
		text: title
	},
	data: [{
		type: "column",
		name: "Note de 0 à 6",
		showInLegend: true,    
		color: "red",  
		yValueFormatString: " 0 %",
		dataPoints:dataPoints1

	},
	{
		type: "column",
		name: "Note de 7 à 8",
		showInLegend: true,
		color: "grey",
		yValueFormatString: " 0 %",
		dataPoints: dataPoints2
	},
	{
		type: "column",
		name: "Note de 9 à 10",
		showInLegend: true,
		color: "green",
		yValueFormatString: " 0 %",
		dataPoints: dataPoints3
	}]
});
  }


  tripleLineChart(title,name1,name2,name3,dataPoints1,dataPoints2,dataPoints3,baliseid){
  	//title: titre du graphique
  	//dataPoints: Points du graphique sous la forme : { x: new Date(2012, 0, 1), y: 10 }
  	//!!!Attention les mois doivent se suivre. Si il manque les données d'un mois envoyer un JSON avec uniquement x correspondant au mois
  	//baliseid: id du canvas où rendre le graphique

  	let chart = new CanvasJS.Chart(baliseid, {
	  animationEnabled: true,
	  interactivityEnabled: true,
	  theme: "light2",
	  title:{
	    text: title
	  },
      axisX: {
        valueFormatString: "MMM-YY",
        interval:1,
        intervalType: "month"
      },
	  axisY:{
	    includeZero: true
	  },
	  data: [{    
	 	indexLabel: "",
	 	name: name1,
	 	color:"green",
	 	indexLabelPlacement: "auto",
	 	indexLabelFontColor: "black",
	 	indexLabelFontSize: 16, 
	  	markerSize: 27,  
	    type: "line",       
	    dataPoints: dataPoints1,
	    showInLegend: true,
	  },
	  {    
	 	indexLabel: "",
	 	color:"blue",
	 	name: name2,
	 	indexLabelPlacement: "auto",
	 	indexLabelFontColor: "black",
	 	indexLabelFontSize: 16, 
	  	markerSize: 27,  
	    type: "line",       
	    dataPoints: dataPoints2,
	    showInLegend: true,
		},
		{
		indexLabel: "",
		color:"red",
		name: name2,
		indexLabelPlacement: "auto",
		indexLabelFontColor: "black",
		indexLabelFontSize: 16, 
		 markerSize: 27,  
		 type: "line",       
		 dataPoints: dataPoints3,
		 showInLegend: true,
	 }]
	});
	//console.log(chart);
	return chart;
  }
}
