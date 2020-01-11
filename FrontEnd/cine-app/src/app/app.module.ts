import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorsComponent } from './components/actors/actors.component';
import { ActorsItemComponent } from './components/actors-item/actors-item.component';
import { HeaderComponent } from './components/layout/header/header.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { WinnersComponent } from './components/winners/winners.component';
import { ActorDetailComponent } from './components/actor-detail/actor-detail.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesItemComponent } from './components/movies-item/movies-item.component';
import { WinnersItemComponent } from './components/winners-item/winners-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorsComponent,
    ActorsItemComponent,
    HeaderComponent,
    WinnersComponent,
    ActorDetailComponent,
    MoviesComponent,
    MoviesItemComponent,
    WinnersItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
