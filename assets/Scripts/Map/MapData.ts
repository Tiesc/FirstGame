import { Vec3 } from 'cc';

// 定义排列方式枚举
export enum HexagonLayout {
    Horizontal, // 水平排列
    Vertical    // 垂直排列
}

// 定义 SpriteFrame 路径枚举
export enum HexagonSpriteFrame {
    Dirt01 = 'Tiles/Terrain/Dirt/dirt_01/spriteFrame',
    Dirt02 = 'Tiles/Terrain/Dirt/dirt_02/spriteFrame',
    Dirt03 = 'Tiles/Terrain/Dirt/dirt_03/spriteFrame',
    Dirt04 = 'Tiles/Terrain/Dirt/dirt_04/spriteFrame',
    // 可以根据需要添加更多路径
}

export class MapData {
    public hexWidth: number = 120; // 六边形宽度
    public hexHeight: number = 140; // 六边形高度

    constructor(public layout: HexagonLayout) {}

    public calculateLayout(screenSize: Vec3): { cols: number, rows: number } {
        let cols, rows;
        if (this.layout === HexagonLayout.Horizontal) {
            cols = Math.floor(screenSize.x / this.hexWidth) + 1; // 每行六边形数
            rows = Math.floor(screenSize.y / (this.hexHeight * 0.75)) + 1; // 每列六边形数
        } else {
            cols = Math.floor(screenSize.x / (this.hexWidth * 0.75)) + 1; // 每行六边形数
            rows = Math.floor(screenSize.y / this.hexHeight) + 1; // 每列六边形数
        }

        return { cols, rows };
    }
}