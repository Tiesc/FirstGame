System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Point, Hex, Layout, _crd;

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "./orientation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoint(extras) {
    _reporterNs.report("Point", "./point", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHex(extras) {
    _reporterNs.report("Hex", "./hex", _context.meta, extras);
  }

  _export("Layout", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Point = _unresolved_2.Point;
    }, function (_unresolved_3) {
      Hex = _unresolved_3.Hex;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "faabf5mikNCw6HHWC//s+xM", "layout", undefined);

      _export("Layout", Layout = class Layout {
        constructor(orientation, size, origin) {
          this.orientation = void 0;
          this.size = void 0;
          this.origin = void 0;
          this.orientation = orientation;
          this.size = size;
          this.origin = origin;
        }

        hexToPixel(h) {
          const f = this.orientation.f;
          const {
            q,
            r
          } = h.coordinates;
          const x = (f[0] * q + f[1] * r) * this.size.x;
          const y = (f[2] * q + f[3] * r) * this.size.y;
          return new (_crd && Point === void 0 ? (_reportPossibleCrUseOfPoint({
            error: Error()
          }), Point) : Point)(x + this.origin.x, y + this.origin.y);
        }

        pixelToHex(p) {
          const b = this.orientation.b;
          const pt = new (_crd && Point === void 0 ? (_reportPossibleCrUseOfPoint({
            error: Error()
          }), Point) : Point)((p.x - this.origin.x) / this.size.x, (p.y - this.origin.y) / this.size.y);
          const q = b[0] * pt.x + b[1] * pt.y;
          const r = b[2] * pt.x + b[3] * pt.y;
          return new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
            error: Error()
          }), Hex) : Hex)({
            q,
            r
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8a0f4086e2a0f00edf940f086b2bb4c92a5837dd.js.map