System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Prefab, instantiate, Vec3, CCInteger, CCBoolean, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, FloorLayer;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
      CCInteger = _cc.CCInteger;
      CCBoolean = _cc.CCBoolean;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "c74aa7PFllMFZLq+gJYHX9U", "FloorLayer", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("FloorLayer", FloorLayer = (_dec = ccclass('FloorLayer'), _dec2 = property({
        type: CCInteger
      }), _dec3 = property({
        type: CCBoolean
      }), _dec4 = property({
        type: Vec3
      }), _dec5 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(FloorLayer, _Component);

        function FloorLayer() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, FloorLayer);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FloorLayer)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "floor_width", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "is_Square", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "floor_pos", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "floorCube", _descriptor4, _assertThisInitialized(_this));

          _this.ListItem = [];
          return _this;
        }

        _createClass(FloorLayer, [{
          key: "onLoad",
          value: function onLoad() {
            // Your initialization goes here.
            this.generateFloor();
          }
        }, {
          key: "generateFloor",
          value: function generateFloor() {
            this.ListItem = [];
            var floor0 = instantiate(this.floorCube);
            var scale = floor0.getScale();
            var origin;
            var half = Math.floor(this.floor_width / 2);
            var odd = this.floor_width % 2;

            if (odd == 0) {
              origin = new cc.Vec3(this.floor_pos.x - half * scale.x + scale.x * 0.5, 0, this.floor_pos.z - half * scale.z + scale.z * 0.5);
            } else {
              origin = new cc.Vec3(this.floor_pos.x - half * scale.x, 0, this.floor_pos.z - half * scale.z);
            }

            for (var i = 0; i < this.floor_width; ++i) {
              for (var j = 0; j < this.floor_width; ++j) {
                var floor = instantiate(this.floorCube);
                floor.parent = this.node;

                var _scale = floor.getScale();

                var pos = new cc.Vec3(origin.x + i * _scale.x, 0, origin.z + j * _scale.z);
                floor.setPosition(pos);
                this.ListItem.push(floor);
              }
            }

            console.log(1111, this.ListItem);
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }, {
          key: "getItemList",
          value: function getItemList() {
            return this.ListItem;
          }
        }]);

        return FloorLayer;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "floor_width", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "is_Square", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "floor_pos", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new cc.Vec3();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "floorCube", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRjovY2NjL05ld1Byb2plY3RjY2MzZC9OZXdQcm9qZWN0Y2NjM2QvYXNzZXRzL3Jlc291cmNlcy9zY3JpcHQvRmxvb3JMYXllci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiUHJlZmFiIiwiaW5zdGFudGlhdGUiLCJWZWMzIiwiQ0NJbnRlZ2VyIiwiQ0NCb29sZWFuIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiRmxvb3JMYXllciIsInR5cGUiLCJMaXN0SXRlbSIsImdlbmVyYXRlRmxvb3IiLCJmbG9vcjAiLCJmbG9vckN1YmUiLCJzY2FsZSIsImdldFNjYWxlIiwib3JpZ2luIiwiaGFsZiIsIk1hdGgiLCJmbG9vciIsImZsb29yX3dpZHRoIiwib2RkIiwiY2MiLCJmbG9vcl9wb3MiLCJ4IiwieiIsImkiLCJqIiwicGFyZW50Iiwibm9kZSIsInBvcyIsInNldFBvc2l0aW9uIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBdUJDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxXLE9BQUFBLFc7QUFBYUMsTUFBQUEsSSxPQUFBQSxJO0FBQWVDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxTLE9BQUFBLFM7Ozs7OztBQUNuRkMsTUFBQUEsTyxHQUFzQlAsVSxDQUF0Qk8sTztBQUFTQyxNQUFBQSxRLEdBQWFSLFUsQ0FBYlEsUTs7NEJBR0pDLFUsV0FEWkYsT0FBTyxDQUFDLFlBQUQsQyxVQVFIQyxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFFTDtBQUFQLE9BQUQsQyxVQUdSRyxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFFSjtBQUFQLE9BQUQsQyxVQUdSRSxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFFTjtBQUFQLE9BQUQsQyxVQUdSSSxRQUFRLENBQUM7QUFBQ0UsUUFBQUEsSUFBSSxFQUFFUjtBQUFQLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQUdEUyxRLEdBQVcsRTs7Ozs7O21DQUVUO0FBQ047QUFFQSxpQkFBS0MsYUFBTDtBQUNIOzs7MENBRWM7QUFDWCxpQkFBS0QsUUFBTCxHQUFnQixFQUFoQjtBQUVBLGdCQUFNRSxNQUFNLEdBQUdWLFdBQVcsQ0FBQyxLQUFLVyxTQUFOLENBQTFCO0FBQ0EsZ0JBQUlDLEtBQUssR0FBR0YsTUFBTSxDQUFDRyxRQUFQLEVBQVo7QUFDQSxnQkFBSUMsTUFBSjtBQUNBLGdCQUFJQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtDLFdBQUwsR0FBbUIsQ0FBOUIsQ0FBWDtBQUNBLGdCQUFJQyxHQUFHLEdBQUcsS0FBS0QsV0FBTCxHQUFtQixDQUE3Qjs7QUFDQSxnQkFBSUMsR0FBRyxJQUFJLENBQVgsRUFDQTtBQUNJTCxjQUFBQSxNQUFNLEdBQUcsSUFBSU0sRUFBRSxDQUFDbkIsSUFBUCxDQUFZLEtBQUtvQixTQUFMLENBQWVDLENBQWYsR0FBbUJQLElBQUksR0FBR0gsS0FBSyxDQUFDVSxDQUFoQyxHQUFvQ1YsS0FBSyxDQUFDVSxDQUFOLEdBQVUsR0FBMUQsRUFBK0QsQ0FBL0QsRUFBa0UsS0FBS0QsU0FBTCxDQUFlRSxDQUFmLEdBQW1CUixJQUFJLEdBQUdILEtBQUssQ0FBQ1csQ0FBaEMsR0FBb0NYLEtBQUssQ0FBQ1csQ0FBTixHQUFVLEdBQWhILENBQVQ7QUFDSCxhQUhELE1BR0s7QUFDRFQsY0FBQUEsTUFBTSxHQUFHLElBQUlNLEVBQUUsQ0FBQ25CLElBQVAsQ0FBWSxLQUFLb0IsU0FBTCxDQUFlQyxDQUFmLEdBQW1CUCxJQUFJLEdBQUdILEtBQUssQ0FBQ1UsQ0FBNUMsRUFBZ0QsQ0FBaEQsRUFBbUQsS0FBS0QsU0FBTCxDQUFlRSxDQUFmLEdBQW1CUixJQUFJLEdBQUdILEtBQUssQ0FBQ1csQ0FBbkYsQ0FBVDtBQUNIOztBQUVELGlCQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS04sV0FBekIsRUFBc0MsRUFBRU0sQ0FBeEMsRUFDQTtBQUNJLG1CQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS1AsV0FBekIsRUFBc0MsRUFBRU8sQ0FBeEMsRUFDQTtBQUNJLG9CQUFNUixLQUFLLEdBQUdqQixXQUFXLENBQUMsS0FBS1csU0FBTixDQUF6QjtBQUNBTSxnQkFBQUEsS0FBSyxDQUFDUyxNQUFOLEdBQWUsS0FBS0MsSUFBcEI7O0FBQ0Esb0JBQU1mLE1BQUssR0FBR0ssS0FBSyxDQUFDSixRQUFOLEVBQWQ7O0FBRUEsb0JBQU1lLEdBQUcsR0FBRyxJQUFJUixFQUFFLENBQUNuQixJQUFQLENBQVlhLE1BQU0sQ0FBQ1EsQ0FBUCxHQUFXRSxDQUFDLEdBQUdaLE1BQUssQ0FBQ1UsQ0FBakMsRUFBb0MsQ0FBcEMsRUFBdUNSLE1BQU0sQ0FBQ1MsQ0FBUCxHQUFXRSxDQUFDLEdBQUdiLE1BQUssQ0FBQ1csQ0FBNUQsQ0FBWjtBQUNBTixnQkFBQUEsS0FBSyxDQUFDWSxXQUFOLENBQWtCRCxHQUFsQjtBQUVBLHFCQUFLcEIsUUFBTCxDQUFjc0IsSUFBZCxDQUFtQmIsS0FBbkI7QUFDSDtBQUNKOztBQUVGYyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaLEVBQWlCLEtBQUt4QixRQUF0QjtBQUNGLFcsQ0FDRDtBQUNBO0FBQ0E7Ozs7d0NBQ2E7QUFDVCxtQkFBTyxLQUFLQSxRQUFaO0FBQ0g7Ozs7UUFoRTJCVixTOzs7OztpQkFRUCxFOzs7Ozs7O2lCQUdGLEs7Ozs7Ozs7aUJBR08sSUFBSXNCLEVBQUUsQ0FBQ25CLElBQVAsRTs7Ozs7OztpQkFHRSxJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBWZWMyLCBQcmVmYWIsIGluc3RhbnRpYXRlLCBWZWMzLCBDQ0Zsb2F0LCBDQ0ludGVnZXIsIENDQm9vbGVhbiB9IGZyb20gJ2NjJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKCdGbG9vckxheWVyJylcclxuZXhwb3J0IGNsYXNzIEZsb29yTGF5ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXHJcbiAgICAvLyBkdW1teSA9ICcnO1xyXG5cclxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cclxuICAgIC8vIEBwcm9wZXJ0eVxyXG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBDQ0ludGVnZXJ9KVxyXG4gICAgcHVibGljIGZsb29yX3dpZHRoID0gMTA7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBDQ0Jvb2xlYW59KVxyXG4gICAgcHVibGljIGlzX1NxdWFyZSA9IGZhbHNlO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7dHlwZTogVmVjM30pXHJcbiAgICBwdWJsaWMgZmxvb3JfcG9zIDogVmVjMyA9IG5ldyBjYy5WZWMzKCk7XHJcblxyXG4gICAgQHByb3BlcnR5KHt0eXBlOiBQcmVmYWJ9KVxyXG4gICAgcHVibGljIGZsb29yQ3ViZSA6IFByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBMaXN0SXRlbSA9IFtdXHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvLyBZb3VyIGluaXRpYWxpemF0aW9uIGdvZXMgaGVyZS5cclxuXHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUZsb29yKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVGbG9vcigpe1xyXG4gICAgICAgIHRoaXMuTGlzdEl0ZW0gPSBbXVxyXG5cclxuICAgICAgICBjb25zdCBmbG9vcjAgPSBpbnN0YW50aWF0ZSh0aGlzLmZsb29yQ3ViZSlcclxuICAgICAgICBsZXQgc2NhbGUgPSBmbG9vcjAuZ2V0U2NhbGUoKVxyXG4gICAgICAgIGxldCBvcmlnaW47XHJcbiAgICAgICAgbGV0IGhhbGYgPSBNYXRoLmZsb29yKHRoaXMuZmxvb3Jfd2lkdGggLyAyKVxyXG4gICAgICAgIGxldCBvZGQgPSB0aGlzLmZsb29yX3dpZHRoICUgMlxyXG4gICAgICAgIGlmIChvZGQgPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG9yaWdpbiA9IG5ldyBjYy5WZWMzKHRoaXMuZmxvb3JfcG9zLnggLSBoYWxmICogc2NhbGUueCArIHNjYWxlLnggKiAwLjUsIDAsIHRoaXMuZmxvb3JfcG9zLnogLSBoYWxmICogc2NhbGUueiArIHNjYWxlLnogKiAwLjUpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG9yaWdpbiA9IG5ldyBjYy5WZWMzKHRoaXMuZmxvb3JfcG9zLnggLSBoYWxmICogc2NhbGUueCAsIDAsIHRoaXMuZmxvb3JfcG9zLnogLSBoYWxmICogc2NhbGUueilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5mbG9vcl93aWR0aDsgKytpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmZsb29yX3dpZHRoOyArK2opXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZsb29yID0gaW5zdGFudGlhdGUodGhpcy5mbG9vckN1YmUpXHJcbiAgICAgICAgICAgICAgICBmbG9vci5wYXJlbnQgPSB0aGlzLm5vZGVcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gZmxvb3IuZ2V0U2NhbGUoKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvcyA9IG5ldyBjYy5WZWMzKG9yaWdpbi54ICsgaSAqIHNjYWxlLngsIDAsIG9yaWdpbi56ICsgaiAqIHNjYWxlLnopXHJcbiAgICAgICAgICAgICAgICBmbG9vci5zZXRQb3NpdGlvbihwb3MpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5MaXN0SXRlbS5wdXNoKGZsb29yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgICAgXHJcblxyXG4gICAgICAgY29uc29sZS5sb2coMTExMSx0aGlzLkxpc3RJdGVtKVxyXG4gICAgfVxyXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgIC8vIH1cclxuICAgIGdldEl0ZW1MaXN0KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuTGlzdEl0ZW1cclxuICAgIH1cclxufVxyXG4iXX0=