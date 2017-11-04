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
      content: null
    }, _this.methods = {
      display: function display(e) {
        var self = this;
        console.log(e);
        var item = self.content[e.currentTarget.id];
        console.log(item, 'item-id');
        try {
          _wepy2.default.setStorageSync('content', item);
        } catch (e) {}
        _wepy2.default.navigateTo({
          url: './display'
        });
        console.log(item, 'content[item]');
      },
      past: function past() {
        _wepy2.default.navigateTo({
          url: './search1'
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/menu4'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnU0LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJzcmMiLCJzZWFyY2giLCJkZXNjcmliZSIsInZpZXciLCJjb250ZW50IiwibWV0aG9kcyIsImRpc3BsYXkiLCJlIiwic2VsZiIsImNvbnNvbGUiLCJsb2ciLCJpdGVtIiwiY3VycmVudFRhcmdldCIsImlkIiwic2V0U3RvcmFnZVN5bmMiLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGFzdCIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwiaGVpZ2h0Iiwid2luZG93SGVpZ2h0Iiwid2lkdGgiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE9BRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBSVRDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsY0FBUSxvQkFGSDtBQUdMQyxnQkFBVSxFQUhMO0FBSUxDLFlBQU0sRUFKRDtBQUtMQyxlQUFTO0FBTEosSyxRQU9QQyxPLEdBQVU7QUFDUkMsYUFEUSxtQkFDQUMsQ0FEQSxFQUNHO0FBQ1QsWUFBSUMsT0FBTyxJQUFYO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVlILENBQVo7QUFDQSxZQUFNSSxPQUFPSCxLQUFLSixPQUFMLENBQWFHLEVBQUVLLGFBQUYsQ0FBZ0JDLEVBQTdCLENBQWI7QUFDQUosZ0JBQVFDLEdBQVIsQ0FBWUMsSUFBWixFQUFrQixTQUFsQjtBQUNBLFlBQUk7QUFDRix5QkFBS0csY0FBTCxDQUFvQixTQUFwQixFQUErQkgsSUFBL0I7QUFDRCxTQUZELENBRUUsT0FBT0osQ0FBUCxFQUFVLENBQ1g7QUFDRCx1QkFBS1EsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHQVAsZ0JBQVFDLEdBQVIsQ0FBWUMsSUFBWixFQUFrQixlQUFsQjtBQUNELE9BZE87QUFlUk0sVUFmUSxrQkFlRDtBQUNMLHVCQUFLRixVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBbkJPLEs7Ozs7OzZCQXFCRDtBQUNQLFVBQUlSLE9BQU8sSUFBWDtBQUNBQSxXQUFLSixPQUFMO0FBQ0EscUJBQUtjLGFBQUwsQ0FBbUI7QUFDakJDLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWFosZUFBS2EsTUFBTCxHQUFjRCxJQUFJRSxZQUFsQjtBQUNBZCxlQUFLZSxLQUFMLEdBQWFILElBQUlJLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNRDs7OztFQTFDZ0MsZUFBS0MsSTs7a0JBQW5COUIsSyIsImZpbGUiOiJtZW51NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB1cGRhdGUgZnJvbSAnLi4vdXRpbC91cGRhdGUuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn54ix5b+D5aWX6aSQICcsXG4gICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiAndHJ1ZSdcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgc2VhcmNoOiAnLi4vaW1hZ2UvY2hlY2sucG5nJyxcbiAgICBkZXNjcmliZTogJycsXG4gICAgdmlldzogJycsXG4gICAgY29udGVudDogbnVsbFxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgZGlzcGxheShlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICBjb25zdCBpdGVtID0gc2VsZi5jb250ZW50W2UuY3VycmVudFRhcmdldC5pZF1cbiAgICAgIGNvbnNvbGUubG9nKGl0ZW0sICdpdGVtLWlkJylcbiAgICAgIHRyeSB7XG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2NvbnRlbnQnLCBpdGVtKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgfVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9kaXNwbGF5J1xuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKGl0ZW0sICdjb250ZW50W2l0ZW1dJylcbiAgICB9LFxuICAgIHBhc3QoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL3NlYXJjaDEnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5jb250ZW50ID0gdXBkYXRlXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19