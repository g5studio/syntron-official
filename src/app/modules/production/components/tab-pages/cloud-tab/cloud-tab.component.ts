import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IAfterImgBlockData } from '../../blocks/afterImage-img-block/afterImage-img-block.component';
import { IIconCard } from '../../cards/icon-card/icon-card.component';
import { DomSanitizer } from '@angular/platform-browser';
import { LayoutService } from '@shared/services/layout.service';
import { takeUntil } from 'rxjs';
import { BasePage } from 'src/utilities/bases';
import { Device } from '@shared/enums';
import { IAfterImgWordBlockData } from '../../blocks/after-img-word-block/after-img-word-block.component';

@Component({
  selector: 'app-cloud-tab',
  templateUrl: './cloud-tab.component.html',
  styleUrls: ['./cloud-tab.component.scss', '../../../shared/scss/production.scss']
})
export class CloudTabComponent extends BasePage {
  @ViewChild('tBgWords') tBgWords?: ElementRef;

  constructor(
    private sanitized: DomSanitizer,
    private $layout: LayoutService,
    private renderer: Renderer2
  ) { super() }

  public infoCard: IAfterImgWordBlockData = {
    img: {
      pc: 'assets/product_pc/photo_upload_pc.png',
      pad: 'assets/product_pad/photo_upload_pad.png',
      mb: 'assets/product_mobile/photo_upload_mobile.png'
    },
    title: '強大檔案上傳功能',
    subTitle: 'POWERFUL FILE UPLOAD FUNCTIONALITY',
    listContent: {
      title: '特色',
      list: [
        '可拖曳檔案資料夾上傳',
        '多種檔案上傳方式 (APP)',
        '支援單一檔案 10GB 以上',
        '支援批次檔案上傳'
      ]
    }
  };

  public coverImg = '';

  public iconCards: IIconCard[] = [
    {
      svg: this.sanitized.bypassSecurityTrustHtml(`<svg width="60" height="60" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_91_4286" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
      <rect y="0.5" width="24" height="24" fill="#1091da"/>
      </mask>
      <g mask="url(#mask0_91_4286)">
      <path d="M9 15V13.5H15V15H9ZM8 12V10.5H16V12H8ZM7 23.5C6.45 23.5 5.97917 23.3042 5.5875 22.9125C5.19583 22.5208 5 22.05 5 21.5V3.5C5 2.95 5.19583 2.47917 5.5875 2.0875C5.97917 1.69583 6.45 1.5 7 1.5H17C17.55 1.5 18.0208 1.69583 18.4125 2.0875C18.8042 2.47917 19 2.95 19 3.5V21.5C19 22.05 18.8042 22.5208 18.4125 22.9125C18.0208 23.3042 17.55 23.5 17 23.5H7ZM7 18.5H17V6.5H7V18.5Z" fill="#1091da"/>
      </g>
      </svg>`),
      title: '行動辦公室',
      content: '隨處可取，隨時更新。不再受限於存取位置及操作工具(智慧型手機、平板…)'
    }, {
      svg: this.sanitized.bypassSecurityTrustHtml(`<svg width="60" height="60" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_91_4787" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
      <rect y="0.5" width="24" height="24" fill="#1091da"/>
      </mask>
      <g mask="url(#mask0_91_4787)">
      <path d="M4 20.5C3.45 20.5 2.97917 20.3042 2.5875 19.9125C2.19583 19.5208 2 19.05 2 18.5V4.5C2 3.95 2.19583 3.47917 2.5875 3.0875C2.97917 2.69583 3.45 2.5 4 2.5H9C9.55 2.5 10.0208 2.69583 10.4125 3.0875C10.8042 3.47917 11 3.95 11 4.5V9.5H9V7.5H4V15.5H11V18.5C11 19.05 10.8042 19.5208 10.4125 19.9125C10.0208 20.3042 9.55 20.5 9 20.5H4ZM15 22.5C14.45 22.5 13.9792 22.3042 13.5875 21.9125C13.1958 21.5208 13 21.05 13 20.5V15.5H15V17.5H20V9.5H13V6.5C13 5.95 13.1958 5.47917 13.5875 5.0875C13.9792 4.69583 14.45 4.5 15 4.5H20C20.55 4.5 21.0208 4.69583 21.4125 5.0875C21.8042 5.47917 22 5.95 22 6.5V20.5C22 21.05 21.8042 21.5208 21.4125 21.9125C21.0208 22.3042 20.55 22.5 20 22.5H15ZM8 13.5C7.71667 13.5 7.47917 13.4042 7.2875 13.2125C7.09583 13.0208 7 12.7833 7 12.5C7 12.2167 7.09583 11.9792 7.2875 11.7875C7.47917 11.5958 7.71667 11.5 8 11.5C8.28333 11.5 8.52083 11.5958 8.7125 11.7875C8.90417 11.9792 9 12.2167 9 12.5C9 12.7833 8.90417 13.0208 8.7125 13.2125C8.52083 13.4042 8.28333 13.5 8 13.5ZM12 13.5C11.7167 13.5 11.4792 13.4042 11.2875 13.2125C11.0958 13.0208 11 12.7833 11 12.5C11 12.2167 11.0958 11.9792 11.2875 11.7875C11.4792 11.5958 11.7167 11.5 12 11.5C12.2833 11.5 12.5208 11.5958 12.7125 11.7875C12.9042 11.9792 13 12.2167 13 12.5C13 12.7833 12.9042 13.0208 12.7125 13.2125C12.5208 13.4042 12.2833 13.5 12 13.5ZM16 13.5C15.7167 13.5 15.4792 13.4042 15.2875 13.2125C15.0958 13.0208 15 12.7833 15 12.5C15 12.2167 15.0958 11.9792 15.2875 11.7875C15.4792 11.5958 15.7167 11.5 16 11.5C16.2833 11.5 16.5208 11.5958 16.7125 11.7875C16.9042 11.9792 17 12.2167 17 12.5C17 12.7833 16.9042 13.0208 16.7125 13.2125C16.5208 13.4042 16.2833 13.5 16 13.5Z" fill="#1091da"/>
      </g>
      </svg>
      `),
      title: '協同作業平台',
      content: '透過分享、權限設定及留言，多人即時進行資料處理及交換，提升工作效率'
    }, {
      svg: this.sanitized.bypassSecurityTrustHtml(`<svg width="60" height="60" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_92_4804" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
      <rect y="0.5" width="24" height="24" fill="#1091da"/>
      </mask>
      <g mask="url(#mask0_92_4804)">
      <path d="M21 7.5V19.5C21 20.05 20.8042 20.5208 20.4125 20.9125C20.0208 21.3042 19.55 21.5 19 21.5H5C4.45 21.5 3.97917 21.3042 3.5875 20.9125C3.19583 20.5208 3 20.05 3 19.5V5.5C3 4.95 3.19583 4.47917 3.5875 4.0875C3.97917 3.69583 4.45 3.5 5 3.5H17L21 7.5ZM12 18.5C12.8333 18.5 13.5417 18.2083 14.125 17.625C14.7083 17.0417 15 16.3333 15 15.5C15 14.6667 14.7083 13.9583 14.125 13.375C13.5417 12.7917 12.8333 12.5 12 12.5C11.1667 12.5 10.4583 12.7917 9.875 13.375C9.29167 13.9583 9 14.6667 9 15.5C9 16.3333 9.29167 17.0417 9.875 17.625C10.4583 18.2083 11.1667 18.5 12 18.5ZM6 10.5H15V6.5H6V10.5Z" fill="#1091da"/>
      </g>
      </svg>`),
      title: '共用網路空間',
      content: '作為企業整體/部門共用空間，如同內部網路磁碟'
    }, {
      svg: this.sanitized.bypassSecurityTrustHtml(`<svg width="60" height="60" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_92_4833" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
      <rect y="0.5" width="24" height="24" fill="#1091da"/>
      </mask>
      <g mask="url(#mask0_92_4833)">
      <path d="M7 21.5L5.6 20.1L7.175 18.45C5.40833 18.25 3.9375 17.4875 2.7625 16.1625C1.5875 14.8375 1 13.2833 1 11.5C1 9.55 1.67917 7.89583 3.0375 6.5375C4.39583 5.17917 6.05 4.5 8 4.5H11V6.5H8C6.61667 6.5 5.4375 6.9875 4.4625 7.9625C3.4875 8.9375 3 10.1167 3 11.5C3 12.7 3.38333 13.7583 4.15 14.675C4.91667 15.5917 5.89167 16.1667 7.075 16.4L5.6 14.925L7 13.5L11 17.5L7 21.5ZM13 20.5V13.5H22V20.5H13ZM13 11.5V4.5H22V11.5H13ZM15 9.5H20V6.5H15V9.5Z" fill="#1091da"/>
      </g>
      </svg>`),
      title: '資料備份轉移',
      content: '輕鬆將個人資料備份至雲端，或轉移資料到另一台主機'
    }, {
      svg: this.sanitized.bypassSecurityTrustHtml(`<svg width="60" height="60" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_92_4804" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
      <rect y="0.5" width="24" height="24" fill="#1091da"/>
      </mask>
      <g mask="url(#mask0_92_4804)">
      <path d="M21 7.5V19.5C21 20.05 20.8042 20.5208 20.4125 20.9125C20.0208 21.3042 19.55 21.5 19 21.5H5C4.45 21.5 3.97917 21.3042 3.5875 20.9125C3.19583 20.5208 3 20.05 3 19.5V5.5C3 4.95 3.19583 4.47917 3.5875 4.0875C3.97917 3.69583 4.45 3.5 5 3.5H17L21 7.5ZM12 18.5C12.8333 18.5 13.5417 18.2083 14.125 17.625C14.7083 17.0417 15 16.3333 15 15.5C15 14.6667 14.7083 13.9583 14.125 13.375C13.5417 12.7917 12.8333 12.5 12 12.5C11.1667 12.5 10.4583 12.7917 9.875 13.375C9.29167 13.9583 9 14.6667 9 15.5C9 16.3333 9.29167 17.0417 9.875 17.625C10.4583 18.2083 11.1667 18.5 12 18.5ZM6 10.5H15V6.5H6V10.5Z" fill="#1091da"/>
      </g>
      </svg>`),
      title: '線上即時閱覽',
      content: '可線上直接檢視文件，並限制不可下載列印，確保資料不外洩'
    }, {
      svg: this.sanitized.bypassSecurityTrustHtml(`<svg width="60" height="60" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_92_4890" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
      <rect y="0.5" width="24" height="24" fill="#1091da"/>
      </mask>
      <g mask="url(#mask0_92_4890)">
      <path d="M5 20.5C4.45 20.5 3.97917 20.3042 3.5875 19.9125C3.19583 19.5208 3 19.05 3 18.5V4.5C3 3.95 3.19583 3.47917 3.5875 3.0875C3.97917 2.69583 4.45 2.5 5 2.5H19C19.55 2.5 20.0208 2.69583 20.4125 3.0875C20.8042 3.47917 21 3.95 21 4.5V11.575C20.8333 11.5417 20.6708 11.5208 20.5125 11.5125C20.3542 11.5042 20.1833 11.5 20 11.5H14C13.3833 11.5 12.7958 11.5875 12.2375 11.7625C11.6792 11.9375 11.1583 12.1833 10.675 12.5H7V16.5H8.075C8.04167 16.6667 8.02083 16.8292 8.0125 16.9875C8.00417 17.1458 8 17.3167 8 17.5C8 18.0333 8.06667 18.5542 8.2 19.0625C8.33333 19.5708 8.53333 20.05 8.8 20.5H5ZM7 10.5H11V6.5H7V10.5ZM14 21.5C12.9 21.5 11.9583 21.1083 11.175 20.325C10.3917 19.5417 10 18.6 10 17.5C10 16.4 10.3917 15.4583 11.175 14.675C11.9583 13.8917 12.9 13.5 14 13.5H16V15.5H14C13.45 15.5 12.9792 15.6958 12.5875 16.0875C12.1958 16.4792 12 16.95 12 17.5C12 18.05 12.1958 18.5208 12.5875 18.9125C12.9792 19.3042 13.45 19.5 14 19.5H16V21.5H14ZM13 10.5H17V6.5H13V10.5ZM14 18.5V16.5H20V18.5H14ZM18 21.5V19.5H20C20.55 19.5 21.0208 19.3042 21.4125 18.9125C21.8042 18.5208 22 18.05 22 17.5C22 16.95 21.8042 16.4792 21.4125 16.0875C21.0208 15.6958 20.55 15.5 20 15.5H18V13.5H20C21.1 13.5 22.0417 13.8875 22.825 14.6625C23.6083 15.4375 24 16.3833 24 17.5C24 18.6 23.6083 19.5417 22.825 20.325C22.0417 21.1083 21.1 21.5 20 21.5H18Z" fill="#1091da"/>
      </g>
      </svg>`),
      title: '大檔附件傳送',
      content: '將大型附件上傳並轉為下載連結，降低頻寬、空間使用'
    }, {
      svg: this.sanitized.bypassSecurityTrustHtml(`<svg width="60" height="60" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_92_4907" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
      <rect y="0.5" width="24" height="24" fill="#1091da"/>
      </mask>
      <g mask="url(#mask0_92_4907)">
      <path d="M9 8.5H15V6.5C15 5.66667 14.7083 4.95833 14.125 4.375C13.5417 3.79167 12.8333 3.5 12 3.5C11.1667 3.5 10.4583 3.79167 9.875 4.375C9.29167 4.95833 9 5.66667 9 6.5V8.5ZM18 23.5C16.6167 23.5 15.4375 23.0125 14.4625 22.0375C13.4875 21.0625 13 19.8833 13 18.5C13 17.1167 13.4875 15.9375 14.4625 14.9625C15.4375 13.9875 16.6167 13.5 18 13.5C19.3833 13.5 20.5625 13.9875 21.5375 14.9625C22.5125 15.9375 23 17.1167 23 18.5C23 19.8833 22.5125 21.0625 21.5375 22.0375C20.5625 23.0125 19.3833 23.5 18 23.5ZM19.65 20.85L20.35 20.15L18.5 18.3V15.5H17.5V18.7L19.65 20.85ZM12.25 22.5H6C5.45 22.5 4.97917 22.3042 4.5875 21.9125C4.19583 21.5208 4 21.05 4 20.5V10.5C4 9.95 4.19583 9.47917 4.5875 9.0875C4.97917 8.69583 5.45 8.5 6 8.5H7V6.5C7 5.11667 7.4875 3.9375 8.4625 2.9625C9.4375 1.9875 10.6167 1.5 12 1.5C13.3833 1.5 14.5625 1.9875 15.5375 2.9625C16.5125 3.9375 17 5.11667 17 6.5V8.5H18C18.55 8.5 19.0208 8.69583 19.4125 9.0875C19.8042 9.47917 20 9.95 20 10.5V11.8C19.6667 11.6833 19.3333 11.6042 19 11.5625C18.6667 11.5208 18.3333 11.5 18 11.5C16.05 11.5 14.3958 12.1792 13.0375 13.5375C11.6792 14.8958 11 16.55 11 18.5C11 19.2167 11.1125 19.9125 11.3375 20.5875C11.5625 21.2625 11.8667 21.9 12.25 22.5Z" fill="#1091da"/>
      </g>
      </svg>`),
      title: '檔案安全庫',
      content: '完整存取權限、加密傳輸儲存、及存取稽核紀錄，確保檔案安全無慮。'
    }, {
      svg: this.sanitized.bypassSecurityTrustHtml(`<svg width="60" height="60" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_93_4924" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
      <rect y="0.5" width="24" height="24" fill="#1091da"/>
      </mask>
      <g mask="url(#mask0_93_4924)">
      <path d="M12.125 13.5H16.2C16.6333 13.5 17 13.35 17.3 13.05C17.6 12.75 17.75 12.3833 17.75 11.95C17.75 11.5167 17.6 11.1458 17.3 10.8375C17 10.5292 16.6333 10.375 16.2 10.375H16.15C16.0667 9.84167 15.825 9.39583 15.425 9.0375C15.025 8.67917 14.55 8.5 14 8.5C13.5667 8.5 13.175 8.6125 12.825 8.8375C12.475 9.0625 12.2083 9.36667 12.025 9.75C11.525 9.78333 11.1042 9.97917 10.7625 10.3375C10.4208 10.6958 10.25 11.125 10.25 11.625C10.25 12.125 10.4292 12.5625 10.7875 12.9375C11.1458 13.3125 11.5917 13.5 12.125 13.5ZM3 21.5C2.45 21.5 1.97917 21.3042 1.5875 20.9125C1.19583 20.5208 1 20.05 1 19.5V6.5H3V19.5H20V21.5H3ZM7 17.5C6.45 17.5 5.97917 17.3042 5.5875 16.9125C5.19583 16.5208 5 16.05 5 15.5V4.5C5 3.95 5.19583 3.47917 5.5875 3.0875C5.97917 2.69583 6.45 2.5 7 2.5H12L14 4.5H21C21.55 4.5 22.0208 4.69583 22.4125 5.0875C22.8042 5.47917 23 5.95 23 6.5V15.5C23 16.05 22.8042 16.5208 22.4125 16.9125C22.0208 17.3042 21.55 17.5 21 17.5H7Z" fill="#1091da"/>
      </g>
      </svg>`),
      title: '資源水平擴充',
      content: '可透過不停機之水平擴充特性，善用單位所有資源，並達到備份、備援之目的'
    }
  ]

  protected override onInit(): void {
    this.$layout.$mainScroll.pipe(takeUntil(this.onDestroy$)).subscribe( scroll => {
      const scrollDistance = (scroll.target as HTMLElement).scrollTop;
      this.renderer.setStyle(this.tBgWords?.nativeElement, 'backgroundPosition', scrollDistance + 'px 0');
    });
    this.setCoverImg();
  }

  private setCoverImg(): void {
    this.$window.device$.pipe(takeUntil(this.onDestroy$)).subscribe(device => {
      switch(device) {
        case Device.Desktop: this.coverImg = 'assets/product_pc/banner_news_storage_pc.png';break;
        case Device.Tablet: this.coverImg = 'assets/product_pad/banner_news_storage_pad.png';break;
        case Device.Mobile: this.coverImg = 'assets/product_mobile/banner_news_storage_mobile.png';break;
      }
    })
  }

}
