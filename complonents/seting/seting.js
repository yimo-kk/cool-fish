// complonents/seting/seting.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //接受数据,并指定接受数据的类型
    obj:Object

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
      //组件中的点击事件需要在对应的js文件的methods中进行注册
    goToDetail(e){
      //通过事件源来得到这个参数
      //解构进行获取相对方便点
      let { type, path } = e.currentTarget.dataset
      console.log(e)
      //先判断获取的类型是否是可以跳转的类型
      if (type == "arrow") {
        //在判断是否存在跳转的路径
        if(path){
          //如果存在就进行跳转
          wx.navigateTo({
            // 跳转到接受过来数据的路径
            url: path
          })
        }
      }
    }
  }
})
