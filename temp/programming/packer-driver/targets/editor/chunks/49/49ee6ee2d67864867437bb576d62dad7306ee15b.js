System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Node, Sprite, Vec3, HexagonLayout, MapView, _crd;

  function _reportPossibleCrUseOfMapModel(extras) {
    _reporterNs.report("MapModel", "./MapModel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHexagonLayout(extras) {
    _reporterNs.report("HexagonLayout", "../Enums/TileEnums", _context.meta, extras);
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

      _cclegacy._RF.push({}, "9b48eLZq79NOLOq/0NETyY8", "MapView", undefined); // MapView.ts


      __checkObsolete__(['Node', 'Sprite', 'SpriteFrame', 'Vec3']);

      _export("MapView", MapView = class MapView {
        constructor(node) {
          this.node = void 0;
          this.node = node;
        }
        /**
         * 根据模型数据生成六边形地图
         * @param model 地图数据模型
         * @param cols 列数
         * @param rows 行数
         * @param layout 排列方式（水平或垂直）
         * @param hexWidth 六边形宽度
         * @param hexHeight 六边形高度
         */


        generateHexagons(model, cols, rows, layout = (_crd && HexagonLayout === void 0 ? (_reportPossibleCrUseOfHexagonLayout({
          error: Error()
        }), HexagonLayout) : HexagonLayout).Horizontal, hexWidth = 120, hexHeight = 140) {
          const tileMap = model.getTileMap();
          const spriteFrames = model.getSpriteFrames();

          for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
              var _tileMap$row;

              const spriteFramePath = (_tileMap$row = tileMap[row]) == null ? void 0 : _tileMap$row[col];
              if (!spriteFramePath) continue;
              const spriteFrame = spriteFrames.find(sf => sf.name === spriteFramePath);
              if (!spriteFrame) continue; // 创建新节点并设置 Sprite

              const newNode = new Node(`Hexagon_${row}_${col}`);
              const sprite = newNode.addComponent(Sprite);
              sprite.spriteFrame = spriteFrame; // 计算位置

              const position = this.calculatePosition(col, row, hexWidth, hexHeight, layout);
              newNode.setPosition(position); // 添加到场景中

              this.node.addChild(newNode);
            }
          }
        }
        /**
         * 计算六边形节点的位置
         * @param col 当前列
         * @param row 当前行
         * @param hexWidth 六边形宽度
         * @param hexHeight 六边形高度
         * @param layout 排列方式
         * @returns 世界坐标 Vec3
         */


        calculatePosition(col, row, hexWidth, hexHeight, layout) {
          let x = 0,
              y = 0;

          if (layout === (_crd && HexagonLayout === void 0 ? (_reportPossibleCrUseOfHexagonLayout({
            error: Error()
          }), HexagonLayout) : HexagonLayout).Horizontal) {
            x = col * hexWidth + row % 2 * (hexWidth / 2); // 奇数行偏移

            y = row * hexHeight * 0.75; // 垂直间距为 0.75 倍高度
          } else {
            x = col * hexWidth * 0.75; // 水平间距为 0.75 倍宽度

            y = row * hexHeight + col % 2 * (hexHeight / 2); // 奇数列偏移
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