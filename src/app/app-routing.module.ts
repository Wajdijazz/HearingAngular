import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocieteComponent } from './societe/societe.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
