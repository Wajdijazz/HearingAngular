import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { SocieteComponent } from './societe/societe.component';
import {SocieteService} from "./societe/societe.service";
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import {FormsModule} from "@angular/forms";
import { AjoutSocieteComponent } from './ajout-societe/ajout-societe.component';
import {ConfirmationPopoverModule} from "angular-confirmation-popover";
import { PointVenteService } from './point-vente/point-vente.service';
import { QuestionnaireService } from './questionnaire/questionnaire.service';
import { QuestionService } from './question/question.service';
import { ReactiveFormsModule }          from '@angular/forms';
import { DynamicFormComponent }         from './question/dynamic-form.component';
import { DynamicFormQuestionComponent } from './question/dynamic-form-question.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { ChartService } from './chart/chart.service';
import {MatDialogModule} from '@angular/material/dialog';

import { ThemeComponent } from './theme/theme.component';
import { QuestionsComponent } from './questions/questions.component';
import { DetailQuestionnaireComponent } from './detail-questionnaire/detail-questionnaire.component';
import { ServicesSpecialesComponent } from './services-speciales/services-speciales.component';
import { ChoixQuestionnaireComponent } from './choix-questionnaire/choix-questionnaire.component';
import { AjoutQuestionsComponent } from './ajout-questions/ajout-questions.component';
import { SondageComponent } from './sondage/sondage.component';
import { ReponsesComponent } from './reponses/reponses.component';

import { TagCloudModule } from 'angular-tag-cloud-module';
import { MatCheckboxModule,MatInputModule,} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { PmComponent } from './pm/pm.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { httpInterceptorProviders } from './auth/auth-interceptor';

import { ComponentsModule } from './components/components.module';

import { MatTooltipModule } from '@angular/material/tooltip';
import { JwtHelperService} from '@auth0/angular-jwt';
import {  JWT_OPTIONS  } from '@auth0/angular-jwt';
import { 
  AuthGuardService as AuthGuard 
} from './auth/auth-guard.service';
import { FooterAdminComponent } from './components-admin/footer-admin/footer-admin.component';
import { NavbarAdminComponent } from './components-admin/navbar-admin/navbar-admin.component';
import { SidebarAdminComponent } from './components-admin/sidebar-admin/sidebar-admin.component';
import { ComponentsAdminModule } from './components-admin/components-admin.module';
import { TypographyComponent } from './typography/typography.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: LoginComponent ,        
},
  { path: 'ajout-societe', component: AjoutSocieteComponent ,        canActivate: [AuthGuard] 
},
   { path: 'choix-questionnaire', component: ChoixQuestionnaireComponent ,        canActivate: [AuthGuard] 
  },
   { path: 'sondage/:sondageid', component: SondageComponent ,      
  },

      { path: 'questions/:sondageid', component: QuestionsComponent ,  
    },
     
      { 
        path: 'admin/societe',
        component: SocieteComponent,
        canActivate: [AuthGuard] 

      },
     



   








    ]


@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    SocieteComponent,
    AjoutSocieteComponent,
    
    
    
    
    ThemeComponent,
    QuestionsComponent,
    DetailQuestionnaireComponent,
    ServicesSpecialesComponent,
    ChoixQuestionnaireComponent,
    AjoutQuestionsComponent,
    SondageComponent,
    ReponsesComponent,
    
    LoginComponent,
    UserComponent,
    RegisterComponent, 
    AdminComponent,
    PmComponent,
    AdminLayoutComponent,

    AdminComponent,
    HomeComponent,

  


    
  ],
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatDividerModule,
    MatGridListModule,
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    NoopAnimationsModule,
    MatRadioModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MatSelectModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
    FormsModule,
    TagCloudModule,
    MatButtonModule, 
    	MatGridListModule,
    	MatCheckboxModule,
    	MatInputModule,
      MatIconModule,
      BrowserAnimationsModule,
      FormsModule,
      RouterModule,
      AppRoutingModule,
      ComponentsModule,
      MatTooltipModule,
      ComponentsAdminModule,
     

      

      

    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    })
  ],
  providers: [
  SocieteService,
  PointVenteService,
  QuestionnaireService,
  QuestionService,
  ChartService,
  { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },

  JwtHelperService,

  httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
