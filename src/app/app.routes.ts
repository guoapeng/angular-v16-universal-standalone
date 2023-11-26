import { Routes } from '@angular/router';
import AboutComponent from './about/about.component';
import { importProvidersFrom } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component'),
  },
  /* {
    path: 'about', loadComponent: () => import('./about/about.component')
  }, */
  {
    path: 'about',
    component: AboutComponent,
    pathMatch: 'full',
    providers: [importProvidersFrom(MarkdownModule.forRoot())],
  },
  {
    path: 'todos',
    loadComponent: () => import('./todos/todos.component'),
  },
];
