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
      lists: [{}, {}],
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
      items: [{ name: 'USA', value: '鲁菜' }, { name: 'CHN', value: '川菜', checked: 'true' }, { name: 'BRA', value: '粤菜' }, { name: 'JPN', value: '浙菜' }, { name: 'ENG', value: '湘菜' }, { name: 'TUR', value: '徽菜' }, { name: 'TQR', value: '闽菜' }, { name: 'CIN', value: '苏菜' }]
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
        self.index = e.detail.value;
        self.setData({
          multiIndex: e.detail.value
        });
      },
      radioChange: function radioChange(e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value);
      },
      addList: function addList() {
        var lists = this.data.lists;
        var newData = {};
        lists.push(newData); //实质是添加lists数组内容，使for循环多一次  
        this.setData({
          lists: lists
        });
      },
      delList: function delList() {
        var lists = this.data.lists;
        lists.pop(); //实质是删除lists数组内容，使for循环少一次  
        this.setData({
          lists: lists
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0LmpzIl0sIm5hbWVzIjpbIlRha2UiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImhlaWdodCIsIndpZHRoIiwic3JjIiwiYWRkIiwieWVzIiwibGlzdHMiLCJjaGVja2JveCIsImFycmF5Iiwib2JqZWN0QXJyYXkiLCJpZCIsIm5hbWUiLCJpbmRleCIsInRpbWUiLCJhcnIiLCJvYmplY3RBcnIiLCJpdGVtcyIsInZhbHVlIiwiY2hlY2tlZCIsIm1ldGhvZHMiLCJiaW5kUGlja2VyQ2hhbmdlIiwiZSIsInNlbGYiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwic2V0RGF0YSIsImJpbmRNdWx0aVBpY2tlckNoYW5nZSIsIm11bHRpSW5kZXgiLCJyYWRpb0NoYW5nZSIsImFkZExpc3QiLCJuZXdEYXRhIiwicHVzaCIsImRlbExpc3QiLCJwb3AiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGNBQVEsQ0FESDtBQUVMQyxhQUFPLENBRkY7QUFHTEMsV0FBSyxFQUhBO0FBSUxDLFdBQUssa0JBSkE7QUFLTEMsV0FBSyxrQkFMQTtBQU1MQyxhQUFPLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FORjtBQU9MQyxnQkFBVSxFQVBMO0FBUUxDLGFBQU8sQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsQ0FSRjtBQVNMQyxtQkFBYSxDQUNYO0FBQ0VDLFlBQUksQ0FETjtBQUVFQyxjQUFNO0FBRlIsT0FEVyxFQUtYO0FBQ0VELFlBQUksQ0FETjtBQUVFQyxjQUFNO0FBRlIsT0FMVyxFQVNYO0FBQ0VELFlBQUksQ0FETjtBQUVF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QUFJQyxZQUFsQjtBQUNBaEIsZUFBS3BCLEtBQUwsR0FBYW1DLElBQUlFLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNRDs7OztFQWhIK0IsZUFBS0MsSTs7a0JBQWxCM0MsSSIsImZpbGUiOiJjcmVhdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRha2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+e8lui+keiPnOiwsSdcbiAgfVxuICBkYXRhID0ge1xuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICBzcmM6ICcnLFxuICAgIGFkZDogJy4uL2ltYWdlL2FkZC5wbmcnLFxuICAgIHllczogJy4uL2ltYWdlL3llcy5wbmcnLFxuICAgIGxpc3RzOiBbe30sIHt9XSxcbiAgICBjaGVja2JveDogW10sXG4gICAgYXJyYXk6IFsn5Yid57qnJywgJ+S4ree6pycsICfpq5jnuqcnLCAn56We57qnJ10sXG4gICAgb2JqZWN0QXJyYXk6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIG5hbWU6ICfliJ3nuqcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ+S4ree6pydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBuYW1lOiAn6auY57qnJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIG5hbWU6ICfnpZ7nuqcnXG4gICAgICB9XG4gICAgXSxcbiAgICBpbmRleDogMCxcbiAgICB0aW1lOiAwLFxuICAgIGFycjogWyfkupTliIbpkp8nLCAn5Y2B5LqU5YiG6ZKfJywgJ+WNiuWwj+aXticsICfkuIDlsI/ml7YnLCAn5Lik5bCP5pe2J10sXG4gICAgb2JqZWN0QXJyOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICBuYW1lOiAn5LqU5YiG6ZKfJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5hbWU6ICfljYHkupTliIbpkp8nXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ+WNiuWwj+aXtidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBuYW1lOiAn5LiA5bCP5pe2J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIG5hbWU6ICfkuKTlsI/ml7YnXG4gICAgICB9XG4gICAgXSxcbiAgICBpdGVtczogW1xuICAgICAge25hbWU6ICdVU0EnLCB2YWx1ZTogJ+mygeiPnCd9LFxuICAgICAge25hbWU6ICdDSE4nLCB2YWx1ZTogJ+W3neiPnCcsIGNoZWNrZWQ6ICd0cnVlJ30sXG4gICAgICB7bmFtZTogJ0JSQScsIHZhbHVlOiAn57Kk6I+cJ30sXG4gICAgICB7bmFtZTogJ0pQTicsIHZhbHVlOiAn5rWZ6I+cJ30sXG4gICAgICB7bmFtZTogJ0VORycsIHZhbHVlOiAn5rmY6I+cJ30sXG4gICAgICB7bmFtZTogJ1RVUicsIHZhbHVlOiAn5b696I+cJ30sXG4gICAgICB7bmFtZTogJ1RRUicsIHZhbHVlOiAn6Ze96I+cJ30sXG4gICAgICB7bmFtZTogJ0NJTicsIHZhbHVlOiAn6IuP6I+cJ31cblxuICAgIF1cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGJpbmRQaWNrZXJDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc29sZS5sb2coJ3BpY2tlcuWPkemAgemAieaLqeaUueWPmO+8jOaQuuW4puWAvOS4uicsIGUuZGV0YWlsLnZhbHVlKVxuICAgICAgc2VsZi5pbmRleCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBpbmRleDogZS5kZXRhaWwudmFsdWVcbiAgICAgIH0pXG4gICAgfSxcbiAgICBiaW5kTXVsdGlQaWNrZXJDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc29sZS5sb2coJ3BpY2tlcuWPkemAgemAieaLqeaUueWPmO+8jOaQuuW4puWAvOS4uicsIGUuZGV0YWlsLnZhbHVlKVxuICAgICAgc2VsZi5pbmRleCA9IGUuZGV0YWlsLnZhbHVlXG4gICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICBtdWx0aUluZGV4OiBlLmRldGFpbC52YWx1ZVxuICAgICAgfSlcbiAgICB9LFxuICAgIHJhZGlvQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgICBjb25zb2xlLmxvZygncmFkaW/lj5HnlJ9jaGFuZ2Xkuovku7bvvIzmkLrluKZ2YWx1ZeWAvOS4uu+8micsIGUuZGV0YWlsLnZhbHVlKVxuICAgIH0sXG4gICAgYWRkTGlzdDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxpc3RzID0gdGhpcy4gZGF0YS4gbGlzdHM7XG4gICAgdmFyIG5ld0RhdGEgPSB7fTsgIFxuICAgIGxpc3RzLnB1c2gobmV3RGF0YSk7Ly/lrp7otKjmmK/mt7vliqBsaXN0c+aVsOe7hOWGheWuue+8jOS9v2ZvcuW+queOr+WkmuS4gOasoSAgXG4gICAgdGhpcy5zZXREYXRhKHsgIFxuICAgICAgbGlzdHM6IGxpc3RzLCAgXG4gICAgfSkgICAgXG4gIH0sICBcbiAgZGVsTGlzdDogZnVuY3Rpb24gKCkgeyAgXG4gICAgdmFyIGxpc3RzID0gdGhpcy5kYXRhLmxpc3RzOyAgXG4gICAgbGlzdHMucG9wKCk7ICAgICAgLy/lrp7otKjmmK/liKDpmaRsaXN0c+aVsOe7hOWGheWuue+8jOS9v2ZvcuW+queOr+WwkeS4gOasoSAgXG4gICAgdGhpcy5zZXREYXRhKHsgIFxuICAgICAgbGlzdHM6IGxpc3RzLCAgXG4gICAgfSkgIFxuICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==