
//初始化数据
function tabbarinit() {
 return [
      { "current":0,
        "pagePath": "/pages/index/index",
        "iconPath": "/image/home.png",
        "selectedIconPath": "/image/home_on.png",
        "text": "主页"
      },
      {
        "current": 0,
        "pagePath": "/pages/repair_computer/index",
        "iconPath": "/image/message.png",
        "selectedIconPath": "/image/message_on.png",
        "text": "维修预约"

      },
      {
        "current": 0,
        "pagePath": "/pages/buy_computer/index",
        "iconPath": "/image/category.png",
        "selectedIconPath": "/image/category_on.png",
        "text": "笔记本选购"
      },
      {
        "current": 0,
        "pagePath": "/pages/contact_us/index",
        "iconPath": "/image/buy.png",
        "selectedIconPath": "/image/buy_on.png",
        "text": "联系我们"
      }
    ]

}

/**
 * tabbar主入口
 * @param  {String} bindName 
 * @param  {[type]} id       [表示第几个tabbar，以0开始]
 * @param  {[type]} target   [当前对象]
 */
function tabbarmain(bindName = "tabdata", id, target) {
  var that = target;
  var bindData = {};
  var otabbar = tabbarinit();
  otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']//换当前的icon
  otabbar[id]['current'] =1;
  bindData[bindName] = otabbar
  that.setData({ bindData });
}


module.exports = {
  tabbar: tabbarmain
}