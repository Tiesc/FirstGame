// Scripts/Data/MapData.ts
export interface TiledMapJson {
    width: number;
    height: number;
    tilewidth: number;
    tileheight: number;
    hexsidelength: number;
    staggeraxis: string; // "x" or "y"
    staggerindex: string; // "even" or "odd"
    layers: TiledLayer[];
    tilesets: TiledTileset[];
}

export interface TiledLayer {
    name: string;
    type: string; // "tilelayer" / "objectgroup"
    data: number[]; // 如果是 tilelayer
    objects?: TiledObject[]; // 如果是 objectgroup
}

export interface TiledObject {
    id: number;
    name: string;
    type: string;
    x: number;
    y: number;
    properties?: Record<string, any>;
}

export interface TiledTileset {
    firstgid: number;
    source: string; // .tsx 文件路径或图像名
}