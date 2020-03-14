import { Component } from '@angular/core';

export class Deck {
  volume: number;

  constructor() {
    this.volume = 80;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngdj';

  deckA: Deck;
  deckB: Deck;
  volumeBalance: number;

  constructor() {
    this.deckA = new Deck();
    this.deckB = new Deck();
  }

  volumeChange(newVolume) {
    this.volumeBalance = newVolume;

    if (newVolume === 0) {

      this.deckA.volume = 100;
      this.deckB.volume = 100;

    } else if (newVolume > 0) {

      this.deckA.volume = 100 - Math.abs(newVolume);
      this.deckB.volume = Math.abs(newVolume);

    } else {

      this.deckA.volume = Math.abs(newVolume);
      this.deckB.volume = 100 - Math.abs(newVolume);
    }

    setTimeout(() => {
      console.log('X: %s, A: %d B: %d', this.volumeBalance, this.deckA.volume, this.deckB.volume);
    }, 1000);

  }
}
