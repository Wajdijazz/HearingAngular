import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MatMenuModule} from '@angular/material/menu';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { FooterAdminComponent } from './footer-admin/footer-admin.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    NgMaterialMultilevelMenuModule,

  ],
  declarations: [
    NavbarAdminComponent,
    SidebarAdminComponent,
    
  ],
  exports: [
    NavbarAdminComponent,
    SidebarAdminComponent,
  ]
})
export class ComponentsAdminModule { }
