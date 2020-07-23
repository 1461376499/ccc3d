System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _temp, _crd, ccclass, property, BaseDropCube;

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
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "25c97wp9tFHeKFO0GfQ4p3w", "BaseDropCube", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("BaseDropCube", BaseDropCube = (_dec = ccclass('BaseDropCube'), _dec(_class = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(BaseDropCube, _Component);

        function BaseDropCube() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, BaseDropCube);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BaseDropCube)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.duartion = 0.5;
          _this.deltaTimeGone = 0;
          _this.dropEnbale = false;
          return _this;
        }

        _createClass(BaseDropCube, [{
          key: "onLoad",
          value: function onLoad() {}
        }, {
          key: "start",
          value: function start() {}
        }, {
          key: "update",
          value: function update(deltaTime) {
            if (!this.dropEnbale) {
              return;
            }

            this.deltaTimeGone += deltaTime;

            if (this.deltaTimeGone > this.duartion) {
              this.deltaTimeGone = 0; //this.node.setPosition(this.node.getPosition().subtract(Vec3.UP) )          
            }
          }
        }, {
          key: "setDropEnable",
          value: function setDropEnable(enable) {
            if (enable === this.dropEnbale) {
              return;
            }

            this.dropEnbale = enable;
          }
        }, {
          key: "getDropEnable",
          value: function getDropEnable() {
            return this.dropEnbale;
          }
        }]);

        return BaseDropCube;
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRjovY2NjL05ld1Byb2plY3RjY2MzZC9OZXdQcm9qZWN0Y2NjM2QvYXNzZXRzL3Jlc291cmNlcy9zY3JpcHQvQmFzZURyb3BDdWJlLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJCYXNlRHJvcEN1YmUiLCJkdWFydGlvbiIsImRlbHRhVGltZUdvbmUiLCJkcm9wRW5iYWxlIiwiZGVsdGFUaW1lIiwiZW5hYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTOzs7Ozs7QUFDYkMsTUFBQUEsTyxHQUFzQkYsVSxDQUF0QkUsTztBQUFTQyxNQUFBQSxRLEdBQWFILFUsQ0FBYkcsUTs7OEJBR0pDLFksV0FEWkYsT0FBTyxDQUFDLGNBQUQsQzs7Ozs7Ozs7Ozs7Ozs7O2dCQVFJRyxRLEdBQW1CLEc7Z0JBQ25CQyxhLEdBQXlCLEM7Z0JBRXpCQyxVLEdBQXVCLEs7Ozs7OzttQ0FDckIsQ0FDVDs7O2tDQUNRLENBRVI7OztpQ0FFT0MsUyxFQUFtQjtBQUN2QixnQkFBSSxDQUFDLEtBQUtELFVBQVYsRUFDQTtBQUNJO0FBQ0g7O0FBRUQsaUJBQUtELGFBQUwsSUFBc0JFLFNBQXRCOztBQUNBLGdCQUFHLEtBQUtGLGFBQUwsR0FBcUIsS0FBS0QsUUFBN0IsRUFDQTtBQUNJLG1CQUFLQyxhQUFMLEdBQXFCLENBQXJCLENBREosQ0FFSTtBQUVIO0FBQ0o7Ozt3Q0FFYUcsTSxFQUFnQjtBQUMxQixnQkFBSUEsTUFBTSxLQUFLLEtBQUtGLFVBQXBCLEVBQ0E7QUFDSTtBQUNIOztBQUNELGlCQUFLQSxVQUFMLEdBQWtCRSxNQUFsQjtBQUNIOzs7MENBR0Q7QUFDSSxtQkFBTyxLQUFLRixVQUFaO0FBQ0g7Ozs7UUEzQzZCTixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBWZWMzIH0gZnJvbSAnY2MnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoJ0Jhc2VEcm9wQ3ViZScpXHJcbmV4cG9ydCBjbGFzcyBCYXNlRHJvcEN1YmUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXHJcbiAgICAvLyBkdW1teSA9ICcnO1xyXG5cclxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cclxuICAgIC8vIEBwcm9wZXJ0eVxyXG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xyXG4gICAgcHJpdmF0ZSBkdWFydGlvbiA6bnVtYmVyID0gMC41IFxyXG4gICAgcHJpdmF0ZSBkZWx0YVRpbWVHb25lIDpudW1iZXIgID0gMFxyXG4gICAgXHJcbiAgICBwcml2YXRlIGRyb3BFbmJhbGUgOiBib29sZWFuID0gZmFsc2VcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICB9XHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZHJvcEVuYmFsZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjsgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZWx0YVRpbWVHb25lICs9IGRlbHRhVGltZVxyXG4gICAgICAgIGlmKHRoaXMuZGVsdGFUaW1lR29uZSA+IHRoaXMuZHVhcnRpb24pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmRlbHRhVGltZUdvbmUgPSAwXHJcbiAgICAgICAgICAgIC8vdGhpcy5ub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpLnN1YnRyYWN0KFZlYzMuVVApICkgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXREcm9wRW5hYmxlKGVuYWJsZTogYm9vbGVhbil7ICBcclxuICAgICAgICBpZiAoZW5hYmxlID09PSB0aGlzLmRyb3BFbmJhbGUpXHJcbiAgICAgICAgeyAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZHJvcEVuYmFsZSA9IGVuYWJsZVxyXG4gICAgfVxyXG5cclxuICAgIGdldERyb3BFbmFibGUoKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRyb3BFbmJhbGVcclxuICAgIH1cclxufVxyXG4iXX0=