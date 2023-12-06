import { Component, ElementRef, Input, OnInit } from '@angular/core';

export interface IAfterImgBlockData {
  img: {
    pc: string,
    pad: string,
    mb: string
  }
  title: string,
  subTitle: string,
  des?: string,
  listContent?: {
    title: string,
    list: string[]
  }
}

@Component({
  selector: 'app-afterImage-img-block',
  templateUrl: './afterImage-img-block.component.html',
  styleUrls: ['./afterImage-img-block.component.scss', '../../../shared/scss/production.scss']
})
export class AfterImgBlockComponent implements OnInit {
  @Input() data?: IAfterImgBlockData;

  constructor(
    private selfElement: ElementRef
  ) { }

  ngOnInit(): void {
    if (this.data?.img) {
      this.setImgs();
    };
  }

  private setImgs(): void {
    this.selfElement.nativeElement.style.setProperty('--pc-img', this.data?.img.pc);
    this.selfElement.nativeElement.style.setProperty('--pad-img', this.data?.img.pad);
    this.selfElement.nativeElement.style.setProperty('--mobile-img', this.data?.img.mb);
  }
}
