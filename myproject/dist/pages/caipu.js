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
      navigationBarTitleText: '爱心套餐',
      enablePullDownRefresh: 'true'
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
    }, _this.methods = {
      list: function list() {
        _wepy2.default.navigateTo({
          url: '../pages/list'
        });
      },
      display: function display(e) {
        var self = this;
        var item = self.content[e.currentTarget.id];
        console.log(item);
        _wepy2.default.navigateTo({
          url: './display?recPhoto=' + item.recPhoto + '&recName=' + item.recName
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/caipu'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhaXB1LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJzcmMiLCJpbWdVcmxzIiwiZGVzY3JpYmUiLCJjb250ZW50IiwiaW5kaWNhdG9yRG90cyIsImNvbG9yIiwiY29sb3IxIiwiaGVpZ2h0Iiwid2lkdGgiLCJzZWFyY2giLCJraW5nIiwiZWF0IiwiaG90IiwidGltZSIsIm1ldGhvZHMiLCJsaXN0IiwibmF2aWdhdGVUbyIsInVybCIsImRpc3BsYXkiLCJlIiwic2VsZiIsIml0ZW0iLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJjb25zb2xlIiwibG9nIiwicmVjUGhvdG8iLCJyZWNOYW1lIiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBSVRDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsZUFBUyxDQUNQLGdGQURPLEVBRVAsZ0ZBRk8sRUFHUCxnRkFITyxFQUlQLHFGQUpPLENBRko7QUFRTEMsZ0JBQVUsRUFSTDtBQVNMQyxlQUFTLElBVEo7QUFVTEMscUJBQWUsSUFWVjtBQVdMQyxhQUFPLE9BWEY7QUFZTEMsY0FBUSxLQVpIO0FBYUxDLGNBQVEsQ0FiSDtBQWNMQyxhQUFPLENBZEY7QUFlTEMsY0FBUSxvQkFmSDtBQWdCTEMsWUFBTSxtQkFoQkQ7QUFpQkxDLFdBQUssa0JBakJBO0FBa0JMQyxXQUFLLGtCQWxCQTtBQW1CTEMsWUFBTTtBQW5CRCxLLFFBcUJQQyxPLEdBQVU7QUFDUkMsVUFEUSxrQkFDRDtBQUNMLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BTE87QUFNUkMsYUFOUSxtQkFNQUMsQ0FOQSxFQU1HO0FBQ1QsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsT0FBT0QsS0FBS2pCLE9BQUwsQ0FBYWdCLEVBQUVHLGFBQUYsQ0FBZ0JDLEVBQTdCLENBQVg7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWUosSUFBWjtBQUNBLHVCQUFLTCxVQUFMLENBQWdCO0FBQ2RDLHVDQUEyQkksS0FBS0ssUUFBaEMsaUJBQW9ETCxLQUFLTTtBQUQzQyxTQUFoQjtBQUdEO0FBYk8sSzs7Ozs7NkJBZUQ7QUFDUCxVQUFJUCxPQUFPLElBQVg7QUFDQUEsV0FBS2pCLE9BQUw7QUFDQSxxQkFBS3lCLGFBQUwsQ0FBbUI7QUFDakJDLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWFYsZUFBS2IsTUFBTCxHQUFjdUIsSUFBSUMsWUFBbEI7QUFDQVgsZUFBS1osS0FBTCxHQUFhc0IsSUFBSUUsV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBbERnQyxlQUFLQyxJOztrQkFBbkJ0QyxLIiwiZmlsZSI6ImNhaXB1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IG5hbWUgZnJvbSAnLi4vdXRpbC9uYW1lLmpzJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eIseW/g+Wll+mkkCcsXG4gICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiAndHJ1ZSdcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgaW1nVXJsczogW1xuICAgICAgJ2h0dHA6Ly9tcGljLnRpYW5rb25nLmNvbS83ZmMvYmViLzdmY2JlYmViZTc5MDNhMGU2Yzg2NWVmOWFlY2M5NzQwLzY0MC5qcGdAMzAwaCcsXG4gICAgICAnaHR0cDovL21waWMudGlhbmtvbmcuY29tLzIwOS82NmEvMjA5NjZhMjZmZmYzZjc5MDA0ZTNkMjYyMDU1NTE3YjAvNjQwLmpwZ0AzMDBoJyxcbiAgICAgICdodHRwOi8vbXBpYy50aWFua29uZy5jb20vMWI5LzRiYy8xYjk0YmM1ODEzOWQyNjRhZDBjNmQ0MDFiOTBlY2E3Zi82NDAuanBnQDMwMGgnLFxuICAgICAgJ2h0dHA6Ly9tcGljLnRpYW5rb25nLmNvbS82NmUvNGFhLzY2ZTRhYWYzMzRmOGYzN2YwZGJjNTlhY2ZmN2JmNjgzLzQzMC0zODMxLmpwZ0AzMDBoJ1xuICAgIF0sXG4gICAgZGVzY3JpYmU6ICcnLFxuICAgIGNvbnRlbnQ6IG51bGwsXG4gICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBjb2xvcjE6ICdyZWQnLFxuICAgIGhlaWdodDogMCxcbiAgICB3aWR0aDogMCxcbiAgICBzZWFyY2g6ICcuLi9pbWFnZS9jaGVjay5wbmcnLFxuICAgIGtpbmc6ICcuLi9pbWFnZS9raW5nLnBuZycsXG4gICAgZWF0OiAnLi4vaW1hZ2UvZWF0LnBuZycsXG4gICAgaG90OiAnLi4vaW1hZ2UvaG90LnBuZycsXG4gICAgdGltZTogJy4uL2ltYWdlL3RpbWUucG5nJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgbGlzdCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL3BhZ2VzL2xpc3QnXG4gICAgICB9KVxuICAgIH0sXG4gICAgZGlzcGxheShlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpdGVtID0gc2VsZi5jb250ZW50W2UuY3VycmVudFRhcmdldC5pZF1cbiAgICAgIGNvbnNvbGUubG9nKGl0ZW0pXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAuL2Rpc3BsYXk/cmVjUGhvdG89JHtpdGVtLnJlY1Bob3RvfSZyZWNOYW1lPSR7aXRlbS5yZWNOYW1lfWBcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmNvbnRlbnQgPSBuYW1lXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19