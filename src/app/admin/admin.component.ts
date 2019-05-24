import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  userInfo: any;
  board: string;
  errorMessage: string;
  info:any

  constructor(private token: TokenStorageService,private userService: UserService) { }

  ngOnInit() {
    
  }


  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
