// Models/HexTileModel.ts
import { TileProperties } from '../Configs/TileProperties';
import { HexagonTileType } from '../Enums/TileEnums';

export class HexTileModel {
    constructor(
        public q: number,                     // 六边形坐标 q
        public r: number,                     // 六边形坐标 r
        public type: HexagonTileType = HexagonTileType.Grass
    ) { }

    public getMoveCost(): number {
        return TileProperties.getProperties(this.type).moveCost ?? 1;
    }

    public isPassable(): boolean {
        return TileProperties.getProperties(this.type).passable;
    }

    public getDefenseBonus(): number {
        return TileProperties.getProperties(this.type).defenseBonus ?? 0;
    }

    public blocksVision(): boolean {
        return TileProperties.getProperties(this.type).isBlockingVision ?? false;
    }
}