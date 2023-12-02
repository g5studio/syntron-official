export type Breadcrumb = {
  /**
   * 顯示文字
   */
  i18n: string;
  /**
   * 點擊後跳轉連結
   */
  url: string;
}

export const BreadcrumbConfig: Record<string, Breadcrumb[]> = {
  '/news-center/news': [{
    i18n: '首頁',
    url: '/common/home'
  }, {
    i18n: '最新消息',
    url: '/news-center/home'
  }],
  '/news-center/news/detail': [{
    i18n: '首頁',
    url: '/common/home'
  }, {
    i18n: '最新消息',
    url: '/news-center/news'
  }, {
    i18n: '全部最新消息',
    url: '/news-center/news/detail'
  }]
}
