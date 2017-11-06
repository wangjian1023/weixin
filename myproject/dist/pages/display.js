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
      search: '../image/check.png',
      meng: '../image/meng1.png',
      meng1: '../image/memg.png',
      right: '../image/right.png',
      // food: [],
      // summary: [],
      reminder: '',
      star: '../image/memg.png'
    }, _this.methods = {
      son: function son() {
        _wepy2.default.navigateTo({
          url: '../pages/search'
        });
      },
      star: function star() {
        var self = this;
        self.collect = !self.collect;
        if (self.collect) {
          self.star = '../image/memg.png';
        } else {
          self.star = '../image/meng1.png';
        }
      },
      past: function past() {
        _wepy2.default.navigateTo({
          url: './search1'
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Show , 'pages/display'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BsYXkuanMiXSwibmFtZXMiOlsiU2hvdyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwiY29udGVudCIsInNlYXJjaCIsIm1lbmciLCJtZW5nMSIsInJpZ2h0IiwicmVtaW5kZXIiLCJzdGFyIiwibWV0aG9kcyIsInNvbiIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJzZWxmIiwiY29sbGVjdCIsInBhc3QiLCJnZXRTdG9yYWdlU3luYyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsZUFBUyxFQUZKO0FBR0xDLGNBQVEsb0JBSEg7QUFJTEMsWUFBTSxvQkFKRDtBQUtMQyxhQUFPLG1CQUxGO0FBTUxDLGFBQU8sb0JBTkY7QUFPTDtBQUNBO0FBQ0FDLGdCQUFVLEVBVEw7QUFVTEMsWUFBTTtBQVZELEssUUFZUEMsTyxHQUFVO0FBQ1JDLFNBRFEsaUJBQ0Y7QUFDSix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVJKLFVBTlEsa0JBTUQ7QUFDTCxZQUFJSyxPQUFPLElBQVg7QUFDQUEsYUFBS0MsT0FBTCxHQUFlLENBQUNELEtBQUtDLE9BQXJCO0FBQ0EsWUFBSUQsS0FBS0MsT0FBVCxFQUFrQjtBQUNoQkQsZUFBS0wsSUFBTCxHQUFZLG1CQUFaO0FBQ0QsU0FGRCxNQUVPO0FBQ0xLLGVBQUtMLElBQUwsR0FBWSxvQkFBWjtBQUNEO0FBQ0YsT0FkTztBQWVSTyxVQWZRLGtCQWVEO0FBQ0wsdUJBQUtKLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFuQk8sSzs7Ozs7NkJBcUJEO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0FBLFdBQUtYLE9BQUwsR0FBZSxlQUFLYyxjQUFMLENBQW9CLFNBQXBCLENBQWY7QUFDRDs7OztFQXhDK0IsZUFBS0MsSTs7a0JBQWxCcEIsSSIsImZpbGUiOiJkaXNwbGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvdyBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6I+c6LCx6K+m5oOFJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBjb250ZW50OiAnJyxcbiAgICBzZWFyY2g6ICcuLi9pbWFnZS9jaGVjay5wbmcnLFxuICAgIG1lbmc6ICcuLi9pbWFnZS9tZW5nMS5wbmcnLFxuICAgIG1lbmcxOiAnLi4vaW1hZ2UvbWVtZy5wbmcnLFxuICAgIHJpZ2h0OiAnLi4vaW1hZ2UvcmlnaHQucG5nJyxcbiAgICAvLyBmb29kOiBbXSxcbiAgICAvLyBzdW1tYXJ5OiBbXSxcbiAgICByZW1pbmRlcjogJycsXG4gICAgc3RhcjogJy4uL2ltYWdlL21lbWcucG5nJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgc29uKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvc2VhcmNoJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHN0YXIoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY29sbGVjdCA9ICFzZWxmLmNvbGxlY3RcbiAgICAgIGlmIChzZWxmLmNvbGxlY3QpIHtcbiAgICAgICAgc2VsZi5zdGFyID0gJy4uL2ltYWdlL21lbWcucG5nJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5zdGFyID0gJy4uL2ltYWdlL21lbmcxLnBuZydcbiAgICAgIH1cbiAgICB9LFxuICAgIHBhc3QoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL3NlYXJjaDEnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5jb250ZW50ID0gd2VweS5nZXRTdG9yYWdlU3luYygnY29udGVudCcpXG4gIH1cbn1cbiJdfQ==