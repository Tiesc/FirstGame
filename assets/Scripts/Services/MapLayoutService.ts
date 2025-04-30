// Services/MapLayoutService.ts
import { HexagonLayout } from '../Enums/TileEnums';
import { GameConfig } from '../Core/GameConfig';

export class MapLayoutService {
    public calculateLayout(screenSize: { width: number; height: number }, layout: HexagonLayout) {
        const hexWidth = GameConfig.HEX_WIDTH;
        const hexHeight = GameConfig.HEX_HEIGHT;

        let cols, rows;
        if (layout === HexagonLayout.Horizontal) {
            cols = Math.floor(screenSize.width / hexWidth) + 1;
            rows = Math.floor(screenSize.height / (hexHeight * 0.75)) + 1;
        } else {
            cols = Math.floor(screenSize.width / (hexWidth * 0.75)) + 1;
            rows = Math.floor(screenSize.height / hexHeight) + 1;
        }

        return { cols, rows };
    }
}