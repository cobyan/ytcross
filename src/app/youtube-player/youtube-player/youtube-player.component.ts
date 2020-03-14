import { FormControl } from '@angular/forms';
import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, OnChanges } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-youtube-player',
  template: `<youtube-player
    #player
    [videoId]="videoId"
    (ready)="ready($event)"
    (stateChange)="stateChange($event)"></youtube-player>
    <input type="text" value="{{videoId}}" [(formControl)]="userVideoId">`,
  styleUrls: ['./youtube-player.component.scss']
})
export class YoutubePlayerComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() volume: number;

  @Input() videoId: string;

  @ViewChild('player') playerRef: ElementRef<YouTubePlayer>;

  userVideoId: FormControl = new FormControl('');

  player: any;

  constructor() {
    this.userVideoId.valueChanges.subscribe((v) => {
      console.log('videoId change: ', v);
      this.videoId = v;
    });
  }

  ngOnChanges(changes) {

    console.log('changes happening', this.player);
    if (!this.player) {
      console.error('player not found');
      return;
    }

    if (changes.volume ) {
      console.log('setting player volume');
      this.player.setVolume(changes.volume.currentValue);
    }
  }
  ngOnInit(): void {
        // This code loads the IFrame Player API code asynchronously, according to the instructions at
    // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  ngAfterViewInit(): void {
    this.userVideoId.setValue(this.videoId);
  }

  ready(e): void {
    console.log('ready: ', e);
    this.player = e.target;
    this.player.setOption('controls', '1');
    this.player.playVideo();
  }

  stateChange(e): void {
    console.log('stateChange: ', e);
  }

}
