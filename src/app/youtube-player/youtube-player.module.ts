import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [YoutubePlayerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    YouTubePlayerModule,
  ],
  exports: [YoutubePlayerComponent],
})
export class YoutubePlayerModule { }
