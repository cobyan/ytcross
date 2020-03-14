import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-crossfader',
  templateUrl: './crossfader.component.html',
  styleUrls: ['./crossfader.component.scss']
})
export class CrossfaderComponent implements OnInit {

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
