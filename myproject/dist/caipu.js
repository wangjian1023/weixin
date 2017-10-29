'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

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
      height: 0,
      width: 0
    }, _this.methods = {
      // a() {
      //   wepy.navigateTo({
      //     url:
      //   })
      // },
      // b() {
      //   wepy.navigateTo({
      //     url: ''
      //   })
      // },
      // c() {
      //   wepy.navigateTo({
      //     url: ''
      //   })
      // }
    }, _temp), _possibleConstructorReturn(_this, _ret);
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

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhaXB1LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsIm1ldGhvZHMiLCJzZWxmIiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsY0FBUSxDQUZIO0FBR0xDLGFBQU87QUFIRixLLFFBS1BDLE8sR0FBVTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZRLEs7Ozs7OzZCQWlCRDtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBLHFCQUFLQyxhQUFMLENBQW1CO0FBQ2pCQyxlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hILGVBQUtILE1BQUwsR0FBY00sSUFBSUMsWUFBbEI7QUFDQUosZUFBS0YsS0FBTCxHQUFhSyxJQUFJRSxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUQ7Ozs7RUFsQ2dDLGVBQUtDLEk7O2tCQUFuQmQsSyIsImZpbGUiOiJjYWlwdS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eIseW/g+Wll+mkkCdcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICAvLyBhKCkge1xuICAgIC8vICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAvLyAgICAgdXJsOlxuICAgIC8vICAgfSlcbiAgICAvLyB9LFxuICAgIC8vIGIoKSB7XG4gICAgLy8gICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgIC8vICAgICB1cmw6ICcnXG4gICAgLy8gICB9KVxuICAgIC8vIH0sXG4gICAgLy8gYygpIHtcbiAgICAvLyAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgLy8gICAgIHVybDogJydcbiAgICAvLyAgIH0pXG4gICAgLy8gfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=