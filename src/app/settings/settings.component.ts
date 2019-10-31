import { Component, OnInit } from '@angular/core';
import { NavbarSearchService } from '../components/navbar/navbar-search.service';
import { NavbarSearch } from '../components/navbar/navbar-search';
import { UserService } from '../services/user.service';
import { Parametre } from './parametre';
import { ElasticsearchService } from '../elasticsearch/elasticsearch.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  userInfo: { id: any; id_societe: any; name: any; email: any; };
	parametre: Parametre = {
    id: null,
    id_societe: null,
     mots:'',
     date_stream:null
  };
  parametres: Parametre[];
  index:any
  constructor(private es: ElasticsearchService,private userService:UserService,private navbarSearchServiceprivate: NavbarSearchService ) { }

  ngOnInit() {

    this.userService.getUserBoard().subscribe(
			data => {
			  this.userInfo = {
				id: data.user.id,
				id_societe:data.user.id_societe,
				name: data.user.name,
				email: data.user.email
        };
        this.es.getparametrelist(this.userInfo.id_societe).subscribe((data:Parametre[])=>{
        this.parametres=data
        console.log(data)
        })

      })



  }

  creerparametre(data:Parametre){
  
    let date_stream = new Date();
    data.id_societe=this.userInfo.id_societe
    data.date_stream=date_stream
     this.navbarSearchServiceprivate.poststart(data)
  
    this.es.getparametrelist(this.userInfo.id_societe).subscribe((data1:Parametre[])=>{
      this.parametres=data1
     
              })
            
              Swal.fire("", "Le stream commence", "success");
              this.es.getparametrelist(this.userInfo.id_societe).subscribe((data:Parametre[])=>{
                this.parametres=data
                console.log(data)
                })

  }

  Deletstream(id_parametre,index){
    console.log(index)
this.es.Deletestream(id_parametre).subscribe((data1:Parametre[])=> {

  this.es.getparametrelist(this.userInfo.id_societe).subscribe((data:Parametre[])=>{
    this.parametres=data
            })


})
Swal.fire("", "Le stream  est supprimé", "success");


this.es.Deleteindex(index.toLowerCase()).subscribe((data1:Parametre[])=> {
})



  }

  onstop(){
    this.es.getparametre(this.userInfo.id_societe).subscribe((data:Parametre[])=>{
      data.forEach(element => {
        this.index=element.mots
        
      });
this.navbarSearchServiceprivate.stop().subscribe((data:Parametre)=>{

})

Swal.fire("", "Le stream de "+this.index+" est stop", "success");
			  })

  }
}
