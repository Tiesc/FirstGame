System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, MapData, _crd, HexagonLayout, HexagonSpriteFrame;

  _export("MapData", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "70f8ace17FLY53YBaaLn17m", "MapData", undefined);

      // 定义排列方式枚举
      __checkObsolete__(['Vec3']);

      _export("HexagonLayout", HexagonLayout = /*#__PURE__*/function (HexagonLayout) {
        HexagonLayout[HexagonLayout["Horizontal"] = 0] = "Horizontal";
        HexagonLayout[HexagonLayout["Vertical"] = 1] = "Vertical";
        return HexagonLayout;
      }({})); // 定义 SpriteFrame 路径枚举


      _export("HexagonSpriteFrame", HexagonSpriteFrame = /*#__PURE__*/function (HexagonSpriteFrame) {
        HexagonSpriteFrame["Dirt01"] = "Tiles/Terrain/Dirt/dirt_01/spriteFrame";
        HexagonSpriteFrame["Dirt02"] = "Tiles/Terrain/Dirt/dirt_02/spriteFrame";
        HexagonSpriteFrame["Dirt03"] = "Tiles/Terrain/Dirt/dirt_03/spriteFrame";
        HexagonSpriteFrame["Dirt04"] = "Tiles/Terrain/Dirt/dirt_04/spriteFrame";
        return HexagonSpriteFrame;
      }({}));

      _export("MapData", MapData = class MapData {
        // 六边形高度
        constructor(layout) {
          this.hexWidth = 120;
          // 六边形宽度
          this.hexHeight = 140;
          this.layout = layout;
        }

        calculateLayout(screenSize) {
          var cols, rows;

          if (this.layout === HexagonLayout.Horizontal) {
            cols = Math.floor(screenSize.x / this.hexWidth) + 1; // 每行六边形数

            rows = Math.floor(screenSize.y / (this.hexHeight * 0.75)) + 1; // 每列六边形数
          } else {
            cols = Math.floor(screenSize.x / (this.hexWidth * 0.75)) + 1; // 每行六边形数

            rows = Math.floor(screenSize.y / this.hexHeight) + 1; // 每列六边形数
          }

          return {
            cols,
            rows
          };
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cc7223d2171516f45523829edca3e357f6dab267.js.map