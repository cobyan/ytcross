import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { YoutubePlayerModule } from './youtube-player/youtube-player.module';
import { AppComponent } from './app.component';
import { CrossfaderComponent } from './crossfader/crossfader.component';

@NgModule({
  declarations: [
    AppComponent,
    CrossfaderComponent,
  ],
  imports: [
    BrowserModule,
    YoutubePlayerModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
