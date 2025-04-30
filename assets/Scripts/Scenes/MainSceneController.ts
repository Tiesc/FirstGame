import { _decorator, Component, Node } from 'cc';
import { MapController } from '../Controllers/MapController';
const { ccclass, property } = _decorator;

@ccclass('MainSceneController')
export class MainSceneController extends Component {

    @_decorator.property({ type: MapController, displayName: '地图控制器' })
    private mapController: MapController | null = null;

    onLoad() {
        console.log('Main Scene Loaded');
    }

    start() {
        // 推荐在 start 中执行初始化逻辑
        this.mapController?.init();
    }

    update(deltaTime: number) {

    }
}

