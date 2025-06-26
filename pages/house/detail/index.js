import { fetchHouseDetail } from '../../../services/house/house';

Page({
  data: {
    detail: {},
  },
  async init(id) {
    const detail = await fetchHouseDetail(id);
    this.setData({ detail });
  },
  onLoad(options) {
    this.init(options.id);
  },
  previewImage() {
    const { images = [] } = this.data.detail;
    wx.previewImage({ urls: images });
  },
  contact() {
    wx.navigateTo({ url: '/pages/contact/index' });
  },
});
