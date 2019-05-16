import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
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
import { HomeComponent } from './home/home.component';
import { PointVenteComponent } from './point-vente/point-vente.component';
import { PointVenteService } from './point-vente/point-vente.service';
import { AjoutPointVenteComponent } from './ajout-point-vente/ajout-point-vente.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionnaireService } from './questionnaire/questionnaire.service';
import { AjoutQuestionnaireComponent } from './ajout-questionnaire/ajout-questionnaire.component';
import { QuestionService } from './question/question.service';
import { ReactiveFormsModule }          from '@angular/forms';
import { DynamicFormComponent }         from './question/dynamic-form.component';
import { DynamicFormQuestionComponent } from './question/dynamic-form-question.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ReportingComponent } from './reporting/reporting.component';
import { NpsComponent } from './nps/nps.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import { ChartService } from './chart/chart.service';
import {MatDialogModule} from '@angular/material/dialog';
import { NoteImagePrixComponent } from './note-image-prix/note-image-prix.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { ThemeComponent } from './theme/theme.component';
import { QuestionsComponent } from './questions/questions.component';
import { DetailQuestionnaireComponent } from './detail-questionnaire/detail-questionnaire.component';
import { ServicesSpecialesComponent } from './services-speciales/services-speciales.component';
import { ChoixQuestionnaireComponent } from './choix-questionnaire/choix-questionnaire.component';
import { AjoutQuestionsComponent } from './ajout-questions/ajout-questions.component';
import { SondageComponent } from './sondage/sondage.component';
import { ReponsesComponent } from './reponses/reponses.component';
import { NoteQualiteProduitsComponent } from './note-qualite-produits/note-qualite-produits.component';
import { AmChartsComponent } from './am-charts/am-charts.component';
import { NoteAmabilitePersonnelComponent } from './note-amabilite-personnel/note-amabilite-personnel.component';
import { NoteRapportQualitePrixComponent } from './note-rapport-qualite-prix/note-rapport-qualite-prix.component';
import { NoteRapiditePayerComponent } from './note-rapidite-payer/note-rapidite-payer.component';
import { NoteQualiteMaterielComponent } from './note-qualite-materiel/note-qualite-materiel.component';
import { NoteChoixProduitComponent } from './note-choix-produit/note-choix-produit.component';
import { NoteFaciliterTrouverProduitComponent } from './note-faciliter-trouver-produit/note-faciliter-trouver-produit.component';
import { NotePrixProduitsBioComponent } from './note-prix-produits-bio/note-prix-produits-bio.component';
import { NoteQualiteProduitsBioComponent } from './note-qualite-produits-bio/note-qualite-produits-bio.component';
import { TagCloudModule } from 'angular-tag-cloud-module';
import { NuageMotsComponent } from './nuage-mots/nuage-mots.component';



const routes: Routes = [
{ path: '', component : HomeComponent},
{ path: 'societe', component: SocieteComponent},
{ path: 'ajout-societe', component: AjoutSocieteComponent },
{ path: 'point-vente', component : PointVenteComponent},
{ path: 'ajout-point-vente', component : AjoutPointVenteComponent},
{ path: 'questionnaire', component : QuestionnaireComponent},
{ path : 'ajout-questionnaire', component : AjoutQuestionnaireComponent},
{ path: 'choix-questionnaire', component: ChoixQuestionnaireComponent },
{ path: 'sondage/:sondageid', component: SondageComponent },

{ path: 'questions/:sondageid', component: QuestionsComponent },


{ path: 'reporting', component: ReportingComponent, children: [
  { path : 'Nuage-Mots', component : NuageMotsComponent},
    { path: 'nps', component: NpsComponent},
    { path: 'Note-Image-Prix', component: NoteImagePrixComponent},
    { path : 'promotions', component : PromotionsComponent},
    { path : 'Note-Qualite-Produit', component : NoteQualiteProduitsComponent},
    { path : 'Note-Amabilite-Personnel', component : NoteAmabilitePersonnelComponent},
    { path : 'Note-Rapport-Qualite-Prix', component : NoteRapportQualitePrixComponent},
    { path : 'Note-Rapidite-Paiement', component : NoteRapiditePayerComponent},
    { path : 'Note-Qualite-Materiel', component : NoteQualiteMaterielComponent},
    { path : 'Note-Choix-Produits', component : NoteChoixProduitComponent},
    { path : 'Note-Facilite-Trouver-Produits', component : NoteFaciliterTrouverProduitComponent},
    { path : 'Note-Prix-Produits-Bio', component : NotePrixProduitsBioComponent},
    { path : 'Note-Qualite-Produits-Bio', component : NoteQualiteProduitsBioComponent}


   








    ]
},
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    SocieteComponent,
    AjoutSocieteComponent,
    HomeComponent,
    PointVenteComponent,
    AjoutPointVenteComponent,
    QuestionnaireComponent,
    AjoutQuestionnaireComponent,
    
    ReportingComponent,
    NpsComponent,
    NoteImagePrixComponent,
    PromotionsComponent,
    ThemeComponent,
    QuestionsComponent,
    DetailQuestionnaireComponent,
    ServicesSpecialesComponent,
    ChoixQuestionnaireComponent,
    AjoutQuestionsComponent,
    SondageComponent,
    ReponsesComponent,
    NoteQualiteProduitsComponent,
    AmChartsComponent,
    NoteAmabilitePersonnelComponent,
    NoteRapportQualitePrixComponent,
    NoteRapiditePayerComponent,
    NoteQualiteMaterielComponent,
    NoteChoixProduitComponent,
    NoteFaciliterTrouverProduitComponent,
    NotePrixProduitsBioComponent,
    NoteQualiteProduitsBioComponent,
    NuageMotsComponent
    
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

    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    })
  ],
  providers: [
  SocieteService,
  PointVenteService,
  QuestionnaireService,
  QuestionService,
  ChartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
