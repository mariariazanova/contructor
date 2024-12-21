import { Routes } from '@angular/router';
import { PageComponent } from './components/page/page.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MoreInfoPageComponent } from './components/more-info-page/more-info-page.component';

export const routes: Routes = [
  // { path: '', component: PageComponent },
  { path: '', component: MainPageComponent },
  { path: 'more-info', component: MoreInfoPageComponent },
];
