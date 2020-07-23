System.register(["cc", "code-quality:cr", "./BaseDropCube.js", "./FloorLayer.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, _decorator, Component, loader, Prefab, instantiate, Vec3, BaseDropCube, FloorLayer, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, MainView;

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

  function _reportPossibleCrUseOfBaseDropCube(extras) {
    _reporterNs.report("BaseDropCube", "./BaseDropCube", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFloorLayer(extras) {
    _reporterNs.report("FloorLayer", "./FloorLayer", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      loader = _cc.loader;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_BaseDropCubeJs) {
      BaseDropCube = _BaseDropCubeJs.BaseDropCube;
    }, function (_FloorLayerJs) {
      FloorLayer = _FloorLayerJs.FloorLayer;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "fbe7ctQzVZD870jtOjZcCg7", "MainView", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("MainView", MainView = (_dec = ccclass('MainView'), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inherits(MainView, _Component);

        function MainView() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, MainView);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MainView)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "dropItem", _descriptor, _assertThisInitialized(_this));

          _this._ceilling = null;
          _this._ceillList = [];
          _this._floor = null;
          _this._floorList = [];
          _this.Duration = 3;
          _this.TimeGone = 0;
          return _this;
        }

        _createClass(MainView, [{
          key: "start",
          value: function start() {
            // Your initialization goes here.
            this.loadFloor();
            this.loadCeiling();
          }
        }, {
          key: "loadFloor",
          value: function loadFloor() {
            var _this2 = this;

            loader.loadRes("prefab/layer/Floor", Prefab, function (err, prefab) {
              var floor = instantiate(prefab);
              floor.parent = _this2.node;
              _this2._floor = floor;
              _this2._floorList = floor.getComponent(_crd && FloorLayer === void 0 ? (_reportPossibleCrUseOfFloorLayer({
                error: Error()
              }), FloorLayer) : FloorLayer).getItemList();
            });
          }
        }, {
          key: "loadCeiling",
          value: function loadCeiling() {
            var self = this;
            loader.loadRes("prefab/layer/Ceilling", Prefab, function (err, prefab) {
              var ceilling = instantiate(prefab);
              ceilling.parent = self.node;
              ceilling.setPosition(new Vec3(0, 15, 0));
              self._ceilling = ceilling;
              self._ceillList = ceilling.getComponent(_crd && FloorLayer === void 0 ? (_reportPossibleCrUseOfFloorLayer({
                error: Error()
              }), FloorLayer) : FloorLayer).getItemList();
            });
          }
        }, {
          key: "update",
          value: function update(deltaTime) {
            // Your update function goes here.
            this.TimeGone += deltaTime;

            if (this.TimeGone > this.Duration) {
              this.TimeGone = 0;
              this.generateDrop();
            }
          }
        }, {
          key: "generateDrop",
          value: function generateDrop() {
            var randType = Math.floor(Math.random() * 100 % this.dropItem.length);
            var drop = instantiate(this.dropItem[randType]);
            drop.parent = this._ceilling;
            var dropScript = drop.getComponent(_crd && BaseDropCube === void 0 ? (_reportPossibleCrUseOfBaseDropCube({
              error: Error()
            }), BaseDropCube) : BaseDropCube);
            dropScript.setDropEnable(true);
            var randCeil = Math.floor(Math.random() * 1000 % this._ceillList.length);
            console.log(randType);
            var ceil = this._ceillList[randCeil];
            drop.setPosition(ceil.getPosition().subtract(Vec3.UP));
          }
        }]);

        return MainView;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "dropItem", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vRjovY2NjL05ld1Byb2plY3RjY2MzZC9OZXdQcm9qZWN0Y2NjM2QvYXNzZXRzL3Jlc291cmNlcy9zY3JpcHQvTWFpblZpZXcudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsIkNvbXBvbmVudCIsImxvYWRlciIsIlByZWZhYiIsImluc3RhbnRpYXRlIiwiVmVjMyIsIkJhc2VEcm9wQ3ViZSIsIkZsb29yTGF5ZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJNYWluVmlldyIsInR5cGUiLCJfY2VpbGxpbmciLCJfY2VpbGxMaXN0IiwiX2Zsb29yIiwiX2Zsb29yTGlzdCIsIkR1cmF0aW9uIiwiVGltZUdvbmUiLCJsb2FkRmxvb3IiLCJsb2FkQ2VpbGluZyIsImxvYWRSZXMiLCJlcnIiLCJwcmVmYWIiLCJmbG9vciIsInBhcmVudCIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJnZXRJdGVtTGlzdCIsInNlbGYiLCJjZWlsbGluZyIsInNldFBvc2l0aW9uIiwiZGVsdGFUaW1lIiwiZ2VuZXJhdGVEcm9wIiwicmFuZFR5cGUiLCJNYXRoIiwicmFuZG9tIiwiZHJvcEl0ZW0iLCJsZW5ndGgiLCJkcm9wIiwiZHJvcFNjcmlwdCIsInNldERyb3BFbmFibGUiLCJyYW5kQ2VpbCIsImNvbnNvbGUiLCJsb2ciLCJjZWlsIiwiZ2V0UG9zaXRpb24iLCJzdWJ0cmFjdCIsIlVQIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxNLE9BQUFBLE07QUFBUUMsTUFBQUEsVyxPQUFBQSxXO0FBQWFDLE1BQUFBLEksT0FBQUEsSTs7OztBQUc1REMsTUFBQUEsWSxtQkFBQUEsWTs7QUFDRUMsTUFBQUEsVSxpQkFBQUEsVTs7Ozs7O0FBSERDLE1BQUFBLE8sR0FBc0JSLFUsQ0FBdEJRLE87QUFBU0MsTUFBQUEsUSxHQUFhVCxVLENBQWJTLFE7OzBCQU1KQyxRLFdBRFpGLE9BQU8sQ0FBQyxVQUFELEMsVUFRSEMsUUFBUSxDQUFDO0FBQUNFLFFBQUFBLElBQUksRUFBQ1I7QUFBTixPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFJRFMsUyxHQUFZLEk7Z0JBQ1pDLFUsR0FBcUIsRTtnQkFFckJDLE0sR0FBUyxJO2dCQUNUQyxVLEdBQXFCLEU7Z0JBRXJCQyxRLEdBQVcsQztnQkFDWEMsUSxHQUFZLEM7Ozs7OztrQ0FFWDtBQUNMO0FBRUEsaUJBQUtDLFNBQUw7QUFDQSxpQkFBS0MsV0FBTDtBQUNIOzs7c0NBRVU7QUFBQTs7QUFDUGpCLFlBQUFBLE1BQU0sQ0FBQ2tCLE9BQVAsQ0FBZSxvQkFBZixFQUFxQ2pCLE1BQXJDLEVBQTZDLFVBQUNrQixHQUFELEVBQU1DLE1BQU4sRUFBZTtBQUN4RCxrQkFBTUMsS0FBSyxHQUFHbkIsV0FBVyxDQUFDa0IsTUFBRCxDQUF6QjtBQUNBQyxjQUFBQSxLQUFLLENBQUNDLE1BQU4sR0FBZSxNQUFJLENBQUNDLElBQXBCO0FBQ0EsY0FBQSxNQUFJLENBQUNYLE1BQUwsR0FBY1MsS0FBZDtBQUVBLGNBQUEsTUFBSSxDQUFDUixVQUFMLEdBQWtCUSxLQUFLLENBQUNHLFlBQU47QUFBQTtBQUFBLDRDQUFnQ0MsV0FBaEMsRUFBbEI7QUFDSCxhQU5EO0FBT0g7Ozt3Q0FFWTtBQUNULGdCQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUNBMUIsWUFBQUEsTUFBTSxDQUFDa0IsT0FBUCxDQUFlLHVCQUFmLEVBQXdDakIsTUFBeEMsRUFBZ0QsVUFBQ2tCLEdBQUQsRUFBTUMsTUFBTixFQUFlO0FBQzNELGtCQUFNTyxRQUFRLEdBQUd6QixXQUFXLENBQUNrQixNQUFELENBQTVCO0FBQ0FPLGNBQUFBLFFBQVEsQ0FBQ0wsTUFBVCxHQUFrQkksSUFBSSxDQUFDSCxJQUF2QjtBQUNBSSxjQUFBQSxRQUFRLENBQUNDLFdBQVQsQ0FBcUIsSUFBSXpCLElBQUosQ0FBUyxDQUFULEVBQVcsRUFBWCxFQUFjLENBQWQsQ0FBckI7QUFHQXVCLGNBQUFBLElBQUksQ0FBQ2hCLFNBQUwsR0FBaUJpQixRQUFqQjtBQUVBRCxjQUFBQSxJQUFJLENBQUNmLFVBQUwsR0FBa0JnQixRQUFRLENBQUNILFlBQVQ7QUFBQTtBQUFBLDRDQUFrQ0MsV0FBbEMsRUFBbEI7QUFFSCxhQVZEO0FBV0g7OztpQ0FHT0ksUyxFQUFtQjtBQUN2QjtBQUdBLGlCQUFLZCxRQUFMLElBQWlCYyxTQUFqQjs7QUFDQSxnQkFBSSxLQUFLZCxRQUFMLEdBQWdCLEtBQUtELFFBQXpCLEVBQ0E7QUFDSSxtQkFBS0MsUUFBTCxHQUFnQixDQUFoQjtBQUNBLG1CQUFLZSxZQUFMO0FBQ0g7QUFDSjs7O3lDQUdEO0FBQ0ksZ0JBQU1DLFFBQVEsR0FBR0MsSUFBSSxDQUFDWCxLQUFMLENBQVdXLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFoQixHQUFzQixLQUFLQyxRQUFMLENBQWNDLE1BQS9DLENBQWpCO0FBQ0EsZ0JBQUlDLElBQUksR0FBR2xDLFdBQVcsQ0FBQyxLQUFLZ0MsUUFBTCxDQUFjSCxRQUFkLENBQUQsQ0FBdEI7QUFDQUssWUFBQUEsSUFBSSxDQUFDZCxNQUFMLEdBQWMsS0FBS1osU0FBbkI7QUFDQSxnQkFBSTJCLFVBQVUsR0FBR0QsSUFBSSxDQUFDWixZQUFMO0FBQUE7QUFBQSw2Q0FBakI7QUFDQWEsWUFBQUEsVUFBVSxDQUFDQyxhQUFYLENBQXlCLElBQXpCO0FBRUEsZ0JBQU1DLFFBQVEsR0FBR1AsSUFBSSxDQUFDWCxLQUFMLENBQVdXLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixJQUFoQixHQUF1QixLQUFLdEIsVUFBTCxDQUFnQndCLE1BQWxELENBQWpCO0FBQ0FLLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVixRQUFaO0FBQ0EsZ0JBQUlXLElBQVcsR0FBRyxLQUFLL0IsVUFBTCxDQUFnQjRCLFFBQWhCLENBQWxCO0FBQ0FILFlBQUFBLElBQUksQ0FBQ1IsV0FBTCxDQUFpQmMsSUFBSSxDQUFDQyxXQUFMLEdBQW1CQyxRQUFuQixDQUE0QnpDLElBQUksQ0FBQzBDLEVBQWpDLENBQWpCO0FBQ0g7Ozs7UUE3RXlCOUMsUzs7Ozs7aUJBUUUsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgbG9hZGVyLCBQcmVmYWIsIGluc3RhbnRpYXRlLCBWZWMzLCBTY3JpcHQsIENDT2JqZWN0IH0gZnJvbSAnY2MnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuaW1wb3J0e0Jhc2VEcm9wQ3ViZX0gZnJvbSAnLi9CYXNlRHJvcEN1YmUnXHJcbmltcG9ydCB7IEZsb29yTGF5ZXIgfSBmcm9tICcuL0Zsb29yTGF5ZXInO1xyXG5cclxuQGNjY2xhc3MoJ01haW5WaWV3JylcclxuZXhwb3J0IGNsYXNzIE1haW5WaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xyXG4gICAgLy8gZHVtbXkgPSAnJztcclxuXHJcbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXHJcbiAgICAvLyBAcHJvcGVydHlcclxuICAgIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcclxuICAgIEBwcm9wZXJ0eSh7dHlwZTpQcmVmYWJ9KVxyXG4gICAgcHVibGljIGRyb3BJdGVtIDpQcmVmYWJbXSA9IFtdO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIF9jZWlsbGluZyA9IG51bGxcclxuICAgIHByaXZhdGUgX2NlaWxsTGlzdCA6Tm9kZVtdID0gW11cclxuXHJcbiAgICBwcml2YXRlIF9mbG9vciA9IG51bGxcclxuICAgIHByaXZhdGUgX2Zsb29yTGlzdCA6Tm9kZVtdID0gW11cclxuXHJcbiAgICBwcml2YXRlIER1cmF0aW9uID0gM1xyXG4gICAgcHJpdmF0ZSBUaW1lR29uZSAgPSAwXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG5cclxuICAgICAgICB0aGlzLmxvYWRGbG9vcigpXHJcbiAgICAgICAgdGhpcy5sb2FkQ2VpbGluZygpXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEZsb29yKCl7XHJcbiAgICAgICAgbG9hZGVyLmxvYWRSZXMoXCJwcmVmYWIvbGF5ZXIvRmxvb3JcIiwgUHJlZmFiLCAoZXJyLCBwcmVmYWIpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IGZsb29yID0gaW5zdGFudGlhdGUocHJlZmFiKVxyXG4gICAgICAgICAgICBmbG9vci5wYXJlbnQgPSB0aGlzLm5vZGVcclxuICAgICAgICAgICAgdGhpcy5fZmxvb3IgPSBmbG9vclxyXG5cclxuICAgICAgICAgICAgdGhpcy5fZmxvb3JMaXN0ID0gZmxvb3IuZ2V0Q29tcG9uZW50KEZsb29yTGF5ZXIpLiBnZXRJdGVtTGlzdCgpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBsb2FkQ2VpbGluZygpe1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgICAgIGxvYWRlci5sb2FkUmVzKFwicHJlZmFiL2xheWVyL0NlaWxsaW5nXCIsIFByZWZhYiwgKGVyciwgcHJlZmFiKT0+e1xyXG4gICAgICAgICAgICBjb25zdCBjZWlsbGluZyA9IGluc3RhbnRpYXRlKHByZWZhYilcclxuICAgICAgICAgICAgY2VpbGxpbmcucGFyZW50ID0gc2VsZi5ub2RlXHJcbiAgICAgICAgICAgIGNlaWxsaW5nLnNldFBvc2l0aW9uKG5ldyBWZWMzKDAsMTUsMCkpXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgc2VsZi5fY2VpbGxpbmcgPSBjZWlsbGluZ1xyXG5cclxuICAgICAgICAgICAgc2VsZi5fY2VpbGxMaXN0ID0gY2VpbGxpbmcuZ2V0Q29tcG9uZW50KEZsb29yTGF5ZXIpLmdldEl0ZW1MaXN0KClcclxuIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcblxyXG5cclxuICAgICAgICB0aGlzLlRpbWVHb25lICs9IGRlbHRhVGltZVxyXG4gICAgICAgIGlmICh0aGlzLlRpbWVHb25lID4gdGhpcy5EdXJhdGlvbilcclxuICAgICAgICB7ICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLlRpbWVHb25lID0gMFxyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlRHJvcCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlRHJvcCgpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgcmFuZFR5cGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAgJSB0aGlzLmRyb3BJdGVtLmxlbmd0aClcclxuICAgICAgICBsZXQgZHJvcCA9IGluc3RhbnRpYXRlKHRoaXMuZHJvcEl0ZW1bcmFuZFR5cGVdKVxyXG4gICAgICAgIGRyb3AucGFyZW50ID0gdGhpcy5fY2VpbGxpbmdcclxuICAgICAgICBsZXQgZHJvcFNjcmlwdCA9IGRyb3AuZ2V0Q29tcG9uZW50KEJhc2VEcm9wQ3ViZSlcclxuICAgICAgICBkcm9wU2NyaXB0LnNldERyb3BFbmFibGUodHJ1ZSlcclxuXHJcbiAgICAgICAgY29uc3QgcmFuZENlaWwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwICUgdGhpcy5fY2VpbGxMaXN0Lmxlbmd0aClcclxuICAgICAgICBjb25zb2xlLmxvZyhyYW5kVHlwZSlcclxuICAgICAgICBsZXQgY2VpbCA6IE5vZGUgPSB0aGlzLl9jZWlsbExpc3RbcmFuZENlaWxdXHJcbiAgICAgICAgZHJvcC5zZXRQb3NpdGlvbihjZWlsLmdldFBvc2l0aW9uKCkuc3VidHJhY3QoVmVjMy5VUCkpXHJcbiAgICB9XHJcbn1cclxuIl19