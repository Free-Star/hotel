import { fetchHome } from '../../services/home/home';
import { fetchHouseList } from '../../services/house/house';

Page({
  data: {
    imgSrcs: [],
    houseList: [],
    pageLoading: false,
    current: 1,
    autoplay: true,
    duration: '500',
    interval: 5000,
    navigation: { type: 'dots' },
    swiperImageProps: { mode: 'scaleToFill' },
  },

  houseListPagination: {
    index: 0,
    num: 24,
  },

  onShow() {
    this.getTabBar().init();
  },

  onLoad() {
    this.init();
  },

  onPullDownRefresh() {
    this.init();
  },

  init() {
    this.loadHomePage();
  },

  loadHomePage() {
    wx.stopPullDownRefresh();

    this.setData({
      pageLoading: true,
    });
    fetchHome().then(({ swiper }) => {
      this.setData({
        imgSrcs: swiper,
        pageLoading: false,
      });
      this.loadHouseList();
    });
  },

  async loadHouseList() {
    const list = await fetchHouseList();
    this.setData({
      houseList: list,
    });
  },


  houseClickHandle(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/house/detail/index?id=${id}`,
    });
  },

  navToSearchPage() {
    wx.navigateTo({ url: '/pages/house/list/index' });
  },

  navToActivityDetail({ detail }) {
    const { index: promotionID = 0 } = detail || {};
    wx.navigateTo({
      url: `/pages/promotion/promotion-detail/index?promotion_id=${promotionID}`,
    });
  },
});
