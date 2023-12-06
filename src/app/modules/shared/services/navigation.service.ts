import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  get previousPath(): string {
    return this.history[this.history.length - 1] ?? '';
  }

  constructor() {

  }

  public currentPath: string = '';
  public history: string[] = [];
}
