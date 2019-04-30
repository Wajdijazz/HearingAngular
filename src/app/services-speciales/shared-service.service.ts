import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  private pointvente : any;

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { 
    this.pointvente=null;
  }
  url = 'http://localhost:3000';

  public setSelectedpointevente(val:any):void{
     this.pointvente=val;

  }

  public getSelectedpointevente():any{

    return this.pointvente;


  }


  

  saverponses(data) {
    this.http.post(`${this.url}/reponses`, data)
      .subscribe(
        res => {
        //  console.log(res);
          this.toastr.success('Votre societe a été créer avec succès.', 'Success');
        //  this.router.navigateByUrl('/reponses');
        },
        err => {
          console.log('Error occured:' , err);
          this.toastr.error(err.message, 'Error occured');
        }
      );
  }

  
}
