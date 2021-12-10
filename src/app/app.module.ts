import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';


import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { MovieComponent } from './components/movie/movie.component';
import { SearchResutComponent } from './components/movie/search-resut/search-resut.component';
import { MywatchlistComponent } from './components/movie/mywatchlist/mywatchlist.component';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import { moviesReducer } from './ngrx/movies.reducer';
import { MoviesEffects } from './ngrx/movies.effects';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    SearchResutComponent,
    MywatchlistComponent,
    NavComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({catalogState:moviesReducer}),
    EffectsModule.forRoot([MoviesEffects]),
    StoreDevtoolsModule.instrument(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
