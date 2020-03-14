import { FormControl } from '@angular/forms';
import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, OnChanges, Renderer2, SimpleChange } from '@angular/core';
import { Store } from '@ngrx/store';
import { YouTubePlayer } from '@angular/youtube-player';
import { AppStateInterface } from 'src/app/store/state/app.state';
import { HistoryActionsEnum, PushHistoryItem } from 'src/app/store/actions/history.actions';

@Component({
  selector: 'app-youtube-player',
  templateUrl: `./youtube-player.component.html`,
  styleUrls: ['./youtube-player.component.scss']
})
export class YoutubePlayerComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() volume: number;

  @Input() videoId: string;

  @ViewChild('player') playerRef: ElementRef<YouTubePlayer>;
  @ViewChild('searchBtn') searchBtn: ElementRef<HTMLElement>;
  @ViewChild('searchInput') searchInput: ElementRef<HTMLElement>;

  userVideoId: FormControl = new FormControl('');

  player: any;

  searchToggle = false;

  constructor(private R2: Renderer2,
              private store: Store<AppStateInterface>) {

    this.userVideoId.valueChanges.subscribe(
      this.changeVideoId
    );
  }

  ngOnChanges(changes: {volume: SimpleChange}) {

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

  showSearchField(): void {
    this.searchToggle = !this.searchToggle;
  }

  private validateId(v: string): string | null {
    const videoUrlContainsId = v.match(/[\d\w-]{11}/);

    if (videoUrlContainsId
        && videoUrlContainsId[0]
        && videoUrlContainsId[0].length === 11) {

          return videoUrlContainsId[0];

        }

    return null;
  }

  private changeVideoId = (v: string) => {

    const validId = this.validateId(v);

    if (validId) {
      console.log('videoId change: ', validId, v);
      this.videoId = validId;
      this.store.dispatch( new PushHistoryItem({time: new Date(), video: validId}));
    } else {
      this.userVideoId.setErrors({invalid: true});
    }

  }
}
