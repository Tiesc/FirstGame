System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, resources, error, JsonAsset, Prefab, SpriteFrame, _dec, _class, _class2, _crd, ccclass, property, ResourceManager;

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

      _cclegacy._RF.push({}, "a5bd1uS+qZFlpiK42sOAmL0", "ResourceManager", undefined); // ResourceManager.ts


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
          const loadTasks = [this.loadDir("textures/hex_tiles", "textures"), this.loadDir("prefabs/hex", "prefabs"), this.loadDir("config/map", "configs")];
          let completedCount = 0;
          const totalTasks = loadTasks.length;
          loadTasks.forEach(task => {
            task.then(() => {
              completedCount++;
              const progress = completedCount / totalTasks;
              progressCallback(progress);

              if (completedCount === totalTasks) {
                completeCallback();
              }
            }).catch(err => {
              error(`资源加载失败: ${err}`);
            });
          });
        }
        /**
         * 动态加载单个资源
         * @param path resources下相对路径
         * @param type 资源类型
         */


        async loadRes(path, type) {
          return new Promise((resolve, reject) => {
            resources.load(path, type, (err, asset) => {
              if (err) {
                error(`加载失败: ${path}`, err);
                reject(err);
              } else {
                this.cacheResource(path, asset);
                resolve(asset);
              }
            });
          });
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

        async loadDir(path, category) {
          return new Promise((resolve, reject) => {
            resources.loadDir(path, (err, assets) => {
              if (err) {
                reject(err);
                return;
              }

              assets.forEach(asset => {
                const assetName = this.getAssetName(asset);

                if (assetName) {
                  this.loadedResources[category].set(assetName, asset);
                }
              });
              resolve();
            });
          });
        }

        cacheResource(path, asset) {
          const assetName = this.getAssetName(asset);
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
          const path = asset.nativeUrl.split('/').pop() || '';
          return path.split('.')[0]; // 去除扩展名
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=42544c4672f9e5fc5f4cf96762b94128b8791509.js.map