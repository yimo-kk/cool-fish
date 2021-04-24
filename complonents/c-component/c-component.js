// complonents/c-component/c-component.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //定义接受值得类型
    obj:Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  ready(){
    // console.log(this)
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 有一个参数，就是事件源
    sendData(e){
      //当点击文字时需要触发事件，点击文字父级也需要触发事件，通过事件冒泡的方法，来处理事件，
      //不管是文字还是字父级触发事件都是父级来处理，所以不要用触发事件源(target)，而用处理事件源（currentTarget.dataset)
      //通过解构数据
      let {id,isFull} = e.currentTarget.dataset

      //判断一下isFull是不是false，是就直接返回，不用进行下一步
      if(isFull) return
      //是true 把 id 返回到页面 
      //通过自定义事件来传值
      this.triggerEvent("myevent",id )
    }
  }
})
