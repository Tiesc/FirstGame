System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, MapModel, _crd;

  function _reportPossibleCrUseOfHexagonLayout(extras) {
    _reporterNs.report("HexagonLayout", "./MapData", _context.meta, extras);
  }

  _export("MapModel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bf2c9qSioVPZY3i3ZAQeJhy", "MapModel", undefined);

      __checkObsolete__(['SpriteFrame']);

      _export("MapModel", MapModel = class MapModel {
        constructor(layout) {
          this.tileMap = [];
          this.spriteFrames = [];
          this.layout = layout;
        }

        getTileMap() {
          return this.tileMap;
        }

        getSpriteFrames() {
          return this.spriteFrames;
        }

        initializeTileMap(cols, rows) {
          this.tileMap = Array.from({
            length: rows
          }, () => Array.from({
            length: cols
          }, () => {
            var randomIndex = Math.floor(Math.random() * 4) + 1; // 随机选择 1 到 4

            return "dirt_0" + randomIndex;
          }));
        }

        setSpriteFrames(spriteFrames) {
          this.spriteFrames = spriteFrames;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ef307f5c5ecb72a6e41caed3661d1cf5db287907.js.map