import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { UnSubscribeOnDestroy } from '@shared/abstracts/unSubacribeOnDestory.abstract';
import { Device } from '@shared/enums';
import { LayoutService } from '@shared/services/layout.service';
import { takeUntil } from 'rxjs';
import { BasePage } from 'src/utilities/bases';
import { IAfterImgWordBlockData } from '../../blocks/after-img-word-block/after-img-word-block.component';

interface IQuestionList {
  title: string;
  img: string;
}

interface ISettingList {
  title1: string;
  title2: string;
  img: string;
}

interface IPeopleList {
  title: string;
  contentList: string[];
  img: string;
}
@Component({
  selector: 'app-care-tab',
  templateUrl: './care-tab.component.html',
  styleUrls: [
    './care-tab.component.scss',
  ],
})
export class CareTabComponent extends BasePage implements OnInit {
  @ViewChild('consultationWords') consultationWords?: ElementRef<HTMLElement>;
  @ViewChild('traningWords') traningWords?: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2, private $layout: LayoutService) {
    super();
  }
  public img?: string;
  public coverImg = '';

  public consultation_cards: IAfterImgWordBlockData[] = [
    {
      img: {
        pc: 'assets/product_pc/photo_consultation_pc.png',
        pad: 'assets/product_pad/photo_consultation_pad.png',
        mb: 'assets/product_mobile/photo_consultation_mobile.png',
      },
      title: '諮詢服務',
      subTitle: 'CONSULTATION SERVICE',
      content:
        '長照需求已是老化社會的標配，不同類型的照護機構也如雨後春筍般的成立，但如何提供符合需求的服務流程，我們有專業的諮詢團隊可以提供服務',
    },
  ];
  public traning_cards: IAfterImgWordBlockData[] = [
    {
      img: {
        pc: 'assets/product_pc/photo_traning_pc.png',
        pad: 'assets/product_pad/photo_traning_pad.png',
        mb: 'assets/product_mobile/photo_traning_mobile.png',
      },
      title: '人才培訓',
      subTitle: 'TRAINING',
      content:
        '協助長照單位進行人才的長期培訓，透過職能不斷的加強提升來提高服務品質',
    },
  ];

  public questions_list: IQuestionList[] = [
    {
      title: '就醫記錄',
      img: 'app-clinical-notes-solid-icon',
    },
    {
      title: '用藥記錄',
      img: 'app-prescriptions-solid-icon',
    },
    {
      title: '失智狀況評估',
      img: 'app-psychology-alt-solid-icon',
    },
    {
      title: '失能狀況評估',
      img: 'app-blind-solid-icon',
    },
  ];

  public settings_list: ISettingList[] = [
    {
      title1: '社區整合',
      title2: '服務中心',
      img: 'app-hub-solid-icon',
    },
    {
      title1: '複合型日間',
      title2: '服務中心',
      img: 'app-light-mode-solid-icon',
    },
    {
      title1: '巷弄',
      title2: '長照站',
      img: 'app-family-home-solid-icon',
    },
  ];

  public traning_people_list: IPeopleList[] = [
    {
      title: '長輩 / 家屬',
      img: 'app-diversity-one-solid-icon',
      contentList: [
        '日常有固定的生理量測記錄',
        '有醫護相關團隊了解狀況',
        '失能/失智/疾病預防與日常生活相結合',
        '有機制可了解長輩狀況',
      ],
    },
    {
      title: '照服員',
      img: 'app-diversity-four-solid-icon',
      contentList: [
        '可將長輩的生理量測指數及日常生理狀況整合提供醫護團隊觀測，給予課程/飲食之照護建議',
        '可提供社區獨老更多服務',
        '降低照護員工作負擔',
      ],
    },
    {
      title: '日照 / 長照據點',
      img: 'app-family-home-solid-icon',
      contentList: [
        '有機制了解長輩醫療用藥狀況',
        '可在日常生活及飲食給予引導及留意',
        '增加服務技能',
      ],
    },
    {
      title: '主管單位',
      img: 'app-diversity-two-solid-icon',
      contentList: ['了解各單位機構出席及日常照護狀況', '降低醫療及長照支出'],
    },
  ];

  protected override onInit(): void {
    this.$layout.$mainScroll
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((scroll) => {
        const scrollDistance = (scroll.target as HTMLElement).scrollTop;
        this.renderer.setStyle(
          this.consultationWords?.nativeElement,
          'backgroundPosition',
          scrollDistance + 'px 0'
        );
        this.renderer.setStyle(
          this.traningWords?.nativeElement,
          'backgroundPosition',
          scrollDistance + 'px 0'
        );
      });

    this.setCoverImg();
  }
  private setCoverImg(): void {
    this.$window.device$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((device) => {
        switch (device) {
          case Device.Desktop:
            this.coverImg = 'assets/product_pc/banner_news_caring_pc.png';
            break;
          case Device.Tablet:
            this.coverImg = 'assets/product_pad/banner_news_caring_pad.png';
            break;
          case Device.Mobile:
            this.coverImg = 'assets/product_mobile/banner_news_caring_mobile.png';
            break;
        }
      });
  }
}
