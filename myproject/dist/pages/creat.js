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

var Take = function (_wepy$page) {
  _inherits(Take, _wepy$page);

  function Take() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Take);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Take.__proto__ || Object.getPrototypeOf(Take)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '编辑菜谱'
    }, _this.data = {
      height: 0,
      width: 0,
      src: '',
      add: '../image/add.png',
      array: ['初级', '中级', '高级', '神级'],
      objectArray: [{
        id: 0,
        name: '初级'
      }, {
        id: 1,
        name: '中级'
      }, {
        id: 2,
        name: '高级'
      }, {
        id: 3,
        name: '神级'
      }],
      index: 0
      // time: 0,
      // arr: ['五分钟', '十五分钟', '半小时', '一小时', '两小时'],
      // objectArr: [
      //   {
      //     id: 0,
      //     name: '五分钟'
      //   },
      //   {
      //     id: 1,
      //     name: '十五分钟'
      //   },
      //   {
      //     id: 2,
      //     name: '半小时'
      //   },
      //   {
      //     id: 3,
      //     name: '一小时'
      //   },
      //   {
      //     id: 4,
      //     name: '两小时'
      //   }
      // ]
    }, _this.methods = {
      bindPickerChange: function bindPickerChange(e) {
        var self = this;
        console.log('picker发送选择改变，携带值为', e.deotail.value);
        self.index = e.detail.value;
        self.setData({
          index: e.detail.value
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Take, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
    }
  }]);

  return Take;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Take , 'pages/creat'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0LmpzIl0sIm5hbWVzIjpbIlRha2UiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImhlaWdodCIsIndpZHRoIiwic3JjIiwiYWRkIiwiYXJyYXkiLCJvYmplY3RBcnJheSIsImlkIiwibmFtZSIsImluZGV4IiwibWV0aG9kcyIsImJpbmRQaWNrZXJDaGFuZ2UiLCJlIiwic2VsZiIsImNvbnNvbGUiLCJsb2ciLCJkZW90YWlsIiwidmFsdWUiLCJkZXRhaWwiLCJzZXREYXRhIiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxjQUFRLENBREg7QUFFTEMsYUFBTyxDQUZGO0FBR0xDLFdBQUssRUFIQTtBQUlMQyxXQUFLLGtCQUpBO0FBS0xDLGFBQU8sQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsQ0FMRjtBQU1MQyxtQkFBYSxDQUNYO0FBQ0VDLFlBQUksQ0FETjtBQUVFQyxjQUFNO0FBRlIsT0FEVyxFQUtYO0FBQ0VELFlBQUksQ0FETjtBQUVFQyxjQUFNO0FBRlIsT0FMVyxFQVNYO0FBQ0VELFlBQUksQ0FETjtBQUVFQyxjQUFNO0FBRlIsT0FUVyxFQWFYO0FBQ0VELFlBQUksQ0FETjtBQUVFQyxjQUFNO0FBRlIsT0FiVyxDQU5SO0FBd0JMQyxhQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaERLLEssUUFrRFBDLE8sR0FBVTtBQUNSQyx3QkFBa0IsMEJBQVNDLENBQVQsRUFBWTtBQUM1QixZQUFJQyxPQUFPLElBQVg7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0gsRUFBRUksT0FBRixDQUFVQyxLQUEzQztBQUNBSixhQUFLSixLQUFMLEdBQWFHLEVBQUVNLE1BQUYsQ0FBU0QsS0FBdEI7QUFDQUosYUFBS00sT0FBTCxDQUFhO0FBQ1hWLGlCQUFPRyxFQUFFTSxNQUFGLENBQVNEO0FBREwsU0FBYjtBQUdEO0FBUk8sSzs7Ozs7NkJBVUQ7QUFDUCxVQUFJSixPQUFPLElBQVg7QUFDQSxxQkFBS08sYUFBTCxDQUFtQjtBQUNqQkMsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYVCxlQUFLWixNQUFMLEdBQWNxQixJQUFJQyxZQUFsQjtBQUNBVixlQUFLWCxLQUFMLEdBQWFvQixJQUFJRSxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUQ7Ozs7RUF4RStCLGVBQUtDLEk7O2tCQUFsQjVCLEkiLCJmaWxlIjoiY3JlYXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWtlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnvJbovpHoj5zosLEnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBoZWlnaHQ6IDAsXG4gICAgd2lkdGg6IDAsXG4gICAgc3JjOiAnJyxcbiAgICBhZGQ6ICcuLi9pbWFnZS9hZGQucG5nJyxcbiAgICBhcnJheTogWyfliJ3nuqcnLCAn5Lit57qnJywgJ+mrmOe6pycsICfnpZ7nuqcnXSxcbiAgICBvYmplY3RBcnJheTogW1xuICAgICAge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgbmFtZTogJ+WInee6pydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAn5Lit57qnJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6ICfpq5jnuqcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgbmFtZTogJ+elnue6pydcbiAgICAgIH1cbiAgICBdLFxuICAgIGluZGV4OiAwXG4gICAgLy8gdGltZTogMCxcbiAgICAvLyBhcnI6IFsn5LqU5YiG6ZKfJywgJ+WNgeS6lOWIhumSnycsICfljYrlsI/ml7YnLCAn5LiA5bCP5pe2JywgJ+S4pOWwj+aXtiddLFxuICAgIC8vIG9iamVjdEFycjogW1xuICAgIC8vICAge1xuICAgIC8vICAgICBpZDogMCxcbiAgICAvLyAgICAgbmFtZTogJ+S6lOWIhumSnydcbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGlkOiAxLFxuICAgIC8vICAgICBuYW1lOiAn5Y2B5LqU5YiG6ZKfJ1xuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgaWQ6IDIsXG4gICAgLy8gICAgIG5hbWU6ICfljYrlsI/ml7YnXG4gICAgLy8gICB9LFxuICAgIC8vICAge1xuICAgIC8vICAgICBpZDogMyxcbiAgICAvLyAgICAgbmFtZTogJ+S4gOWwj+aXtidcbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGlkOiA0LFxuICAgIC8vICAgICBuYW1lOiAn5Lik5bCP5pe2J1xuICAgIC8vICAgfVxuICAgIC8vIF1cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGJpbmRQaWNrZXJDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc29sZS5sb2coJ3BpY2tlcuWPkemAgemAieaLqeaUueWPmO+8jOaQuuW4puWAvOS4uicsIGUuZGVvdGFpbC52YWx1ZSlcbiAgICAgIHNlbGYuaW5kZXggPSBlLmRldGFpbC52YWx1ZVxuICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgaW5kZXg6IGUuZGV0YWlsLnZhbHVlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19