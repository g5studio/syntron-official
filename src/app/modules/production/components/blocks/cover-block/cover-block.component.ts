import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover-block',
  templateUrl: './cover-block.component.html',
  styleUrls: ['./cover-block.component.scss']
})
export class CoverBlockComponent implements OnInit {
  @Input() imgUrl = '';
  @Input() title = '';
  @Input() contentInnerHtml = '';
  constructor() { }

  ngOnInit(): void {
  }

}
