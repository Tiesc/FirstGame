import { SpriteFrame } from 'cc';
import { HexagonLayout, HexagonSpriteFrame } from './MapData';

export class MapModel {
    private tileMap: string[][] = [];
    private spriteFrames: SpriteFrame[] = [];

    constructor(private layout: HexagonLayout) {}

    public getTileMap(): string[][] {
        return this.tileMap;
    }

    public getSpriteFrames(): SpriteFrame[] {
        return this.spriteFrames;
    }

    public initializeTileMap(cols: number, rows: number) {
        this.tileMap = Array.from({ length: rows }, () =>
            Array.from({ length: cols }, () => {
                const randomIndex = Math.floor(Math.random() * 4) + 1; // 随机选择 1 到 4
                return `dirt_0${randomIndex}`;
            })
        );
    }

    public setSpriteFrames(spriteFrames: SpriteFrame[]) {
        this.spriteFrames = spriteFrames;
    }
}