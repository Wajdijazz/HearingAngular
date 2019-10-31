import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  userInfo: { id: any; id_societe: any; name: any; email: any; };
  nom: any;
  lat: number = 50.6327635;
  lng: number = 3.0209538;
  public imagesUrl;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getUserBoard().subscribe(
      data => {
        this.userInfo = {
          id: data.user.id,
          id_societe:data.user.id_societe,
          name: data.user.name,
          email: data.user.email
        };
    
      console.log(this.userInfo.name)
    this.nom=this.userInfo.name
     
  })


  this.imagesUrl = [
    'assets/images/hearing1.png',
    'assets/images/nps0.png',
    'assets/images/nps1.png',
    'assets/images/nps2.png',
    'assets/images/nps3.png',
    'assets/images/hearing3.png',
    'assets/images/theme1.png',
    'assets/images/theme2.png',
    'assets/images/magasin.png',
    'assets/images/nuage.png',



  
    ];
  }


}
