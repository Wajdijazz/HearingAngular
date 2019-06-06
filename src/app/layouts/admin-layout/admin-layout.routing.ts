import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';

import { TypographyComponent } from '../../typography/typography.component';

import { PointVenteComponent } from '../../point-vente/point-vente.component';
import { QuestionnaireComponent } from 'src/app/questionnaire/questionnaire.component';
import { AjoutPointVenteComponent } from 'src/app/ajout-point-vente/ajout-point-vente.component';
import { AjoutQuestionnaireComponent } from 'src/app/ajout-questionnaire/ajout-questionnaire.component';
import { NuageMotsComponent } from 'src/app/nuage-mots/nuage-mots.component';
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
import { ConcurrentSocieteComponent } from 'src/app//concurrent-societe/concurrent-societe.component';
import { AjoutConcurrentComponent } from 'src/app/ajout-concurrent/ajout-concurrent.component';




export const AdminLayoutRoutes: Routes = [
   
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'ajout-questionnaire',   component: AjoutQuestionnaireComponent },
    { path: 'point-vente',     component: PointVenteComponent },
    { path: 'about-hearing',     component: TypographyComponent },
    { path: 'ajout-point-vente',      component: AjoutPointVenteComponent },
    { path: 'questionnaire',  component: QuestionnaireComponent },
    { path: 'concurrent',  component: ConcurrentSocieteComponent },
    { path: 'ajout-concurrent',  component: AjoutConcurrentComponent },

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

      
];
