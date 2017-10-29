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

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '爱心套餐'
    }, _this.data = {
      src: '',
      imgUrls: ['http://mpic.tiankong.com/7fc/beb/7fcbebebe7903a0e6c865ef9aecc9740/640.jpg@300h', 'http://mpic.tiankong.com/209/66a/20966a26fff3f79004e3d262055517b0/640.jpg@300h', 'http://mpic.tiankong.com/1b9/4bc/1b94bc58139d264ad0c6d401b90eca7f/640.jpg@300h', 'http://mpic.tiankong.com/66e/4aa/66e4aaf334f8f37f0dbc59acff7bf683/430-3831.jpg@300h'],
      describe: '',
      content: null,
      indicatorDots: true,
      color: 'white',
      color1: 'red',
      height: 0,
      width: 0,
      search: '../image/check.png',
      king: '../image/king.png',
      eat: '../image/eat.png',
      hot: '../image/hot.png',
      time: '../image/time.png'
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
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

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/caipu'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhaXB1LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzcmMiLCJpbWdVcmxzIiwiZGVzY3JpYmUiLCJjb250ZW50IiwiaW5kaWNhdG9yRG90cyIsImNvbG9yIiwiY29sb3IxIiwiaGVpZ2h0Iiwid2lkdGgiLCJzZWFyY2giLCJraW5nIiwiZWF0IiwiaG90IiwidGltZSIsIm1ldGhvZHMiLCJzZWxmIiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsZUFBUyxDQUNQLGdGQURPLEVBRVAsZ0ZBRk8sRUFHUCxnRkFITyxFQUlQLHFGQUpPLENBRko7QUFRTEMsZ0JBQVUsRUFSTDtBQVNMQyxlQUFTLElBVEo7QUFVTEMscUJBQWUsSUFWVjtBQVdMQyxhQUFPLE9BWEY7QUFZTEMsY0FBUSxLQVpIO0FBYUxDLGNBQVEsQ0FiSDtBQWNMQyxhQUFPLENBZEY7QUFlTEMsY0FBUSxvQkFmSDtBQWdCTEMsWUFBTSxtQkFoQkQ7QUFpQkxDLFdBQUssa0JBakJBO0FBa0JMQyxXQUFLLGtCQWxCQTtBQW1CTEMsWUFBTTtBQW5CRCxLLFFBcUJQQyxPLEdBQVUsRTs7Ozs7NkJBR0Q7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxxQkFBS0MsYUFBTCxDQUFtQjtBQUNqQkMsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYSCxlQUFLUixNQUFMLEdBQWNXLElBQUlDLFlBQWxCO0FBQ0FKLGVBQUtQLEtBQUwsR0FBYVUsSUFBSUUsV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBcENnQyxlQUFLQyxJOztrQkFBbkJ6QixLIiwiZmlsZSI6ImNhaXB1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn54ix5b+D5aWX6aSQJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBpbWdVcmxzOiBbXG4gICAgICAnaHR0cDovL21waWMudGlhbmtvbmcuY29tLzdmYy9iZWIvN2ZjYmViZWJlNzkwM2EwZTZjODY1ZWY5YWVjYzk3NDAvNjQwLmpwZ0AzMDBoJyxcbiAgICAgICdodHRwOi8vbXBpYy50aWFua29uZy5jb20vMjA5LzY2YS8yMDk2NmEyNmZmZjNmNzkwMDRlM2QyNjIwNTU1MTdiMC82NDAuanBnQDMwMGgnLFxuICAgICAgJ2h0dHA6Ly9tcGljLnRpYW5rb25nLmNvbS8xYjkvNGJjLzFiOTRiYzU4MTM5ZDI2NGFkMGM2ZDQwMWI5MGVjYTdmLzY0MC5qcGdAMzAwaCcsXG4gICAgICAnaHR0cDovL21waWMudGlhbmtvbmcuY29tLzY2ZS80YWEvNjZlNGFhZjMzNGY4ZjM3ZjBkYmM1OWFjZmY3YmY2ODMvNDMwLTM4MzEuanBnQDMwMGgnXG4gICAgXSxcbiAgICBkZXNjcmliZTogJycsXG4gICAgY29udGVudDogbnVsbCxcbiAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGNvbG9yMTogJ3JlZCcsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIHNlYXJjaDogJy4uL2ltYWdlL2NoZWNrLnBuZycsXG4gICAga2luZzogJy4uL2ltYWdlL2tpbmcucG5nJyxcbiAgICBlYXQ6ICcuLi9pbWFnZS9lYXQucG5nJyxcbiAgICBob3Q6ICcuLi9pbWFnZS9ob3QucG5nJyxcbiAgICB0aW1lOiAnLi4vaW1hZ2UvdGltZS5wbmcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcblxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=