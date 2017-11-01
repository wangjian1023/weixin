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
      // food: '',
      // summary: '',
      artist: '',
      character: '',
      reminder: '',
      content: []
    }, _this.methods = {
      display: function display(e) {
        var self = this;
        var item = self.content[e.currentTarget.dataset.index];
        console.log(item, 'item-id');
        try {
          _wepy2.default.setStorageSync('content', item);
        } catch (e) {}
        _wepy2.default.navigateTo({
          url: './display'
        });
        console.log(item, 'content[item]');
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiZGF0YSIsInNyYyIsInNlYXJjaCIsImRlc2NyaWJlIiwidmlldyIsImhpZXJhcmNoeSIsImNvbnZlcnNpb24iLCJ0aW1lIiwibWF0ZXJpYWxzIiwiYXJ0aXN0IiwiY2hhcmFjdGVyIiwicmVtaW5kZXIiLCJjb250ZW50IiwibWV0aG9kcyIsImRpc3BsYXkiLCJlIiwic2VsZiIsIml0ZW0iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwiY29uc29sZSIsImxvZyIsInNldFN0b3JhZ2VTeW5jIiwibmF2aWdhdGVUbyIsInVybCIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwiaGVpZ2h0Iiwid2luZG93SGVpZ2h0Iiwid2lkdGgiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE9BRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBSVRDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsY0FBUSxvQkFGSDtBQUdMQyxnQkFBVSxFQUhMO0FBSUxDLFlBQU0sRUFKRDtBQUtMQyxpQkFBVyxFQUxOO0FBTUxDLGtCQUFZLEVBTlA7QUFPTEMsWUFBTSxFQVBEO0FBUUxDLGlCQUFXLEVBUk47QUFTTDtBQUNBO0FBQ0FDLGNBQVEsRUFYSDtBQVlMQyxpQkFBVyxFQVpOO0FBYUxDLGdCQUFVLEVBYkw7QUFjTEMsZUFBUztBQWRKLEssUUFnQlBDLE8sR0FBVTtBQUNSQyxhQURRLG1CQUNBQyxDQURBLEVBQ0c7QUFDVCxZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFNQyxPQUFPRCxLQUFLSixPQUFMLENBQWFHLEVBQUVHLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxLQUFyQyxDQUFiO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVlMLElBQVosRUFBa0IsU0FBbEI7QUFDQSxZQUFJO0FBQ0YseUJBQUtNLGNBQUwsQ0FBb0IsU0FBcEIsRUFBK0JOLElBQS9CO0FBQ0QsU0FGRCxDQUVFLE9BQU9GLENBQVAsRUFBVSxDQUNYO0FBQ0QsdUJBQUtTLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0FKLGdCQUFRQyxHQUFSLENBQVlMLElBQVosRUFBa0IsZUFBbEI7QUFDRDtBQWJPLEs7Ozs7OzZCQWVEO0FBQ1AsVUFBSUQsT0FBTyxJQUFYO0FBQ0FBLFdBQUtKLE9BQUw7QUFDQSxxQkFBS2MsYUFBTCxDQUFtQjtBQUNqQkMsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYWixlQUFLYSxNQUFMLEdBQWNELElBQUlFLFlBQWxCO0FBQ0FkLGVBQUtlLEtBQUwsR0FBYUgsSUFBSUksV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBN0NnQyxlQUFLQyxJOztrQkFBbkJyQyxLIiwiZmlsZSI6Imxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgdXBkYXRlIGZyb20gJy4uL3V0aWwvdXBkYXRlLmpzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eIseW/g+Wll+mkkCAnLFxuICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogJ3RydWUnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzcmM6ICcnLFxuICAgIHNlYXJjaDogJy4uL2ltYWdlL2NoZWNrLnBuZycsXG4gICAgZGVzY3JpYmU6ICcnLFxuICAgIHZpZXc6ICcnLFxuICAgIGhpZXJhcmNoeTogJycsXG4gICAgY29udmVyc2lvbjogJycsXG4gICAgdGltZTogJycsXG4gICAgbWF0ZXJpYWxzOiAnJyxcbiAgICAvLyBmb29kOiAnJyxcbiAgICAvLyBzdW1tYXJ5OiAnJyxcbiAgICBhcnRpc3Q6ICcnLFxuICAgIGNoYXJhY3RlcjogJycsXG4gICAgcmVtaW5kZXI6ICcnLFxuICAgIGNvbnRlbnQ6IFtdXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBkaXNwbGF5KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaXRlbSA9IHNlbGYuY29udGVudFtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleF1cbiAgICAgIGNvbnNvbGUubG9nKGl0ZW0sICdpdGVtLWlkJylcbiAgICAgIHRyeSB7XG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ2NvbnRlbnQnLCBpdGVtKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgfVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi9kaXNwbGF5J1xuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKGl0ZW0sICdjb250ZW50W2l0ZW1dJylcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuY29udGVudCA9IHVwZGF0ZVxuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==