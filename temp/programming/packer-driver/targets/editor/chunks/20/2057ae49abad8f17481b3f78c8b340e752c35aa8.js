System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Hex, _crd, Offset, PointyDirection, FlatDirection;

  function isCuboid(x) {
    return 's' in x;
  }

  function isCartesian(x) {
    return 'row' in x && 'col' in x && 'offset' in x;
  }

  function isAxial(x) {
    return !isCuboid(x) && !isCartesian(x);
  }
  /**
   * Represents hexagons within a hexagonal grid.
   * @template TValue user defined extra information stored in each Hex.
   */


  function _reportPossibleCrUseOfContext(extras) {
    _reporterNs.report("Context", "./context", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoint(extras) {
    _reporterNs.report("Point", "./point", _context.meta, extras);
  }

  _export({
    isCuboid: isCuboid,
    isCartesian: isCartesian,
    isAxial: isAxial,
    Hex: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d6f11JGQ+lI9Z/34uOJr2NM", "hex", undefined);

      _export("Offset", Offset = /*#__PURE__*/function (Offset) {
        Offset[Offset["even"] = 1] = "even";
        Offset[Offset["odd"] = -1] = "odd";
        return Offset;
      }({}));

      _export("PointyDirection", PointyDirection = /*#__PURE__*/function (PointyDirection) {
        PointyDirection[PointyDirection["E"] = 0] = "E";
        PointyDirection[PointyDirection["SE"] = 1] = "SE";
        PointyDirection[PointyDirection["SW"] = 2] = "SW";
        PointyDirection[PointyDirection["W"] = 3] = "W";
        PointyDirection[PointyDirection["NW"] = 4] = "NW";
        PointyDirection[PointyDirection["NE"] = 5] = "NE";
        return PointyDirection;
      }({}));

      _export("FlatDirection", FlatDirection = /*#__PURE__*/function (FlatDirection) {
        FlatDirection[FlatDirection["SE"] = 0] = "SE";
        FlatDirection[FlatDirection["S"] = 1] = "S";
        FlatDirection[FlatDirection["SW"] = 2] = "SW";
        FlatDirection[FlatDirection["NW"] = 3] = "NW";
        FlatDirection[FlatDirection["N"] = 4] = "N";
        FlatDirection[FlatDirection["NE"] = 5] = "NE";
        return FlatDirection;
      }({}));

      _export("Hex", Hex = class Hex {
        constructor(coordinates, value) {
          this.coordinates = void 0;
          this.value = void 0;
          this.symbol = void 0;
          this.context = void 0;
          this.coordinates = Hex.detectCoordinates(coordinates);
          this.value = value;
          this.validate();
          Object.freeze(this.coordinates);
          this.symbol = Symbol.for(this.computeSymbolKey());
        }

        add(b) {
          const {
            q,
            r,
            s
          } = this.coordinates;
          return new Hex({
            q: q + b.coordinates.q,
            r: r + b.coordinates.r,
            s: s + b.coordinates.s
          }, this.value);
        }

        subtract(b) {
          const {
            q,
            r,
            s
          } = this.coordinates;
          return new Hex({
            q: q - b.coordinates.q,
            r: r - b.coordinates.r,
            s: s - b.coordinates.s
          }, this.value);
        }

        multiply(k) {
          const {
            q,
            r,
            s
          } = this.coordinates;
          return new Hex({
            q: q * k,
            r: r * k,
            s: s * k
          }, this.value);
        }

        length() {
          const {
            q,
            r,
            s
          } = this.coordinates;
          const abs = Math.abs;
          return (abs(q) + abs(r) + abs(s)) / 2;
        }

        distanceTo(b) {
          return this.subtract(b).length();
        }

        neighbor(direction) {
          const inDirection = new Hex(Hex.directions[direction]);
          return this.add(inDirection);
        }

        toPoint() {
          if (!this.context) {
            throw new ReferenceError('No context for converting a point');
          }

          return this.context.layout.hexToPixel(this);
        }

        static detectCoordinates(coordinates) {
          if (isAxial(coordinates)) {
            return Hex.fromAxial(coordinates);
          } else if (isCartesian(coordinates)) {
            return Hex.fromCartesian(coordinates);
          } else {
            return coordinates;
          }
        }

        static fromAxial(coordinates) {
          return {
            q: coordinates.q,
            r: coordinates.r,
            s: -coordinates.q - coordinates.r
          };
        }

        static fromCartesian(coordinates) {
          const {
            row,
            col,
            offset
          } = coordinates;
          return Hex.fromAxial({
            q: col,
            r: row - (col + offset * (col & 1)) / 2
          });
        }

        validate() {
          const {
            q,
            r,
            s
          } = this.coordinates;

          if (q + r + s !== 0) {
            throw new RangeError(`Hex(${q}, ${r}, ${s}) invalid: does not zero-sum`);
          }
        }

        computeSymbolKey() {
          const {
            q,
            r,
            s
          } = this.coordinates;
          return `hex(${q},${r},${s})`;
        }

      });

      Hex.directions = [{
        q: 1,
        r: 0
      }, {
        q: 0,
        r: 1
      }, {
        q: -1,
        r: 1
      }, {
        q: -1,
        r: 0
      }, {
        q: 0,
        r: -1
      }, {
        q: 1,
        r: -1
      }];

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2057ae49abad8f17481b3f78c8b340e752c35aa8.js.map