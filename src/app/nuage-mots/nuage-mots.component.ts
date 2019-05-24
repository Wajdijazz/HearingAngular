import { Component, OnInit } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';

@Component({
  selector: 'app-nuage-mots',
  templateUrl: './nuage-mots.component.html',
  styleUrls: ['./nuage-mots.component.scss']
})
export class NuageMotsComponent  {

  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value 
    width : 1000,
    height : 400,
    overflow: false,
  };
 
  data: CloudData[] = [
    { text: 'weight-5', weight: 5 },
    { text: 'weight-7', weight: 7 },
    { text: 'weight-9', weight: 9 },
    { text: 'weight-9', weight: 4 },
    { text: 'weight-9', weight: 2 },
    { text: 'weight-9', weight: 9 },
    { text: 'weight-9', weight: 15 },
    { text: 'weight-9', weight: 9 },
    { text: 'weight-9', weight: 15 },
    { text: 'weight-9', weight: 9 },
    { text: 'weight-9', weight: 15 },


    { text: 'weight-9', weight: 9 },
    { text: 'weight-9', weight: 15 },

    { text: 'weight-9', weight: 10 },
    { text: 'weight-9', weight: 15 },

    { text: 'weight-9', weight: 9 },
    { text: 'weight-9', weight: 39},
    { text: 'weight-9', weight: 39},

    { text: 'weight-9', weight: 39},
    { text: 'weight-9', weight: 39},

    { text: 'weight-9', weight: 39},

    { text: 'weight-9', weight: 39},

    { text: 'weight-9', weight: 39},

    { text: 'weight-9', weight: 39},

    { text: 'weight-9', weight: 39},

    { text: 'weight-9', weight: 39},

    { text: 'weight-9', weight: 39},

    { text: 'weight-9', weight: 39},

    { text: 'weight-9', weight: 39},

    { text: 'weight-9', weight: 39},
    

    { text: 'weight-9', weight: 39},

    { text: 'weight-9', weight: 39},

    { text: 'weight-9', weight: 39},

    { text: 'weight-9', weight: 39},

    { text: 'weight-9', weight: 39},

    { text: 'weight-9', weight: 39},

    { text: 'weight-9', weight: 39},


    { text: 'weight-9', weight: 39},

    { text: 'weight-9', weight: 39},

    { text: 'weight-9', weight: 39},

    { text: 'weight-9', weight: 39},


    








    // ...
  ];
  

}
