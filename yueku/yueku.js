// pages/yueku/yueku.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    a:0
  },
  loadyk:function(){
    wx.request({
      url:'http://127.0.0.1:3000/yueku?family_id='+this.a,
      method:'GET',
      success:(res)=>{
        console.log(res)
        this.setData({list:res.data.data})
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    this.a=e.id
    console.log(this.a)
    this.loadyk()
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