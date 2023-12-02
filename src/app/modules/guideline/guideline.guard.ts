import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GuidelineGuardGuard implements CanActivate {
  canActivate(): boolean {
    return !environment.production;
  }

}
