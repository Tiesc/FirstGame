// MapView.ts
import { Node, Sprite, SpriteFrame, Vec3 } from 'cc';
import { MapModel } from './MapModel';
import { HexagonLayout } from '../Enums/TileEnums';

export class MapView {
    private node: Node;

    constructor(node: Node) {
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
    public generateHexagons(
        model: MapModel,
        cols: number,
        rows: number,
        layout: HexagonLayout = HexagonLayout.Horizontal,
        hexWidth: number = 120,
        hexHeight: number = 140
    ) {
        const tileMap = model.getTileMap();
        const spriteFrames = model.getSpriteFrames();

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const spriteFramePath = tileMap[row]?.[col];
                if (!spriteFramePath) continue;

                const spriteFrame = spriteFrames.find(sf => sf.name === spriteFramePath);
                if (!spriteFrame) continue;

                // 创建新节点并设置 Sprite
                const newNode = new Node(`Hexagon_${row}_${col}`);
                const sprite = newNode.addComponent(Sprite);
                sprite.spriteFrame = spriteFrame;

                // 计算位置
                const position = this.calculatePosition(col, row, hexWidth, hexHeight, layout);
                newNode.setPosition(position);

                // 添加到场景中
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
    private calculatePosition(
        col: number,
        row: number,
        hexWidth: number,
        hexHeight: number,
        layout: HexagonLayout
    ): Vec3 {
        let x = 0, y = 0;

        if (layout === HexagonLayout.Horizontal) {
            x = col * hexWidth + (row % 2) * (hexWidth / 2); // 奇数行偏移
            y = row * hexHeight * 0.75; // 垂直间距为 0.75 倍高度
        } else {
            x = col * hexWidth * 0.75; // 水平间距为 0.75 倍宽度
            y = row * hexHeight + (col % 2) * (hexHeight / 2); // 奇数列偏移
        }

        return new Vec3(x, y, 0);
    }
}