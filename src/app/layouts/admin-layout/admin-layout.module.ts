import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TypographyComponent } from '../../typography/typography.component';

import { PointVenteComponent } from '../../point-vente/point-vente.component';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatGridListModule,
  MatSidenavModule
} from '@angular/material';
import { QuestionnaireComponent } from 'src/app/questionnaire/questionnaire.component';
import { AjoutPointVenteComponent } from 'src/app/ajout-point-vente/ajout-point-vente.component';
import {ConfirmationPopoverModule} from "angular-confirmation-popover";
import { AjoutQuestionnaireComponent } from 'src/app/ajout-questionnaire/ajout-questionnaire.component';
import { NpsComponent } from 'src/app/nps/nps.component';
import { NoteImagePrixComponent } from 'src/app/note-image-prix/note-image-prix.component';
import { PromotionsComponent } from 'src/app/promotions/promotions.component';
import { NoteQualiteProduitsComponent } from 'src/app/note-qualite-produits/note-qualite-produits.component';
import { NoteAmabilitePersonnelComponent } from 'src/app/note-amabilite-personnel/note-amabilite-personnel.component';
import { NoteRapportQualitePrixComponent } from 'src/app/note-rapport-qualite-prix/note-rapport-qualite-prix.component';
import { NoteRapiditePayerComponent } from 'src/app/note-rapidite-payer/note-rapidite-payer.component';
import { NoteQualiteMaterielComponent } from 'src/app/note-qualite-materiel/note-qualite-materiel.component';
import { NoteChoixProduitComponent } from 'src/app/note-choix-produit/note-choix-produit.component';
import { NoteFaciliterTrouverProduitComponent } from 'src/app/note-faciliter-trouver-produit/note-faciliter-trouver-produit.component';
import { NotePrixProduitsBioComponent } from 'src/app/note-prix-produits-bio/note-prix-produits-bio.component';
import { NoteQualiteProduitsBioComponent } from 'src/app/note-qualite-produits-bio/note-qualite-produits-bio.component';
import { NuageMotsComponent } from 'src/app/nuage-mots/nuage-mots.component';
import { TagCloudModule } from 'angular-tag-cloud-module';
import { ConcurrentSocieteComponent } from 'src/app//concurrent-societe/concurrent-societe.component';
import { AjoutConcurrentComponent } from 'src/app/ajout-concurrent/ajout-concurrent.component';
import { ElasticsearchComponent } from 'src/app/elasticsearch/elasticsearch.component';
import { SettingsComponent } from 'src/app/settings/settings.component';
import { AgmCoreModule } from '@agm/core';
import { SliderModule } from 'angular-image-slider';
import {SlideshowModule} from 'ng-simple-slideshow';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatGridListModule,
    TagCloudModule,
    MatSidenavModule,
    SliderModule,
    SlideshowModule,

    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB-B4w0zkbgaVpEFq_Z_FzCtdN_aePNK90'
    }),

  ],
  declarations: [
    DashboardComponent,
    PointVenteComponent,
    TypographyComponent,
    
    AjoutPointVenteComponent,
    QuestionnaireComponent,
    AjoutQuestionnaireComponent,
    NpsComponent,
    NoteImagePrixComponent,
    PromotionsComponent,
    NoteQualiteProduitsComponent,
    
    NoteAmabilitePersonnelComponent,
    NoteRapportQualitePrixComponent,
    NoteRapiditePayerComponent,
    NoteQualiteMaterielComponent,
    NoteChoixProduitComponent,
    NoteFaciliterTrouverProduitComponent,
    NotePrixProduitsBioComponent,
    NoteQualiteProduitsBioComponent,
    NuageMotsComponent,
    ConcurrentSocieteComponent,
    AjoutConcurrentComponent,
    ElasticsearchComponent,
    SettingsComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ]

})

export class AdminLayoutModule {}
