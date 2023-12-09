import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Device } from '@shared/enums';
import { BasePage } from 'src/utilities/bases';

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
export class AfterImgBlockComponent extends BasePage {
  @Input() data?: IAfterImgBlockData;

  constructor() { super() }

  public img?: string;
  public device?: Device;

  get deviceType() { return Device };

  protected override onInit(): void {
    this.device = this.$window.getDevice();
    if (this.data?.img) {
      this.img = this.getImgs(this.device);
    };
  }

  private getImgs(device: Device): string {
    switch(device) {
      case Device.Desktop: return this.data!.img.pc;
      case Device.Tablet: return this.data!.img.pad;
      case Device.Mobile: return  this.data!.img.mb
    }
  }
}
