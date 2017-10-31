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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhaXB1LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImRhdGEiLCJzcmMiLCJpbWdVcmxzIiwiZGVzY3JpYmUiLCJjb250ZW50IiwiaW5kaWNhdG9yRG90cyIsImNvbG9yIiwiY29sb3IxIiwiaGVpZ2h0Iiwid2lkdGgiLCJzZWFyY2giLCJraW5nIiwiZWF0IiwiaG90IiwidGltZSIsIm1ldGhvZHMiLCJsaXN0IiwibmF2aWdhdGVUbyIsInVybCIsImxpa2UiLCJmYXZvdXJpdGUiLCJzdG9ybSIsInBlcnNlY3QiLCJkaXNwbGF5IiwiZSIsInNlbGYiLCJpdGVtIiwiY3VycmVudFRhcmdldCIsImlkIiwiY29uc29sZSIsImxvZyIsInJlY1Bob3RvIiwicmVjTmFtZSIsInJlY0Rlc2NyaWJlIiwicmVjVmlldyIsImdldFN5c3RlbUluZm8iLCJzdWNjZXNzIiwicmVzIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQQyw2QkFBdUI7QUFGaEIsSyxRQUlUQyxJLEdBQU87QUFDTEMsV0FBSyxFQURBO0FBRUxDLGVBQVMsQ0FDUCxnRkFETyxFQUVQLGdGQUZPLEVBR1AsZ0ZBSE8sRUFJUCxxRkFKTyxDQUZKO0FBUUxDLGdCQUFVLEVBUkw7QUFTTEMsZUFBUyxJQVRKO0FBVUxDLHFCQUFlLElBVlY7QUFXTEMsYUFBTyxPQVhGO0FBWUxDLGNBQVEsS0FaSDtBQWFMQyxjQUFRLENBYkg7QUFjTEMsYUFBTyxDQWRGO0FBZUxDLGNBQVEsb0JBZkg7QUFnQkxDLFlBQU0sbUJBaEJEO0FBaUJMQyxXQUFLLGtCQWpCQTtBQWtCTEMsV0FBSyxrQkFsQkE7QUFtQkxDLFlBQU07QUFuQkQsSyxRQXFCUEMsTyxHQUFVO0FBQ1JDLFVBRFEsa0JBQ0Q7QUFDTCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVJDLFVBTlEsa0JBTUQ7QUFDTCx1QkFBS0YsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQVZPO0FBV1JFLGVBWFEsdUJBV0k7QUFDVix1QkFBS0gsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQWZPO0FBZ0JSRyxXQWhCUSxtQkFnQkE7QUFDTix1QkFBS0osVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQXBCTztBQXFCUkksYUFyQlEscUJBcUJFO0FBQ1IsdUJBQUtMLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0F6Qk87QUEwQlJLLGFBMUJRLG1CQTBCQUMsQ0ExQkEsRUEwQkc7QUFDVCxZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJQyxPQUFPRCxLQUFLckIsT0FBTCxDQUFhb0IsRUFBRUcsYUFBRixDQUFnQkMsRUFBN0IsQ0FBWDtBQUNBQyxnQkFBUUMsR0FBUixDQUFZSixJQUFaO0FBQ0EsdUJBQUtULFVBQUwsQ0FBZ0I7QUFDZEMsdUNBQTJCUSxLQUFLSyxRQUFoQyxpQkFBb0RMLEtBQUtNLE9BQXpELHFCQUFnRk4sS0FBS08sV0FBckYsaUJBQTRHUCxLQUFLUTtBQURuRyxTQUFoQjtBQUdEO0FBakNPLEs7Ozs7OzZCQW1DRDtBQUNQLFVBQUlULE9BQU8sSUFBWDtBQUNBQSxXQUFLckIsT0FBTDtBQUNBLHFCQUFLK0IsYUFBTCxDQUFtQjtBQUNqQkMsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYWixlQUFLakIsTUFBTCxHQUFjNkIsSUFBSUMsWUFBbEI7QUFDQWIsZUFBS2hCLEtBQUwsR0FBYTRCLElBQUlFLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNRDs7OztFQXRFZ0MsZUFBS0MsSTs7a0JBQW5CNUMsSyIsImZpbGUiOiJjYWlwdS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBuYW1lIGZyb20gJy4uL3V0aWwvbmFtZS5qcydcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfniLHlv4PlpZfppJAnLFxuICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogJ3RydWUnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzcmM6ICcnLFxuICAgIGltZ1VybHM6IFtcbiAgICAgICdodHRwOi8vbXBpYy50aWFua29uZy5jb20vN2ZjL2JlYi83ZmNiZWJlYmU3OTAzYTBlNmM4NjVlZjlhZWNjOTc0MC82NDAuanBnQDMwMGgnLFxuICAgICAgJ2h0dHA6Ly9tcGljLnRpYW5rb25nLmNvbS8yMDkvNjZhLzIwOTY2YTI2ZmZmM2Y3OTAwNGUzZDI2MjA1NTUxN2IwLzY0MC5qcGdAMzAwaCcsXG4gICAgICAnaHR0cDovL21waWMudGlhbmtvbmcuY29tLzFiOS80YmMvMWI5NGJjNTgxMzlkMjY0YWQwYzZkNDAxYjkwZWNhN2YvNjQwLmpwZ0AzMDBoJyxcbiAgICAgICdodHRwOi8vbXBpYy50aWFua29uZy5jb20vNjZlLzRhYS82NmU0YWFmMzM0ZjhmMzdmMGRiYzU5YWNmZjdiZjY4My80MzAtMzgzMS5qcGdAMzAwaCdcbiAgICBdLFxuICAgIGRlc2NyaWJlOiAnJyxcbiAgICBjb250ZW50OiBudWxsLFxuICAgIGluZGljYXRvckRvdHM6IHRydWUsXG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgY29sb3IxOiAncmVkJyxcbiAgICBoZWlnaHQ6IDAsXG4gICAgd2lkdGg6IDAsXG4gICAgc2VhcmNoOiAnLi4vaW1hZ2UvY2hlY2sucG5nJyxcbiAgICBraW5nOiAnLi4vaW1hZ2Uva2luZy5wbmcnLFxuICAgIGVhdDogJy4uL2ltYWdlL2VhdC5wbmcnLFxuICAgIGhvdDogJy4uL2ltYWdlL2hvdC5wbmcnLFxuICAgIHRpbWU6ICcuLi9pbWFnZS90aW1lLnBuZydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGxpc3QoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuLi9wYWdlcy9saXN0J1xuICAgICAgfSlcbiAgICB9LFxuICAgIGxpa2UoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuLi9wYWdlcy9tZW51MSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBmYXZvdXJpdGUoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuLi9wYWdlcy9tZW51MidcbiAgICAgIH0pXG4gICAgfSxcbiAgICBzdG9ybSgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL3BhZ2VzL21lbnUzJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHBlcnNlY3QoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuLi9wYWdlcy9tZW51NCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBkaXNwbGF5KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IGl0ZW0gPSBzZWxmLmNvbnRlbnRbZS5jdXJyZW50VGFyZ2V0LmlkXVxuICAgICAgY29uc29sZS5sb2coaXRlbSlcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC4vZGlzcGxheT9yZWNQaG90bz0ke2l0ZW0ucmVjUGhvdG99JnJlY05hbWU9JHtpdGVtLnJlY05hbWV9JnJlY0Rlc2NyaWJlPSR7aXRlbS5yZWNEZXNjcmliZX0mcmVjVmlldz0ke2l0ZW0ucmVjVmlld31gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5jb250ZW50ID0gbmFtZVxuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==