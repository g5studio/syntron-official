import { Component, Input, OnInit } from '@angular/core';
import { Device } from '@shared/enums';
import { BasePage } from 'src/utilities/bases';

export interface IAfterImgWordBlockData {
  img: {
    pc: string,
    pad: string,
    mb: string
  }
  title: string,
  subTitle: string,
  des?: string,
  content?: string,
}

@Component({
  selector: 'app-after-img-word-block',
  templateUrl: './after-img-word-block.component.html',
  styleUrls: [
    './after-img-word-block.component.scss',
  ],
})
export class AfterImgWordBlockComponent extends BasePage {
  @Input() data?: IAfterImgWordBlockData;

  constructor() {
    super();
  }

  public img?: string;
  public device?: Device;

  get deviceType() {
    return Device;
  }

  protected override onInit(): void {
    this.device = this.$window.getDevice();
    if (this.data?.img) {
      this.img = this.getImgs(this.device);
    }
  }

  private getImgs(device: Device): string {
    switch (device) {
      case Device.Desktop:
        return this.data!.img.pc;
      case Device.Tablet:
        return this.data!.img.pad;
      case Device.Mobile:
        return this.data!.img.mb;
    }
  }
}
