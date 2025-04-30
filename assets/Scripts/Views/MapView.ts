// Views/MapView.ts
import { Node, Sprite, SpriteFrame, Vec3 } from 'cc';
import { HexagonLayout } from '../Enums/TileEnums';
import { GameConfig } from '../Core/GameConfig';

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

    private calculatePosition(col: number, row: number, w: number, h: number, layout: HexagonLayout): Vec3 {
        let x, y;
        if (layout === HexagonLayout.Horizontal) {
            x = col * w + (row % 2) * (w / 2);
            y = row * h * 0.75;
        } else {
            x = col * w * 0.75;
            y = row * h + (col % 2) * (h / 2);
        }
        return new Vec3(x, y, 0);
    }
}