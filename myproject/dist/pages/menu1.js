'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _name = require('./../util/name.js');

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
      hierarchy: '',
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/menu1'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUxLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJzcmMiLCJzZWFyY2giLCJkZXNjcmliZSIsInZpZXciLCJoaWVyYXJjaHkiLCJjb250ZW50IiwibWV0aG9kcyIsImRpc3BsYXkiLCJlIiwic2VsZiIsImNvbnNvbGUiLCJsb2ciLCJpdGVtIiwiY3VycmVudFRhcmdldCIsImlkIiwic2V0U3RvcmFnZVN5bmMiLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGFzdCIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwiaGVpZ2h0Iiwid2luZG93SGVpZ2h0Iiwid2lkdGgiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE9BRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBSVRDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsY0FBUSxvQkFGSDtBQUdMQyxnQkFBVSxFQUhMO0FBSUxDLFlBQU0sRUFKRDtBQUtMQyxpQkFBVyxFQUxOO0FBTUxDLGVBQVM7QUFOSixLLFFBUVBDLE8sR0FBVTtBQUNSQyxhQURRLG1CQUNBQyxDQURBLEVBQ0c7QUFDVCxZQUFJQyxPQUFPLElBQVg7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWUgsQ0FBWjtBQUNBLFlBQU1JLE9BQU9ILEtBQUtKLE9BQUwsQ0FBYUcsRUFBRUssYUFBRixDQUFnQkMsRUFBN0IsQ0FBYjtBQUNBSixnQkFBUUMsR0FBUixDQUFZQyxJQUFaLEVBQWtCLFNBQWxCO0FBQ0EsWUFBSTtBQUNGLHlCQUFLRyxjQUFMLENBQW9CLFNBQXBCLEVBQStCSCxJQUEvQjtBQUNELFNBRkQsQ0FFRSxPQUFPSixDQUFQLEVBQVUsQ0FDWDtBQUNELHVCQUFLUSxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdBUCxnQkFBUUMsR0FBUixDQUFZQyxJQUFaLEVBQWtCLGVBQWxCO0FBQ0QsT0FkTztBQWVSTSxVQWZRLGtCQWVEO0FBQ0wsdUJBQUtGLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFuQk8sSzs7Ozs7NkJBcUJEO0FBQ1AsVUFBSVIsT0FBTyxJQUFYO0FBQ0FBLFdBQUtKLE9BQUw7QUFDQSxxQkFBS2MsYUFBTCxDQUFtQjtBQUNqQkMsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYWixlQUFLYSxNQUFMLEdBQWNELElBQUlFLFlBQWxCO0FBQ0FkLGVBQUtlLEtBQUwsR0FBYUgsSUFBSUksV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBM0NnQyxlQUFLQyxJOztrQkFBbkIvQixLIiwiZmlsZSI6Im1lbnUxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHVwIGZyb20gJy4uL3V0aWwvbmFtZS5qcydcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfniLHlv4PlpZfppJAgJyxcbiAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6ICd0cnVlJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBzZWFyY2g6ICcuLi9pbWFnZS9jaGVjay5wbmcnLFxuICAgIGRlc2NyaWJlOiAnJyxcbiAgICB2aWV3OiAnJyxcbiAgICBoaWVyYXJjaHk6ICcnLFxuICAgIGNvbnRlbnQ6IG51bGxcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGRpc3BsYXkoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgY29uc3QgaXRlbSA9IHNlbGYuY29udGVudFtlLmN1cnJlbnRUYXJnZXQuaWRdXG4gICAgICBjb25zb2xlLmxvZyhpdGVtLCAnaXRlbS1pZCcpXG4gICAgICB0cnkge1xuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdjb250ZW50JywgaXRlbSlcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIH1cbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vZGlzcGxheSdcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyhpdGVtLCAnY29udGVudFtpdGVtXScpXG4gICAgfSxcbiAgICBwYXN0KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9zZWFyY2gxJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuY29udGVudCA9IHVwXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19