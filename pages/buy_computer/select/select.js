// pages/buy_computer/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
      price:null,
      tpye:null,
      use:null,
      color: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
  },
  usage: function(e){
    console.log(e)
    this.data.use=e.currentTarget.dataset.use
  },
  c_price: function(e){
    console.log(e)
    this.data.price = e.currentTarget.dataset.price
  },
  c_type: function(e){
    console.log(e)
    this.data.type = e.currentTarget.dataset.type
  },
  submit: function(){
    
    if (this.data.use == null){
      wx.showModal({
        title: '提示',
        content: '请选择您的需求',
      })
      return 0
    }else{
      if (this.data.price == null){
        wx.showModal({
          title: '提示',
          content: '请选择您的预算',
        })
        return 0
      }else{
        if (this.data.type == null){
          wx.showModal({
          title: '提示',
          content: '请选择您的尺寸',
          })
          return 0
        }else{
          wx.request({
            url: 'wx.miracle.beer',
            data: {
              price: this.data.price,
              use: this.data.price.use,
              type: this.data.tpye
            },
            success(res) {
              console.log(res.data)
            }
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