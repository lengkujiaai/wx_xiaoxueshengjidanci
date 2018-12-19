// miniprogram/pages/page1/unitPage/pages/recall/recall.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pepUnitList: '',
    studyUnitWord: '',
    lookupIndex: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var studyUnit = app.globalData.studyUnit
    var studyUnitWord = ''
    var unitWord = ''
    if (studyUnit == 'pep3aUnit') studyUnitWord = app.globalData.pep3aUnitWord
    if (studyUnit == 'pep3bUnit') studyUnitWord = app.globalData.pep3bUnitWord
    if (studyUnit == 'pep4aUnit') studyUnitWord = app.globalData.pep4aUnitWord
    if (studyUnit == 'pep4bUnit') studyUnitWord = app.globalData.pep4bUnitWord
    if (studyUnit == 'pep5aUnit') studyUnitWord = app.globalData.pep5aUnitWord
    if (studyUnit == 'pep5bUnit') studyUnitWord = app.globalData.pep5bUnitWord
    if (studyUnit == 'pep6aUnit') studyUnitWord = app.globalData.pep6aUnitWord
    if (studyUnit == 'pep6bUnit') studyUnitWord = app.globalData.pep6bUnitWord
    unitWord = studyUnitWord[options.unitId]
    this.setData({
      pepUnitList: unitWord,
      studyUnitWord: studyUnitWord
    })
    var num = new Number(options.unitId) + 1
    var title = '第' + num + '单元'
    wx.setNavigationBarTitle({
      title: title,
    })
  },

  lookup: function (e) {
    //console.log(e.currentTarget.id)
    let index = e.currentTarget.id
    let changeList = "lookupIndex[" + index + "].chose"
    this.setData({
      [changeList]: true
    })
    //console.log(this.data.lookupINdex[index])
  },
  restart: function () {
    this.setData({
      lookupIndex: ''
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