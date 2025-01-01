import { Routes } from '@angular/router';
import { ContactComponent } from './features/contact/contact.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { HomeComponent } from './features/home/home.component';
import { FullstackComponent } from './features/fullstack/fullstack.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'fullstack', component: FullstackComponent },
  { path: 'experience', component: ExperienceComponent }, // New Route
  { path: 'contact', component: ContactComponent },
];
