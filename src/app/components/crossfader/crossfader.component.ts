import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-crossfader',
  templateUrl: './crossfader.component.html',
  styleUrls: ['./crossfader.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CrossfaderComponent implements OnInit {

  config = {
    min: -100,
    max: 100,
  };

  icons = { center: faVolumeUp, left: faVolumeUp, right: faVolumeUp };

  get center() {
    return this.config.min + this.config.max;
  }

  range: FormControl = new FormControl(0);
  @Output() volumeChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {

    this.range.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe((newVolume: number) => this.volumeChange.emit(newVolume));
  }

  ngOnInit(): void {
  }

  resetVolume(newVolume: number) {
    console.log('resetting newVolume: ', newVolume);
    this.range.setValue(newVolume);
    this.volumeChange.emit(newVolume);
  }
}
