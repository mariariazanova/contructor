import { Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MoreInfoPageComponent } from './components/more-info-page/more-info-page.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { VarietyPageComponent } from './components/variety-page/variety-page.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { PartnerPageComponent } from './components/partner-page/partner-page.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'more-info', component: MoreInfoPageComponent },
  { path: 'details', component: DetailsPageComponent },
  // { path: 'variety', component: PartnerPageComponent },
  // { path: 'materials', component: PartnerPageComponent },
  { path: 'contacts', component: ContactsPageComponent },
  { path: 'partner', component: PartnerPageComponent },
];
