import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TimerService {
  limitTime: number = 10;
  count: number = this.limitTime;
  intervalId: number = undefined;

  // Observable source
  private countDoneAnnounceSource = new Subject<number>();
  private countSource = new Subject<number>();

  countDoneAnnounce$ = this.countDoneAnnounceSource.asObservable();
  count$ = this.countSource.asObservable();
  
  constructor() { }

  announceCountDone(done: number) {
    this.countDoneAnnounceSource.next(done);
  }

  start() {
    this.countSource.next(this.count);
    
    if(this.intervalId) {
      this.reset()
    }
    this.count = this.limitTime;
    this.intervalId = window.setInterval( ()=>{
      this.count--;
      this.countSource.next(this.count);
      if( this.count === 0 ) {
        this.reset();
        this.announceCountDone(-1);
      }
    }, 1000);
  }

  reset() {
    clearInterval(this.intervalId);
  }

}
