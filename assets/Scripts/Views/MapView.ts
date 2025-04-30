// Views/MapView.ts
import { Node, Sprite, SpriteFrame, Vec3 } from 'cc';
import { HexagonLayout } from '../Enums/TileEnums';
import { GameConfig } from '../Core/GameConfig';
import { TiledMapJson, TiledTileset } from '../Data/MapData';
import { MapManager } from '../Managers/MapManager';

export class MapView {
    private node: Node;

    constructor(node: Node) {
        this.node = node;
    }

    public generateHexagons(
        tileMap: string[][],
        spriteFrames: SpriteFrame[],
        layout: HexagonLayout = HexagonLayout.Horizontal
    ) {
        const hexWidth = GameConfig.HEX_WIDTH;
        const hexHeight = GameConfig.HEX_HEIGHT;

        for (let row = 0; row < tileMap.length; row++) {
            for (let col = 0; col < tileMap[row].length; col++) {
                const spriteFramePath = tileMap[row][col];
                const spriteFrame = spriteFrames.find(sf => sf.name === spriteFramePath);
                if (!spriteFrame) continue;

                const newNode = new Node(`Hexagon_${row}_${col}`);
                const sprite = newNode.addComponent(Sprite);
                sprite.spriteFrame = spriteFrame;

                const position = this.calculatePosition(col, row, hexWidth, hexHeight, layout);
                newNode.setPosition(position);

                this.node.addChild(newNode);
            }
        }
    }

    /**
     * 从 Tiled 导出的 JSON 数据中生成 Hexagon 地图
     */
    public generateFromTiledMap(mapJson: TiledMapJson): void {
        // 获取 Terrain 层
        const terrainLayer = MapManager.getLayerByName(mapJson, 'Terrain');
        if (!terrainLayer || !terrainLayer.data) {
            console.warn('未找到 Terrain 图层或数据为空');
            return;
        }

        const width = mapJson.width;
        const height = mapJson.height;
        const tileSize = { w: mapJson.tilewidth, h: mapJson.tileheight };

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const index = y * width + x;
                const gid = terrainLayer.data[index];

                if (gid === 0) continue; // 空 tile

                const spriteFrame = this.getSpriteFrameByGID(gid, mapJson.tilesets);
                if (!spriteFrame) continue;

                const position = this.calculatePosition(x, y, tileSize.w, tileSize.h, HexagonLayout.Horizontal);

                const hexNode = new Node(`Hex_${x}_${y}`);
                const sprite = hexNode.addComponent(Sprite);
                sprite.spriteFrame = spriteFrame;

                hexNode.setPosition(position);
                this.node.addChild(hexNode);
            }
        }
    }

    /**
     * GID → SpriteFrame 映射（你需要根据你的资源系统实现）
     */
    private spriteFrameCache: Map<string, SpriteFrame> = new Map();

    public preloadTileset(tilesetName: string, frames: SpriteFrame[]) {
        frames.forEach((frame, index) => {
            this.spriteFrameCache.set(`${tilesetName}_${index}`, frame);
        });
    }

    private getSpriteFrameByGID(gid: number, tilesets: TiledTileset[]): SpriteFrame | null {
        for (let i = tilesets.length - 1; i >= 0; i--) {
            const ts = tilesets[i];
            if (gid >= ts.firstgid) {
                const localId = gid - ts.firstgid;
                return this.spriteFrameCache.get(`${ts.source.split('.')[0]}_${localId}`) || null;
            }
        }
        return null;
    }

    /**
     * 六边形坐标计算
     */
    private calculatePosition(
        col: number,
        row: number,
        w: number,
        h: number,
        layout: HexagonLayout
    ): Vec3 {
        let x, y;
        if (layout === HexagonLayout.Horizontal) {
            x = col * w + (row % 2) * (w / 2);
            y = row * h * 0.75;
        } else {
            x = col * w * 0.75;
            y = row * h + (col % 2) * (h / 2);
        }
        return new Vec3(x, y, 0); // 注意 Y 轴方向可能需要调整
    }
}