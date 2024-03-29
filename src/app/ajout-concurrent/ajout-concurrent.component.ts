import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Concurrent } from '../concurrent-societe/concurrent.interface';
import { ConcurrentService } from '../concurrent-societe/concurrent.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-ajout-concurrent',
  templateUrl: './ajout-concurrent.component.html',
  styleUrls: ['./ajout-concurrent.component.scss']
})
export class AjoutConcurrentComponent implements OnInit {
  userInfo: { id: any; id_societe: any; name: any; email: any; };
  societe: any;
  board: any;
  errorMessage: string;
  concurrent : Concurrent={
    id_societe:null,
    nom:''
  }
  concurrents: Concurrent[];
  id_societe: any;

  constructor(private concurrentService :ConcurrentService,private userService: UserService,) { }

  ngOnInit() {

    this.userService.getUserBoard().subscribe(
			data => {
			  this.userInfo = {
				id: data.user.id,
				id_societe:data.user.id_societe,
				name: data.user.name,
				email: data.user.email
			  };
      this.societe=this.userInfo.name
      this.id_societe=this.userInfo.id_societe
      this.concurrentService
      .getConcurrent()
      .subscribe((data1:Concurrent[])=>{
        this.concurrents=data1.filter((word =>word.id_societe==this.id_societe) );
      })

    })
  
  }
  ngAfterViewInit(){
    this.concurrentService
    .getConcurrent()
    .subscribe((data1:Concurrent[])=>{
      this.concurrents=data1.filter((word =>word.id_societe==this.id_societe) );
    })

  
  }
  getconcurrent(){
    this.concurrentService
    .getConcurrent()
    .subscribe((data1:Concurrent[])=>{
    
       this.concurrents=data1.filter((word =>word.id_societe==this.id_societe) );
     
    })
    Swal.fire("Félicitations", "Concurrent ajouté avec succés", "success");

  }
  creerConcurrent(data:Concurrent){
    
		data.id_societe=this.userInfo.id_societe
  this.concurrentService.createConcurrent(data)

  
}

DeletConcurrent(idConcurrent,concurrent){
  this.concurrentService.DeleteConcurrentId(idConcurrent,this.id_societe).subscribe((data:Concurrent[])=> {

  this.concurrentService
  .getConcurrent()
  .subscribe((data1:Concurrent[])=>{
  this.userService.getUserBoard().subscribe(
    data => {
      this.userInfo = {
      id: data.user.id,
      id_societe:data.user.id_societe,
      name: data.user.name,
      email: data.user.email
      };
    this.societe=this.userInfo.name
      this.concurrents=data1.filter((word =>word.id_societe==this.userInfo.id_societe) );
   
    
     this.board = data.description;
    },
    error => {
      this.errorMessage = `${error.status}: ${error.error}`;
    }
    );


  })
  })
  this.concurrentService.DeleteConcurrentreponse(concurrent).subscribe((data:Concurrent[])=> {
  })
  Swal.fire("Félicitations", "Concurrent supprimé avec succés", "success");


}


	  
  
}
