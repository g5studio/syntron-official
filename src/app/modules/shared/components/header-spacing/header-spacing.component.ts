import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter, tap } from 'rxjs';

@Component({
  selector: 'app-header-spacing',
  templateUrl: './header-spacing.component.html',
  styleUrls: ['./header-spacing.component.scss']
})
export class HeaderSpacingComponent implements OnInit {

  get bgClass() {
    return this.bgSettingConfig[this.currentPath] ?? 'bg-white';
  }

  private currentPath: string = window.location.pathname;

  private bgSettingConfig: Record<string, string> = {
    '/common/home': 'bg-azure-2'
  }

  constructor(private router: Router) {
    this.onRouterChanged$.subscribe();
  }

  ngOnInit(): void {
  }

  private onRouterChanged$ = this.router.events.pipe(
    tap((event) => this.routeHandler(event))
  );

  private routeHandler(event: any) {
    if (event instanceof NavigationEnd) {
      this.currentPath = event.url;
    }
  }

}
