function RandomNumBoth(Min, Max) {
  var Range = Max - Min;
  var Rand = Math.random();
  var num = Min + Math.round(Rand * Range); //四舍五入
  return num;
};

function make_equation() {
  var arith_num = RandomNumBoth(0, 1);  // 随机是加法还是减法
  var num_one = RandomNumBoth(1, 9);  // 随机第一个数
  var num_two = RandomNumBoth(1, 9);  // 随机第二个数
  var correct_num = RandomNumBoth(0, 1);  // 随机出是否正确算出
  var adderr_num = RandomNumBoth(1, 5);  // 随机出相加相差的数字
  var suberr_num = RandomNumBoth(1, 3);  // 随机出相减相差的数字
  var bad_num = RandomNumBoth(0, 1);  // 随机出相差的数字去加还是减
  if (arith_num) {
    var result_num = num_one + num_two
    make_metician.call(this, correct_num, num_one, num_two, result_num, bad_num, adderr_num, '+')
  } else {
    var result_num = Math.abs(num_one - num_two);
    var num1 = num_one > num_two ? num_one : num_two;
    var num2 = num_one > num_two ? num_two : num_one;
    make_metician.call(this, correct_num, num1, num2, result_num, bad_num, suberr_num, '-')
  }
}

function make_metician(correct_num, num_one, num_two, result_num, bad_num, err_num, signs) {
  if (correct_num) {
    this.setData({
      num1: num_one,
      num2: num_two,
      result: result_num,
      sign: signs,
      correctnum: correct_num,
    })
  } else {
    this.setData({
      num1: num_one,
      num2: num_two,
      result: Math.abs(bad_num ? result_num + err_num : result_num - err_num, signs),
      sign: signs,
      correctnum: correct_num,
    })
  }
}


function _next() {
  var that = this;
  if (this.data.progress <= 0 || !this.data.clicknum) {
    this.setData({
      disabled: false,
    })
    wx.showModal({
      content: `嗯，结束了。
       一共得分 ${this.data.score}分 
       小学未毕业!`,
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    });
    return true;
  } else {
    this.setData({
      progress: --this.data.progress,
    });
    setTimeout(function () {
      _next.call(that);
    }, 20)
  }
}

// pages/answer/answer.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    progress: 100,
    disabled: false,
    num1: 1,
    num2: 1,
    sign: '+',
    result: 2,
    clicknum: 1,
    correctnum: 1,
    score: 0,
  },

  begin: function () {
    if (this.data.disabled) return;
    this.setData({
      progress: 100,
      num1: 1,
      num2: 1,
      sign: '+',
      result: 2,
      disabled: true,
      correctnum: 1,
      clicknum: 1,
      score: 0
    });
    make_equation.call(this)
    _next.call(this);
  },
  bind_yes: function (e) {
    if (e.target.id === 'Bnt_Y' && this.data.correctnum) {
      make_equation.call(this)
      this.setData({
        progress: 100,
        clicknum: 1,
        score: ++this.data.score
      });
    } else {
      this.setData({
        clicknum: 0,
      });
    }
  },
  bind_no: function (e) {
    if (e.target.id === 'Bnt_N' && !this.data.correctnum) {
      make_equation.call(this)
      this.setData({
        progress: 100,
        clicknum: 1,
        score: ++this.data.score
      });
    } else {
      this.setData({
        clicknum: 0,
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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