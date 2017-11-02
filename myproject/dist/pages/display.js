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
      // recPhoto: '',
      // recName: '',
      // recView: '',
      // recDescribe: '',
      // hierarchy: '',
      // time: '',
      // materials: '',
      // conversion: '',
      // reminder: '',
      search: '../image/check.png',
      meng: '../image/meng1.png',
      meng1: '../image/memg.png',
      // food: [],
      // summary: [],
      reminder: ''
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BsYXkuanMiXSwibmFtZXMiOlsiU2hvdyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwiY29udGVudCIsInNlYXJjaCIsIm1lbmciLCJtZW5nMSIsInJlbWluZGVyIiwibWV0aG9kcyIsInNvbiIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJzdGFyIiwic2VsZiIsImNvbGxlY3QiLCJnZXRTdG9yYWdlU3luYyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxXQUFLLEVBREE7QUFFTEMsZUFBUyxFQUZKO0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLGNBQVEsb0JBWkg7QUFhTEMsWUFBTSxvQkFiRDtBQWNMQyxhQUFPLG1CQWRGO0FBZUw7QUFDQTtBQUNBQyxnQkFBVTtBQWpCTCxLLFFBbUJQQyxPLEdBQVU7QUFDUkMsU0FEUSxpQkFDRjtBQUNKLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BTE87QUFNUkMsVUFOUSxrQkFNRDtBQUNMLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLQyxPQUFMLEdBQWUsQ0FBQ0QsS0FBS0MsT0FBckI7QUFDQSxZQUFJRCxLQUFLQyxPQUFULEVBQWtCO0FBQ2hCRCxlQUFLRCxJQUFMLEdBQVksbUJBQVo7QUFDRCxTQUZELE1BRU87QUFDTEMsZUFBS0QsSUFBTCxHQUFZLG9CQUFaO0FBQ0Q7QUFDRjtBQWRPLEs7Ozs7OzZCQWdCRDtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBQSxXQUFLVixPQUFMLEdBQWUsZUFBS1ksY0FBTCxDQUFvQixTQUFwQixDQUFmO0FBQ0Q7Ozs7RUExQytCLGVBQUtDLEk7O2tCQUFsQmxCLEkiLCJmaWxlIjoiZGlzcGxheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3cgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iPnOiwseivpuaDhSdcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgY29udGVudDogJycsXG4gICAgLy8gcmVjUGhvdG86ICcnLFxuICAgIC8vIHJlY05hbWU6ICcnLFxuICAgIC8vIHJlY1ZpZXc6ICcnLFxuICAgIC8vIHJlY0Rlc2NyaWJlOiAnJyxcbiAgICAvLyBoaWVyYXJjaHk6ICcnLFxuICAgIC8vIHRpbWU6ICcnLFxuICAgIC8vIG1hdGVyaWFsczogJycsXG4gICAgLy8gY29udmVyc2lvbjogJycsXG4gICAgLy8gcmVtaW5kZXI6ICcnLFxuICAgIHNlYXJjaDogJy4uL2ltYWdlL2NoZWNrLnBuZycsXG4gICAgbWVuZzogJy4uL2ltYWdlL21lbmcxLnBuZycsXG4gICAgbWVuZzE6ICcuLi9pbWFnZS9tZW1nLnBuZycsXG4gICAgLy8gZm9vZDogW10sXG4gICAgLy8gc3VtbWFyeTogW10sXG4gICAgcmVtaW5kZXI6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBzb24oKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuLi9wYWdlcy9zZWFyY2gnXG4gICAgICB9KVxuICAgIH0sXG4gICAgc3RhcigpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jb2xsZWN0ID0gIXNlbGYuY29sbGVjdFxuICAgICAgaWYgKHNlbGYuY29sbGVjdCkge1xuICAgICAgICBzZWxmLnN0YXIgPSAnLi4vaW1hZ2UvbWVtZy5wbmcnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLnN0YXIgPSAnLi4vaW1hZ2UvbWVuZzEucG5nJ1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5jb250ZW50ID0gd2VweS5nZXRTdG9yYWdlU3luYygnY29udGVudCcpXG4gIH1cbn1cbiJdfQ==