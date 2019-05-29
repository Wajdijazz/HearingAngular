import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ConcurrentService } from './concurrent.service';
import { Concurrent } from './concurrent.interface';

@Component({
  selector: 'app-concurrent-societe',
  templateUrl: './concurrent-societe.component.html',
  styleUrls: ['./concurrent-societe.component.scss']
})
export class ConcurrentSocieteComponent implements OnInit {
  userInfo: { id: any; id_societe: any; name: any; email: any; };
  societe: any;
  concurrents: Concurrent[];
  board: any;
  errorMessage: string;

  constructor(private concurrentService :ConcurrentService,private userService:UserService) { }

  ngOnInit() {
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
  }

  

}
