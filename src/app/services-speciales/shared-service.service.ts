import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  private pointvente : any;
  private idp : any
  private societe  :any
  private ids  :any


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
  public setSelectedIdpointevente(val:any):void{
    this.idp=val;

 }


 public getIdSelectedpointevente():any{

  return this.idp;


}

  


public setSociete(val:any):void{
  this.societe=val;

}

public getSociete():any{

 return this.societe;


}


public setIdSociete(val:any):void{
  this.ids=val;

}

public getIdSociete():any{

 return this.ids;


}
 

  
}
