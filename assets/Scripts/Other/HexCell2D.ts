import { Vec3 } from 'cc';
// HexCell.ts
export class Hex {
    constructor(public q: number, public r: number, public s: number) {}
}

export class Orientation {
    constructor(
        public f0: number,
        public f1: number,
        public f2: number,
        public f3: number
    ) {}
}

export class Layout {
    static pointy = new Orientation(Math.sqrt(3), Math.sqrt(3) / 2, 0, 3 / 2);
    static flat = new Orientation(3 / 2, 0, Math.sqrt(3) / 2, Math.sqrt(3));

    constructor(
        public orientation: Orientation,
        public size: Vec3,
        public origin: Vec3
    ) {}

    hexToPixel(hex: Hex): Vec3 {
        const M = this.orientation;
        const x = (M.f0 * hex.q + M.f1 * hex.r) * this.size.x;
        const y = (M.f2 * hex.q + M.f3 * hex.r) * this.size.y;
        return new Vec3(x + this.origin.x, y + this.origin.y, 0);
    }
}

export class OffsetCoord {
    public static EVEN = 'even';

    constructor(public col: number, public row: number) {}

    public static qoffsetToCube(evenOdd: string, coord: OffsetCoord): Hex {
        const col = coord.col;
        const row = coord.row;
        const q = col - (row + (row & 1)) / 2;
        const r = row;
        const s = -q - r;
        return new Hex(q, r, s);
    }
}

