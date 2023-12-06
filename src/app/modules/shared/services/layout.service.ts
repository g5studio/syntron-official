import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor() { }

  /** main scroll事件 */
  public mainScrollSubject = new Subject<Event>();
  public $mainScroll = this.mainScrollSubject.asObservable();
}
