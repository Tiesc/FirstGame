System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Hex, Offset, isCartesian, isCuboid, isAxial, PointyDirection, FlatDirection, Layout, Orientation, Point, _crd;

  function _reportPossibleCrUseOfHex(extras) {
    _reporterNs.report("Hex", "../hex", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCuboid(extras) {
    _reporterNs.report("Cuboid", "../hex", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAxial(extras) {
    _reporterNs.report("Axial", "../hex", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCartesian(extras) {
    _reporterNs.report("Cartesian", "../hex", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOffset(extras) {
    _reporterNs.report("Offset", "../hex", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisCartesian(extras) {
    _reporterNs.report("isCartesian", "../hex", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisCuboid(extras) {
    _reporterNs.report("isCuboid", "../hex", _context.meta, extras);
  }

  function _reportPossibleCrUseOfisAxial(extras) {
    _reporterNs.report("isAxial", "../hex", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPointyDirection(extras) {
    _reporterNs.report("PointyDirection", "../hex", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFlatDirection(extras) {
    _reporterNs.report("FlatDirection", "../hex", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayout(extras) {
    _reporterNs.report("Layout", "../layout", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOrientation(extras) {
    _reporterNs.report("Orientation", "../orientation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPoint(extras) {
    _reporterNs.report("Point", "../point", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Hex = _unresolved_2.Hex;
      Offset = _unresolved_2.Offset;
      isCartesian = _unresolved_2.isCartesian;
      isCuboid = _unresolved_2.isCuboid;
      isAxial = _unresolved_2.isAxial;
      PointyDirection = _unresolved_2.PointyDirection;
      FlatDirection = _unresolved_2.FlatDirection;
    }, function (_unresolved_3) {
      Layout = _unresolved_3.Layout;
    }, function (_unresolved_4) {
      Orientation = _unresolved_4.Orientation;
    }, function (_unresolved_5) {
      Point = _unresolved_5.Point;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "de940rnr/lHObNcDGwKvBGp", "hex.spec", undefined);

      describe(_crd && isCuboid === void 0 ? (_reportPossibleCrUseOfisCuboid({
        error: Error()
      }), isCuboid) : isCuboid, () => {
        it('returns false for cartesian coordinates', () => {
          const cartesian = {
            row: 0,
            col: 0,
            offset: (_crd && Offset === void 0 ? (_reportPossibleCrUseOfOffset({
              error: Error()
            }), Offset) : Offset).even
          };
          expect((_crd && isCuboid === void 0 ? (_reportPossibleCrUseOfisCuboid({
            error: Error()
          }), isCuboid) : isCuboid)(cartesian)).toBeFalsy();
        });
        it('returns true for cuboid coordinates', () => {
          const cuboid = {
            q: 1,
            r: 0,
            s: -1
          };
          expect((_crd && isCuboid === void 0 ? (_reportPossibleCrUseOfisCuboid({
            error: Error()
          }), isCuboid) : isCuboid)(cuboid)).toBeTruthy();
        });
        it('returns false for axial coordinates', () => {
          const axial = {
            q: 1,
            r: 0
          };
          expect((_crd && isCuboid === void 0 ? (_reportPossibleCrUseOfisCuboid({
            error: Error()
          }), isCuboid) : isCuboid)(axial)).toBeFalsy();
        });
      });
      describe(_crd && isAxial === void 0 ? (_reportPossibleCrUseOfisAxial({
        error: Error()
      }), isAxial) : isAxial, () => {
        it('returns false for cartesian coordinates', () => {
          const cartesian = {
            row: 0,
            col: 0,
            offset: (_crd && Offset === void 0 ? (_reportPossibleCrUseOfOffset({
              error: Error()
            }), Offset) : Offset).even
          };
          expect((_crd && isAxial === void 0 ? (_reportPossibleCrUseOfisAxial({
            error: Error()
          }), isAxial) : isAxial)(cartesian)).toBeFalsy();
        });
        it('returns false for cuboid coordinates', () => {
          const cuboid = {
            q: 1,
            r: 0,
            s: -1
          };
          expect((_crd && isAxial === void 0 ? (_reportPossibleCrUseOfisAxial({
            error: Error()
          }), isAxial) : isAxial)(cuboid)).toBeFalsy();
        });
        it('returns true for axial coordinates', () => {
          const axial = {
            q: 1,
            r: 0
          };
          expect((_crd && isAxial === void 0 ? (_reportPossibleCrUseOfisAxial({
            error: Error()
          }), isAxial) : isAxial)(axial)).toBeTruthy();
        });
      });
      describe(_crd && isCartesian === void 0 ? (_reportPossibleCrUseOfisCartesian({
        error: Error()
      }), isCartesian) : isCartesian, () => {
        it('returns true for cartesian coordinates', () => {
          const cartesian = {
            row: 0,
            col: 0,
            offset: (_crd && Offset === void 0 ? (_reportPossibleCrUseOfOffset({
              error: Error()
            }), Offset) : Offset).even
          };
          expect((_crd && isCartesian === void 0 ? (_reportPossibleCrUseOfisCartesian({
            error: Error()
          }), isCartesian) : isCartesian)(cartesian)).toBeTruthy();
        });
        it('returns false for cuboid coordinates', () => {
          const cuboid = {
            q: 1,
            r: 0,
            s: -1
          };
          expect((_crd && isCartesian === void 0 ? (_reportPossibleCrUseOfisCartesian({
            error: Error()
          }), isCartesian) : isCartesian)(cuboid)).toBeFalsy();
        });
        it('returns false for axial coordinates', () => {
          const axial = {
            q: 1,
            r: 0
          };
          expect((_crd && isCartesian === void 0 ? (_reportPossibleCrUseOfisCartesian({
            error: Error()
          }), isCartesian) : isCartesian)(axial)).toBeFalsy();
        });
      });
      describe(_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
        error: Error()
      }), Hex) : Hex, () => {
        describe('constructor', () => {
          it('accepts cuboid coordinates', () => {
            const cuboid = {
              q: 1,
              r: 0,
              s: -1
            };
            expect(() => {
              const hex = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
                error: Error()
              }), Hex) : Hex)(cuboid);
            }).not.toThrow();
          });
          it('accepts axial coordinates', () => {
            const axial = {
              q: 1,
              r: 0
            };
            expect(() => {
              const hex = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
                error: Error()
              }), Hex) : Hex)(axial);
            }).not.toThrow();
          });
          it('accepts cartesian coordinates', () => {
            const cartesian = {
              row: 0,
              col: 0,
              offset: (_crd && Offset === void 0 ? (_reportPossibleCrUseOfOffset({
                error: Error()
              }), Offset) : Offset).even
            };
            expect(() => {
              const hex = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
                error: Error()
              }), Hex) : Hex)(cartesian);
            }).not.toThrow();
          });
          it('throws if cuboid coordinates do not zero sum', () => {
            const cuboid = {
              q: 5,
              r: 3,
              s: 0
            };
            expect(() => {
              const hex = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
                error: Error()
              }), Hex) : Hex)(cuboid);
            }).toThrow(RangeError);
          });
          it('calculates Cuboid.s for Axial coordinates', () => {
            const axial = {
              q: 5,
              r: 3
            };
            const hex = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)(axial);
            expect(hex.coordinates.s).toBe(-5 - 3);
          });
          it('converts cartesian coordinates to cuboid', () => {
            const cartesian = {
              row: 0,
              col: 1,
              offset: (_crd && Offset === void 0 ? (_reportPossibleCrUseOfOffset({
                error: Error()
              }), Offset) : Offset).even
            };
            const correct = {
              q: 1,
              r: -1,
              s: 0
            };
            const hex = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)(cartesian);
            expect(hex.coordinates).toStrictEqual(correct);
          });
          it('stores the passed value', () => {
            const cell = {
              name: 'water',
              color: 0x2277aa
            };
            const hex = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 0,
              r: 0
            }, cell);
            expect(hex.value).toStrictEqual(cell);
          });
        });
        describe('coordinates', () => {
          it('are stored as cuboid', () => {
            const cuboid = {
              q: 5,
              r: 3,
              s: -5 - 3
            };
            const hex = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)(cuboid);
            expect(hex.coordinates).toStrictEqual(cuboid);
          });
          it('are frozen', () => {
            const hex = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 0,
              r: 0
            });
            expect(Object.isFrozen(hex.coordinates)).toBeTruthy();
            expect(() => {
              hex.coordinates.q = 5;
            }).toThrow();
          });
        });
        describe('symbol', () => {
          it('identifies the hex', () => {
            const hex = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 0,
              r: 1
            });
            expect(hex.symbol).toStrictEqual(Symbol.for('hex(0,1,-1)'));
          });
          it('is equal for hexes at the same coordinates', () => {
            const hex1 = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 0,
              r: 0
            });
            const hex2 = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 0,
              r: 0
            });
            expect(hex1).not.toBe(hex2);
            expect(hex1.symbol).toEqual(hex2.symbol);
          });
          it('is different for hexes at different coordinates', () => {
            const hex1 = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 0,
              r: 0
            });
            const hex2 = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 1,
              r: 1
            });
            expect(hex1.symbol).not.toEqual(hex2.symbol);
          });
        });
        describe('add', () => {
          it('returns a new Hex', () => {
            const hex1 = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 1,
              r: -1
            });
            const hex2 = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 1,
              r: -1
            });
            expect(hex1.add(hex2)).not.toBe(hex1);
          });
          it('adds the coordinates piecewise', () => {
            const hex = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 1,
              r: -1
            });
            const result = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 2,
              r: -2
            });
            expect(hex.add(hex)).toStrictEqual(result);
          });
          it('copies the callers value', () => {
            const hex1 = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 1,
              r: -1
            }, 10);
            const hex2 = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 0,
              r: 5
            }, 5);
            expect(hex1.add(hex2).value).toBe(10);
          });
          it('adds hexes regardless of generic type', () => {
            const hex1 = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 1,
              r: 0
            });
            const hex2 = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 1,
              r: 0
            });
            const result = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 2,
              r: 0
            });
            expect(hex1.add(hex2)).toStrictEqual(result);
          });
        });
        describe('subtract', () => {
          it('returns a new Hex', () => {
            const hex1 = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 1,
              r: -1
            });
            const hex2 = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 1,
              r: -1
            });
            expect(hex1.subtract(hex2)).not.toBe(hex1);
          }); // NOTE: this particular calculation results in an
          // s-coordinate of -0, which is not make +0 by Hex.

          it('subtracts the coordinates piecewise', () => {
            const hex = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 1,
              r: -1
            });
            const result = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 0,
              r: 0,
              s: 0
            });
            expect(hex.subtract(hex)).toEqual(result);
          });
          it('copies the callers value', () => {
            const hex1 = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 1,
              r: -1
            }, 10);
            const hex2 = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 0,
              r: 5
            }, 5);
            expect(hex1.subtract(hex2).value).toBe(10);
          });
        });
        describe('multiply', () => {
          it('returns a new Hex', () => {
            const hex1 = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 1,
              r: -1
            });
            expect(hex1.multiply(10)).not.toBe(hex1);
          });
          it('adds the coordinates piecewise', () => {
            const hex = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 1,
              r: -1
            });
            const result = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 10,
              r: -10
            });
            expect(hex.multiply(10)).toStrictEqual(result);
          });
          it('copies the callers value', () => {
            const hex = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 1,
              r: -1
            }, 10);
            expect(hex.multiply(10).value).toBe(10);
          });
        });
        describe('length', () => {
          it('returns the vector length of the coordinates', () => {
            const hex = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 1,
              r: 1
            });
            expect(hex.length()).toBe(2);
          });
        });
        describe('distanceTo', () => {
          it('returns the vector length to the passed hex', () => {
            const hex1 = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 1,
              r: 1
            });
            const hex2 = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: -1,
              r: -1
            });
            expect(hex1.distanceTo(hex2)).toBe(4);
          });
          it('returns the same value in either direction', () => {
            const hex1 = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 1,
              r: 1
            });
            const hex2 = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: -1,
              r: -1
            });
            expect(hex1.distanceTo(hex2)).toEqual(hex2.distanceTo(hex1));
          });
        });
        describe('neighbor', () => {
          it('returns the appropriate hex, in a pointy direction', () => {
            const hex = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 0,
              r: 0
            });
            const E = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 1,
              r: 0
            });
            const W = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: -1,
              r: 0
            });
            expect(hex.neighbor((_crd && PointyDirection === void 0 ? (_reportPossibleCrUseOfPointyDirection({
              error: Error()
            }), PointyDirection) : PointyDirection).E)).toStrictEqual(E);
            expect(hex.neighbor((_crd && PointyDirection === void 0 ? (_reportPossibleCrUseOfPointyDirection({
              error: Error()
            }), PointyDirection) : PointyDirection).W)).toStrictEqual(W);
          });
          it('returns the appropriate hex, in a pointy direction', () => {
            const hex = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 0,
              r: 0
            });
            const N = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 0,
              r: -1
            });
            const S = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 0,
              r: 1
            });
            expect(hex.neighbor((_crd && FlatDirection === void 0 ? (_reportPossibleCrUseOfFlatDirection({
              error: Error()
            }), FlatDirection) : FlatDirection).N)).toStrictEqual(N);
            expect(hex.neighbor((_crd && FlatDirection === void 0 ? (_reportPossibleCrUseOfFlatDirection({
              error: Error()
            }), FlatDirection) : FlatDirection).S)).toStrictEqual(S);
          });
        });
        describe('toPoint', () => {
          it('returns undefined if no context', () => {
            const hex = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 0,
              r: 0
            });
            expect(() => hex.toPoint()).toThrow(ReferenceError);
          });
          it('given a context, calls its layout hexToPixel', () => {
            // const layout = jest.mock('../layout');
            const layout = new (_crd && Layout === void 0 ? (_reportPossibleCrUseOfLayout({
              error: Error()
            }), Layout) : Layout)((_crd && Orientation === void 0 ? (_reportPossibleCrUseOfOrientation({
              error: Error()
            }), Orientation) : Orientation).pointy, new (_crd && Point === void 0 ? (_reportPossibleCrUseOfPoint({
              error: Error()
            }), Point) : Point)(1, 1), new (_crd && Point === void 0 ? (_reportPossibleCrUseOfPoint({
              error: Error()
            }), Point) : Point)(0, 0));
            const context = {
              layout
            };
            const hex = new (_crd && Hex === void 0 ? (_reportPossibleCrUseOfHex({
              error: Error()
            }), Hex) : Hex)({
              q: 0,
              r: 0
            }, 0);
            hex.context = context;
            const point = hex.toPoint();
            const expected = new (_crd && Point === void 0 ? (_reportPossibleCrUseOfPoint({
              error: Error()
            }), Point) : Point)(0, 0);
            expect(point).toStrictEqual(expected);
          });
        });
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=523c2b40d9925a5f87363549caed225dc132afe6.js.map