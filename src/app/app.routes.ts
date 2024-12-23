import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { FullstackComponent } from './features/fullstack/fullstack.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'fullstack', component: FullstackComponent },
];
