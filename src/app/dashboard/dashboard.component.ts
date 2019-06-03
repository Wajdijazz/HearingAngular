import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { DashboardService } from './dashboard.service';
import { Reponse } from '../reponses/reponse.interface';
import { element } from '@angular/core/src/render3';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { AmchartsService } from '../am-charts/amcharts.service';
import { ReponsePointeVente } from '../question/reponse-pointe-vente.interface';
import { UserService } from '../services/user.service';
import { Concurrent } from '../question/concurrent.interface';
import { PointeventereponseService } from '../services-speciales/pointeventereponse.service';
import { ConcurrentService } from '../services-speciales/concurrent.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Month=[]
  userInfo: { id: any; id_societe: any; name: any; email: any; };
  id_societe: any;

  constructor(private concurrentService:ConcurrentService,private userService:UserService ,private dashboardService: DashboardService,private pointeventereponseService:PointeventereponseService) { }
 
  ngOnInit() {
    var Radr=[]


    this.userService.getUserBoard().subscribe(
			data => {
			  this.userInfo = {
				id: data.user.id,
				id_societe:data.user.id_societe,
				name: data.user.name,
				email: data.user.email
			  };
		  
      
			this.id_societe=this.userInfo.id_societe

this.pointeventereponseService.getReponseEnseigne(this.id_societe).subscribe((data1:ReponsePointeVente[])=>{
console.log(data1.length)
var Bar=[]

var  series=[]
var  TotalReponse
var    dateTime
var scoreTotal
var TS
var AS
var PTS
var PDTS
var ScoreTheme

var TS1
var AS1
var PTS1
var PDTS1
var ScoreTheme1

var TS2
var AS2
var PTS2
var PDTS2
var ScoreTheme2

var TS3
var AS3
var PTS3
var PDTS3
var ScoreTheme3

var TS4
var AS4 
var PTS4 
var PDTS4
var ScoreTheme4

var TS5
var AS5
var PTS5
var PDTS5
var ScoreTheme5

var TS6
var AS6
var PTS6
var PDTS6
var ScoreTheme6

var TS7
var AS7
var PTS7
var PDTS7
var ScoreTheme7

var TS8
var AS8
var PTS8
var PDTS8
var ScoreTheme8

var TS9
var AS9
var PTS9
var PDTS9
var ScoreTheme9

var TS10
var AS10
var PTS10
var PDTS10
var ScoreTheme10


      /* ----------==========     Moyenne total des thémes    ==========---------- */

       
                const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                          ];
               monthNames.forEach(element=>{
                TS=0
                AS=0
                PTS=0
                PDTS=0

                TS1=0
                AS1=0
                PTS1=0
                PDTS1=0

                TS2=0
                AS2=0
                PTS2=0
                PDTS2=0

                TS3=0
                AS3=0
                PTS3=0
                PDTS3=0

                TS3=0
                AS3=0
                PTS3=0
                PDTS3=0

                TS4=0
                AS4=0
                PTS4=0
                PDTS4=0

                TS5=0
                AS5=0
                PTS5=0
                PDTS5=0

                TS6=0
                AS6=0
                PTS6=0
                PDTS6=0

                TS7=0
                AS7=0
                PTS7=0
                PDTS7=0

                TS8=0
                AS8=0
                PTS8=0
                PDTS8=0

                TS9=0
                AS9=0
                PTS9=0
                PDTS9=0

                TS10=0
                AS10=0
                PTS10=0
                PDTS10=0

             

                 
             const result=data1.filter(word => monthNames[new Date(word.date_reponse_pointevente).getMonth()]==element );
                var yearTime=new Date()
                      var year = yearTime.getFullYear()
                    TotalReponse=result.length
                     console.log(result)
                     result.forEach(el=>{  
                        var d = new Date(el.date_reponse_pointevente)
                         dateTime=monthNames[d.getMonth()]
                          if(dateTime==element){

                            //prix satisfaction
                         if(el.prix_satisfaction=="Très satisfait"){
                           TS=TS+1
                          }
                         if(el.prix_satisfaction=="Assez satisfait"){
                          AS=AS+1
                          }
                        if(el.prix_satisfaction=="Pas très satisfait"){
                          PTS=PTS+1
                          }
                         if(el.prix_satisfaction=="Pas du tout satisfait"){
                          PDTS=PDTS+1
                          }
                       
                       // Promotions satisfaction 
                          if(el.promotions_satisfaction=="Très satisfait"){
                           TS1=TS1+1
                          }
                          if(el.prix_satisfaction=="Assez satisfait"){
                       AS1=AS1+1
                          }
                        if(el.promotions_satisfaction=="Pas très satisfait"){
                        PTS1=PTS1+1
                          }
                         if(el.promotions_satisfaction=="Pas du tout satisfait"){
                         PDTS1=PDTS1+1
                           }
                       // Qualite produit 

                       if(el.Qualite_Produit_satisfaction=="Très satisfait"){
                        TS2=TS2+1
                       }
                       if(el.Qualite_Produit_satisfaction=="Assez satisfait"){
                    AS2=AS2+1
                       }
                     if(el.Qualite_Produit_satisfaction=="Pas très satisfait"){
                     PTS2=PTS2+1
                       }
                      if(el.Qualite_Produit_satisfaction=="Pas du tout satisfait"){
                      PDTS2=PDTS2+1
                        }
                     //Amabilite 
                   
                     if(el.Amabilite_personnel_satisfaction=="Très satisfait"){
                      TS3=TS3+1
                     }
                     if(el.Amabilite_personnel_satisfaction=="Assez satisfait"){
                        AS3=AS3+1
                     }
                   if(el.Amabilite_personnel_satisfaction=="Pas très satisfait"){
                         PTS3=PTS3+1
                     }
                    if(el.Amabilite_personnel_satisfaction=="Pas du tout satisfait"){
                    PDTS3=PDTS3+1
                      }
                       // rapport  qualité prix
                       if(el.Rapport_qualite_prix_satisfaction=="Très satisfait"){
                        TS4=TS4+1
                       }
                       if(el.Rapport_qualite_prix_satisfaction=="Assez satisfait"){
                          AS4=AS4+1
                       }
                     if(el.Rapport_qualite_prix_satisfaction=="Pas très satisfait"){
                           PTS4=PTS4+1
                       }
                      if(el.Rapport_qualite_prix_satisfaction=="Pas du tout satisfait"){
                      PDTS4=PDTS4+1
                        }

                        //rapidite paiement

                        if(el.Rapidite_facilite_payer_satisfaction=="Très satisfait"){
                          TS5=TS5+1
                         }
                         if(el.Rapidite_facilite_payer_satisfaction=="Assez satisfait"){
                            AS5=AS5+1
                         }
                       if(el.Rapidite_facilite_payer_satisfaction=="Pas très satisfait"){
                             PTS5=PTS5+1
                         }
                        if(el.Rapidite_facilite_payer_satisfaction=="Pas du tout satisfait"){
                        PDTS5=PDTS5+1
                          }

                          // Qualité Materiel 

                          if(el.Qualite_materiel_satisfaction=="Très satisfait"){
                            TS6=TS6+1
                           }
                           if(el.Qualite_materiel_satisfaction=="Assez satisfait"){
                              AS6=AS6+1
                           }
                         if(el.Qualite_materiel_satisfaction=="Pas très satisfait"){
                               PTS6=PTS6+1
                           }
                          if(el.Qualite_materiel_satisfaction=="Pas du tout satisfait"){
                          PDTS6=PDTS6+1
                            }
                         // choix produit

                         if(el.Choix_produits_satisfaction=="Très satisfait"){
                          TS7=TS7+1
                         }
                         if(el.Choix_produits_satisfaction=="Assez satisfait"){
                            AS7=AS7+1
                         }
                       if(el.Choix_produits_satisfaction=="Pas très satisfait"){
                             PTS7=PTS7+1
                         }
                        if(el.Choix_produits_satisfaction=="Pas du tout satisfait"){
                        PDTS7=PDTS7+1
                          }

                          // faciliter trouver produit 

                          if(el.Facilite_trouver_produits_satisfaction=="Très satisfait"){
                            TS8=TS8+1
                           }
                           if(el.Facilite_trouver_produits_satisfaction=="Assez satisfait"){
                              AS8=AS8+1
                           }
                         if(el.Facilite_trouver_produits_satisfaction=="Pas très satisfait"){
                               PTS8=PTS8+1
                           }
                          if(el.Facilite_trouver_produits_satisfaction=="Pas du tout satisfait"){
                          PDTS8=PDTS8+1
                            }
                            // prix produit bio

                            if(el.Prix_produits_bio_satisfaction=="Très satisfait"){
                              TS9=TS9+1
                             }
                             if(el.Prix_produits_bio_satisfaction=="Assez satisfait"){
                                AS9=AS9+1
                             }
                           if(el.Prix_produits_bio_satisfaction=="Pas très satisfait"){
                                 PTS9=PTS9+1
                             }
                            if(el.Prix_produits_bio_satisfaction=="Pas du tout satisfait"){
                            PDTS9=PDTS9+1
                              }

                              // qualite produit bio 

                              if(el.Qualite_produits_bio_satisfaction=="Très satisfait"){
                                TS10=TS10+1
                               }
                               if(el.Qualite_produits_bio_satisfaction=="Assez satisfait"){
                                  AS10=AS10+1
                               }
                             if(el.Qualite_produits_bio_satisfaction=="Pas très satisfait"){
                                   PTS10=PTS10+1
                               }
                              if(el.Qualite_produits_bio_satisfaction=="Pas du tout satisfait"){
                              PDTS10=PDTS10+1
                                }





 

                      }
                      })
                    ScoreTheme=0
                    ScoreTheme=((((TS/TotalReponse)*3)+((AS/TotalReponse)*1)+((PTS/TotalReponse)*(-2))+((PDTS/TotalReponse)*(-6)))*100)
                    ScoreTheme1=0
                    ScoreTheme1=((((TS1/TotalReponse)*3)+((AS1/TotalReponse)*1)+((PTS1/TotalReponse)*(-2))+((PDTS1/TotalReponse)*(-6)))*100)
                    ScoreTheme2=0
                    ScoreTheme2=((((TS2/TotalReponse)*3)+((AS2/TotalReponse)*1)+((PTS2/TotalReponse)*(-2))+((PDTS2/TotalReponse)*(-6)))*100)
                    ScoreTheme3=0
                    ScoreTheme3=((((TS3/TotalReponse)*3)+((AS3/TotalReponse)*1)+((PTS3/TotalReponse)*(-2))+((PDTS3/TotalReponse)*(-6)))*100)
                    ScoreTheme4=0
                    ScoreTheme4=((((TS4/TotalReponse)*3)+((AS4/TotalReponse)*1)+((PTS4/TotalReponse)*(-2))+((PDTS4/TotalReponse)*(-6)))*100)

                    ScoreTheme5=0
                    ScoreTheme5=((((TS5/TotalReponse)*3)+((AS5/TotalReponse)*1)+((PTS5/TotalReponse)*(-2))+((PDTS5/TotalReponse)*(-6)))*100)

                    ScoreTheme6=0
                    ScoreTheme6=((((TS6/TotalReponse)*3)+((AS6/TotalReponse)*1)+((PTS6/TotalReponse)*(-2))+((PDTS6/TotalReponse)*(-6)))*100)

                    ScoreTheme7=0
                    ScoreTheme7=((((TS7/TotalReponse)*3)+((AS7/TotalReponse)*1)+((PTS7/TotalReponse)*(-2))+((PDTS7/TotalReponse)*(-6)))*100)

                    ScoreTheme8=0
                    ScoreTheme8=((((TS8/TotalReponse)*3)+((AS8/TotalReponse)*1)+((PTS8/TotalReponse)*(-2))+((PDTS8/TotalReponse)*(-6)))*100)

                    ScoreTheme9=0
                    ScoreTheme9=((((TS9/TotalReponse)*3)+((AS9/TotalReponse)*1)+((PTS9/TotalReponse)*(-2))+((PDTS9/TotalReponse)*(-6)))*100)

                    ScoreTheme10=0
                    ScoreTheme10=((((TS10/TotalReponse)*3)+((AS10/TotalReponse)*1)+((PTS10/TotalReponse)*(-2))+((PDTS10/TotalReponse)*(-6)))*100)


                    scoreTotal=0
                    scoreTotal=(ScoreTheme+ScoreTheme1+ScoreTheme2+ScoreTheme3+ScoreTheme4+ScoreTheme5+ScoreTheme6+ScoreTheme7+ScoreTheme8+ScoreTheme9+ScoreTheme10)/11


                    var index1 =  Bar.findIndex(x => x.viewValue==element+"-"+year,y=> y.Math.round(scoreTotal))
                    if (index1=== -1){
                      Bar.push({ label: element+"-"+year, y:Math.round(scoreTotal)}) 
                    }






            series.push({ label: element+"-"+year, y:TotalReponse}) 

  })
       
  

   this.lineChart("",series,"dailySalesChart")
   this.Histogramme("",Bar,"websiteViewsChart")
  
 



   
      
    })
    this.concurrentService.getAlConcurrent(this.id_societe).subscribe((data2:Concurrent[])=>{
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
     var  ScoreRelatifTotal
  
      var yearTime=new Date()
  var year = yearTime.getFullYear()
  var tab_concurrent=[]
  var i=0
  data2.forEach(concurrent=>{
   

    var index1 = tab_concurrent.findIndex(x => x.concurrent==concurrent.concurrent)
    if (index1=== -1){
   
      tab_concurrent.push({index :++i,concurrent :concurrent.concurrent})
    }

})

var P;


var P1;
var P2;
var P3;
var P4;
var P5;
var P6;
var P7;
var P8;

var P9;
var P10;

var TotalReponse;
var ScoreRelatif

var ScoreRelatif1
var ScoreRelatif2
var ScoreRelatif3
var ScoreRelatif4
var ScoreRelatif5
var ScoreRelatif6
var ScoreRelatif7
var ScoreRelatif8
var ScoreRelatif9
var ScoreRelatif10
var  ScoreRelatifTotal

tab_concurrent.forEach(element1=>{
 var nom_concurrent=element1.concurrent
 console.log(element1.concurrent)
 
   P=0
   P1=0
   P2=0
   P3=0
   P4=0
   P5=0
   P6=0
   P7=0
   P8=0
   P9=0
   P10=0



   TotalReponse=0
   ScoreRelatifTotal=0
        var res=data2.filter((word=> word.concurrent==element1.concurrent  ))
        TotalReponse=res.length
        if (element1.index==1)
        {
      
          res.forEach(el=>{  
               if(el.concurrent==element1.concurrent){
           
               if(el.prix_concurrent=="Plus cher"){
                  P=P+1
                }
                if(el.promotions_concurrent=="moins attractives"){
                  P1=P1+1
                }
                if(el.Qualite_Produit_concurrent=="moins bonne"){
                  P2=P2+1
                }
                if(el.Amabilite_personnel_concurrent=="moins bonne"){
                  P3=P3+1
                }
                if(el.Rapport_qualite_prix_concurrent=="moins bonne"){
                  P4=P4+1
                }
                if(el.Rapidite_facilite_payer_concurrent=="moins bonne"){
                  P5=P5+1
                }
                if(el.Qualite_materiel_concurrent=="moins bonne"){
                  P6=P6+1
                }
                if(el.Choix_produits_concurrent=="il y a plus de choix"){
                  P7=P7+1
                }
                if(el.Facilite_trouver_produits_concurrent=="moins facile"){
                  P8=P8+1
                }
                if(el.Prix_produits_bio_concurrent=="plus chers"){
                  P9=P9+1
                }
                if(el.Qualite_produits_bio_concurrent=="moins bonne"){
                  P10=P10+1
                }



             }
          
            
            
          })
          
       

        
        }   
        if (element1.index==2)
        {
      
          res.forEach(el=>{  
               if(el.concurrent==element1.concurrent){
           
               if(el.prix_concurrent=="Plus cher"){
                  P=P+1
                }
                if(el.promotions_concurrent=="moins attractives"){
                  P1=P1+1
                }
                if(el.Qualite_Produit_concurrent=="moins bonne"){
                  P2=P2+1
                }
                if(el.Amabilite_personnel_concurrent=="moins bonne"){
                  P3=P3+1
                }
                if(el.Rapport_qualite_prix_concurrent=="moins bonne"){
                  P4=P4+1
                }
                if(el.Rapidite_facilite_payer_concurrent=="moins bonne"){
                  P5=P5+1
                }
                if(el.Qualite_materiel_concurrent=="moins bonne"){
                  P6=P6+1
                }
                if(el.Choix_produits_concurrent=="il y a plus de choix"){
                  P7=P7+1
                }
                if(el.Facilite_trouver_produits_concurrent=="moins facile"){
                  P8=P8+1
                }
                if(el.Prix_produits_bio_concurrent=="plus chers"){
                  P9=P9+1
                }
                if(el.Qualite_produits_bio_concurrent=="moins bonne"){
                  P10=P10+1
                }



             }
          
            
            
          })
          
       

        
        }  
        if (element1.index==3)
        {
      
          res.forEach(el=>{  
               if(el.concurrent==element1.concurrent){
           
               if(el.prix_concurrent=="Plus cher"){
                  P=P+1
                }
                if(el.promotions_concurrent=="moins attractives"){
                  P1=P1+1
                }
                if(el.Qualite_Produit_concurrent=="moins bonne"){
                  P2=P2+1
                }
                if(el.Amabilite_personnel_concurrent=="moins bonne"){
                  P3=P3+1
                }
                if(el.Rapport_qualite_prix_concurrent=="moins bonne"){
                  P4=P4+1
                }
                if(el.Rapidite_facilite_payer_concurrent=="moins bonne"){
                  P5=P5+1
                }
                if(el.Qualite_materiel_concurrent=="moins bonne"){
                  P6=P6+1
                }
                if(el.Choix_produits_concurrent=="il y a plus de choix"){
                  P7=P7+1
                }
                if(el.Facilite_trouver_produits_concurrent=="moins facile"){
                  P8=P8+1
                }
                if(el.Prix_produits_bio_concurrent=="plus chers"){
                  P9=P9+1
                }
                if(el.Qualite_produits_bio_concurrent=="moins bonne"){
                  P10=P10+1
                }



             }
          
            
            
          })
          
       

        
        }  
        if (element1.index==4)
        {
      
          res.forEach(el=>{  
               if(el.concurrent==element1.concurrent){
           
               if(el.prix_concurrent=="Plus cher"){
                  P=P+1
                }
                if(el.promotions_concurrent=="moins attractives"){
                  P1=P1+1
                }
                if(el.Qualite_Produit_concurrent=="moins bonne"){
                  P2=P2+1
                }
                if(el.Amabilite_personnel_concurrent=="moins bonne"){
                  P3=P3+1
                }
                if(el.Rapport_qualite_prix_concurrent=="moins bonne"){
                  P4=P4+1
                }
                if(el.Rapidite_facilite_payer_concurrent=="moins bonne"){
                  P5=P5+1
                }
                if(el.Qualite_materiel_concurrent=="moins bonne"){
                  P6=P6+1
                }
                if(el.Choix_produits_concurrent=="il y a plus de choix"){
                  P7=P7+1
                }
                if(el.Facilite_trouver_produits_concurrent=="moins facile"){
                  P8=P8+1
                }
                if(el.Prix_produits_bio_concurrent=="plus chers"){
                  P9=P9+1
                }
                if(el.Qualite_produits_bio_concurrent=="moins bonne"){
                  P10=P10+1
                }



             }
          
            
            
          })
          
       

        
        }  


      

        ScoreRelatif=0
 
        ScoreRelatif1=0
        ScoreRelatif2=0

        
        ScoreRelatif=(P/TotalReponse)*100
        ScoreRelatif1=(P1/TotalReponse)*100
        ScoreRelatif2=(P2/TotalReponse)*100
        ScoreRelatif3=(P3/TotalReponse)*100
        ScoreRelatif4=(P4/TotalReponse)*100
        ScoreRelatif5=(P5/TotalReponse)*100
        ScoreRelatif6=(P6/TotalReponse)*100
        ScoreRelatif7=(P7/TotalReponse)*100
        ScoreRelatif8=(P8/TotalReponse)*100
        ScoreRelatif9=(P9/TotalReponse)*100
        ScoreRelatif10=(P10/TotalReponse)*100
        ScoreRelatifTotal=(ScoreRelatif+ScoreRelatif1+ScoreRelatif2+ScoreRelatif3+ScoreRelatif4+ScoreRelatif5+ScoreRelatif6+ScoreRelatif7+ScoreRelatif8+ScoreRelatif9+ScoreRelatif10)/11

        var index1 =  Radr.findIndex(x => x.nom_concurrent,y=> y.ScoreRelatifTotal)
        if (index1=== -1){
          Radr.push({label:nom_concurrent, y:ScoreRelatifTotal}) 
        }


    })
    this.Radarcgart("radarchart",Radr)
    })
  })

  }

  ngAfterViewInit(){
    var Radr=[]

    this.concurrentService.getAlConcurrent(this.id_societe).subscribe((data2:Concurrent[])=>{
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
     var  ScoreRelatifTotal
  
      var yearTime=new Date()
  var year = yearTime.getFullYear()
  var tab_concurrent=[]
  var i=0
  data2.forEach(concurrent=>{
   

    var index1 = tab_concurrent.findIndex(x => x.concurrent==concurrent.concurrent)
    if (index1=== -1){
   
      tab_concurrent.push({index :++i,concurrent :concurrent.concurrent})
    }

})

var P;


var P1;
var P2;
var P3;
var P4;
var P5;
var P6;
var P7;
var P8;

var P9;
var P10;

var TotalReponse;
var ScoreRelatif

var ScoreRelatif1
var ScoreRelatif2
var ScoreRelatif3
var ScoreRelatif4
var ScoreRelatif5
var ScoreRelatif6
var ScoreRelatif7
var ScoreRelatif8
var ScoreRelatif9
var ScoreRelatif10
var  ScoreRelatifTotal

tab_concurrent.forEach(element1=>{
 var nom_concurrent=element1.concurrent
 console.log(element1.concurrent)
 
   P=0
   P1=0
   P2=0
   P3=0
   P4=0
   P5=0
   P6=0
   P7=0
   P8=0
   P9=0
   P10=0



   TotalReponse=0
   ScoreRelatifTotal=0
        var res=data2.filter((word=> word.concurrent==element1.concurrent  ))
        TotalReponse=res.length
        if (element1.index==1)
        {
      
          res.forEach(el=>{  
               if(el.concurrent==element1.concurrent){
           
               if(el.prix_concurrent=="Plus cher"){
                  P=P+1
                }
                if(el.promotions_concurrent=="moins attractives"){
                  P1=P1+1
                }
                if(el.Qualite_Produit_concurrent=="moins bonne"){
                  P2=P2+1
                }
                if(el.Amabilite_personnel_concurrent=="moins bonne"){
                  P3=P3+1
                }
                if(el.Rapport_qualite_prix_concurrent=="moins bonne"){
                  P4=P4+1
                }
                if(el.Rapidite_facilite_payer_concurrent=="moins bonne"){
                  P5=P5+1
                }
                if(el.Qualite_materiel_concurrent=="moins bonne"){
                  P6=P6+1
                }
                if(el.Choix_produits_concurrent=="il y a plus de choix"){
                  P7=P7+1
                }
                if(el.Facilite_trouver_produits_concurrent=="moins facile"){
                  P8=P8+1
                }
                if(el.Prix_produits_bio_concurrent=="plus chers"){
                  P9=P9+1
                }
                if(el.Qualite_produits_bio_concurrent=="moins bonne"){
                  P10=P10+1
                }



             }
          
            
            
          })
          
       

        
        }   
        if (element1.index==2)
        {
      
          res.forEach(el=>{  
               if(el.concurrent==element1.concurrent){
           
               if(el.prix_concurrent=="Plus cher"){
                  P=P+1
                }
                if(el.promotions_concurrent=="moins attractives"){
                  P1=P1+1
                }
                if(el.Qualite_Produit_concurrent=="moins bonne"){
                  P2=P2+1
                }
                if(el.Amabilite_personnel_concurrent=="moins bonne"){
                  P3=P3+1
                }
                if(el.Rapport_qualite_prix_concurrent=="moins bonne"){
                  P4=P4+1
                }
                if(el.Rapidite_facilite_payer_concurrent=="moins bonne"){
                  P5=P5+1
                }
                if(el.Qualite_materiel_concurrent=="moins bonne"){
                  P6=P6+1
                }
                if(el.Choix_produits_concurrent=="il y a plus de choix"){
                  P7=P7+1
                }
                if(el.Facilite_trouver_produits_concurrent=="moins facile"){
                  P8=P8+1
                }
                if(el.Prix_produits_bio_concurrent=="plus chers"){
                  P9=P9+1
                }
                if(el.Qualite_produits_bio_concurrent=="moins bonne"){
                  P10=P10+1
                }



             }
          
            
            
          })
          
       

        
        }  
        if (element1.index==3)
        {
      
          res.forEach(el=>{  
               if(el.concurrent==element1.concurrent){
           
               if(el.prix_concurrent=="Plus cher"){
                  P=P+1
                }
                if(el.promotions_concurrent=="moins attractives"){
                  P1=P1+1
                }
                if(el.Qualite_Produit_concurrent=="moins bonne"){
                  P2=P2+1
                }
                if(el.Amabilite_personnel_concurrent=="moins bonne"){
                  P3=P3+1
                }
                if(el.Rapport_qualite_prix_concurrent=="moins bonne"){
                  P4=P4+1
                }
                if(el.Rapidite_facilite_payer_concurrent=="moins bonne"){
                  P5=P5+1
                }
                if(el.Qualite_materiel_concurrent=="moins bonne"){
                  P6=P6+1
                }
                if(el.Choix_produits_concurrent=="il y a plus de choix"){
                  P7=P7+1
                }
                if(el.Facilite_trouver_produits_concurrent=="moins facile"){
                  P8=P8+1
                }
                if(el.Prix_produits_bio_concurrent=="plus chers"){
                  P9=P9+1
                }
                if(el.Qualite_produits_bio_concurrent=="moins bonne"){
                  P10=P10+1
                }



             }
          
            
            
          })
          
       

        
        }  
        if (element1.index==4)
        {
      
          res.forEach(el=>{  
               if(el.concurrent==element1.concurrent){
           
               if(el.prix_concurrent=="Plus cher"){
                  P=P+1
                }
                if(el.promotions_concurrent=="moins attractives"){
                  P1=P1+1
                }
                if(el.Qualite_Produit_concurrent=="moins bonne"){
                  P2=P2+1
                }
                if(el.Amabilite_personnel_concurrent=="moins bonne"){
                  P3=P3+1
                }
                if(el.Rapport_qualite_prix_concurrent=="moins bonne"){
                  P4=P4+1
                }
                if(el.Rapidite_facilite_payer_concurrent=="moins bonne"){
                  P5=P5+1
                }
                if(el.Qualite_materiel_concurrent=="moins bonne"){
                  P6=P6+1
                }
                if(el.Choix_produits_concurrent=="il y a plus de choix"){
                  P7=P7+1
                }
                if(el.Facilite_trouver_produits_concurrent=="moins facile"){
                  P8=P8+1
                }
                if(el.Prix_produits_bio_concurrent=="plus chers"){
                  P9=P9+1
                }
                if(el.Qualite_produits_bio_concurrent=="moins bonne"){
                  P10=P10+1
                }



             }
          
            
            
          })
          
       

        
        }  


      

        ScoreRelatif=0
 
        ScoreRelatif1=0
        ScoreRelatif2=0

        
        ScoreRelatif=(P/TotalReponse)*100
        ScoreRelatif1=(P1/TotalReponse)*100
        ScoreRelatif2=(P2/TotalReponse)*100
        ScoreRelatif3=(P3/TotalReponse)*100
        ScoreRelatif4=(P4/TotalReponse)*100
        ScoreRelatif5=(P5/TotalReponse)*100
        ScoreRelatif6=(P6/TotalReponse)*100
        ScoreRelatif7=(P7/TotalReponse)*100
        ScoreRelatif8=(P8/TotalReponse)*100
        ScoreRelatif9=(P9/TotalReponse)*100
        ScoreRelatif10=(P10/TotalReponse)*100
        ScoreRelatifTotal=(ScoreRelatif+ScoreRelatif1+ScoreRelatif2+ScoreRelatif3+ScoreRelatif4+ScoreRelatif5+ScoreRelatif6+ScoreRelatif7+ScoreRelatif8+ScoreRelatif9+ScoreRelatif10)/11

        var index1 =  Radr.findIndex(x => x.nom_concurrent,y=> y.ScoreRelatifTotal)
        if (index1=== -1){
          Radr.push({label:nom_concurrent, y:null}) 
        }


    })
    this.Radarcgart("radarchart",Radr)
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
  series1.tooltipText = " {valueY}";
  series1.legendSettings.valueText = "{valueY}";
  series1.fill=am4core.color("#fff")
series1.stroke=am4core.color("#fff")


  
  
  
  // Add chart cursor
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.behavior = "zoomY";
   
  
  
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




chart.data = dataPoints

// Create axes
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "label";

categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;


let  valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;






  let series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueY = "y";
  series.dataFields.categoryX = "label";

  series.columns.template.tooltipText = " {valueY}";
  series.columns.template.fill = am4core.color("#fff"); 
  series.columns.template.stroke = am4core.color("#fff"); 

 




  }

  Radarcgart(baliseid,dataset){
    am4core.useTheme(am4themes_animated);

  let chart = am4core.create(baliseid, am4charts.RadarChart);

  


 
/* Add data */
chart.data = dataset

 
  
 
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis<am4charts.AxisRendererCircular>());
categoryAxis.dataFields.category = "label";

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis<am4charts.AxisRendererRadial>());
valueAxis.renderer.axisFills.template.fill = chart.colors.getIndex(2);
valueAxis.renderer.axisFills.template.fillOpacity = 30;

/* Create and configure series */
let series = chart.series.push(new am4charts.RadarSeries());
series.dataFields.valueY = "y";
series.dataFields.categoryX = "label";
series.name = "Sales";
series.strokeWidth = 5;
series.fill=am4core.color("#fff")
series.stroke=am4core.color("#fff")



  
  
  }
 

}
