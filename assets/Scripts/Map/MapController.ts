import { _decorator, Component, Node, SpriteFrame, assetManager, view, Size, Vec3 } from 'cc';
import { MapModel } from './MapModel';
import { MapView } from './MapView';
import { HexagonLayout, HexagonSpriteFrame, MapData } from './MapData';

const { ccclass, property } = _decorator;

@ccclass('MapController')
export class MapController extends Component {
    @property({ type: HexagonLayout, tooltip: '六边形排列方式' })
    layout: HexagonLayout = HexagonLayout.Horizontal; // 默认水平排列

    private model: MapModel;
    private view: MapView;
    private mapData: MapData;

    start() {
        this.mapData = new MapData(this.layout);
        this.model = new MapModel(this.layout);
        this.view = new MapView(this.node);

        // 初始化 tileMap 数组
        this.initializeTileMap();

        // 加载资源
        this.loadResources().then(() => {
            // 获取屏幕尺寸并转换为 Vec3
            const screenSize: Size = view.getVisibleSize();
            const screenSizeVec3 = new Vec3(screenSize.width, screenSize.height, 0);

            // 计算行列数
            const { cols, rows } = this.mapData.calculateLayout(screenSizeVec3);

            // 生成六边形节点
            this.view.generateHexagons(this.model, cols, rows, this.layout);
        }).catch(err => {
            console.error('资源加载失败:', err);
        });
    }

    private initializeTileMap() {
        const cols = 10; // 假设列数为 10
        const rows = 10; // 假设行数为 10

        this.model.initializeTileMap(cols, rows);
    }

    private loadResources(): Promise<void> {
        return new Promise((resolve, reject) => {
            const bundleName = 'Images'; // 直接使用固定的 bundle 名称
            const spriteFramePaths = [
                HexagonSpriteFrame.Dirt01,
                HexagonSpriteFrame.Dirt02,
                HexagonSpriteFrame.Dirt03,
                HexagonSpriteFrame.Dirt04
            ];

            assetManager.loadBundle(bundleName, (err, bundle) => {
                if (err) {
                    console.error('Failed to load bundle:', err);
                    reject(err);
                    return;
                }

                const spriteFrames: SpriteFrame[] = [];
                const loadNext = (index: number) => {
                    if (index >= spriteFramePaths.length) {
                        this.model.setSpriteFrames(spriteFrames);
                        resolve();
                        return;
                    }

                    bundle.load(spriteFramePaths[index], SpriteFrame, (err, spriteFrame) => {
                        if (err) {
                            console.error('Failed to load sprite frame:', spriteFramePaths[index], err);
                            reject(err);
                            return;
                        }

                        spriteFrames.push(spriteFrame);
                        loadNext(index + 1);
                    });
                };

                loadNext(0);
            });
        });
    }
}