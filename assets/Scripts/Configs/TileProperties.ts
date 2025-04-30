// Configs/TileProperties.ts
import { HexagonTileType } from '../Enums/TileEnums';

export class TileProperties {
    public static getProperties(type: HexagonTileType): {
        passable: boolean;          // 是否可通过
        moveCost?: number;          // 移动代价（默认为1）
        defenseBonus?: number;      // 防御加成（0~100）
        isBlockingVision?: boolean; // 是否阻挡视线
        displayName: string;        // 显示名称
    } {
        const props = {
            [HexagonTileType.Grass]: {
                passable: true,
                moveCost: 1,
                defenseBonus: 0,
                isBlockingVision: false,
                displayName: '草地'
            },
            [HexagonTileType.Dirt]: {
                passable: true,
                moveCost: 1,
                defenseBonus: 0,
                isBlockingVision: false,
                displayName: '泥土'
            },
            [HexagonTileType.Water]: {
                passable: false,
                moveCost: Infinity,
                defenseBonus: 0,
                isBlockingVision: true,
                displayName: '水'
            },
            [HexagonTileType.Mountain]: {
                passable: false,
                moveCost: Infinity,
                defenseBonus: 0,
                isBlockingVision: true,
                displayName: '山'
            },
            [HexagonTileType.Forest]: {
                passable: true,
                moveCost: 2,
                defenseBonus: 20,
                isBlockingVision: true,
                displayName: '树林'
            },
            [HexagonTileType.Swamp]: {
                passable: true,
                moveCost: 3,
                defenseBonus: 5,
                isBlockingVision: false,
                displayName: '沼泽'
            },
            [HexagonTileType.Road]: {
                passable: true,
                moveCost: 0.5,
                defenseBonus: 0,
                isBlockingVision: false,
                displayName: '道路'
            },
            [HexagonTileType.Bridge]: {
                passable: true,
                moveCost: 1,
                defenseBonus: 0,
                isBlockingVision: false,
                displayName: '桥梁'
            },
            [HexagonTileType.Building]: {
                passable: true,
                moveCost: 1,
                defenseBonus: 10,
                isBlockingVision: true,
                displayName: '建筑'
            },
            [HexagonTileType.Trap]: {
                passable: true,
                moveCost: 1,
                defenseBonus: 0,
                isBlockingVision: false,
                displayName: '陷阱'
            }
        };

        return props[type] || props[HexagonTileType.Grass];
    }
}