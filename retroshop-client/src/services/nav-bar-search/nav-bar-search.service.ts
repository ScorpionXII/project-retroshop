import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class NavBarSearchService {

  patternChanged = new EventEmitter<any>();

  constructor() {}

  getPatternChangedEmitter() {
    return this.patternChanged;
  }

  setPattern(pattern) {
    this.patternChanged.emit(pattern);
  }
}
