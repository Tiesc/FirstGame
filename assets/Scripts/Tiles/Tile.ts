import { _decorator, Component } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('Tile')
export class Tile extends Component {
    // 六边形宽度（支持在编辑器中配置，默认值为 120）
    @property({ type: Number, displayName: 'Hex Width', tooltip: '六边形宽度' })
    public hexWidth: number = 120;

    // 六边形高度（支持在编辑器中配置，默认值为 140）
    @property({ type: Number, displayName: 'Hex Height', tooltip: '六边形高度' })
    public hexHeight: number = 140;
}