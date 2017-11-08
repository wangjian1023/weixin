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
      sub: [],
      men: '',
      src: '../image/jietu.png',
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
        console.log(this.data.lists1, 'lists11111111');
        var newData = {};
        lists.push(newData); // 实质是添加lists数组内容，使for循环多一次
        this.setData({
          lists1: lists
        });
        console.log(this.lists1, '22222222222');
      },
      delList1: function delList1() {
        var lists = this.data.lists1;
        lists.pop();
        this.setData({
          lists1: lists
        });
      },
      boomtap: function boomtap() {
        var self = this;
        _wepy2.default.chooseImage({
          count: 1, // 默认9
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success: function success(res) {
            self.src = res.tempFilePaths[0];
            self.setData({
              src: res.tempFilePaths[0]
            });
          }
        });
      },
      bottomtap: function bottomtap(e) {
        var self = this;
        var index = e.currentTarget.id;
        _wepy2.default.chooseImage({
          count: 1, // 默认9
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success: function success(res) {
            var men = self.sub;
            var image = men.concat(res.tempFilePaths);
            self.lists1[index].sub = image;
            self.setData({
              lists1: self.lists1
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0LmpzIl0sIm5hbWVzIjpbIlRha2UiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImhlaWdodCIsIndpZHRoIiwic3ViIiwibWVuIiwic3JjIiwieWVzIiwibGlzdHMiLCJsaXN0czEiLCJjaGVja2JveCIsImFycmF5Iiwib2JqZWN0QXJyYXkiLCJpZCIsIm5hbWUiLCJpbmRleCIsImluZGV4MSIsInRpbWUiLCJhcnIiLCJvYmplY3RBcnIiLCJpdGVtcyIsInZhbHVlIiwibWV0aG9kcyIsImJpbmRQaWNrZXJDaGFuZ2UiLCJlIiwic2VsZiIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJzZXREYXRhIiwiYmluZE11bHRpUGlja2VyQ2hhbmdlIiwicmFkaW9DaGFuZ2UiLCJhZGRMaXN0IiwibmV3RGF0YSIsInB1c2giLCJkZWxMaXN0IiwicG9wIiwiYWRkTGlzdDEiLCJkZWxMaXN0MSIsImJvb210YXAiLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwic3VjY2VzcyIsInJlcyIsInRlbXBGaWxlUGF0aHMiLCJib3R0b210YXAiLCJjdXJyZW50VGFyZ2V0IiwiaW1hZ2UiLCJjb25jYXQiLCJnZXRTeXN0ZW1JbmZvIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsY0FBUSxDQURIO0FBRUxDLGFBQU8sQ0FGRjtBQUdMQyxXQUFLLEVBSEE7QUFJTEMsV0FBSyxFQUpBO0FBS0xDLFdBQUssb0JBTEE7QUFNTEMsV0FBSyxrQkFOQTtBQU9MQyxhQUFPLENBQUMsRUFBRCxDQVBGO0FBUUxDLGNBQVEsQ0FBQyxFQUFELENBUkg7QUFTTEMsZ0JBQVUsRUFUTDtBQVVMQyxh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cUJBbUVFdkIsQ0FuRUYsRUFtRUs7QUFDWCxZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJVixRQUFRUyxFQUFFd0IsYUFBRixDQUFnQm5DLEVBQTVCO0FBQ0EsdUJBQUsyQixXQUFMLENBQWlCO0FBQ2ZDLGlCQUFPLENBRFEsRUFDTDtBQUNWQyxvQkFBVSxDQUFDLFVBQUQsRUFBYSxZQUFiLENBRks7QUFHZkMsc0JBQVksQ0FBQyxPQUFELEVBQVUsUUFBVixDQUhHO0FBSWZDLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsZ0JBQUl4QyxNQUFNb0IsS0FBS3JCLEdBQWY7QUFDQSxnQkFBSTZDLFFBQVE1QyxJQUFJNkMsTUFBSixDQUFXTCxJQUFJQyxhQUFmLENBQVo7QUFDQXJCLGlCQUFLaEIsTUFBTCxDQUFZTSxLQUFaLEVBQW1CWCxHQUFuQixHQUF5QjZDLEtBQXpCO0FBQ0F4QixpQkFBS0ksT0FBTCxDQUFhO0FBQ1hwQixzQkFBUWdCLEtBQUtoQjtBQURGLGFBQWI7QUFHRDtBQVhjLFNBQWpCO0FBYUQ7QUFuRk8sSzs7Ozs7NkJBc0ZEO0FBQ1AsVUFBSWdCLE9BQU8sSUFBWDtBQUNBLHFCQUFLMEIsYUFBTCxDQUFtQjtBQUNqQlAsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYcEIsZUFBS3ZCLE1BQUwsR0FBYzJDLElBQUlPLFlBQWxCO0FBQ0EzQixlQUFLdEIsS0FBTCxHQUFhMEMsSUFBSVEsV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBcksrQixlQUFLQyxJOztrQkFBbEJ4RCxJIiwiZmlsZSI6ImNyZWF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFrZSBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn57yW6L6R6I+c6LCxJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIHN1YjogW10sXG4gICAgbWVuOiAnJyxcbiAgICBzcmM6ICcuLi9pbWFnZS9qaWV0dS5wbmcnLFxuICAgIHllczogJy4uL2ltYWdlL3llcy5wbmcnLFxuICAgIGxpc3RzOiBbe31dLFxuICAgIGxpc3RzMTogW3t9XSxcbiAgICBjaGVja2JveDogW10sXG4gICAgYXJyYXk6IFsn5Yid57qnJywgJ+S4ree6pycsICfpq5jnuqcnLCAn56We57qnJ10sXG4gICAgb2JqZWN0QXJyYXk6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIG5hbWU6ICfliJ3nuqcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ+S4ree6pydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBuYW1lOiAn6auY57qnJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIG5hbWU6ICfnpZ7nuqcnXG4gICAgICB9XG4gICAgXSxcbiAgICBpbmRleDogMCxcbiAgICBpbmRleDE6IDAsXG4gICAgdGltZTogMCxcbiAgICBhcnI6IFsn5LqU5YiG6ZKfJywgJ+WNgeS6lOWIhumSnycsICfljYrlsI/ml7YnLCAn5LiA5bCP5pe2JywgJ+S4pOWwj+aXtiddLFxuICAgIG9iamVjdEFycjogW1xuICAgICAge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgbmFtZTogJ+S6lOWIhumSnydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAn5Y2B5LqU5YiG6ZKfJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6ICfljYrlsI/ml7YnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgbmFtZTogJ+S4gOWwj+aXtidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICBuYW1lOiAn5Lik5bCP5pe2J1xuICAgICAgfVxuICAgIF0sXG4gICAgaXRlbXM6IFtcbiAgICAgIHtuYW1lOiAnVVNBJywgdmFsdWU6ICfpsoHoj5wnfSxcbiAgICAgIHtuYW1lOiAnQ0hOJywgdmFsdWU6ICflt53oj5wnfSxcbiAgICAgIHtuYW1lOiAnQlJBJywgdmFsdWU6ICfnsqToj5wnfSxcbiAgICAgIHtuYW1lOiAnSlBOJywgdmFsdWU6ICfmtZnoj5wnfSxcbiAgICAgIHtuYW1lOiAnRU5HJywgdmFsdWU6ICfmuZjoj5wnfSxcbiAgICAgIHtuYW1lOiAnVFVSJywgdmFsdWU6ICflvr3oj5wnfSxcbiAgICAgIHtuYW1lOiAnVFFSJywgdmFsdWU6ICfpl73oj5wnfSxcbiAgICAgIHtuYW1lOiAnQ0lOJywgdmFsdWU6ICfoi4/oj5wnfVxuXG4gICAgXVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgYmluZFBpY2tlckNoYW5nZTogZnVuY3Rpb24oZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zb2xlLmxvZygncGlja2Vy5Y+R6YCB6YCJ5oup5pS55Y+Y77yM5pC65bim5YC85Li6JywgZS5kZXRhaWwudmFsdWUpXG4gICAgICBzZWxmLmluZGV4ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIHNlbGYuc2V0RGF0YSh7XG4gICAgICAgIGluZGV4OiBlLmRldGFpbC52YWx1ZVxuICAgICAgfSlcbiAgICB9LFxuICAgIGJpbmRNdWx0aVBpY2tlckNoYW5nZTogZnVuY3Rpb24oZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zb2xlLmxvZygncGlja2Vy5Y+R6YCB6YCJ5oup5pS55Y+Y77yM5pC65bim5YC85Li6JywgZS5kZXRhaWwudmFsdWUpXG4gICAgICBzZWxmLmluZGV4MSA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBpbmRleDE6IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9KVxuICAgIH0sXG4gICAgcmFkaW9DaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdyYWRpb+WPkeeUn2NoYW5nZeS6i+S7tu+8jOaQuuW4pnZhbHVl5YC85Li677yaJywgZS5kZXRhaWwudmFsdWUpXG4gICAgfSxcbiAgICBhZGRMaXN0OiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBsaXN0cyA9IHRoaXMuZGF0YS5saXN0c1xuICAgICAgdmFyIG5ld0RhdGEgPSB7fVxuICAgICAgbGlzdHMucHVzaChuZXdEYXRhKSAvLyDlrp7otKjmmK/mt7vliqBsaXN0c+aVsOe7hOWGheWuue+8jOS9v2ZvcuW+queOr+WkmuS4gOasoVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbGlzdHM6IGxpc3RzXG4gICAgICB9KVxuICAgIH0sXG4gICAgZGVsTGlzdDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGxpc3RzID0gdGhpcy5kYXRhLmxpc3RzXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEubGlzdHMsICdhYWFhYWFhYWEnKVxuICAgICAgbGlzdHMucG9wKCkgLy8g5a6e6LSo5piv5Yig6ZmkbGlzdHPmlbDnu4TlhoXlrrnvvIzkvb9mb3Llvqrnjq/lsJHkuIDmrKFcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGxpc3RzOiBsaXN0c1xuICAgICAgfSlcbiAgICB9LFxuICAgIGFkZExpc3QxOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBsaXN0cyA9IHRoaXMuZGF0YS5saXN0czFcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YS5saXN0czEsICdsaXN0czExMTExMTExJylcbiAgICAgIHZhciBuZXdEYXRhID0ge31cbiAgICAgIGxpc3RzLnB1c2gobmV3RGF0YSkgLy8g5a6e6LSo5piv5re75YqgbGlzdHPmlbDnu4TlhoXlrrnvvIzkvb9mb3Llvqrnjq/lpJrkuIDmrKFcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGxpc3RzMTogbGlzdHNcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3RzMSwgJzIyMjIyMjIyMjIyJylcbiAgICB9LFxuICAgIGRlbExpc3QxOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbGlzdHMgPSB0aGlzLmRhdGEubGlzdHMxXG4gICAgICBsaXN0cy5wb3AoKVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgbGlzdHMxOiBsaXN0c1xuICAgICAgfSlcbiAgICB9LFxuICAgIGJvb210YXAoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICBjb3VudDogMSwgLy8g6buY6K6kOVxuICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXG4gICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIHNlbGYuc3JjID0gcmVzLnRlbXBGaWxlUGF0aHNbMF1cbiAgICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgICAgc3JjOiByZXMudGVtcEZpbGVQYXRoc1swXVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBib3R0b210YXAoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgIHdlcHkuY2hvb3NlSW1hZ2Uoe1xuICAgICAgICBjb3VudDogMSwgLy8g6buY6K6kOVxuICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sXG4gICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIGxldCBtZW4gPSBzZWxmLnN1YlxuICAgICAgICAgIGxldCBpbWFnZSA9IG1lbi5jb25jYXQocmVzLnRlbXBGaWxlUGF0aHMpXG4gICAgICAgICAgc2VsZi5saXN0czFbaW5kZXhdLnN1YiA9IGltYWdlXG4gICAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICAgIGxpc3RzMTogc2VsZi5saXN0czFcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cblxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=