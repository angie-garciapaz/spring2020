import {Injectable} from '@angular/core';

@Injectable()
export class WinRefService {
  constructor() {
  }

  getNativeWindow() {
    return window;
  }
}
