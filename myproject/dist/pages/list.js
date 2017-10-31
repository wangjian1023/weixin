'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _update = require('./../util/update.js');

var _update2 = _interopRequireDefault(_update);

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
      navigationBarTitleText: '爱心套餐 ',
      enablePullDownRefresh: 'true'
    }, _this.data = {
      src: '',
      search: '../image/check.png',
      describe: '',
      view: '',
      hierarchy: '',
      conversion: '',
      time: '',
      materials: '',
      content: null
    }, _this.methods = {
      display: function display(e) {
        var self = this;
        var item = self.content[e.currentTarget.id];
        console.log(item);
        _wepy2.default.navigateTo({
          url: './display?recPhoto=' + item.recPhoto + '&recName=' + item.recName + '&recDescribe=' + item.recDescribe + '&recView=' + item.recView + '&hierarchy=' + item.hierarchy + '&time=' + item.time + '&conversion=' + item.conversion + '&materials=' + item.materials
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      self.content = _update2.default;
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/list'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiZGF0YSIsInNyYyIsInNlYXJjaCIsImRlc2NyaWJlIiwidmlldyIsImhpZXJhcmNoeSIsImNvbnZlcnNpb24iLCJ0aW1lIiwibWF0ZXJpYWxzIiwiY29udGVudCIsIm1ldGhvZHMiLCJkaXNwbGF5IiwiZSIsInNlbGYiLCJpdGVtIiwiY3VycmVudFRhcmdldCIsImlkIiwiY29uc29sZSIsImxvZyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJyZWNQaG90byIsInJlY05hbWUiLCJyZWNEZXNjcmliZSIsInJlY1ZpZXciLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsImhlaWdodCIsIndpbmRvd0hlaWdodCIsIndpZHRoIiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixPQURqQjtBQUVQQyw2QkFBdUI7QUFGaEIsSyxRQUlUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLGNBQVEsb0JBRkg7QUFHTEMsZ0JBQVUsRUFITDtBQUlMQyxZQUFNLEVBSkQ7QUFLTEMsaUJBQVcsRUFMTjtBQU1MQyxrQkFBWSxFQU5QO0FBT0xDLFlBQU0sRUFQRDtBQVFMQyxpQkFBVyxFQVJOO0FBU0xDLGVBQVM7QUFUSixLLFFBV1BDLE8sR0FBVTtBQUNSQyxhQURRLG1CQUNBQyxDQURBLEVBQ0c7QUFDVCxZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJQyxPQUFPRCxLQUFLSixPQUFMLENBQWFHLEVBQUVHLGFBQUYsQ0FBZ0JDLEVBQTdCLENBQVg7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWUosSUFBWjtBQUNBLHVCQUFLSyxVQUFMLENBQWdCO0FBQ2RDLHVDQUEyQk4sS0FBS08sUUFBaEMsaUJBQW9EUCxLQUFLUSxPQUF6RCxxQkFBZ0ZSLEtBQUtTLFdBQXJGLGlCQUE0R1QsS0FBS1UsT0FBakgsbUJBQXNJVixLQUFLVCxTQUEzSSxjQUE2SlMsS0FBS1AsSUFBbEssb0JBQXFMTyxLQUFLUixVQUExTCxtQkFBa05RLEtBQUtOO0FBRHpNLFNBQWhCO0FBR0Q7QUFSTyxLOzs7Ozs2QkFVRDtBQUNQLFVBQUlLLE9BQU8sSUFBWDtBQUNBQSxXQUFLSixPQUFMO0FBQ0EscUJBQUtnQixhQUFMLENBQW1CO0FBQ2pCQyxlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hkLGVBQUtlLE1BQUwsR0FBY0QsSUFBSUUsWUFBbEI7QUFDQWhCLGVBQUtpQixLQUFMLEdBQWFILElBQUlJLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNRDs7OztFQW5DZ0MsZUFBS0MsSTs7a0JBQW5CcEMsSyIsImZpbGUiOiJsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHVwZGF0ZSBmcm9tICcuLi91dGlsL3VwZGF0ZS5qcydcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfniLHlv4PlpZfppJAgJyxcbiAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6ICd0cnVlJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBzZWFyY2g6ICcuLi9pbWFnZS9jaGVjay5wbmcnLFxuICAgIGRlc2NyaWJlOiAnJyxcbiAgICB2aWV3OiAnJyxcbiAgICBoaWVyYXJjaHk6ICcnLFxuICAgIGNvbnZlcnNpb246ICcnLFxuICAgIHRpbWU6ICcnLFxuICAgIG1hdGVyaWFsczogJycsXG4gICAgY29udGVudDogbnVsbFxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgZGlzcGxheShlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpdGVtID0gc2VsZi5jb250ZW50W2UuY3VycmVudFRhcmdldC5pZF1cbiAgICAgIGNvbnNvbGUubG9nKGl0ZW0pXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAuL2Rpc3BsYXk/cmVjUGhvdG89JHtpdGVtLnJlY1Bob3RvfSZyZWNOYW1lPSR7aXRlbS5yZWNOYW1lfSZyZWNEZXNjcmliZT0ke2l0ZW0ucmVjRGVzY3JpYmV9JnJlY1ZpZXc9JHtpdGVtLnJlY1ZpZXd9JmhpZXJhcmNoeT0ke2l0ZW0uaGllcmFyY2h5fSZ0aW1lPSR7aXRlbS50aW1lfSZjb252ZXJzaW9uPSR7aXRlbS5jb252ZXJzaW9ufSZtYXRlcmlhbHM9JHtpdGVtLm1hdGVyaWFsc31gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5jb250ZW50ID0gdXBkYXRlXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19