// miniprogram/pages/page1/page1.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultUnit:'',
    pepUnitList:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var unit = app.globalData.studyUnit
    this.curUnitList(unit)
    this.setTitle()
  },

  curUnitList:function(unit){
    var pepUnitList = ''
    if (unit == 'pep3aUnit') pepUnitList = app.globalData.pep3aUnit
    if (unit == 'pep3bUnit') pepUnitList = app.globalData.pep3bUnit
    if (unit == 'pep4aUnit') pepUnitList = app.globalData.pep4aUnit
    if (unit == 'pep4bUnit') pepUnitList = app.globalData.pep4bUnit
    if (unit == 'pep5aUnit') pepUnitList = app.globalData.pep5aUnit
    if (unit == 'pep5bUnit') pepUnitList = app.globalData.pep5bUnit
    if (unit == 'pep6aUnit') pepUnitList = app.globalData.pep6aUnit
    if (unit == 'pep6bUnit') pepUnitList = app.globalData.pep6bUnit
    this.setData({
      pepUnitList: pepUnitList,
      defaultUnit:unit
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
    var str =this.data.defaultUnit
    this.setTitle()
  },

  setTitle:function(){
    var unit = app.globalData.studyUnit
    var title = ''
    if (unit == 'pep3aUnit') title = '三年级上册'
    if (unit == 'pep3bUnit') title = '三年级下册'
    if (unit == 'pep4aUnit') title = '四年级上册'
    if (unit == 'pep4bUnit') title = '四年级下册'
    if (unit == 'pep5aUnit') title = '五年级上册'
    if (unit == 'pep5bUnit') title = '五年级下册'
    if (unit == 'pep6aUnit') title = '六年级上册'
    if (unit == 'pep6bUnit') title = '六年级下册'
    wx.setNavigationBarTitle({
      title: title,
    })
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