import { tap, takeUntil, filter, map, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Directive, ElementRef, Renderer2, Input, HostListener, Output, EventEmitter } from '@angular/core';

import { Device } from '@shared/enums';
import { BaseComponent } from '@utilities/bases';
import { NavigationEnd } from '@angular/router';
import { formatAbsolutePath } from '@utilities/helpers';
import { timer } from 'rxjs';

@Directive({
  selector: '[appResponsiveViewport]',
})

/**
 * @description
 * calculate viewport height dynamic
 */

export class ResponsiveViewportDirective extends BaseComponent {
  @Input() responseBuffers: Element[] = [];
  @Input() breakpoints: Device[] = [];
  @Output() OnResize = new EventEmitter<any>();
  @Output() OnInit = new EventEmitter<HTMLElement>();

  constructor(
    private e: ElementRef,
    private render: Renderer2,
  ) {
    super();
  }

  private resize$!: ResizeObserver;
  get bufferHeight() { return this.responseBuffers.reduce((total, current) => total = total + current.clientHeight, 0); }

  @HostListener('window:resize', ['$event'])
  onWindowResize = () => {
    if (this.breakpoints.length === 0 || this.breakpoints.some(breakpoint => breakpoint === this.$window.getDevice())) {
      this.resizeViewport();
    }
  }

  protected override onInit(): void {
    this.resizeViewport();
    this.OnInit.emit(this.e.nativeElement);
    this.resize$ = this.$window.resizeObserver(this.resizeViewport.bind(this));
    if (this.breakpoints.length === 0) {
      this.responseBuffers.forEach(element => this.resize$.observe(element));
    } else {
      this.$window.device$.pipe(
        takeUntil(this.onDestroy$),
        tap((device) => this.onDeviceChanged(device))
      ).subscribe();
    }

    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map((e) => formatAbsolutePath((e as NavigationEnd).urlAfterRedirects)),
      distinctUntilChanged(),
      takeUntil(this.onDestroy$),
      switchMap(() => timer(300))
    ).subscribe(() => {
      this.resizeViewport();
    })
  }

  private onDeviceChanged(device: Device) {
    this.responseBuffers.forEach(element => this.resize$.unobserve(element));
    this.render.removeStyle(this.e.nativeElement, 'height');
    if (this.breakpoints.some(breakpoint => breakpoint === device)) {
      this.responseBuffers.forEach(element => this.resize$.observe(element));
    }
  }

  private resizeViewport() {
    this.render.setStyle(this.e.nativeElement, 'height', `${window.innerHeight - this.bufferHeight}px`);
    this.OnResize.emit(this.e.nativeElement.getBoundingClientRect());
  }

  protected override onDestroy() {
    this.resize$.disconnect();
    this.render.removeStyle(this.e.nativeElement, 'height');
  }
}
