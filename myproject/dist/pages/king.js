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
      // recPhoto: '',
      // recName: '',
      // recView: '',
      // recDescribe: '',
      // hierarchy: '',
      // time: '',
      // materials: '',
      // conversion: '',
      // reminder: '',
      search: '../image/check.png',
      meng: '../image/meng1.png',
      meng1: '../image/memg.png',
      // food: [],
      // summary: [],
      reminder: ''
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
    value: function onLoad() {
      var self = this;
      self.content = _wepy2.default.getStorageSync('content');
    }
  }]);

  return Show;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Show , 'pages/king'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtpbmcuanMiXSwibmFtZXMiOlsiU2hvdyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwiY29udGVudCIsIml0ZW0iLCJzZWFyY2giLCJtZW5nIiwibWVuZzEiLCJyZW1pbmRlciIsIm1ldGhvZHMiLCJzb24iLCJuYXZpZ2F0ZVRvIiwidXJsIiwic2VsZiIsImdldFN0b3JhZ2VTeW5jIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxlQUFTLEVBRko7QUFHTEMsWUFBTSxFQUhEO0FBSUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLGNBQVEsb0JBYkg7QUFjTEMsWUFBTSxvQkFkRDtBQWVMQyxhQUFPLG1CQWZGO0FBZ0JMO0FBQ0E7QUFDQUMsZ0JBQVU7QUFsQkwsSyxRQW9CUEMsTyxHQUFVO0FBQ1JDLFNBRFEsaUJBQ0Y7QUFDSix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQUxPLEs7Ozs7OzZCQU9EO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0FBLFdBQUtWLE9BQUwsR0FBZSxlQUFLVyxjQUFMLENBQW9CLFNBQXBCLENBQWY7QUFDRDs7OztFQWxDK0IsZUFBS0MsSTs7a0JBQWxCakIsSSIsImZpbGUiOiJraW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvdyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6I+c6LCx6K+m5oOFJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBjb250ZW50OiAnJyxcbiAgICBpdGVtOiAnJyxcbiAgICAvLyByZWNQaG90bzogJycsXG4gICAgLy8gcmVjTmFtZTogJycsXG4gICAgLy8gcmVjVmlldzogJycsXG4gICAgLy8gcmVjRGVzY3JpYmU6ICcnLFxuICAgIC8vIGhpZXJhcmNoeTogJycsXG4gICAgLy8gdGltZTogJycsXG4gICAgLy8gbWF0ZXJpYWxzOiAnJyxcbiAgICAvLyBjb252ZXJzaW9uOiAnJyxcbiAgICAvLyByZW1pbmRlcjogJycsXG4gICAgc2VhcmNoOiAnLi4vaW1hZ2UvY2hlY2sucG5nJyxcbiAgICBtZW5nOiAnLi4vaW1hZ2UvbWVuZzEucG5nJyxcbiAgICBtZW5nMTogJy4uL2ltYWdlL21lbWcucG5nJyxcbiAgICAvLyBmb29kOiBbXSxcbiAgICAvLyBzdW1tYXJ5OiBbXSxcbiAgICByZW1pbmRlcjogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHNvbigpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL3BhZ2VzL3NlYXJjaCdcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmNvbnRlbnQgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdjb250ZW50JylcbiAgfVxufVxuIl19