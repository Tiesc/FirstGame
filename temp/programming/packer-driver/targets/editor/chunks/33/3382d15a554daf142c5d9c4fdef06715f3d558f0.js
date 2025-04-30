System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Orientation, _class, _crd, sqrt;

  _export("Orientation", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "62658xKcmBGBbSWs2SeuRv6", "orientation", undefined);

      sqrt = Math.sqrt;

      _export("Orientation", Orientation = class Orientation {
        constructor(f, b, startAngle) {
          this.f = void 0;
          this.b = void 0;
          this.startAngle = void 0;
          this.f = f;
          this.b = b;
          this.startAngle = startAngle;
        }
        /** An orientation with hexagons rotated so a vertex is up */


      });

      _class = Orientation;
      Orientation.pointy = new _class([sqrt(3.0), sqrt(3.0) / 2.0, 0.0, 3.0 / 2.0], [sqrt(3.0) / 3.0, -1.0 / 3.0, 0.0, 2.0 / 3.0], 0.5);

      /** An orientation with hexagons rotated so an edge is up */
      Orientation.flat = new _class([3.0 / 2.0, 0.0, sqrt(3.0) / 2.0, sqrt(3.0)], [2.0 / 3.0, 0.0, -1.0 / 3.0, sqrt(3.0) / 3.0], 0.0);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3382d15a554daf142c5d9c4fdef06715f3d558f0.js.map