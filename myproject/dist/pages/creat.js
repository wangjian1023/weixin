'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Take = function (_wepy$page) {
  _inherits(Take, _wepy$page);

  function Take() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Take);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Take.__proto__ || Object.getPrototypeOf(Take)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '编辑菜谱'
    }, _this.data = {
      height: 0,
      width: 0,
      src: '',
      add: '../image/add.png',
      yes: '../image/yes.png',
      lists: [{}],
      lists1: [{}],
      checkbox: [],
      array: ['初级', '中级', '高级', '神级'],
      objectArray: [{
        id: 0,
        name: '初级'
      }, {
        id: 1,
        name: '中级'
      }, {
        id: 2,
        name: '高级'
      }, {
        id: 3,
        name: '神级'
      }],
      index: 0,
      index1: 0,
      time: 0,
      arr: ['五分钟', '十五分钟', '半小时', '一小时', '两小时'],
      objectArr: [{
        id: 0,
        name: '五分钟'
      }, {
        id: 1,
        name: '十五分钟'
      }, {
        id: 2,
        name: '半小时'
      }, {
        id: 3,
        name: '一小时'
      }, {
        id: 4,
        name: '两小时'
      }],
      items: [{ name: 'USA', value: '鲁菜' }, { name: 'CHN', value: '川菜' }, { name: 'BRA', value: '粤菜' }, { name: 'JPN', value: '浙菜' }, { name: 'ENG', value: '湘菜' }, { name: 'TUR', value: '徽菜' }, { name: 'TQR', value: '闽菜' }, { name: 'CIN', value: '苏菜' }]
    }, _this.methods = {
      bindPickerChange: function bindPickerChange(e) {
        var self = this;
        console.log('picker发送选择改变，携带值为', e.detail.value);
        self.index = e.detail.value;
        self.setData({
          index: e.detail.value
        });
      },
      bindMultiPickerChange: function bindMultiPickerChange(e) {
        var self = this;
        console.log('picker发送选择改变，携带值为', e.detail.value);
        self.index1 = e.detail.value;
        self.setData({
          index1: e.detail.value
        });
      },
      radioChange: function radioChange(e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value);
      },
      addList: function addList() {
        var lists = this.data.lists;
        var newData = {};
        lists.push(newData); // 实质是添加lists数组内容，使for循环多一次
        this.setData({
          lists: lists
        });
      },
      delList: function delList() {
        var lists = this.data.lists;
        console.log(this.data.lists, 'aaaaaaaaa');
        lists.pop(); // 实质是删除lists数组内容，使for循环少一次
        this.setData({
          lists: lists
        });
      },
      addList1: function addList1() {
        var lists = this.data.lists1;
        var newData = {};
        lists.push(newData); // 实质是添加lists数组内容，使for循环多一次
        this.setData({
          lists1: lists
        });
      },
      delList1: function delList1() {
        var lists = this.data.lists1;
        console.log(this.data.lists, 'aaaaaaaaa');
        lists.pop(); // 实质是删除lists数组内容，使for循环少一次
        this.setData({
          lists1: lists
        });
      },
      tap: function tap() {
        var self = this;
        _wepy2.default.chooseImage({
          count: 1, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: function success(res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            var arr = self.src;
            var a = arr.concat(res.tempFilePaths);
            self.src = a;
            self.setData({
              src: a
            });
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Take, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
    }
  }]);

  return Take;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Take , 'pages/creat'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0LmpzIl0sIm5hbWVzIjpbIlRha2UiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImhlaWdodCIsIndpZHRoIiwic3JjIiwiYWRkIiwieWVzIiwibGlzdHMiLCJsaXN0czEiLCJjaGVja2JveCIsImFycmF5Iiwib2JqZWN0QXJyYXkiLCJpZCIsIm5hbWUiLCJpbmRleCIsImluZGV4MSIsInRpbWUiLCJhcnIiLCJvYmplY3RBcnIiLCJpdGVtcyIsInZhbHVlIiwibWV0aG9kcyIsImJpbmRQaWNrZXJDaGFuZ2UiLCJlIiwic2VsZiIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJzZXREYXRhIiwiYmluZE11bHRpUGlja2VyQ2hhbmdlIiwicmFkaW9DaGFuZ2UiLCJhZGRMaXN0IiwibmV3RGF0YSIsInB1c2giLCJkZWxMaXN0IiwicG9wIiwiYWRkTGlzdDEiLCJkZWxMaXN0MSIsInRhcCIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwiYSIsImNvbmNhdCIsInRlbXBGaWxlUGF0aHMiLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsY0FBUSxDQURIO0FBRUxDLGFBQU8sQ0FGRjtBQUdMQyxXQUFLLEVBSEE7QUFJTEMsV0FBSyxrQkFKQTtBQUtMQyxXQUFLLGtCQUxBO0FBTUxDLGFBQU8sQ0FBQyxFQUFELENBTkY7QUFPTEMsY0FBUSxDQUFDLEVBQUQsQ0FQSDtBQVFMQyxnQkFBVSxFQVJMO0FBU0xDLGFBQU8sQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsQ0FURjtBQVVMQyxt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TCxDQUFtQjtBQUNqQkwsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYcEIsZUFBS3RCLE1BQUwsR0FBYzBDLElBQUlLLFlBQWxCO0FBQ0F6QixlQUFLckIsS0FBTCxHQUFheUMsSUFBSU0sV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBcEorQixlQUFLQyxJOztrQkFBbEJyRCxJIiwiZmlsZSI6ImNyZWF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFrZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn57yW6L6R6I+c6LCxJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIHNyYzogJycsXG4gICAgYWRkOiAnLi4vaW1hZ2UvYWRkLnBuZycsXG4gICAgeWVzOiAnLi4vaW1hZ2UveWVzLnBuZycsXG4gICAgbGlzdHM6IFt7fV0sXG4gICAgbGlzdHMxOiBbe31dLFxuICAgIGNoZWNrYm94OiBbXSxcbiAgICBhcnJheTogWyfliJ3nuqcnLCAn5Lit57qnJywgJ+mrmOe6pycsICfnpZ7nuqcnXSxcbiAgICBvYmplY3RBcnJheTogW1xuICAgICAge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgbmFtZTogJ+WInee6pydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAn5Lit57qnJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6ICfpq5jnuqcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgbmFtZTogJ+elnue6pydcbiAgICAgIH1cbiAgICBdLFxuICAgIGluZGV4OiAwLFxuICAgIGluZGV4MTogMCxcbiAgICB0aW1lOiAwLFxuICAgIGFycjogWyfkupTliIbpkp8nLCAn5Y2B5LqU5YiG6ZKfJywgJ+WNiuWwj+aXticsICfkuIDlsI/ml7YnLCAn5Lik5bCP5pe2J10sXG4gICAgb2JqZWN0QXJyOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICBuYW1lOiAn5LqU5YiG6ZKfJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5hbWU6ICfljYHkupTliIbpkp8nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ+WNiuWwj+aXtidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBuYW1lOiAn5LiA5bCP5pe2J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIG5hbWU6ICfkuKTlsI/ml7YnXG4gICAgICB9XG4gICAgXSxcbiAgICBpdGVtczogW1xuICAgICAge25hbWU6ICdVU0EnLCB2YWx1ZTogJ+mygeiPnCd9LFxuICAgICAge25hbWU6ICdDSE4nLCB2YWx1ZTogJ+W3neiPnCd9LFxuICAgICAge25hbWU6ICdCUkEnLCB2YWx1ZTogJ+eypOiPnCd9LFxuICAgICAge25hbWU6ICdKUE4nLCB2YWx1ZTogJ+a1meiPnCd9LFxuICAgICAge25hbWU6ICdFTkcnLCB2YWx1ZTogJ+a5mOiPnCd9LFxuICAgICAge25hbWU6ICdUVVInLCB2YWx1ZTogJ+W+veiPnCd9LFxuICAgICAge25hbWU6ICdUUVInLCB2YWx1ZTogJ+mXveiPnCd9LFxuICAgICAge25hbWU6ICdDSU4nLCB2YWx1ZTogJ+iLj+iPnCd9XG5cbiAgICBdXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBiaW5kUGlja2VyQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnNvbGUubG9nKCdwaWNrZXLlj5HpgIHpgInmi6nmlLnlj5jvvIzmkLrluKblgLzkuLonLCBlLmRldGFpbC52YWx1ZSlcbiAgICAgIHNlbGYuaW5kZXggPSBlLmRldGFpbC52YWx1ZVxuICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgaW5kZXg6IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9KVxuICAgIH0sXG4gICAgYmluZE11bHRpUGlja2VyQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnNvbGUubG9nKCdwaWNrZXLlj5HpgIHpgInmi6nmlLnlj5jvvIzmkLrluKblgLzkuLonLCBlLmRldGFpbC52YWx1ZSlcbiAgICAgIHNlbGYuaW5kZXgxID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgIGluZGV4MTogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgfSxcbiAgICByYWRpb0NoYW5nZTogZnVuY3Rpb24oZSkge1xuICAgICAgY29uc29sZS5sb2coJ3JhZGlv5Y+R55SfY2hhbmdl5LqL5Lu277yM5pC65bimdmFsdWXlgLzkuLrvvJonLCBlLmRldGFpbC52YWx1ZSlcbiAgICB9LFxuICAgIGFkZExpc3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGxpc3RzID0gdGhpcy5kYXRhLmxpc3RzXG4gICAgICB2YXIgbmV3RGF0YSA9IHt9XG4gICAgICBsaXN0cy5wdXNoKG5ld0RhdGEpIC8vIOWunui0qOaYr+a3u+WKoGxpc3Rz5pWw57uE5YaF5a6577yM5L2/Zm9y5b6q546v5aSa5LiA5qyhXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBsaXN0czogbGlzdHNcbiAgICAgIH0pXG4gICAgfSxcbiAgICBkZWxMaXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbGlzdHMgPSB0aGlzLmRhdGEubGlzdHNcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YS5saXN0cywgJ2FhYWFhYWFhYScpXG4gICAgICBsaXN0cy5wb3AoKSAvLyDlrp7otKjmmK/liKDpmaRsaXN0c+aVsOe7hOWGheWuue+8jOS9v2ZvcuW+queOr+WwkeS4gOasoVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbGlzdHM6IGxpc3RzXG4gICAgICB9KVxuICAgIH0sXG4gICAgYWRkTGlzdDE6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGxpc3RzID0gdGhpcy5kYXRhLmxpc3RzMVxuICAgICAgdmFyIG5ld0RhdGEgPSB7fVxuICAgICAgbGlzdHMucHVzaChuZXdEYXRhKSAvLyDlrp7otKjmmK/mt7vliqBsaXN0c+aVsOe7hOWGheWuue+8jOS9v2ZvcuW+queOr+WkmuS4gOasoVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbGlzdHMxOiBsaXN0c1xuICAgICAgfSlcbiAgICB9LFxuICAgIGRlbExpc3QxOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbGlzdHMgPSB0aGlzLmRhdGEubGlzdHMxXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEubGlzdHMsICdhYWFhYWFhYWEnKVxuICAgICAgbGlzdHMucG9wKCkgLy8g5a6e6LSo5piv5Yig6ZmkbGlzdHPmlbDnu4TlhoXlrrnvvIzkvb9mb3Llvqrnjq/lsJHkuIDmrKFcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGxpc3RzMTogbGlzdHNcbiAgICAgIH0pXG4gICAgfSxcbiAgICB0YXAoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICBjb3VudDogMSwgLy8g6buY6K6kOVxuICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sIC8vIOWPr+S7peaMh+WumuaYr+WOn+Wbvui/mOaYr+WOi+e8qeWbvu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLCAvLyDlj6/ku6XmjIflrprmnaXmupDmmK/nm7jlhozov5jmmK/nm7jmnLrvvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgLy8g6L+U5Zue6YCJ5a6a54Wn54mH55qE5pys5Zyw5paH5Lu26Lev5b6E5YiX6KGo77yMdGVtcEZpbGVQYXRo5Y+v5Lul5L2c5Li6aW1n5qCH562+55qEc3Jj5bGe5oCn5pi+56S65Zu+54mHXG4gICAgICAgICAgbGV0IGFyciA9IHNlbGYuc3JjXG4gICAgICAgICAgbGV0IGEgPSBhcnIuY29uY2F0KHJlcy50ZW1wRmlsZVBhdGhzKVxuICAgICAgICAgIHNlbGYuc3JjID0gYVxuICAgICAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgICAgICBzcmM6IGFcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19