// Controllers/MapController.ts
import { _decorator, Component, Node, view, Size, Vec3, SpriteFrame, resources, Enum, AssetManager } from 'cc';
import { MapView } from '../Views/MapView';
import { MapModel } from '../Models/MapModel';
import { HexagonLayout } from '../Enums/TileEnums';
import { GameConfig } from '../Core/GameConfig';
import { MapLayoutService } from '../Services/MapLayoutService';
import { ResourceLoaderService } from '../Services/ResourceLoaderService';
import { MapManager } from '../Managers/MapManager';

@_decorator.ccclass('MapController')
export class MapController extends Component {
    @_decorator.property({
        type: Enum(HexagonLayout),
        tooltip: '六边形排列方式'
    })
    layout: HexagonLayout = HexagonLayout.Horizontal;

    private model: MapModel;
    private view: MapView;
    private mapLayoutService: MapLayoutService = new MapLayoutService();
    public async init(): Promise<void> {
        this.model = new MapModel();
        this.view = new MapView(this.node);
        try {
            const spriteFrames = await this.loadResources();
            const screenSize: Size = view.getVisibleSize();
            const { cols, rows } = this.mapLayoutService.calculateLayout(
                { width: screenSize.width, height: screenSize.height },
                this.layout
            );
            // const mapJson = await MapManager.loadMap('map1');
            // this.view.generateFromTiledMap(mapJson); // 调用视图方法生成地图
            this.view.generateHexagons(this.model.getTileMap(), spriteFrames, this.layout);
        } catch (error) {
            console.error('地图初始化失败:', error);
        }
    }

    private async loadResources(): Promise<SpriteFrame[]> {
        return new Promise<SpriteFrame[]>((resolve, reject) => {
            resources.load('tile_config', async (err, jsonAsset) => {
                if (err) {
                    console.error('加载 tile_config.json 失败:', err);
                    reject(err);
                    return;
                }

                const config = jsonAsset.json;
                const bundleName = config.tileSets['bundle'];
                const paths = config.tileSets['Dirt'];

                try {
                    // 先加载 Bundle
                    const bundle = await new Promise<AssetManager.Bundle>((resolveBundle, rejectBundle) => {
                        ResourceLoaderService.loadBundle(bundleName, resolveBundle, rejectBundle);
                    });

                    // 再并行加载 SpriteFrames
                    const spriteFrames = await Promise.all(
                        paths.map(path =>
                            new Promise<SpriteFrame>((resolveSprite, rejectSprite) => {
                                ResourceLoaderService.loadSpriteFrameFromBundle(
                                    bundle,
                                    path,
                                    resolveSprite,
                                    rejectSprite
                                );
                            })
                        )
                    );

                    resolve(spriteFrames); // ✅ 返回加载完成的 SpriteFrame 数组
                } catch (error) {
                    reject(error);
                }
            });
        });
    }
}