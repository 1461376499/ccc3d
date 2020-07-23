System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Prefab, loader, instantiate, _dec, _class, _crd, ccclass, property, GameStart;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      loader = _cc.loader;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "7edb3zeiK5GZZR/toMdHO8o", "GameStart", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("GameStart", GameStart = (_dec = ccclass('GameStart'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inherits(GameStart, _Component);

        function GameStart() {
          _classCallCheck(this, GameStart);

          return _possibleConstructorReturn(this, _getPrototypeOf(GameStart).apply(this, arguments));
        }

        _createClass(GameStart, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {
            // Your initialization goes here.
            this.loadMainView();
          }
        }, {
          key: "loadMainView",
          value: function loadMainView() {
            var _this = this;

            loader.loadRes("prefab/layer/MainView", Prefab, function (err, prefab) {
              var mainview = instantiate(prefab);
              mainview.parent = _this.node;
            });
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return GameStart;
      }(Component)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRjovY2NjL05ld1Byb2plY3RjY2MzZC9OZXdQcm9qZWN0Y2NjM2QvYXNzZXRzL3Jlc291cmNlcy9zY3JpcHQvR2FtZVN0YXJ0LnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJQcmVmYWIiLCJsb2FkZXIiLCJpbnN0YW50aWF0ZSIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIkdhbWVTdGFydCIsImxvYWRNYWluVmlldyIsImxvYWRSZXMiLCJlcnIiLCJwcmVmYWIiLCJtYWludmlldyIsInBhcmVudCIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsTSxPQUFBQSxNO0FBQW1CQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXOzs7Ozs7QUFDekRDLE1BQUFBLE8sR0FBc0JMLFUsQ0FBdEJLLE87QUFBU0MsTUFBQUEsUSxHQUFhTixVLENBQWJNLFE7OzJCQUdKQyxTLFdBRFpGLE9BQU8sQ0FBQyxXQUFELEM7Ozs7Ozs7Ozs7OztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO2tDQUVTO0FBQ0w7QUFDQSxpQkFBS0csWUFBTDtBQUNIOzs7eUNBR0Q7QUFBQTs7QUFDSUwsWUFBQUEsTUFBTSxDQUFDTSxPQUFQLENBQWUsdUJBQWYsRUFBd0NQLE1BQXhDLEVBQWdELFVBQUNRLEdBQUQsRUFBTUMsTUFBTixFQUFlO0FBQzNELGtCQUFNQyxRQUFRLEdBQUdSLFdBQVcsQ0FBQ08sTUFBRCxDQUE1QjtBQUNBQyxjQUFBQSxRQUFRLENBQUNDLE1BQVQsR0FBa0IsS0FBSSxDQUFDQyxJQUF2QjtBQUNILGFBSEQ7QUFJSCxXLENBQ0Q7QUFDQTtBQUNBOzs7OztRQXRCMkJiLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgQ0NJbnRlZ2VyLCBsb2FkZXIsIGluc3RhbnRpYXRlIH0gZnJvbSAnY2MnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0dhbWVTdGFydCcpXHJcbmV4cG9ydCBjbGFzcyBHYW1lU3RhcnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXHJcbiAgICAvLyBkdW1teSA9ICcnO1xyXG5cclxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cclxuICAgIC8vIEBwcm9wZXJ0eVxyXG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuICAgICAgICB0aGlzLmxvYWRNYWluVmlldygpXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZE1haW5WaWV3KClcclxuICAgIHtcclxuICAgICAgICBsb2FkZXIubG9hZFJlcyhcInByZWZhYi9sYXllci9NYWluVmlld1wiLCBQcmVmYWIsIChlcnIsIHByZWZhYik9PntcclxuICAgICAgICAgICAgY29uc3QgbWFpbnZpZXcgPSBpbnN0YW50aWF0ZShwcmVmYWIpXHJcbiAgICAgICAgICAgIG1haW52aWV3LnBhcmVudCA9IHRoaXMubm9kZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==