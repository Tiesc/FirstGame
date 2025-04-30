System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, instantiate, Prefab, Layout, OffsetCoord, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, HexMap;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfHex(extras) {
    _reporterNs.report("Hex", "./HexCell2D", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayout(extras) {
    _reporterNs.report("Layout", "./HexCell2D", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOffsetCoord(extras) {
    _reporterNs.report("OffsetCoord", "./HexCell2D", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      Layout = _unresolved_2.Layout;
      OffsetCoord = _unresolved_2.OffsetCoord;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "17283mn1zBKqqAeurj1ElJm", "HexMap", undefined); // HexMap.ts


      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'instantiate', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HexMap", HexMap = (_dec = ccclass('HexMap'), _dec2 = property(Prefab), _dec(_class = (_class2 = class HexMap extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "hexPrefab", _descriptor, this);

          _initializerDefineProperty(this, "hexSize", _descriptor2, this);

          // 六边形的大小
          _initializerDefineProperty(this, "layoutType", _descriptor3, this);

          // 布局类型
          _initializerDefineProperty(this, "cols", _descriptor4, this);

          // 列数
          _initializerDefineProperty(this, "rows", _descriptor5, this);

          // 行数
          this.layout = null;
        }

        start() {
          this.initializeLayout();
          this.generateHexagons();
        }

        initializeLayout() {
          var size = new Vec3(this.hexSize, this.hexSize, 0);
          var origin = new Vec3(0, 0, 0); // 确保原点位于左下角

          var orientation = this.layoutType === 'pointy' ? (_crd && Layout === void 0 ? (_reportPossibleCrUseOfLayout({
            error: Error()
          }), Layout) : Layout).pointy : (_crd && Layout === void 0 ? (_reportPossibleCrUseOfLayout({
            error: Error()
          }), Layout) : Layout).flat;
          this.layout = new (_crd && Layout === void 0 ? (_reportPossibleCrUseOfLayout({
            error: Error()
          }), Layout) : Layout)(orientation, size, origin);
        }

        generateHexagons() {
          if (!this.layout) return;

          for (var row = 0; row < this.rows; row++) {
            for (var col = 0; col < this.cols; col++) {
              var hex = this.offsetToHex(col, row);
              var position = this.layout.hexToPixel(hex);
              this.createHexagon(position);
            }
          }
        }

        offsetToHex(col, row) {
          return (_crd && OffsetCoord === void 0 ? (_reportPossibleCrUseOfOffsetCoord({
            error: Error()
          }), OffsetCoord) : OffsetCoord).qoffsetToCube((_crd && OffsetCoord === void 0 ? (_reportPossibleCrUseOfOffsetCoord({
            error: Error()
          }), OffsetCoord) : OffsetCoord).EVEN, new (_crd && OffsetCoord === void 0 ? (_reportPossibleCrUseOfOffsetCoord({
            error: Error()
          }), OffsetCoord) : OffsetCoord)(col, row));
        }

        createHexagon(position) {
          if (!this.hexPrefab) return;
          var hexNode = instantiate(this.hexPrefab);
          hexNode.setPosition(position);
          this.node.addChild(hexNode);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "hexPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "hexSize", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 120;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "layoutType", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 'pointy';
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cols", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rows", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=892be6bedc44ab4767d1e5f9a2fc9a157552a7e3.js.map