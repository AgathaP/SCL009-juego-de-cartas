// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { StartComponent } from './components/start/start.component';
import { CardsComponent } from './components/cards/cards.component';
import { PlayAgainComponent } from './components/play-again/play-again.component';


const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'home', component: StartComponent },
  { path: 'game', component: CardsComponent },
  { path: 'play-again', component: PlayAgainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
