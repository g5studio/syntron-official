import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IAfterImgBlockData } from '../../blocks/afterImage-img-block/afterImage-img-block.component';
import { LayoutService } from 'src/app/modules/shared/services/layout.service';
import { takeUntil } from 'rxjs';
import { UnSubscribeOnDestroy } from 'src/app/modules/shared/abstracts/unSubacribeOnDestory.abstract';

@Component({
  selector: 'app-calling-tab',
  templateUrl: './calling-tab.component.html',
  styleUrls: ['./calling-tab.component.scss', '../../../shared/scss/production.scss']
})
export class CallingTabComponent extends UnSubscribeOnDestroy implements OnInit {
  @ViewChild('tBgWords') tBgWords?: ElementRef<HTMLElement>;

  constructor(
    private renderer: Renderer2,
    private $layout: LayoutService,
  ) { super() }

  public cards: IAfterImgBlockData[] = [
    {
      img: {
        pc: 'assets/product_pc/photo_queue_pc.png',
        pad: 'assets/product_pad/photo_queue_pad.png',
        mb: 'assets/product_mobile/photo_queue_mobile.png'
      },
      title: '智慧就診系統',
      subTitle: 'SMART QUEUE SYSTEM',
      listContent: {
        title: '特色',
        list: [
          '硬體設備為雙健保卡插卡及一維二維感應設計',
          '多孔位壁掛側掀式設計，萬用十字鑰匙，方便安裝固定與維護',
          '工業級輕量化金屬，可換前飾面板，可依院方需求客製',
          '通過 BSMI 驗證'
        ]
      }
    }, {
      img: {
        pc: 'assets/product_pc/photo_media_pc.png',
        pad: 'assets/product_pad/photo_media_pad.png',
        mb: 'assets/product_mobile/photo_media_mobile.png'
      },
      title: '智慧型多媒體公播系統',
      subTitle: 'INTELLIGENT MULTIMEDIA PUBLIC BROADCASTING SYSTEM',
      listContent: {
        title: '特色',
        list: [
          '畫面可分割至少四個以上的視窗，視窗的播放內容可包含動態影片、平面文宣、跑馬燈、日期、時間、院所LOGO、及各診間目前看診等資訊。',
          '具多媒體動態檔案、靜態檔案及看診資訊同步顯示功能。',
          '可依中心端多媒體管理系統編排的頻道排程播放多媒體資訊',
          '畫面可依 貴院需求調整'
        ]
      }
    }, {
      img: {
        pc: 'assets/product_pc/photo_server_pc.png',
        pad: 'assets/product_pad/photo_server_pad.png',
        mb: 'assets/product_mobile/photo_server_md.png'
      },
      title: '中心端伺服器管理系統',
      subTitle: 'CENTRAL SERVER MANAGEMENT SYSTEM',
      listContent: {
        title: '特色',
        list: [
          '可依要求方式介接指定系統訊息(提供多個系統介接)',
          '可依蒐集多系統的相關資訊製成報表，並提供即時警示給相關主管單位',
        ]
      }
    },
  ];

  ngOnInit(): void {
      this.$layout.$mainScroll.pipe(takeUntil(this.$onDestroy)).subscribe( scroll => {
        const scrollDistance = (scroll.target as HTMLElement).scrollTop;
        this.renderer.setStyle(this.tBgWords?.nativeElement, 'backgroundPosition', scrollDistance + 'px 0');
      })
  }
}
