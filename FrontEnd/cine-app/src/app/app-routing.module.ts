import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorsComponent } from './components/actors/actors.component';
import { WinnersComponent } from './components/winners/winners.component';
import { ActorDetailComponent } from './components/actor-detail/actor-detail.component';

const routes: Routes = [
  { path: '', component: ActorsComponent},
  { path: 'winners', component: WinnersComponent},
  { path: 'actors/:id', component: ActorDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
