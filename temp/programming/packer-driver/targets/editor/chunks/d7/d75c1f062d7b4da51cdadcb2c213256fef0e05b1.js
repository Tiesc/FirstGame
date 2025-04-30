System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, SpriteFrame, assetManager, view, Vec3, MapModel, MapView, MapData, HexagonLayout, HexagonSpriteFrame, Tile, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, MapController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMapModel(extras) {
    _reporterNs.report("MapModel", "./MapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapView(extras) {
    _reporterNs.report("MapView", "./MapView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapData(extras) {
    _reporterNs.report("MapData", "./MapData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHexagonLayout(extras) {
    _reporterNs.report("HexagonLayout", "../Enums/TileEnums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHexagonSpriteFrame(extras) {
    _reporterNs.report("HexagonSpriteFrame", "../Enums/TileEnums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTile(extras) {
    _reporterNs.report("Tile", "../Tiles/Tile", _context.meta, extras);
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
      SpriteFrame = _cc.SpriteFrame;
      assetManager = _cc.assetManager;
      view = _cc.view;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      MapModel = _unresolved_2.MapModel;
    }, function (_unresolved_3) {
      MapView = _unresolved_3.MapView;
    }, function (_unresolved_4) {
      MapData = _unresolved_4.MapData;
    }, function (_unresolved_5) {
      HexagonLayout = _unresolved_5.HexagonLayout;
      HexagonSpriteFrame = _unresolved_5.HexagonSpriteFrame;
    }, function (_unresolved_6) {
      Tile = _unresolved_6.Tile;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "52ead15sa1HHITEB8HYuhBB", "MapController", undefined); // MapController.ts


      __checkObsolete__(['_decorator', 'Component', 'Node', 'SpriteFrame', 'assetManager', 'view', 'Size', 'Vec3']);

      // 新增导入
      ({
        ccclass,
        property
      } = _decorator);

      _export("MapController", MapController = (_dec = ccclass('MapController'), _dec2 = property({
        type: _crd && HexagonLayout === void 0 ? (_reportPossibleCrUseOfHexagonLayout({
          error: Error()
        }), HexagonLayout) : HexagonLayout,
        tooltip: '六边形排列方式'
      }), _dec3 = property({
        type: _crd && Tile === void 0 ? (_reportPossibleCrUseOfTile({
          error: Error()
        }), Tile) : Tile,
        tooltip: 'Tile 配置组件'
      }), _dec(_class = (_class2 = class MapController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "layout", _descriptor, this);

          // 默认水平排列
          _initializerDefineProperty(this, "tile", _descriptor2, this);

          // 用于在编辑器中拖拽赋值
          this.model = void 0;
          this.view = void 0;
          this.mapData = void 0;
        }

        start() {
          var _this$tile$hexWidth, _this$tile, _this$tile$hexHeight, _this$tile2;

          // 获取六边形尺寸（优先使用外部 Tile，否则使用默认值）
          const hexWidth = (_this$tile$hexWidth = (_this$tile = this.tile) == null ? void 0 : _this$tile.hexWidth) != null ? _this$tile$hexWidth : 120;
          const hexHeight = (_this$tile$hexHeight = (_this$tile2 = this.tile) == null ? void 0 : _this$tile2.hexHeight) != null ? _this$tile$hexHeight : 140; // 初始化各模块并传入 hex 宽高

          this.mapData = new (_crd && MapData === void 0 ? (_reportPossibleCrUseOfMapData({
            error: Error()
          }), MapData) : MapData)(this.layout, hexWidth, hexHeight);
          this.model = new (_crd && MapModel === void 0 ? (_reportPossibleCrUseOfMapModel({
            error: Error()
          }), MapModel) : MapModel)(this.layout);
          this.view = new (_crd && MapView === void 0 ? (_reportPossibleCrUseOfMapView({
            error: Error()
          }), MapView) : MapView)(this.node); // 初始化 tileMap 数组

          this.initializeTileMap(); // 加载资源

          this.loadResources().then(() => {
            // 获取屏幕尺寸并转换为 Vec3
            const screenSize = view.getVisibleSize();
            const screenSizeVec3 = new Vec3(screenSize.width, screenSize.height, 0); // 计算行列数

            const {
              cols,
              rows
            } = this.mapData.calculateLayout(screenSizeVec3); // 生成六边形节点，将 hex 宽高传入 generateHexagons

            this.view.generateHexagons(this.model, cols, rows, this.layout, hexWidth, hexHeight);
          }).catch(err => {
            console.error('资源加载失败:', err);
          });
        }

        initializeTileMap() {
          const cols = 10; // 假设列数为 10

          const rows = 10; // 假设行数为 10

          this.model.initializeTileMap(cols, rows);
        }

        loadResources() {
          return new Promise((resolve, reject) => {
            const bundleName = 'Images'; // 直接使用固定的 bundle 名称

            const spriteFramePaths = [(_crd && HexagonSpriteFrame === void 0 ? (_reportPossibleCrUseOfHexagonSpriteFrame({
              error: Error()
            }), HexagonSpriteFrame) : HexagonSpriteFrame).Dirt01, (_crd && HexagonSpriteFrame === void 0 ? (_reportPossibleCrUseOfHexagonSpriteFrame({
              error: Error()
            }), HexagonSpriteFrame) : HexagonSpriteFrame).Dirt02, (_crd && HexagonSpriteFrame === void 0 ? (_reportPossibleCrUseOfHexagonSpriteFrame({
              error: Error()
            }), HexagonSpriteFrame) : HexagonSpriteFrame).Dirt03, (_crd && HexagonSpriteFrame === void 0 ? (_reportPossibleCrUseOfHexagonSpriteFrame({
              error: Error()
            }), HexagonSpriteFrame) : HexagonSpriteFrame).Dirt04];
            assetManager.loadBundle(bundleName, (err, bundle) => {
              if (err) {
                console.error('Failed to load bundle:', err);
                reject(err);
                return;
              }

              const spriteFrames = [];

              const loadNext = index => {
                if (index >= spriteFramePaths.length) {
                  this.model.setSpriteFrames(spriteFrames);
                  resolve();
                  return;
                }

                bundle.load(spriteFramePaths[index], SpriteFrame, (err, spriteFrame) => {
                  if (err) {
                    console.error('Failed to load sprite frame:', spriteFramePaths[index], err);
                    reject(err);
                    return;
                  }

                  spriteFrames.push(spriteFrame);
                  loadNext(index + 1);
                });
              };

              loadNext(0);
            });
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "layout", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && HexagonLayout === void 0 ? (_reportPossibleCrUseOfHexagonLayout({
            error: Error()
          }), HexagonLayout) : HexagonLayout).Horizontal;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tile", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d75c1f062d7b4da51cdadcb2c213256fef0e05b1.js.map