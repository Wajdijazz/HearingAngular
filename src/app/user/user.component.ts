import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { SharedServiceService } from '../services-speciales/shared-service.service';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userInfo: any;
  board: string;
  errorMessage: string;
  Societe:any
  info: { token: string; username: string; authorities: string[]; };


  constructor(private token: TokenStorageService,private userService: UserService) { }

  ngOnInit() {

}
}
