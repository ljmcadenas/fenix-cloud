import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { PlayComponent } from './play/play.component';
import { GameoverComponent } from './gameover/gameover.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: 'play',
        component: PlayComponent
      },
      {
        path: 'gameover',
        component: GameoverComponent
      },
      {
        path: '',
        redirectTo: '/welcome',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: '/welcome'
      }
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
