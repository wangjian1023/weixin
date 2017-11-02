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

var Show = function (_wepy$page) {
  _inherits(Show, _wepy$page);

  function Show() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Show);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Show.__proto__ || Object.getPrototypeOf(Show)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '菜谱详情'
    }, _this.data = {
      src: '',
      content: '',
      item: '',
      recPhoto: '',
      recName: '',
      recView: '',
      recDescribe: '',
      hierarchy: '',
      time: '',
      materials: '',
      conversion: '',
      search: '../image/check.png',
      meng: '../image/meng1.png',
      meng1: '../image/memg.png',
      food: [],
      summary: [],
      reminder: '',
      character: '',
      artist: ''
    }, _this.methods = {
      son: function son() {
        _wepy2.default.navigateTo({
          url: '../pages/search'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Show, [{
    key: 'onLoad',
    value: function onLoad(data) {
      var self = this;
      self.recName = data.recName;
      self.recPhoto = data.recPhoto;
      self.recView = data.recView;
      self.recDescribe = data.recDescribe;
      self.time = data.time;
      self.hierarchy = data.hierarchy;
      // self.materials = data.materials
      // self.conversion = data.conversion
      // self.artist = data.artist
      // self.character = data.character
      self.reminder = data.reminder;
      self.food = data.food; // split(,)作用是把逗号隔开的字符串转换为数组
      console.log(data, 'bbbbbb');
      // console.log(data.food[], 'ddddddddd')
      self.summary = data.summary;
      // console.log(data, '12')
      // console.log(self.recDescribe)
      // console.log(self.food)
      // console.log(self.hierarchy)
      // console.log(self.food[0].materials)
    }
  }]);

  return Show;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Show , 'pages/king'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtpbmcuanMiXSwibmFtZXMiOlsiU2hvdyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwiY29udGVudCIsIml0ZW0iLCJyZWNQaG90byIsInJlY05hbWUiLCJyZWNWaWV3IiwicmVjRGVzY3JpYmUiLCJoaWVyYXJjaHkiLCJ0aW1lIiwibWF0ZXJpYWxzIiwiY29udmVyc2lvbiIsInNlYXJjaCIsIm1lbmciLCJtZW5nMSIsImZvb2QiLCJzdW1tYXJ5IiwicmVtaW5kZXIiLCJjaGFyYWN0ZXIiLCJhcnRpc3QiLCJtZXRob2RzIiwic29uIiwibmF2aWdhdGVUbyIsInVybCIsInNlbGYiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxlQUFTLEVBRko7QUFHTEMsWUFBTSxFQUhEO0FBSUxDLGdCQUFVLEVBSkw7QUFLTEMsZUFBUyxFQUxKO0FBTUxDLGVBQVMsRUFOSjtBQU9MQyxtQkFBYSxFQVBSO0FBUUxDLGlCQUFXLEVBUk47QUFTTEMsWUFBTSxFQVREO0FBVUxDLGlCQUFXLEVBVk47QUFXTEMsa0JBQVksRUFYUDtBQVlMQyxjQUFRLG9CQVpIO0FBYUxDLFlBQU0sb0JBYkQ7QUFjTEMsYUFBTyxtQkFkRjtBQWVMQyxZQUFNLEVBZkQ7QUFnQkxDLGVBQVMsRUFoQko7QUFpQkxDLGdCQUFVLEVBakJMO0FBa0JMQyxpQkFBVyxFQWxCTjtBQW1CTEMsY0FBUTtBQW5CSCxLLFFBcUJQQyxPLEdBQVU7QUFDUkMsU0FEUSxpQkFDRjtBQUNKLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBTE8sSzs7Ozs7MkJBT0h2QixJLEVBQU07QUFDWCxVQUFJd0IsT0FBTyxJQUFYO0FBQ0FBLFdBQUtuQixPQUFMLEdBQWVMLEtBQUtLLE9BQXBCO0FBQ0FtQixXQUFLcEIsUUFBTCxHQUFnQkosS0FBS0ksUUFBckI7QUFDQW9CLFdBQUtsQixPQUFMLEdBQWVOLEtBQUtNLE9BQXBCO0FBQ0FrQixXQUFLakIsV0FBTCxHQUFtQlAsS0FBS08sV0FBeEI7QUFDQWlCLFdBQUtmLElBQUwsR0FBWVQsS0FBS1MsSUFBakI7QUFDQWUsV0FBS2hCLFNBQUwsR0FBaUJSLEtBQUtRLFNBQXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQWdCLFdBQUtQLFFBQUwsR0FBZ0JqQixLQUFLaUIsUUFBckI7QUFDQU8sV0FBS1QsSUFBTCxHQUFZZixLQUFLZSxJQUFqQixDQWJXLENBYWdCO0FBQzNCVSxjQUFRQyxHQUFSLENBQVkxQixJQUFaLEVBQWtCLFFBQWxCO0FBQ0E7QUFDQXdCLFdBQUtSLE9BQUwsR0FBZWhCLEtBQUtnQixPQUFwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7OztFQXREK0IsZUFBS1csSTs7a0JBQWxCOUIsSSIsImZpbGUiOiJraW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvdyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6I+c6LCx6K+m5oOFJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBjb250ZW50OiAnJyxcbiAgICBpdGVtOiAnJyxcbiAgICByZWNQaG90bzogJycsXG4gICAgcmVjTmFtZTogJycsXG4gICAgcmVjVmlldzogJycsXG4gICAgcmVjRGVzY3JpYmU6ICcnLFxuICAgIGhpZXJhcmNoeTogJycsXG4gICAgdGltZTogJycsXG4gICAgbWF0ZXJpYWxzOiAnJyxcbiAgICBjb252ZXJzaW9uOiAnJyxcbiAgICBzZWFyY2g6ICcuLi9pbWFnZS9jaGVjay5wbmcnLFxuICAgIG1lbmc6ICcuLi9pbWFnZS9tZW5nMS5wbmcnLFxuICAgIG1lbmcxOiAnLi4vaW1hZ2UvbWVtZy5wbmcnLFxuICAgIGZvb2Q6IFtdLFxuICAgIHN1bW1hcnk6IFtdLFxuICAgIHJlbWluZGVyOiAnJyxcbiAgICBjaGFyYWN0ZXI6ICcnLFxuICAgIGFydGlzdDogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHNvbigpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL3BhZ2VzL3NlYXJjaCdcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZChkYXRhKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5yZWNOYW1lID0gZGF0YS5yZWNOYW1lXG4gICAgc2VsZi5yZWNQaG90byA9IGRhdGEucmVjUGhvdG9cbiAgICBzZWxmLnJlY1ZpZXcgPSBkYXRhLnJlY1ZpZXdcbiAgICBzZWxmLnJlY0Rlc2NyaWJlID0gZGF0YS5yZWNEZXNjcmliZVxuICAgIHNlbGYudGltZSA9IGRhdGEudGltZVxuICAgIHNlbGYuaGllcmFyY2h5ID0gZGF0YS5oaWVyYXJjaHlcbiAgICAvLyBzZWxmLm1hdGVyaWFscyA9IGRhdGEubWF0ZXJpYWxzXG4gICAgLy8gc2VsZi5jb252ZXJzaW9uID0gZGF0YS5jb252ZXJzaW9uXG4gICAgLy8gc2VsZi5hcnRpc3QgPSBkYXRhLmFydGlzdFxuICAgIC8vIHNlbGYuY2hhcmFjdGVyID0gZGF0YS5jaGFyYWN0ZXJcbiAgICBzZWxmLnJlbWluZGVyID0gZGF0YS5yZW1pbmRlclxuICAgIHNlbGYuZm9vZCA9IGRhdGEuZm9vZCAgICAgIC8vIHNwbGl0KCwp5L2c55So5piv5oqK6YCX5Y+36ZqU5byA55qE5a2X56ym5Liy6L2s5o2i5Li65pWw57uEXG4gICAgY29uc29sZS5sb2coZGF0YSwgJ2JiYmJiYicpXG4gICAgLy8gY29uc29sZS5sb2coZGF0YS5mb29kW10sICdkZGRkZGRkZGQnKVxuICAgIHNlbGYuc3VtbWFyeSA9IGRhdGEuc3VtbWFyeVxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEsICcxMicpXG4gICAgLy8gY29uc29sZS5sb2coc2VsZi5yZWNEZXNjcmliZSlcbiAgICAvLyBjb25zb2xlLmxvZyhzZWxmLmZvb2QpXG4gICAgLy8gY29uc29sZS5sb2coc2VsZi5oaWVyYXJjaHkpXG4gICAgLy8gY29uc29sZS5sb2coc2VsZi5mb29kWzBdLm1hdGVyaWFscylcbiAgfVxufVxuIl19