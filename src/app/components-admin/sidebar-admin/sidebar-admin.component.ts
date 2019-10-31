import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/admin/home', title: 'Hearing',  icon:'home', class: '' },
  { path: '/admin/dashboard', title: 'Dashboard',  icon:'dashboard', class: '' },


    { path: '/admin/ajout-societe', title: 'Enseignes',  icon:'table_chart', class: '' },
    { path: '/admin/facturation', title: 'Facturation',  icon:'euro_symbol', class: '' },











];

export const ROUTESDashboard: RouteInfo[] = [
  
  


];
@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.scss']
})
export class SidebarAdminComponent implements OnInit {

  menuItems: any[];
  menuItemsDashboard: any[];
  userInfo: { id: any; id_societe: any; name: any; email: any; };
  societe_name:any
  

  constructor(private router:Router) { }
  config = {
    interfaceWithRoute: true,

    selectedListFontColor: `red`,

};


  
  

      

  ngOnInit() {

 
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.menuItemsDashboard = ROUTESDashboard.filter(menuItemd=> menuItemd);


   

  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}