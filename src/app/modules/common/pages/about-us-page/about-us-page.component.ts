import { Component } from '@angular/core';
import { BasePage } from 'src/utilities/bases';


@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.scss']
})
export class AboutUsPageComponent extends BasePage {

  constructor() {
    super();
  }


}
