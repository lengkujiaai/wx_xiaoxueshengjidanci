// miniprogram/pages/page1/setPage/setPage.js
var app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultUnit:'',
    radioUnit:'',
    pepClass: [{ value: 'pep3aUnit', name: '三年级上册' },
        { value: 'pep3bUnit', name: '三年级下册' },
        { value: 'pep4aUnit', name: '四年级上册' },
        { value: 'pep4bUnit', name: '四年级下册' },
        { value: 'pep5aUnit', name: '五年级上册' },
        { value: 'pep5bUnit', name: '五年级下册' },
        { value: 'pep6aUnit', name: '六年级上册' },
        { value: 'pep6bUnit', name: '六年级下册' },]
  },

  radioChange: function (e) {
    this.setData({
      radioUnit: e.detail.value
    })
  },

  selected:function(e){
    this.setPepUnitList(this.data.radioUnit)
  },

  cancel:function(e){
    this.setPepUnitList(this.data.defaultUnit)
  },

  setPepUnitList:function(unit){
    let pages = getCurrentPages()
    let prevPage = pages[pages.length - 2]
    var pepUnitList=''
    if (unit == 'pep3aUnit') pepUnitList = app.globalData.pep3aUnit
    if (unit == 'pep3bUnit') pepUnitList = app.globalData.pep3bUnit
    if (unit == 'pep4aUnit') pepUnitList = app.globalData.pep4aUnit
    if (unit == 'pep4bUnit') pepUnitList = app.globalData.pep4bUnit
    if (unit == 'pep5aUnit') pepUnitList = app.globalData.pep5aUnit
    if (unit == 'pep5bUnit') pepUnitList = app.globalData.pep5bUnit
    if (unit == 'pep6aUnit') pepUnitList = app.globalData.pep6aUnit
    if (unit == 'pep6bUnit') pepUnitList = app.globalData.pep6bUnit
    app.globalData.studyUnit=unit
    app.globalData.studyUnitNum = pepUnitList.length
    prevPage.setData({
      pepUnitList: pepUnitList,
      defaultUnit:unit
    })
    wx.navigateBack({})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    for(var i=0;i<8;i++)
      if (options.defaultUnit == this.data.pepClass[i].value) this.data.pepClass[i].checked ="true"
    this.setData({
      pepClass: this.data.pepClass,
      defaultUnit: options.defaultUnit
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