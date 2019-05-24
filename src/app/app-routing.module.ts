import { NgModule } from '@angular/core';
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
        path: '',
        redirectTo: 'login',

        pathMatch: 'full',
      },
      { path: 'admin', component: AdminComponent, children: [
        { path: 'societe', component: SocieteComponent},
        { path: 'ajout-societe', component: AjoutSocieteComponent},
        { path: 'home', component:  HomeComponent},






        

        

   
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
  exports: [RouterModule]
})
export class AppRoutingModule { }
