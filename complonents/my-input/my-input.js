// complonents/my-input/my-input.js
// 引入全局属性 app 
let app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //接受页面传过来的数据,并指定类型
    obj: Object
  },
  ready() {
    //判断title是否存在
    if (this.properties.obj.title) {
      //如果存在就把值赋值到 自己定义的mttitle 上面
      this.setData({
        mytitle : this.properties.obj.title
      })
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //定义一个自己的title 
    mytitle: null,
    isCountDown: false, //是否已经开始倒计时(初始状态为false)
    time: 10, //倒计时的时间
    timeID: "" //计时器的id
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getval(e) {
      //通过事件源来获取参数
      // console.log(e)
      //通过处理事件源来获取我需要的参数
      //解构进行获取(相对简单点)
      let {
        currentTarget: {
          dataset: {
            type
          }
        },
        detail: {
          value
        }
      } = e
      //在进行判断type的值
      if (type == "mobile") {
        //获取到的事电话号码,因为后面绑定手机号码还需要用到就把数据之间添加到globalData中去
        app.globalData.mobile = value
      } else if (type == "vcode") {
        //验证码也添加到全局属性中去
        app.globalData.cvode = value
      }
    },
    getData() {
      //通过全局属性获取到手机号码
      let mobile = app.globalData.mobile
      //定义一个正则表达式来进行判断是否合法
      let reg = /^1[3456789][0-9]{9}$/
      if (!reg.test(mobile)) {
        //不匹配的就提示输入不合法
        wx.showToast({
          title: '电话号码不合法',
          icon: 'none',
        })
        return
      }
      //当开始计时时修改isCountDown的状态为true
      //开始计时时,需要修改师徒中的内容需要用到 setData 方法
      this.setData({
        isCountDown: true,
        //把视图中的内容进行修改
        mytitle: `(${this.data.time})`
      })
      //开启一个定时器,1秒减去time-1,并更新试图
      //计时器的第一个参数是回调函数,第二个参数是计时的时间间隔 以ms为单位
      this.data.timeID = setInterval(() => {
        //当进入计时器就判断
        if (this.data.time <= 1) {
          //就结束计时器
          clearInterval(this.data.timeID)
          //并把所有数据都初始化为初始值
          this.setData({
            time: 10,
            isCountDown: false,
            mytitle: "获取验证码"
          })
          //结束直接return
          return
        }
        //没有通过上面的条件
        this.data.time--
        // console.log(this.data.mytitle)
          //在把mytitle渲染上视图的值进行=修改
          this.setData({
            mytitle: `(${this.data.time})`
          })
      }, 1000)
    }
  }
})