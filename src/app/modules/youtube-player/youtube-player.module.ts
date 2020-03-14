import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { YoutubePlayerComponent } from './components/youtube-player/youtube-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [YoutubePlayerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    YouTubePlayerModule,
    FontAwesomeModule,
  ],
  exports: [YoutubePlayerComponent],
})
export class YoutubePlayerModule { }
