// MapData.ts
import { Vec3 } from 'cc';
import { HexagonLayout } from '../Enums/TileEnums';

export class MapData {
    private readonly hexWidth: number;
    private readonly hexHeight: number;

    constructor(public layout: HexagonLayout, hexWidth: number = 120, hexHeight: number = 140) {
        this.hexWidth = hexWidth;
        this.hexHeight = hexHeight;
    }

    public calculateLayout(screenSize: Vec3): { cols: number; rows: number } {
        let cols, rows;
        if (this.layout === HexagonLayout.Horizontal) {
            cols = Math.floor(screenSize.x / this.hexWidth) + 1;
            rows = Math.floor(screenSize.y / (this.hexHeight * 0.75)) + 1;
        } else {
            cols = Math.floor(screenSize.x / (this.hexWidth * 0.75)) + 1;
            rows = Math.floor(screenSize.y / this.hexHeight) + 1;
        }

        return { cols, rows };
    }
}