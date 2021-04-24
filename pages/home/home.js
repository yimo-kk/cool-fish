// pages/home/home.js
// 引入轮播路数据
import Swipers from "../../datas/swipers.js"
import videos from "../../datas/videos.js"
const courses =require ("../../datas/courses.js")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //再把数据添加到data中用ES6的语法
    Swipers,
    videos, //推荐视屏中的数据
    courses, //课程内容中的数据
    hotCourse: {
      img_url: '/images/热门.png',
      content: '热门课程'
    },
    recommendVideo: {
      img_url: '/images/视频.png',
      content: '推荐视频'
    },
    more: {
      img_url: '/images/列表箭头.png',
      content: '更多'
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
    // console.log(courses)
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