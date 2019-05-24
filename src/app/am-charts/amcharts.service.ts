import { Injectable ,NgZone} from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


@Injectable({
  providedIn: 'root'
})
export class AmchartsService {

  constructor(private zone: NgZone) { }


  lineChart(title,name,dataPoints,baliseid){
    am4core.useTheme(am4themes_animated);
  // Themes end
  
  // Create chart instance
  let chart = am4core.create(baliseid, am4charts.XYChart);
  
  // Add data
  chart.data = dataPoints
  
  // Create category axis
  let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "label";
  categoryAxis.renderer.inside = false;
  
  // Create value axis
  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.inside = false;
  valueAxis.title.text = title;
  valueAxis.renderer.minLabelPosition = 0.1;
  valueAxis.renderer.maxLabelPosition = 0.9;
  
  // Create series
  let series1 = chart.series.push(new am4charts.LineSeries());
  series1.dataFields.valueY = "y";
  series1.dataFields.categoryX = "label";
  series1.name = name;
  series1.strokeWidth = 3;
  series1.bullets.push(new am4charts.CircleBullet());
  series1.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
  series1.legendSettings.valueText = "{valueY}";
  series1.visible  = false;
  
  
  // Add chart cursor
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.behavior = "zoomY";
   
  // Add legend
  chart.legend = new am4charts.Legend();
  
    
  
    return chart
  }
  


  
}
