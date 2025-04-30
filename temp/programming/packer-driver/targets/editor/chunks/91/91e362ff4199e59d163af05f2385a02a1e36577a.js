System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, Hex, Orientation, Layout, OffsetCoord, _crd;

  _export({
    Hex: void 0,
    Orientation: void 0,
    Layout: void 0,
    OffsetCoord: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "be809aUHNRDRLl6Uv9LvXMR", "HexCell2D", undefined);

      // HexCell.ts
      __checkObsolete__(['Vec3']);

      _export("Hex", Hex = class Hex {
        constructor(q, r, s) {
          this.q = q;
          this.r = r;
          this.s = s;
        }

      });

      _export("Orientation", Orientation = class Orientation {
        constructor(f0, f1, f2, f3) {
          this.f0 = f0;
          this.f1 = f1;
          this.f2 = f2;
          this.f3 = f3;
        }

      });

      _export("Layout", Layout = class Layout {
        constructor(orientation, size, origin) {
          this.orientation = orientation;
          this.size = size;
          this.origin = origin;
        }

        hexToPixel(hex) {
          const M = this.orientation;
          const x = (M.f0 * hex.q + M.f1 * hex.r) * this.size.x;
          const y = (M.f2 * hex.q + M.f3 * hex.r) * this.size.y;
          return new Vec3(x + this.origin.x, y + this.origin.y, 0);
        }

      });

      Layout.pointy = new Orientation(Math.sqrt(3), Math.sqrt(3) / 2, 0, 3 / 2);
      Layout.flat = new Orientation(3 / 2, 0, Math.sqrt(3) / 2, Math.sqrt(3));

      _export("OffsetCoord", OffsetCoord = class OffsetCoord {
        constructor(col, row) {
          this.col = col;
          this.row = row;
        }

        static qoffsetToCube(evenOdd, coord) {
          const col = coord.col;
          const row = coord.row;
          const q = col - (row + (row & 1)) / 2;
          const r = row;
          const s = -q - r;
          return new Hex(q, r, s);
        }

      });

      OffsetCoord.EVEN = 'even';

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=91e362ff4199e59d163af05f2385a02a1e36577a.js.map