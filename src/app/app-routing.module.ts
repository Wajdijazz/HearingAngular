import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { 
    AuthGuardService as AuthGuard 
  } from './auth/auth-guard.service';
  import { 
    RoleGuardService as RoleGuard 
  } from './auth/role-guard.service';
import { SocieteComponent } from './societe/societe.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { AjoutSocieteComponent } from './ajout-societe/ajout-societe.component';
import { TypographyComponent } from './typography/typography.component';
import { HomeComponent } from './home/home.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { FacturationComponent } from './facturation/facturation.component';
import { UpdatesocieteComponent } from './updatesociete/updatesociete.component';

  

const routes: Routes = [
    
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'pm',
        component: PmComponent
    },
    
    {
        path: 'auth/login',
        component: LoginComponent,
    },
    {
        path: 'signup',
        component: RegisterComponent,
    },
    {
      path: 'update',
      component: UpdatesocieteComponent,
  },
    {
        path: '',
        redirectTo: 'login',

        pathMatch: 'full',
      },
      { path: 'admin', component: AdminComponent, children: [
        { path: 'ajout-societe', component: AjoutSocieteComponent},
        { path: 'home', component:  HomeComponent},
        { 
          path: 'dashboard',
          component: DashboardAdminComponent
        },
        { 
          path: 'facturation',
          component: FacturationComponent
        },
        

        
       
        






        

        

   
      ],    canActivate: [RoleGuard], 
      
        
      data: { 
        expectedRole: 'ROLE_ADMIN'
      } 
  
          
          
      
  },
     
   
       {
        path: 'admin-layout',
        component: AdminLayoutComponent,
        canActivate: [RoleGuard], 
      
        
        data: { 
          expectedRole: 'ROLE_USER'
        } ,
    
       





        children: [
            {
          path: '',
          loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }],     
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [ NO_ERRORS_SCHEMA ]

})
export class AppRoutingModule { }
