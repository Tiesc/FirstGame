// Enums/TileEnums.ts
export enum HexagonLayout {
    Horizontal,
    Vertical
}

// 六边形地图块类型枚举
export enum HexagonTileType {
    // 基础地形
    Grass,      // 草地（基础移动）
    Dirt,       // 泥土（基础移动）
    Water,      // 水（不可通行）
    Mountain,   // 山（不可通行）

    // 特殊地形
    Forest,     // 树林（移动减半 / 防御加成）
    Swamp,      // 沼泽（移动消耗+1）
    Road,       // 道路（移动加速）
    Bridge,     // 桥梁（跨越水域）

    // 动态对象（可选）
    Building,   // 建筑（阻挡视野）
    Trap        // 陷阱（进入触发伤害）
}