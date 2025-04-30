System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, Hex, OffsetCoord, DoubledCoord, Orientation, Layout, _class, _crd;

  _export({
    Hex: void 0,
    OffsetCoord: void 0,
    DoubledCoord: void 0,
    Orientation: void 0,
    Layout: void 0
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

      _cclegacy._RF.push({}, "15e7b8eUPBEUbcKH5sRVc0N", "HexCell3D", undefined); // HexCell.ts
      // Generated code -- CC0 -- No Rights Reserved -- http://www.redblobgames.com/grids/hexagons/


      __checkObsolete__(['Vec3']);

      _export("Hex", Hex = class Hex {
        constructor(q, r, s) {
          this.q = q;
          this.r = r;
          this.s = s;
          if (Math.round(q + r + s) !== 0) throw "q + r + s must be 0";
        }

        add(b) {
          return new Hex(this.q + b.q, this.r + b.r, this.s + b.s);
        }

        subtract(b) {
          return new Hex(this.q - b.q, this.r - b.r, this.s - b.s);
        }

        scale(k) {
          return new Hex(this.q * k, this.r * k, this.s * k);
        }

        rotateLeft() {
          return new Hex(-this.s, -this.q, -this.r);
        }

        rotateRight() {
          return new Hex(-this.r, -this.s, -this.q);
        }

        static direction(direction) {
          return Hex.directions[direction];
        }

        neighbor(direction) {
          return this.add(Hex.direction(direction));
        }

        diagonalNeighbor(direction) {
          return this.add(Hex.diagonals[direction]);
        }

        len() {
          return (Math.abs(this.q) + Math.abs(this.r) + Math.abs(this.s)) / 2;
        }

        distance(b) {
          return this.subtract(b).len();
        }

        round() {
          let qi = Math.round(this.q);
          let ri = Math.round(this.r);
          let si = Math.round(this.s);
          let q_diff = Math.abs(qi - this.q);
          let r_diff = Math.abs(ri - this.r);
          let s_diff = Math.abs(si - this.s);

          if (q_diff > r_diff && q_diff > s_diff) {
            qi = -ri - si;
          } else if (r_diff > s_diff) {
            ri = -qi - si;
          } else {
            si = -qi - ri;
          }

          return new Hex(qi, ri, si);
        }

        lerp(b, t) {
          return new Hex(this.q * (1.0 - t) + b.q * t, this.r * (1.0 - t) + b.r * t, this.s * (1.0 - t) + b.s * t);
        }

        linedraw(b) {
          const N = this.distance(b);
          const a_nudge = new Hex(this.q + 1e-06, this.r + 1e-06, this.s - 2e-06);
          const b_nudge = new Hex(b.q + 1e-06, b.r + 1e-06, b.s - 2e-06);
          const results = [];
          const step = 1.0 / Math.max(N, 1);

          for (let i = 0; i <= N; i++) {
            results.push(a_nudge.lerp(b_nudge, step * i).round());
          }

          return results;
        }

      });

      _class = Hex;
      Hex.directions = [new _class(1, 0, -1), new _class(1, -1, 0), new _class(0, -1, 1), new _class(-1, 0, 1), new _class(-1, 1, 0), new _class(0, 1, -1)];
      Hex.diagonals = [new _class(2, -1, -1), new _class(1, -2, 1), new _class(-1, -1, 2), new _class(-2, 1, 1), new _class(-1, 2, -1), new _class(1, 1, -2)];

      _export("OffsetCoord", OffsetCoord = class OffsetCoord {
        constructor(col, row) {
          this.col = col;
          this.row = row;
        }

        static qoffsetFromCube(offset, h) {
          const col = h.q;
          const row = h.r + (h.q + offset * (h.q & 1)) / 2;

          if (offset !== OffsetCoord.EVEN && offset !== OffsetCoord.ODD) {
            throw "offset must be EVEN (+1) or ODD (-1)";
          }

          return new OffsetCoord(col, row);
        }

        static qoffsetToCube(offset, h) {
          const q = h.col;
          const r = h.row - (h.col + offset * (h.col & 1)) / 2;
          const s = -q - r;

          if (offset !== OffsetCoord.EVEN && offset !== OffsetCoord.ODD) {
            throw "offset must be EVEN (+1) or ODD (-1)";
          }

          return new Hex(q, r, s);
        }

        static roffsetFromCube(offset, h) {
          const col = h.q + (h.r + offset * (h.r & 1)) / 2;
          const row = h.r;

          if (offset !== OffsetCoord.EVEN && offset !== OffsetCoord.ODD) {
            throw "offset must be EVEN (+1) or ODD (-1)";
          }

          return new OffsetCoord(col, row);
        }

        static roffsetToCube(offset, h) {
          const q = h.col - (h.row + offset * (h.row & 1)) / 2;
          const r = h.row;
          const s = -q - r;

          if (offset !== OffsetCoord.EVEN && offset !== OffsetCoord.ODD) {
            throw "offset must be EVEN (+1) or ODD (-1)";
          }

          return new Hex(q, r, s);
        }

      });

      OffsetCoord.EVEN = 1;
      OffsetCoord.ODD = -1;

      _export("DoubledCoord", DoubledCoord = class DoubledCoord {
        constructor(col, row) {
          this.col = col;
          this.row = row;
        }

        static qdoubledFromCube(h) {
          const col = h.q;
          const row = 2 * h.r + h.q;
          return new DoubledCoord(col, row);
        }

        qdoubledToCube() {
          const q = this.col;
          const r = (this.row - this.col) / 2;
          const s = -q - r;
          return new Hex(q, r, s);
        }

        static rdoubledFromCube(h) {
          const col = 2 * h.q + h.r;
          const row = h.r;
          return new DoubledCoord(col, row);
        }

        rdoubledToCube() {
          const q = (this.col - this.row) / 2;
          const r = this.row;
          const s = -q - r;
          return new Hex(q, r, s);
        }

      });

      _export("Orientation", Orientation = class Orientation {
        constructor(f0, f1, f2, f3, b0, b1, b2, b3, start_angle) {
          this.f0 = f0;
          this.f1 = f1;
          this.f2 = f2;
          this.f3 = f3;
          this.b0 = b0;
          this.b1 = b1;
          this.b2 = b2;
          this.b3 = b3;
          this.start_angle = start_angle;
        }

      });

      _export("Layout", Layout = class Layout {
        constructor(orientation, size, origin) {
          this.orientation = orientation;
          this.size = size;
          this.origin = origin;
        }

        hexToPixel(h) {
          const M = this.orientation;
          const size = this.size;
          const origin = this.origin;
          const x = (M.f0 * h.q + M.f1 * h.r) * size.x;
          const y = (M.f2 * h.q + M.f3 * h.r) * size.y;
          return new Vec3(x + origin.x, y + origin.y, 0);
        }

        pixelToHex(p) {
          const M = this.orientation;
          const size = this.size;
          const origin = this.origin;
          const pt = new Vec3((p.x - origin.x) / size.x, (p.y - origin.y) / size.y, 0);
          const q = M.b0 * pt.x + M.b1 * pt.y;
          const r = M.b2 * pt.x + M.b3 * pt.y;
          return new Hex(q, r, -q - r);
        }

        hexCornerOffset(corner) {
          const M = this.orientation;
          const size = this.size;
          const angle = 2.0 * Math.PI * (M.start_angle - corner) / 6.0;
          return new Vec3(size.x * Math.cos(angle), size.y * Math.sin(angle), 0);
        }

        polygonCorners(h) {
          const corners = [];
          const center = this.hexToPixel(h);

          for (let i = 0; i < 6; i++) {
            const offset = this.hexCornerOffset(i);
            corners.push(new Vec3(center.x + offset.x, center.y + offset.y, 0));
          }

          return corners;
        }

      });

      Layout.pointy = new Orientation(Math.sqrt(3.0), Math.sqrt(3.0) / 2.0, 0.0, 3.0 / 2.0, Math.sqrt(3.0) / 3.0, -1.0 / 3.0, 0.0, 2.0 / 3.0, 0.5);
      Layout.flat = new Orientation(3.0 / 2.0, 0.0, Math.sqrt(3.0) / 2.0, Math.sqrt(3.0), 2.0 / 3.0, 0.0, -1.0 / 3.0, Math.sqrt(3.0) / 3.0, 0.0);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=10cf3288d0d6588c7151b787a51de8649814b866.js.map