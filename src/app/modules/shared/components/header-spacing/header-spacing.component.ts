import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-spacing',
  templateUrl: './header-spacing.component.html',
  styleUrls: ['./header-spacing.component.scss']
})
export class HeaderSpacingComponent implements OnInit {

  @Input() bgClass: string = 'bg-white';

  constructor() { }

  ngOnInit(): void {
  }

}
