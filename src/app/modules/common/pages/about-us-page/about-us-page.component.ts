import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Device } from '@shared/enums';
import { LayoutService } from '@shared/services/layout.service';
import { takeUntil } from 'rxjs';
import { BasePage } from 'src/utilities/bases';

interface ISolutionSlide {
  title: string;
  content: string;
  img: {
    pc: string;
    pad: string;
    mobile: string;
  };
}
@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.scss'],
})
export class AboutUsPageComponent extends BasePage implements OnInit {
  // filterNews: News[] = [];
  currentPage: number = 1;
  @ViewChild('company', { static: false }) company?: ElementRef<HTMLElement>;
  @ViewChild('solution') solution?: ElementRef<HTMLElement>;
  @ViewChild('custom') custom?: ElementRef<HTMLElement>;
  @ViewChild('banner') banner?: ElementRef<HTMLElement>;
  @ViewChild('leftSide') leftSide?: ElementRef<HTMLElement>;

  tabs: string[] = ['SYNTRON企業願景', '解決方案', '我們的客戶'];
  focusTab: string = '';

  constructor(private renderer: Renderer2, private $layout: LayoutService) {
    super();
  }
  public coverImg = '';
  public solution_slide: ISolutionSlide[] = [
    {
      title: '照護服務',
      content: '長照照護系統、照護流程輔導諮詢、照護人員培訓',
      img: {
        pc: 'assets/product_pc/banner_news_caring_pc.png',
        pad: 'assets/product_pc/banner_news_caring_pad.png',
        mobile: 'assets/product_pc/banner_news_caring_mobile.png',
      },
    },
    {
      title: '藥品管理',
      content: '智慧藥櫃系統、藥品管理系統、重要資源管理',
      img: {
        pc: 'assets/product_pc/banner_news_medication_pc.png',
        pad: 'assets/product_pc/banner_news_medication_pad.png',
        mobile: 'assets/product_pc/banner_news_medication_mobile.png',
      },
    },
    {
      title: '叫號系統',
      content: '叫號系統、診間插卡報到系統',
      img: {
        pc: 'assets/product_pc/banner_news_queue_pc.png',
        pad: 'assets/product_pc/banner_news_queue_pad.png',
        mobile: 'assets/product_pc/banner_news_queue_mobile.png',
      },
    },
    {
      title: '雲端儲存',
      content: '公有雲、私有雲及混合雲',
      img: {
        pc: 'assets/product_pc/banner_news_storage_pc.png',
        pad: 'assets/product_pc/banner_news_storage_pad.png',
        mobile: 'assets/product_pc/banner_news_storage_mobile.png',
      },
    },
  ];

  public logo_list: string[] = [
    'logo_ntuh',
    'logo_vetern',
    'logo_taipei_city_hosptial',
    'logo_chiayi_health',
    'logo_marlabs',
    'logo_culture',
    'logo_laber',
    'logo_new_taipei_gov',
    'logo_cjcu',
    'logo_chengkung_university',
    'logo_kinmen',
    'logo_huafan',
    'logo_carrefour',
    'logo_esun_bank',
    'logo_taiwan_oil',
    'logo_twpower',
  ];

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

  protected override onInit(): void {
    this.focusTab = this.tabs[0];
    this.$layout.$mainScroll
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((scroll) => {
        const scrollDistance = (scroll.target as HTMLElement).scrollTop;
        const distanceFromTop =
          this.banner!.nativeElement.offsetTop +
          this.banner!.nativeElement.offsetHeight -
          42;
        const leftSide = this.leftSide!.nativeElement;
        if (scrollDistance > distanceFromTop) {
          leftSide.style.position = 'fixed';
          leftSide.style.top = '7rem';
        } else {
          leftSide.style.position = 'absolute';
          leftSide.style.top = '';
        }
        if(scrollDistance < this.solution!.nativeElement.offsetTop + distanceFromTop - 90){
          this.focusTab = this.tabs[0];
        }
        else if(scrollDistance < this.custom!.nativeElement.offsetTop + distanceFromTop -90){
          this.focusTab = this.tabs[1];
        }
        else {
          this.focusTab = this.tabs[2];
        }
      });
    this.setCoverImg();
  }

  changeTab($event: string) {
    const distanceFromTop =
    this.banner!.nativeElement.offsetTop +
    this.banner!.nativeElement.offsetHeight -
    150;
    console.log(distanceFromTop)
    if ($event.includes('SYNTRON企業願景')) {
      console.log(this.company!.nativeElement.offsetTop)
      this.$window.scrollTo(this.company!.nativeElement.offsetTop + distanceFromTop);

    } else if ($event.includes('解決方案')) {
      this.$window.scrollTo(this.solution!.nativeElement.offsetTop + distanceFromTop);

    } else if ($event.includes('我們的客戶')) {
      this.$window.scrollTo(this.custom!.nativeElement.offsetTop + distanceFromTop);
    } 
 
  }

  private setCoverImg(): void {
    this.$window.device$
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((device) => {
        switch (device) {
          case Device.Desktop:
            this.coverImg = 'assets/img/iStock/iStock-1328611793.jpg';
            break;
          case Device.Tablet:
            this.coverImg = 'assets/img/iStock/iStock-1328611793.jpg';
            break;
          case Device.Mobile:
            this.coverImg = 'assets/img/iStock/iStock-1328611793.jpg';
            break;
        }
      });
  }
}
