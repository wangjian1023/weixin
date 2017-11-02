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
      like: function like() {
        _wepy2.default.navigateTo({
          url: '../pages/menu1'
        });
      },
      favourite: function favourite() {
        _wepy2.default.navigateTo({
          url: '../pages/menu2'
        });
      },
      storm: function storm() {
        _wepy2.default.navigateTo({
          url: '../pages/menu3'
        });
      },
      persect: function persect() {
        _wepy2.default.navigateTo({
          url: '../pages/menu4'
        });
      },
      past: function past() {
        _wepy2.default.navigateTo({
          url: './search'
        });
      },
      display: function display(e) {
        var self = this;
        var item = self.content[e.currentTarget.id];
        console.log(item);
        _wepy2.default.navigateTo({
          url: './display?recPhoto=' + item.recPhoto + '&recName=' + item.recName + '&recDescribe=' + item.recDescribe + '&recView=' + item.recView
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/caipu'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhaXB1LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJzcmMiLCJpbWdVcmxzIiwiZGVzY3JpYmUiLCJjb250ZW50IiwiaW5kaWNhdG9yRG90cyIsImNvbG9yIiwiY29sb3IxIiwiaGVpZ2h0Iiwid2lkdGgiLCJzZWFyY2giLCJraW5nIiwiZWF0IiwiaG90IiwidGltZSIsIm1ldGhvZHMiLCJsaXN0IiwibmF2aWdhdGVUbyIsInVybCIsImxpa2UiLCJmYXZvdXJpdGUiLCJzdG9ybSIsInBlcnNlY3QiLCJwYXN0IiwiZGlzcGxheSIsImUiLCJzZWxmIiwiaXRlbSIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJyZWNQaG90byIsInJlY05hbWUiLCJyZWNEZXNjcmliZSIsInJlY1ZpZXciLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsTUFEakI7QUFFUEMsNkJBQXVCO0FBRmhCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxlQUFTLENBQ1AsZ0ZBRE8sRUFFUCxnRkFGTyxFQUdQLGdGQUhPLEVBSVAscUZBSk8sQ0FGSjtBQVFMQyxnQkFBVSxFQVJMO0FBU0xDLGVBQVMsSUFUSjtBQVVMQyxxQkFBZSxJQVZWO0FBV0xDLGFBQU8sT0FYRjtBQVlMQyxjQUFRLEtBWkg7QUFhTEMsY0FBUSxDQWJIO0FBY0xDLGFBQU8sQ0FkRjtBQWVMQyxjQUFRLG9CQWZIO0FBZ0JMQyxZQUFNLG1CQWhCRDtBQWlCTEMsV0FBSyxrQkFqQkE7QUFrQkxDLFdBQUssa0JBbEJBO0FBbUJMQyxZQUFNO0FBbkJELEssUUFxQlBDLE8sR0FBVTtBQUNSQyxVQURRLGtCQUNEO0FBQ0wsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FMTztBQU1SQyxVQU5RLGtCQU1EO0FBQ0wsdUJBQUtGLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FWTztBQVdSRSxlQVhRLHVCQVdJO0FBQ1YsdUJBQUtILFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FmTztBQWdCUkcsV0FoQlEsbUJBZ0JBO0FBQ04sdUJBQUtKLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FwQk87QUFxQlJJLGFBckJRLHFCQXFCRTtBQUNSLHVCQUFLTCxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BekJPO0FBMEJSSyxVQTFCUSxrQkEwQkQ7QUFDTCx1QkFBS04sVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQTlCTztBQStCUk0sYUEvQlEsbUJBK0JBQyxDQS9CQSxFQStCRztBQUNULFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlDLE9BQU9ELEtBQUt0QixPQUFMLENBQWFxQixFQUFFRyxhQUFGLENBQWdCQyxFQUE3QixDQUFYO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVlKLElBQVo7QUFDQSx1QkFBS1YsVUFBTCxDQUFnQjtBQUNkQyx1Q0FBMkJTLEtBQUtLLFFBQWhDLGlCQUFvREwsS0FBS00sT0FBekQscUJBQWdGTixLQUFLTyxXQUFyRixpQkFBNEdQLEtBQUtRO0FBRG5HLFNBQWhCO0FBR0Q7QUF0Q08sSzs7Ozs7NkJBd0NEO0FBQ1AsVUFBSVQsT0FBTyxJQUFYO0FBQ0FBLFdBQUt0QixPQUFMO0FBQ0EscUJBQUtnQyxhQUFMLENBQW1CO0FBQ2pCQyxlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1haLGVBQUtsQixNQUFMLEdBQWM4QixJQUFJQyxZQUFsQjtBQUNBYixlQUFLakIsS0FBTCxHQUFhNkIsSUFBSUUsV0FBakI7QUFDRDtBQUpnQixPQUFuQjtBQU1EOzs7O0VBM0VnQyxlQUFLQyxJOztrQkFBbkI3QyxLIiwiZmlsZSI6ImNhaXB1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IG5hbWUgZnJvbSAnLi4vdXRpbC91cGRhdGUuanMnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn54ix5b+D5aWX6aSQJyxcbiAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6ICd0cnVlJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnJyxcbiAgICBpbWdVcmxzOiBbXG4gICAgICAnaHR0cDovL21waWMudGlhbmtvbmcuY29tLzdmYy9iZWIvN2ZjYmViZWJlNzkwM2EwZTZjODY1ZWY5YWVjYzk3NDAvNjQwLmpwZ0AzMDBoJyxcbiAgICAgICdodHRwOi8vbXBpYy50aWFua29uZy5jb20vMjA5LzY2YS8yMDk2NmEyNmZmZjNmNzkwMDRlM2QyNjIwNTU1MTdiMC82NDAuanBnQDMwMGgnLFxuICAgICAgJ2h0dHA6Ly9tcGljLnRpYW5rb25nLmNvbS8xYjkvNGJjLzFiOTRiYzU4MTM5ZDI2NGFkMGM2ZDQwMWI5MGVjYTdmLzY0MC5qcGdAMzAwaCcsXG4gICAgICAnaHR0cDovL21waWMudGlhbmtvbmcuY29tLzY2ZS80YWEvNjZlNGFhZjMzNGY4ZjM3ZjBkYmM1OWFjZmY3YmY2ODMvNDMwLTM4MzEuanBnQDMwMGgnXG4gICAgXSxcbiAgICBkZXNjcmliZTogJycsXG4gICAgY29udGVudDogbnVsbCxcbiAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGNvbG9yMTogJ3JlZCcsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIHNlYXJjaDogJy4uL2ltYWdlL2NoZWNrLnBuZycsXG4gICAga2luZzogJy4uL2ltYWdlL2tpbmcucG5nJyxcbiAgICBlYXQ6ICcuLi9pbWFnZS9lYXQucG5nJyxcbiAgICBob3Q6ICcuLi9pbWFnZS9ob3QucG5nJyxcbiAgICB0aW1lOiAnLi4vaW1hZ2UvdGltZS5wbmcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBsaXN0KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvbGlzdCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBsaWtlKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvbWVudTEnXG4gICAgICB9KVxuICAgIH0sXG4gICAgZmF2b3VyaXRlKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvbWVudTInXG4gICAgICB9KVxuICAgIH0sXG4gICAgc3Rvcm0oKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuLi9wYWdlcy9tZW51MydcbiAgICAgIH0pXG4gICAgfSxcbiAgICBwZXJzZWN0KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvbWVudTQnXG4gICAgICB9KVxuICAgIH0sXG4gICAgcGFzdCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4vc2VhcmNoJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIGRpc3BsYXkoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgaXRlbSA9IHNlbGYuY29udGVudFtlLmN1cnJlbnRUYXJnZXQuaWRdXG4gICAgICBjb25zb2xlLmxvZyhpdGVtKVxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgLi9kaXNwbGF5P3JlY1Bob3RvPSR7aXRlbS5yZWNQaG90b30mcmVjTmFtZT0ke2l0ZW0ucmVjTmFtZX0mcmVjRGVzY3JpYmU9JHtpdGVtLnJlY0Rlc2NyaWJlfSZyZWNWaWV3PSR7aXRlbS5yZWNWaWV3fWBcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmNvbnRlbnQgPSBuYW1lXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19