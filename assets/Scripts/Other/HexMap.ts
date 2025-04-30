// HexMap.ts
import { _decorator, Component, Node, Vec3, instantiate, Prefab } from 'cc';
import { Hex, Layout, Orientation, OffsetCoord } from './HexCell2D';
const { ccclass, property } = _decorator;

@ccclass('HexMap')
export class HexMap extends Component {
    @property(Prefab)
    hexPrefab: Prefab | null = null;

    @property
    hexSize: number = 120; // 六边形的大小

    @property
    layoutType: 'pointy' | 'flat' = 'pointy'; // 布局类型

    @property
    cols: number = 10; // 列数

    @property
    rows: number = 10; // 行数

    private layout: Layout | null = null;

    start() {
        this.initializeLayout();
        this.generateHexagons();
    }

    private initializeLayout() {
        const size = new Vec3(this.hexSize, this.hexSize, 0);
        const origin = new Vec3(0, 0, 0); // 确保原点位于左下角
        const orientation = this.layoutType === 'pointy' ? Layout.pointy : Layout.flat;
        this.layout = new Layout(orientation, size, origin);
    }

    private generateHexagons() {
        if (!this.layout) return;

        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                const hex = this.offsetToHex(col, row);
                const position = this.layout.hexToPixel(hex);
                this.createHexagon(position);
            }
        }
    }

    private offsetToHex(col: number, row: number): Hex {
        return OffsetCoord.qoffsetToCube(OffsetCoord.EVEN, new OffsetCoord(col, row));
    }

    private createHexagon(position: Vec3) {
        if (!this.hexPrefab) return;

        const hexNode = instantiate(this.hexPrefab);
        hexNode.setPosition(position);
        this.node.addChild(hexNode);
    }
}