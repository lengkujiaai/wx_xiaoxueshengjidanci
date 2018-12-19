// miniprogram/pages/page1/unitPage/unitPage.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    unitKind:['生词列表','学发音','单词拼写','单词默写'],
    unitId:'',
    unitNum:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      unitId:options.unitId,
      unitNum: app.globalData.studyUnitNum
    })
    this.navigatorTitle(this.data.unitId)
  },

  preUnit:function(){
    var num = new Number(this.data.unitId)
    if(num > 0) {
      this.setData({
        unitId: num - 1
      })
      this.navigatorTitle()
    }
     
  },

  nextUnit:function(){
    var unitNum = new Number(this.data.unitNum)
    var num = new Number(this.data.unitId)
    if (num < unitNum-1){
      this.setData({
        unitId: num + 1
      })
      this.navigatorTitle()
    }
     
  },

  navigatorTitle:function(){
    var num = new Number(this.data.unitId) + 1
    var title = '第' + num + '单元'
    wx.setNavigationBarTitle({
      title: title,
    })
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