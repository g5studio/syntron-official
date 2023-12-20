import { Component, Input, OnInit } from '@angular/core';
import { Device } from '@shared/enums';
import { BasePage } from 'src/utilities/bases';

export interface IAfterImgWordBlockData {
  img: {
    pc: string;
    pad: string;
    mb: string;
  };
  title: string;
  subTitle: string;
  des?: string;
  content?: string;
  listContent?: {
    title: string;
    list: string[];
  };
}

@Component({
  selector: 'app-after-img-word-block',
  templateUrl: './after-img-word-block.component.html',
  styleUrls: ['./after-img-word-block.component.scss'],
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
    if (this.data?.img) {
      this.img = this.getImgs();
    }
  }

  private getImgs(): string {
    const width = window.innerWidth;

    if (width >= 1280) {
      return this.data!.img.pc;
    } else if (width >= 411) {
      return this.data!.img.pad;
    } else {
      return this.data!.img.mb;
    }
  }
}
