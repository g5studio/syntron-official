import { Injectable, ElementRef } from '@angular/core';
import { Device } from '@shared/enums/common.enum';
import { Subject, BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const DEVICE = {
  XS: 0,
  MD: 411,
  XL: 768,
  XXL: 1440
};

const MOBILE_AGENT = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone'];

@Injectable({
  providedIn: 'root'
})

export class WindowHelperService {

  constructor() { }

  get isMobileDevice() { return MOBILE_AGENT.some(agent => window.navigator.userAgent.includes(agent)); }

  private device: BehaviorSubject<Device> = new BehaviorSubject(this.getDevice());
  public device$ = this.device.asObservable().pipe(
    distinctUntilChanged()
  );

  private scrollTop: Subject<number> = new Subject();
  public scrollTop$ = this.scrollTop.asObservable();

  public scrollTo(top: number) { this.scrollTop.next(top); }

  public detectWindowSize() {
    this.device.next(this.getDevice());
  }

  public getDevice() {
    const width = window.innerWidth;
    return (width >= DEVICE.XL ? Device.Desktop :
      (width < DEVICE.XL && width >= DEVICE.MD) ? Device.Tablet : Device.Mobile);
  }

  public getInnerBox(targetDOM: Element): { height: number, width: number } {
    const PaddingTop = parseInt(getComputedStyle(targetDOM).paddingTop, 10);
    const PaddingBottom = parseInt(getComputedStyle(targetDOM).paddingBottom, 10);
    const PaddingLeft = parseInt(getComputedStyle(targetDOM).paddingLeft, 10);
    const PaddingRight = parseInt(getComputedStyle(targetDOM).paddingRight, 10);
    return {
      height: targetDOM.clientHeight - (PaddingTop + PaddingBottom),
      width: targetDOM.clientWidth - (PaddingLeft + PaddingRight)
    };
  }

  public resizeObserver = (callback: (entry: ResizeObserverEntry) => void): ResizeObserver => new ResizeObserver(
    (entrys: ResizeObserverEntry[]) => entrys.forEach(entry => callback(entry))
  )
}
