System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, resources, error, JsonAsset, Prefab, SpriteFrame, _dec, _class, _class2, _crd, ccclass, property, ResourceManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      resources = _cc.resources;
      error = _cc.error;
      JsonAsset = _cc.JsonAsset;
      Prefab = _cc.Prefab;
      SpriteFrame = _cc.SpriteFrame;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a5bd1uS+qZFlpiK42sOAmL0", "Resources", undefined); // ResourceManager.ts


      __checkObsolete__(['_decorator', 'resources', 'Asset', 'error', 'JsonAsset', 'Prefab', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ResourceManager", ResourceManager = (_dec = ccclass('ResourceManager'), _dec(_class = (_class2 = class ResourceManager {
        constructor() {
          this.loadedResources = {
            textures: new Map(),
            // 六边形地形贴图
            prefabs: new Map(),
            // 六边形单元格/角色预制体
            configs: new Map() // 地图/角色配置数据

          };
        }

        static get Instance() {
          if (!this._instance) {
            this._instance = new ResourceManager();
          }

          return this._instance;
        }
        /**
         * 预加载所有基础资源
         * @param progressCallback 加载进度回调 (0-1)
         * @param completeCallback 完成回调
         */


        preloadEssentialResources(progressCallback, completeCallback) {
          var loadTasks = [this.loadDir("textures/hex_tiles", "textures"), this.loadDir("prefabs/hex", "prefabs"), this.loadDir("config/map", "configs")];
          var completedCount = 0;
          var totalTasks = loadTasks.length;
          loadTasks.forEach(task => {
            task.then(() => {
              completedCount++;
              var progress = completedCount / totalTasks;
              progressCallback(progress);

              if (completedCount === totalTasks) {
                completeCallback();
              }
            }).catch(err => {
              error("\u8D44\u6E90\u52A0\u8F7D\u5931\u8D25: " + err);
            });
          });
        }
        /**
         * 动态加载单个资源
         * @param path resources下相对路径
         * @param type 资源类型
         */


        loadRes(path, type) {
          var _this = this;

          return _asyncToGenerator(function* () {
            return new Promise((resolve, reject) => {
              resources.load(path, type, (err, asset) => {
                if (err) {
                  error("\u52A0\u8F7D\u5931\u8D25: " + path, err);
                  reject(err);
                } else {
                  _this.cacheResource(path, asset);

                  resolve(asset);
                }
              });
            });
          })();
        } // 获取已加载资源


        getTexture(name) {
          return this.loadedResources.textures.get(name);
        }

        getHexPrefab(name) {
          return this.loadedResources.prefabs.get(name);
        }

        getMapConfig(name) {
          return this.loadedResources.configs.get(name);
        }

        loadDir(path, category) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            return new Promise((resolve, reject) => {
              resources.loadDir(path, (err, assets) => {
                if (err) {
                  reject(err);
                  return;
                }

                assets.forEach(asset => {
                  var assetName = _this2.getAssetName(asset);

                  if (assetName) {
                    _this2.loadedResources[category].set(assetName, asset);
                  }
                });
                resolve();
              });
            });
          })();
        }

        cacheResource(path, asset) {
          var assetName = this.getAssetName(asset);
          if (!assetName) return;

          if (asset instanceof SpriteFrame) {
            this.loadedResources.textures.set(assetName, asset);
          } else if (asset instanceof Prefab) {
            this.loadedResources.prefabs.set(assetName, asset);
          } else if (asset instanceof JsonAsset) {
            this.loadedResources.configs.set(assetName, asset.json);
          }
        }

        getAssetName(asset) {
          var path = asset.nativeUrl.split('/').pop() || '';
          return path.split('.')[0]; // 去除扩展名
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=311eec2c6a5e9a056aef0410e2bfa06adf6f733a.js.map