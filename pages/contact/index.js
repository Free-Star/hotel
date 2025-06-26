Page({
  data: {
    wechat: 'hotel123',
    phone: '13800138000',
    qr: 'https://tdesign.gtimg.com/miniprogram/template/retail/avatar/avatar1.png'
  },
  copyWechat() {
    wx.setClipboardData({ data: this.data.wechat });
  },
  call() {
    wx.makePhoneCall({ phoneNumber: this.data.phone });
  }
});
