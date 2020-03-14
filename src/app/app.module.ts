import { environment } from './../environments/environment.prod';
import { appReducers } from './store/reducers/app.reducers';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { YoutubePlayerModule } from './modules/youtube-player/youtube-player.module';
import { AppComponent } from './app.component';
import { CrossfaderComponent } from './components/crossfader/crossfader.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    CrossfaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    YoutubePlayerModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [],
      { enableTracing: true } // <-- debugging purposes only
    ),
    StoreModule.forRoot(appReducers),
    StoreRouterConnectingModule.forRoot({stateKey: 'router' }),
    StoreDevtoolsModule.instrument(),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
