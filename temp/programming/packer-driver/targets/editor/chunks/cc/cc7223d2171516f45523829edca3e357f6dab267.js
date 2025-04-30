System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, HexagonLayout, MapData, _crd;

  function _reportPossibleCrUseOfHexagonLayout(extras) {
    _reporterNs.report("HexagonLayout", "../Enums/TileEnums", _context.meta, extras);
  }

  _export("MapData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      HexagonLayout = _unresolved_2.HexagonLayout;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "70f8ace17FLY53YBaaLn17m", "MapData", undefined);

      // MapData.ts
      __checkObsolete__(['Vec3']);

      _export("MapData", MapData = class MapData {
        constructor(layout, hexWidth = 120, hexHeight = 140) {
          this.hexWidth = void 0;
          this.hexHeight = void 0;
          this.layout = layout;
          this.hexWidth = hexWidth;
          this.hexHeight = hexHeight;
        }

        calculateLayout(screenSize) {
          let cols, rows;

          if (this.layout === (_crd && HexagonLayout === void 0 ? (_reportPossibleCrUseOfHexagonLayout({
            error: Error()
          }), HexagonLayout) : HexagonLayout).Horizontal) {
            cols = Math.floor(screenSize.x / this.hexWidth) + 1;
            rows = Math.floor(screenSize.y / (this.hexHeight * 0.75)) + 1;
          } else {
            cols = Math.floor(screenSize.x / (this.hexWidth * 0.75)) + 1;
            rows = Math.floor(screenSize.y / this.hexHeight) + 1;
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