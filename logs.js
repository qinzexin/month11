//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    content:[],
    desc:[
      {'id':'1','name':'芯片再难，有两弹一星难吗？','desc':'本文为中国科学技术大学副研究员、知名科普达人袁岚峰老师在','number':'200','img':'/img/l1.jpg'},
      {'id':'2','name':'数读12月20日全球疫情','desc':'海外网12月21日电 Worldometer网站实时统计数据显示','number':'200','img':'/img/l1.jpg'},
    ]
  },
  onLoad: function () {
    wx.request({
      url: 'http://www.thinkphp.com/litle/file/index', //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        // console.log(res.data)
        var desc = res.data
        console.log(desc)
      }
    })
  },
  shoucang(){
    console.log(1)
    wx.request({
      url: 'http://www.thinkphp.com/litle/file/create',
      data: {
        number:1
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
      }
    })
  }
})
