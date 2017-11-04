'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _name = require('./../util/name2.js');

var _name2 = _interopRequireDefault(_name);

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
      self.content = _name2.default;
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/menu2'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUyLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJzcmMiLCJzZWFyY2giLCJkZXNjcmliZSIsInZpZXciLCJjb250ZW50IiwibWV0aG9kcyIsImRpc3BsYXkiLCJlIiwic2VsZiIsImNvbnNvbGUiLCJsb2ciLCJpdGVtIiwiY3VycmVudFRhcmdldCIsImlkIiwic2V0U3RvcmFnZVN5bmMiLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGFzdCIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwiaGVpZ2h0Iiwid2luZG93SGVpZ2h0Iiwid2lkdGgiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE9BRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBSVRDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsY0FBUSxvQkFGSDtBQUdMQyxnQkFBVSxFQUhMO0FBSUxDLFlBQU0sRUFKRDtBQUtMQyxlQUFTO0FBTEosSyxRQU9QQyxPLEdBQVU7QUFDUkMsYUFEUSxtQkFDQUMsQ0FEQSxFQUNHO0FBQ1QsWUFBSUMsT0FBTyxJQUFYO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVlILENBQVo7QUFDQSxZQUFNSSxPQUFPSCxLQUFLSixPQUFMLENBQWFHLEVBQUVLLGFBQUYsQ0FBZ0JDLEVBQTdCLENBQWI7QUFDQUosZ0JBQVFDLEdBQVIsQ0FBWUMsSUFBWixFQUFrQixTQUFsQjtBQUNBLFlBQUk7QUFDRix5QkFBS0csY0FBTCxDQUFvQixTQUFwQixFQUErQkgsSUFBL0I7QUFDRCxTQUZELENBRUUsT0FBT0osQ0FBUCxFQUFVLENBQ1g7QUFDRCx1QkFBS1EsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHQVAsZ0JBQVFDLEdBQVIsQ0FBWUMsSUFBWixFQUFrQixlQUFsQjtBQUNELE9BZE87QUFlUk0sVUFmUSxrQkFlRDtBQUNMLHVCQUFLRixVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBbkJPLEs7Ozs7OzZCQXFCRDtBQUNQLFVBQUlSLE9BQU8sSUFBWDtBQUNBQSxXQUFLSixPQUFMO0FBQ0EscUJBQUtjLGFBQUwsQ0FBbUI7QUFDakJDLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWFosZUFBS2EsTUFBTCxHQUFjRCxJQUFJRSxZQUFsQjtBQUNBZCxlQUFLZSxLQUFMLEdBQWFILElBQUlJLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNRDs7OztFQTFDZ0MsZUFBS0MsSTs7a0JBQW5COUIsSyIsImZpbGUiOiJtZW51Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB1cGRhdGUgZnJvbSAnLi4vdXRpbC9uYW1lMi5qcydcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfniLHlv4PlpZfppJAgJyxcbiAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6ICd0cnVlJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBzZWFyY2g6ICcuLi9pbWFnZS9jaGVjay5wbmcnLFxuICAgIGRlc2NyaWJlOiAnJyxcbiAgICB2aWV3OiAnJyxcbiAgICBjb250ZW50OiBudWxsXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBkaXNwbGF5KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgIGNvbnN0IGl0ZW0gPSBzZWxmLmNvbnRlbnRbZS5jdXJyZW50VGFyZ2V0LmlkXVxuICAgICAgY29uc29sZS5sb2coaXRlbSwgJ2l0ZW0taWQnKVxuICAgICAgdHJ5IHtcbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnY29udGVudCcsIGl0ZW0pXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICB9XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuL2Rpc3BsYXknXG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2coaXRlbSwgJ2NvbnRlbnRbaXRlbV0nKVxuICAgIH0sXG4gICAgcGFzdCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vc2VhcmNoMSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmNvbnRlbnQgPSB1cGRhdGVcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=