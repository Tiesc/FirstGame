System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, Sprite, Vec3, HexagonLayout, MapView, _crd;

  function _reportPossibleCrUseOfMapModel(extras) {
    _reporterNs.report("MapModel", "./MapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHexagonLayout(extras) {
    _reporterNs.report("HexagonLayout", "./MapData", _context.meta, extras);
  }

  _export("MapView", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      HexagonLayout = _unresolved_2.HexagonLayout;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9b48eLZq79NOLOq/0NETyY8", "MapView", undefined);

      __checkObsolete__(['Node', 'Sprite', 'SpriteFrame', 'Vec3']);

      _export("MapView", MapView = class MapView {
        constructor(node) {
          this.node = void 0;
          this.node = node;
        }

        generateHexagons(model, cols, rows, layout = (_crd && HexagonLayout === void 0 ? (_reportPossibleCrUseOfHexagonLayout({
          error: Error()
        }), HexagonLayout) : HexagonLayout).Horizontal) {
          const hexWidth = 120; // 六边形宽度

          const hexHeight = 140; // 六边形高度

          const tileMap = model.getTileMap();
          const spriteFrames = model.getSpriteFrames();

          for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
              var _tileMap$row;

              const spriteFramePath = (_tileMap$row = tileMap[row]) == null ? void 0 : _tileMap$row[col];

              if (!spriteFramePath) {
                continue;
              }

              const spriteFrame = spriteFrames.find(sf => sf.name === spriteFramePath);
              if (!spriteFrame) continue; // 创建新节点

              const newNode = new Node(`Hexagon_${row}_${col}`); // 添加 Sprite 组件

              const sprite = newNode.addComponent(Sprite); // 设置 SpriteFrame

              sprite.spriteFrame = spriteFrame; // 计算节点位置，传入 layout 参数

              const position = this.calculatePosition(col, row, hexWidth, hexHeight, layout);
              newNode.setPosition(position); // 将新节点添加到当前节点下

              this.node.addChild(newNode);
            }
          }
        }

        calculatePosition(col, row, hexWidth, hexHeight, layout) {
          let x, y;

          if (layout === (_crd && HexagonLayout === void 0 ? (_reportPossibleCrUseOfHexagonLayout({
            error: Error()
          }), HexagonLayout) : HexagonLayout).Horizontal) {
            x = col * hexWidth + row % 2 * (hexWidth / 2); // 水平排列，奇数行偏移

            y = row * hexHeight * 0.75; // 垂直方向间距为高度的 0.75 倍
          } else {
            x = col * hexWidth * 0.75; // 水平方向间距为宽度的 0.75 倍

            y = row * hexHeight + col % 2 * (hexHeight / 2); // 垂直排列，奇数列偏移
          }

          return new Vec3(x, y, 0);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=49ee6ee2d67864867437bb576d62dad7306ee15b.js.map