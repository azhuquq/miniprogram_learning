// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        mvData:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        //top/mv
        let _this = this;
        wx.request({
            url: 'http://localhost:3000/top/mv',
            success: function(res){
                _this.setData({
                    mvData: res.data.data
                })
            }
        })
    },
    itemClick:function(e){
        const id = e.currentTarget.dataset.item.id;
        wx.navigateTo({
            url: '../videoPlayer/index?id='+id,
        console
        })
    },
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})