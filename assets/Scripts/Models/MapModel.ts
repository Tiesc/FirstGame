// Models/MapModel.ts
import { HexagonTileType } from '../Enums/TileEnums';

export class MapModel {
    private tileMap: string[][] = [];

    constructor(private rows: number = 10, private cols: number = 10) {
        this.initializeTileMap(rows, cols);
    }

    public initializeTileMap(rows: number, cols: number): void {
        this.tileMap = Array.from({ length: rows }, () =>
            Array.from({ length: cols }, () => {
                const randomIndex = Math.floor(Math.random() * 4) + 1;
                return `dirt_0${randomIndex}`;
            })
        );
    }

    public getTileMap(): string[][] {
        return this.tileMap;
    }
}