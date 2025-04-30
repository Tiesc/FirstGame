import { Node, Sprite, SpriteFrame, Vec3 } from 'cc';
import { MapModel } from './MapModel';
import { HexagonLayout } from './MapData';

export class MapView {
    private node: Node;

    constructor(node: Node) {
        this.node = node;
    }

    public generateHexagons(model: MapModel, cols: number, rows: number, layout: HexagonLayout = HexagonLayout.Horizontal) {
        const hexWidth = 120; // 六边形宽度
        const hexHeight = 140; // 六边形高度

        const tileMap = model.getTileMap();
        const spriteFrames = model.getSpriteFrames();

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const spriteFramePath = tileMap[row]?.[col];
                if (!spriteFramePath) {
                    continue;
                }

                const spriteFrame = spriteFrames.find(sf => sf.name === spriteFramePath);
                if (!spriteFrame) continue;

                // 创建新节点
                const newNode = new Node(`Hexagon_${row}_${col}`);

                // 添加 Sprite 组件
                const sprite = newNode.addComponent(Sprite);

                // 设置 SpriteFrame
                sprite.spriteFrame = spriteFrame;

                // 计算节点位置，传入 layout 参数
                const position = this.calculatePosition(col, row, hexWidth, hexHeight, layout);
                newNode.setPosition(position);

                // 将新节点添加到当前节点下
                this.node.addChild(newNode);
            }
        }
    }

    private calculatePosition(col: number, row: number, hexWidth: number, hexHeight: number, layout: HexagonLayout): Vec3 {
        let x, y;
        if (layout === HexagonLayout.Horizontal) {
            x = col * hexWidth + (row % 2) * (hexWidth / 2); // 水平排列，奇数行偏移
            y = row * hexHeight * 0.75; // 垂直方向间距为高度的 0.75 倍
        } else {
            x = col * hexWidth * 0.75; // 水平方向间距为宽度的 0.75 倍
            y = row * hexHeight + (col % 2) * (hexHeight / 2); // 垂直排列，奇数列偏移
        }

        return new Vec3(x, y, 0);
    }
}