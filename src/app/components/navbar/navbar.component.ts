import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { TokenStorageService } from 'src/app/auth/token-storage.service';
import { NavbarSearchService } from './navbar-search.service';
import { NavbarSearch } from './navbar-search';
import { SharedServiceService } from 'src/app/services-speciales/shared-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    nom:any
    private listTitles: any[];
    location: Location;
      mobile_menu_visible: any = 0;
    private toggleButton: any;
    private sidebarVisible: boolean;
    userInfo: { id: any; id_societe: any; name: any; email: any; };
    info: { token: string; username: string; authorities: string[]; };
    navbarSearch : NavbarSearch ={

      nom:''
    }
    @Output() showCallBackPopUp = new EventEmitter();

    constructor(private sharedServiceService:SharedServiceService,private navbarSearchServiceprivate: NavbarSearchService , private token: TokenStorageService,private userService:UserService,location: Location,  private element: ElementRef, private router: Router) {
      this.location = location;
          this.sidebarVisible = false;
    }

    ngOnInit(){
        this.userService.getUserBoard().subscribe(
            data => {
              this.userInfo = {
                id: data.user.id,
                id_societe:data.user.id_societe,
                name: data.user.name,
                email: data.user.email
              };
          
            console.log(this.userInfo.name)
          this.nom=this.userInfo.name.toUpperCase()
           
        })
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe((event) => {
          this.sidebarClose();
           var $layer: any = document.getElementsByClassName('close-layer')[0];
           if ($layer) {
             $layer.remove();
             this.mobile_menu_visible = 0;
           }
       });
   
  
   
    }
    logout() {
        this.token.signOut();
        this.router.navigateByUrl('');

      }
  

    getTitle(){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 2 );
      }
      titlee = titlee.split('/').pop();

      for(var item = 0; item < this.listTitles.length; item++){
          if(this.listTitles[item].path === titlee){
              return this.listTitles[item].title;
          }
      }
      return 'Dashboard';
    }
    sidebarOpen() {
      const toggleButton = this.toggleButton;
      const body = document.getElementsByTagName('body')[0];
      setTimeout(function(){
          toggleButton.classList.add('toggled');
      }, 500);
  
      body.classList.add('nav-open');
  
      this.sidebarVisible = true;
  };
  sidebarClose() {
      const body = document.getElementsByTagName('body')[0];
      this.toggleButton.classList.remove('toggled');
      this.sidebarVisible = false;
      body.classList.remove('nav-open');
  };
    sidebarToggle() {
      // const toggleButton = this.toggleButton;
      // const body = document.getElementsByTagName('body')[0];
      var $toggle = document.getElementsByClassName('navbar-toggler')[0];
  
      if (this.sidebarVisible === false) {
          this.sidebarOpen();
      } else {
          this.sidebarClose();
      }
      const body = document.getElementsByTagName('body')[0];
  
      if (this.mobile_menu_visible == 1) {
          // $('html').removeClass('nav-open');
          body.classList.remove('nav-open');
          if ($layer) {
              $layer.remove();
          }
          setTimeout(function() {
              $toggle.classList.remove('toggled');
          }, 400);
  
          this.mobile_menu_visible = 0;
      } else {
          setTimeout(function() {
              $toggle.classList.add('toggled');
          }, 430);
  
          var $layer = document.createElement('div');
          $layer.setAttribute('class', 'close-layer');
  
  
          if (body.querySelectorAll('.main-panel')) {
              document.getElementsByClassName('main-panel')[0].appendChild($layer);
          }else if (body.classList.contains('off-canvas-sidebar')) {
              document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
          }
  
          setTimeout(function() {
              $layer.classList.add('visible');
          }, 100);
  
          $layer.onclick = function() { //asign a function
            body.classList.remove('nav-open');
            this.mobile_menu_visible = 0;
            $layer.classList.remove('visible');
            setTimeout(function() {
                $layer.remove();
                $toggle.classList.remove('toggled');
            }, 400);
          }.bind(this);
  
          body.classList.add('nav-open');
          this.mobile_menu_visible = 1;
  
      }
  };


}
