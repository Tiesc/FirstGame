// MapLayoutService.ts
import { HexagonLayout } from '../Enums/TileEnums';

export class MapLayoutService {
    private hexWidth: number = 120;
    private hexHeight: number = 140;

    public calculateLayout(screenSize: { x: number; y: number }): { cols: number; rows: number } {
        let cols, rows;
        if (HexagonLayout === HexagonLayout.Horizontal) {
            cols = Math.floor(screenSize.x / this.hexWidth) + 1;
            rows = Math.floor(screenSize.y / (this.hexHeight * 0.75)) + 1;
        } else {
            cols = Math.floor(screenSize.x / (this.hexWidth * 0.75)) + 1;
            rows = Math.floor(screenSize.y / this.hexHeight) + 1;
        }

        return { cols, rows };
    }
}