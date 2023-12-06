import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/utilities/bases';
import { formatAbsolutePath } from 'src/utilities/helpers';

@Component({
  selector: 'app-header-spacing',
  templateUrl: './header-spacing.component.html',
  styleUrls: ['./header-spacing.component.scss']
})
export class HeaderSpacingComponent extends BaseComponent {

  get bgClass() {
    return this.bgSettingConfig[this.$navigation.currentPath] ?? 'bg-white';
  }

  private bgSettingConfig: Record<string, string> = {
    'common/home': 'bg-azure-2'
  }

  constructor() {
    super();
  }
}
