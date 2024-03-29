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
import { UserService } from '../services/user.service';
import { ConcurrentService } from '../concurrent-societe/concurrent.service';
import { Concurrent } from '../concurrent-societe/concurrent.interface';

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
  userInfo: { id: any; id_societe: any; name: any; email: any; };
  id_societe: any;
  pointeVentesList: {key: string, value: string}[] = [];
  concurrent: Concurrent[];
  constructor( private concurrentService:ConcurrentService,   private userService:UserService,private pointventeService : PointVenteService,private http: HttpClient, private toastr: ToastrService, private router: Router) { }

  url = 'http://localhost:3000';
   


   // Save reponses of Concurrent

   createreponseconcurrent(data) {
    this.http.post(`${this.url}/concurrent`, data)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured:' , err);
        }
      );
  }
  
  createreponsepointevenete(data1) {
    this.http.post(`${this.url}/pointeVenteReponse`, data1)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured:' , err);
        }
      );
  }
 
  createreponseverbatime(data2) {
    this.http.post(`${this.url}/verbatime`, data2)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log('Error occured:' , err);
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
      this.userService.getUserBoard().subscribe(
        data => {
          this.userInfo = {
          id: data.user.id,
          id_societe:data.user.id_societe,
          name: data.user.name,
          email: data.user.email
          };
        
        
        this.id_societe=this.userInfo.id_societe

      this.pointventeService
      .getPointVente()
      .subscribe((data1:PointVente[])=>{
        this.pointeventes=data1.filter((word =>word.id_societe==this.userInfo.id_societe) );

        this.pointeventes.forEach((pointvente)=>{
    
           
      
          var index = this.pointeVentesList.findIndex(x => x.value==pointvente.nom)
          if (index === -1){
            this.pointeVentesList.push({key:pointvente.nom,value:pointvente.nom})
          }
        else console.log("object already exists")
           
           

          })

        
      })
   
this.concurrentService.getConcurrent().subscribe((data1:Concurrent[])=>{

  this.concurrent=data1.filter((word =>word.id_societe==this.userInfo.id_societe) );
  this.concurrent.forEach(concurrent=>{
    var index = this.concurrents.findIndex(x => x.value==concurrent.nom)
    if (index === -1){
      this.concurrents.push({ key:concurrent.nom,value:concurrent.nom})
    }


  })
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

            case "dropdown1":


         
      
            questionsretour.push(
            new DropdownQuestion({
              key: question.qkey,
              label: question.qlabel,
              options:this.pointeVentesList,
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