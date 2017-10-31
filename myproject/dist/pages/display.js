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
      recPhoto: '',
      recName: '',
      recView: '',
      recDescribe: '',
      hierarchy: '',
      time: '',
      materials: '',
      conversion: '',
      search: '../image/check.png'
    }, _this.methods = {
      son: function son() {
        _wepy2.default.navigateTo({
          url: '../pages/search'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Show, [{
    key: 'onLoad',
    value: function onLoad(data) {
      var self = this;
      console.log(data);
      self.recName = data.recName;
      self.recPhoto = data.recPhoto;
      self.recView = data.recView;
      self.recDescribe = data.recDescribe;
      self.hierarchy = data.hierarchy;
      self.time = data.time;
      self.conversion = data.conversion;
      self.materials = data.materials;
      console.log(self.recDescribe, 'res');
    }
  }]);

  return Show;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Show , 'pages/display'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BsYXkuanMiXSwibmFtZXMiOlsiU2hvdyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic3JjIiwicmVjUGhvdG8iLCJyZWNOYW1lIiwicmVjVmlldyIsInJlY0Rlc2NyaWJlIiwiaGllcmFyY2h5IiwidGltZSIsIm1hdGVyaWFscyIsImNvbnZlcnNpb24iLCJzZWFyY2giLCJtZXRob2RzIiwic29uIiwibmF2aWdhdGVUbyIsInVybCIsInNlbGYiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMQyxnQkFBVSxFQUZMO0FBR0xDLGVBQVMsRUFISjtBQUlMQyxlQUFTLEVBSko7QUFLTEMsbUJBQWEsRUFMUjtBQU1MQyxpQkFBVyxFQU5OO0FBT0xDLFlBQU0sRUFQRDtBQVFMQyxpQkFBVyxFQVJOO0FBU0xDLGtCQUFZLEVBVFA7QUFVTEMsY0FBUTtBQVZILEssUUFZUEMsTyxHQUFVO0FBQ1JDLFNBRFEsaUJBQ0Y7QUFDSix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQUxPLEs7Ozs7OzJCQU9IZCxJLEVBQU07QUFDWCxVQUFJZSxPQUFPLElBQVg7QUFDQUMsY0FBUUMsR0FBUixDQUFZakIsSUFBWjtBQUNBZSxXQUFLWixPQUFMLEdBQWVILEtBQUtHLE9BQXBCO0FBQ0FZLFdBQUtiLFFBQUwsR0FBZ0JGLEtBQUtFLFFBQXJCO0FBQ0FhLFdBQUtYLE9BQUwsR0FBZUosS0FBS0ksT0FBcEI7QUFDQVcsV0FBS1YsV0FBTCxHQUFtQkwsS0FBS0ssV0FBeEI7QUFDQVUsV0FBS1QsU0FBTCxHQUFpQk4sS0FBS00sU0FBdEI7QUFDQVMsV0FBS1IsSUFBTCxHQUFZUCxLQUFLTyxJQUFqQjtBQUNBUSxXQUFLTixVQUFMLEdBQWtCVCxLQUFLUyxVQUF2QjtBQUNBTSxXQUFLUCxTQUFMLEdBQWlCUixLQUFLUSxTQUF0QjtBQUNBUSxjQUFRQyxHQUFSLENBQVlGLEtBQUtWLFdBQWpCLEVBQThCLEtBQTlCO0FBQ0Q7Ozs7RUFuQytCLGVBQUthLEk7O2tCQUFsQnJCLEkiLCJmaWxlIjoiZGlzcGxheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3cgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iPnOiwseivpuaDhSdcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJycsXG4gICAgcmVjUGhvdG86ICcnLFxuICAgIHJlY05hbWU6ICcnLFxuICAgIHJlY1ZpZXc6ICcnLFxuICAgIHJlY0Rlc2NyaWJlOiAnJyxcbiAgICBoaWVyYXJjaHk6ICcnLFxuICAgIHRpbWU6ICcnLFxuICAgIG1hdGVyaWFsczogJycsXG4gICAgY29udmVyc2lvbjogJycsXG4gICAgc2VhcmNoOiAnLi4vaW1hZ2UvY2hlY2sucG5nJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgc29uKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvc2VhcmNoJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKGRhdGEpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIHNlbGYucmVjTmFtZSA9IGRhdGEucmVjTmFtZVxuICAgIHNlbGYucmVjUGhvdG8gPSBkYXRhLnJlY1Bob3RvXG4gICAgc2VsZi5yZWNWaWV3ID0gZGF0YS5yZWNWaWV3XG4gICAgc2VsZi5yZWNEZXNjcmliZSA9IGRhdGEucmVjRGVzY3JpYmVcbiAgICBzZWxmLmhpZXJhcmNoeSA9IGRhdGEuaGllcmFyY2h5XG4gICAgc2VsZi50aW1lID0gZGF0YS50aW1lXG4gICAgc2VsZi5jb252ZXJzaW9uID0gZGF0YS5jb252ZXJzaW9uXG4gICAgc2VsZi5tYXRlcmlhbHMgPSBkYXRhLm1hdGVyaWFsc1xuICAgIGNvbnNvbGUubG9nKHNlbGYucmVjRGVzY3JpYmUsICdyZXMnKVxuICB9XG59XG4iXX0=