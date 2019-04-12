// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    gridlist:[],
    videolist:[]
  },
  jump(e) {
    wx.navigateTo({
      url: '/pages/yueku/yueku?id='+e.currentTarget.dataset.bb,
    })
  },
  loadlist:function(){
    wx.request({
      url: 'http://127.0.0.1:3000/music_swiper',
      method:'GET',
      success:(res)=>{
        this.setData({list:res.data.data})
      }
    })
  },
  loadgrid:function(){
    wx.request({
      url:'http://127.0.0.1:3000/music_grid',
      success:(res)=>{
        this.setData({gridlist:res.data.data})

      }
    })
  },
  loadvideo:function(){
    wx.request({
      url:'http://127.0.0.1:3000/video',
      success:(res)=>{
        this.setData({videolist:res.data.data})
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadlist(),
    this.loadgrid(),
    this.loadvideo()
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