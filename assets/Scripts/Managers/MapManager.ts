// Scripts/Managers/MapManager.ts
import { resources } from 'cc';
import { TiledMapJson } from '../Data/MapData';

export class MapManager {
    public static async loadMap(mapName: string): Promise<TiledMapJson> {
        return new Promise((resolve, reject) => {
            resources.load(`Maps/${mapName}`, (err, jsonAsset) => {
                if (err) {
                    console.error('加载地图失败:', err);
                    reject(err);
                    return;
                }
                const mapJson = jsonAsset.json as TiledMapJson;
                resolve(mapJson);
            });
        });
    }

    public static getLayerByName(mapJson: TiledMapJson, layerName: string) {
        return mapJson.layers.find(layer => layer.name === layerName);
    }
}