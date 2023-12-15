export type Breadcrumb = {
  /**
   * 顯示文字
   */
  i18n: string;
  /**
   * 點擊後跳轉連結
   */
  url: string;
};

export const BreadcrumbConfig: Record<string, Breadcrumb[]> = {
  'news-center/news': [
    {
      i18n: '首頁',
      url: '/common/home',
    },
    {
      i18n: '最新消息',
      url: '/news-center/home',
    },
  ],
  'news-center/news/all/detail': [
    {
      i18n: '首頁',
      url: '/common/home',
    },
    {
      i18n: '最新消息',
      url: '/news-center/news',
    },
    {
      i18n: '全部最新消息',
      url: '/news-center/news/all/detail',
    },
  ],
  'news-center/news/media/detail': [
    {
      i18n: '首頁',
      url: '/common/home',
    },
    {
      i18n: '最新消息',
      url: '/news-center/news',
    },
    {
      i18n: '新聞媒體',
      url: '/news-center/news/media/detail',
    },
  ],
  'news-center/news/notice/detail': [
    {
      i18n: '首頁',
      url: '/common/home',
    },
    {
      i18n: '最新消息',
      url: '/news-center/news',
    },
    {
      i18n: '重要通知',
      url: '/news-center/news/notice/detail',
    },
  ],
  'news-center/news/events/detail': [
    {
      i18n: '首頁',
      url: '/common/home',
    },
    {
      i18n: '最新消息',
      url: '/news-center/news',
    },
    {
      i18n: '活動通知',
      url: '/news-center/news/events/detail',
    },
  ],
  'news-center/news/new-product/detail': [
    {
      i18n: '首頁',
      url: '/common/home',
    },
    {
      i18n: '最新消息',
      url: '/news-center/news',
    },
    {
      i18n: '新產品',
      url: '/news-center/news/new-products/detail',
    },
  ],
  'production/care': [
    {
      i18n: '首頁',
      url: '/common/home',
    },
    {
      i18n: '產品介紹',
      url: '/production/care',
    },
    {
      i18n: '照護服務',
      url: '/production/care',
    },
  ],
  'production/medicine': [
    {
      i18n: '首頁',
      url: '/common/home',
    },
    {
      i18n: '產品介紹',
      url: '/production/care',
    },
    {
      i18n: '藥品管理',
      url: '/production/medicine',
    },
  ],
  'production/calling': [
    {
      i18n: '首頁',
      url: '/common/home',
    },
    {
      i18n: '產品介紹',
      url: '/production/care',
    },
    {
      i18n: '叫號系統',
      url: '/production/calling',
    },
  ],
  'production/cloud': [
    {
      i18n: '首頁',
      url: '/common/home',
    },
    {
      i18n: '產品介紹',
      url: '/production/care',
    },
    {
      i18n: '雲端儲存',
      url: '/production/cloud',
    },
  ],
  'common/about-us': [
    {
      i18n: '首頁',
      url: '/common/home',
    },
    {
      i18n: '關於SYNTRON',
      url: '/common/about-us',
    },
  ],
};
