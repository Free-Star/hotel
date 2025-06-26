import { fetchHouseList } from '../../../services/house/house';

Page({
  data: {
    list: [],
  },
  async init() {
    const list = await fetchHouseList();
    this.setData({ list });
  },
  onLoad() {
    this.init();
  },
  handleTap(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({ url: `/pages/house/detail/index?id=${id}` });
  },
});
