// pages/mobile-bind/mobile-bind.js
//导入全局属性
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile: {
      type: 'mobile',
      placeholder: '请输入手机号'
    },
    vcode: {
      type: 'vcode',
      placeholder: '请输入验证码',
      title: '获取验证码'
    }
  },
  bindMobile(){
    //判断是否为空
    if (app.globalData.mobile  ){
      //打印电话号码和获取的验证吗
      console.log(`手机号是 ${app.globalData.mobile} 验证码是:${app.globalData.vcode}`)
      if (app.globalData.vcode){
          wx.showToast({
            title: '绑定成功',
            icon:"success"
          })
      }else{
        wx.showToast({
          title: '请输入验证码',
          icon:'none'
        })
      }
    }else{
      wx.showToast({
        title: '请输入手机号码',
        icon:'none'
      })
    }
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})