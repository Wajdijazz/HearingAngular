import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/admin-layout/about-hearing', title: 'Hearing',  icon:'home', class: ''},
    { path: '/admin-layout/dashboard', title: 'Dashboard',  icon:'dashboard', class: ''},
    { path: '/admin-layout/twitter-settings', title: 'Paramètres Twitter',  icon:'settings', class: ''},

    { path: '/admin-layout/data-visualization', title: 'Visualisation Twitter',  icon:'pie_chart', class: ''},
    { path: '/admin-layout/ajout-point-vente', title: 'Points de Vente',  icon:'table_chart', class: '' },
    { path: '/admin-layout/ajout-concurrent', title: 'Concurrents',  icon:'table_chart', class: '' },


    { path: '/admin-layout/ajout-questionnaire', title: 'Questionnaires',  icon:'table_chart', class: ''}
   

    

   
  


];

export const ROUTESDashboard: RouteInfo[] = [
  
  


];





@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  menuItemsDashboard: any[];
  userInfo: { id: any; id_societe: any; name: any; email: any; };
  societe_name:any
  

  constructor(private userService:UserService,private router:Router) { }
  config = {
    interfaceWithRoute: true,

    selectedListFontColor: `#17a2b8`,

};


  
  appitems = [
    {
      label: 'Thèmes',
      icon: 'insert_chart',
      items: [
       
        {
          label: 'Nuage de mots',
           link:'/admin-layout/Nuage-Mots'
        },
     
        {
          label: 'Net Promoter Score',
           link:'/admin-layout/nps'
        },

     


        {
          label: 'Image Prix',
          link: '/admin-layout/Note-Image-Prix',

        },
        {
          label: 'Promotion',
          link: '/admin-layout/promotions',

        },
        {
          label: 'Qualité des produits',
          link: '/admin-layout/Note-Qualite-Produit',

        },
        {
          label: 'Amabilité Personnel',
          link: '/admin-layout/Note-Amabilite-Personnel',

        }, {
          label: 'Rapport qualité prix',
          link: '/admin-layout/Note-Rapport-Qualite-Prix',

        },
        {
          label: 'Rapidité  paiement',
          link: '/admin-layout/Note-Rapidite-Paiement',

        },
        {
          label: 'Qualité  matériel',
          link: '/admin-layout/Note-Qualite-Materiel',

        },
        {
          label: 'Choix de produits',
          link: '/admin-layout/Note-Choix-Produits',

        },
        {
          label: 'Facilité Trouver produit',
          link: '/admin-layout/Note-Facilite-Trouver-Produits',

        },
        {
          label: 'Prix Produits Bio',
          link: '/admin-layout/Note-Prix-Produits-Bio',

        },
        {
          label: 'Qualité Produits Bio',
          link: '/admin-layout/Note-Qualite-Produits-Bio',

        },
      ]
      }
  ]

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
