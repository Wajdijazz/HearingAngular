import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
import { RadioQuestion } from './question-radio';
import { PointVenteService } from '../point-vente/point-vente.service';
import{ PointVente } from '../point-vente/point-vente.interface';

@Injectable()
export class QuestionService {

  pointeventes : PointVente[];
  concurrents: {key: string, value: string}[] = [];
  i:any;
  a:any[];
  qvalue :String;
  labeltemporaire1='SOC';
  numbers: number[] = [];

aux:any
  constructor(private pointventeService : PointVenteService,private http: HttpClient, private toastr: ToastrService, private router: Router) { }

  url = 'http://localhost:3000';
   


   // Save reponses of Concurrent

   createreponseconcurrent(data) {
    this.http.post(`${this.url}/concurrent`, data)
      .subscribe(
        res => {
          console.log(res);
          this.toastr.success('Votre concurrent a été créer avec succès.', 'Success');
        },
        err => {
          console.log('Error occured:' , err);
          this.toastr.error(err.message, 'Error occured');
        }
      );
  }




  //Fonction qui récupère les questions du questionnaire passé en paramètre
  getQuestions(id:number=-1) {
    console.log("getQuestions");
    if(id<0){
      console.log("Erreur, id questionnaire introuvable ou invalide");
      return Promise.reject("Erreur id questionnaire introuvable ou invalide");
    }
    else
    {

      this.pointventeService
      .getPointVente()
      .subscribe((data:PointVente[])=>{
        this.pointeventes=data;
        this.pointeventes.forEach((pointvente)=>{
    
           
          var index = this.concurrents.findIndex(x => x.value==pointvente.concurrents)
          if (index === -1){
            this.concurrents.push({key:pointvente.concurrents,value:pointvente.concurrents})
          }
        else console.log("object already exists")
           
           

          })

        
      })

      let questionsretour: QuestionBase<any>[]=[];
      let observableQuestions=this.http.get(`${this.url}/choix-questionnaire/${id}`);
      
      let questions;
      observableQuestions.toPromise().then((data)=>{
        questions=data;
        console.log(data)
        
       
        questions.forEach((question)=>{
          console.log(question.label)

                  
            
         
    

               
             

              

        

      

          if(question.qdependance!=''){
              var qdependance=JSON.parse(question.qdependance);
            }
          switch (question.qcontrolType) {

            case "radio":
              if(question.qvalue!=''){

                 var qvalue=JSON.parse(question.qvalue);
                 var Bonjour=JSON.stringify(qvalue)
                 var t=Bonjour.replace('SOC','Wajdi')

              }

         
            

           
              for(this.i=0;this.i<question.qorder;this.i++){
                this.a=this.i+1
            
              questionsretour.push(
                new RadioQuestion({
                    id : question.id,
                    key: question.qkey,
                    label: question.qlabel,
                    options: qvalue,
                    order:  this.a,
                    required: question.qrequired,
                    dependance: qdependance

                  }));
                
                }
                  break;



              

            case "dropdown":


         
      
            questionsretour.push(
            new DropdownQuestion({
              key: question.qkey,
              label: question.qlabel,
              options:this.concurrents,
              order:   question.qorder,
              required: question.qrequired,
                  dependance : qdependance
            }));
         
            break;

            case "textbox":
            questionsretour.push(
              new TextboxQuestion({
                  key: question.qkey,
                  label: question.qlabel,
                  order:  question.qorder,
                  required: question.qrequired,
                  dependance : qdependance
                }));
            break;
            
            default:
            console.log("question.service parsing des questions, le type de la question n'existe pas.")
              break;
          }
        
        });
     
     });
    
     this.concurrents=[]

      return Promise.resolve(questionsretour);
    
    }
  }

}