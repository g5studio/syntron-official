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

interface IPeopleList {
  title: string;
  contentList: string[];
  img: string;
}

interface ISystemList {
  title: string;
  contentList: string[];
}

interface IRfidList {
  img_pc: string;
  img_pad: string;
  img_mobile: string;
  title: string;
  contentList: string[];
}
@Component({
  selector: 'app-medicine-tab',
  templateUrl: './medicine-tab.component.html',
  styleUrls: ['./medicine-tab.component.scss'],
})
export class MedicineTabComponent extends BasePage implements OnInit {
  [x: string]: any;
  @ViewChild('functionsWords') functionsWords?: ElementRef<HTMLElement>;
  constructor(private renderer: Renderer2, private $layout: LayoutService) {
    super();
  }
  public coverImg = '';
  public medicine_list: IPeopleList[] = [
    {
      title: '智慧藥櫃',
      img: 'app-storage-solid-icon',
      contentList: [
        '智慧藥櫃可依據需求不同提供識別證、指紋、人臉辨識等不同的登入機制',
        '藥品的自動化進出管理整合RFID、雷射、紅外線等自動化辨識機制，降低人為錯誤發生機率',
        '不同櫃體提供不同藥品應用',
        '搭配監視系統，可以更直覺的追蹤問題',
      ],
    },
    {
      title: '藥品管理',
      img: 'app-pill-solid-icon',
      contentList: [
        '藥品管理系統從藥品進入庫存到最終病人使用，全程都有追蹤機制，與院內其他系統整合，提高工作效率，降低人力成本',
      ],
    },
    {
      title: '重要資源管理',
      img: 'app-prescriptions-solid-icon',
      contentList: [
        '利用智慧櫃管理重要資源，提供24小時自動領用及自動記錄之功能',
      ],
    },
  ];

  public system_list: ISystemList[] = [
    {
      title: '藥局作業',
      contentList: [
        '調劑',
        '調劑覆核',
        '發藥',
        '增領',
        '收藥',
        '清點',
        '清點覆核',
        '交班',
      ],
    },
    {
      title: '查詢',
      contentList: [
        '藥包/藥盒',
        '發藥紀錄',
        '交班紀錄',
        '盤點紀錄',
        '藥櫃儲位',
      ],
    },
    {
      title: '報表',
      contentList: ['盤點表', '庫存異動表', '耗用統計表'],
    },
    {
      title: '管理',
      contentList: ['使用者', '藥包/藥盒', '藥品', '藥櫃', '領用單位'],
    },
  ];

  public rfid_list: IRfidList[] = [
    {
      img_pc: 'assets/product_pc/photo_nurse_pc.png',
      img_pad: 'assets/product_pad/photo_nurse_pad.png',
      img_mobile: 'assets/product_mobile/photo_nurse_mobile.png',
      title: '藥師',
      contentList: [
        '即時追蹤管制藥品',
        '藥品安全管理',
        '藥品庫存管理',
        '自動補藥通知',
        '提高調劑效率',
      ],
    },
    {
      img_pc: 'assets/product_pc/photo_anesthetist_pc.png',
      img_pad: 'assets/product_pad/photo_anesthetist_pad.png',
      img_mobile: 'assets/product_mobile/photo_anesthetist_mobile.png',
      title: '護理師 / 麻醉師',
      contentList: [
        '提升取藥效率',
        '減少取藥步驟',
        '提高照護品質',
        '提升核藥確認安全性',
        '整合即時醫囑資訊',
      ],
    },
    {
      img_pc: 'assets/product_pc/photo_manager_pc.png',
      img_pad: 'assets/product_pad/photo_manager_pad.png',
      img_mobile: 'assets/product_mobile/photo_manager_mobile.png',
      title: '管理者',
      contentList: [
        '降低錯誤發生',
        '提升人力運用',
        '提升部門營運效率',
        '系統相容性及彈性度高',
      ],
    },
  ];
  protected override onInit(): void {
    this.$layout.$mainScroll
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((scroll) => {
        const scrollDistance = (scroll.target as HTMLElement).scrollTop;
        this.renderer.setStyle(
          this.functionsWords?.nativeElement,
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
            this.coverImg = 'assets/product_pc/banner_news_medication_pc.png';
            break;
          case Device.Tablet:
            this.coverImg = 'assets/product_pad/banner_news_medication_pad.png';
            break;
          case Device.Mobile:
            this.coverImg =
              'assets/product_mobile/banner_news_medication_mobile.png';
            break;
        }
      });
  }
}
