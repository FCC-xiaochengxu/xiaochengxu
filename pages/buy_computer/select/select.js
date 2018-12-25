// pages/buy_computer/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    unum:null,
    pnum:null,
    tnum:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    
  },
  usage: function(e){
    console.log(e)
    var app=getApp()
    app.globalData.use=e.currentTarget.dataset.use
    this.setData({unum:e.target.dataset.unum})
  },
  c_price: function(e){
    console.log(e)
    var app=getApp()
    app.globalData.price = e.currentTarget.dataset.price
    this.setData({ pnum: e.target.dataset.pnum })
  },
  c_type: function(e){
    console.log(e)
    var app=getApp()
    app.globalData.type = e.currentTarget.dataset.type
    this.setData({ tnum: e.target.dataset.tnum})
  },
  submit: function(){
    var app=getApp()
    if (app.globalData.use == null){
      wx.showModal({
        title: '提示',
        content: '请选择您的需求',
      })
      return 0
    }else{
      if (app.globalData.price == null){
        wx.showModal({
          title: '提示',
          content: '请选择您的预算',
        })
        return 0
      }else{
        if (app.globalData.type == null){
          wx.showModal({
          title: '提示',
          content: '请选择您的尺寸',
          })
          return 0
        }else{
          wx.navigateTo({
            url: '../view/view',
          })
        }
      }
    }
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

  },
  
 
})