import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HexMetrics')
export class HexMetrics extends Component {

    // 外半径
    public static readonly outerRadius: number = 10;

    // 内半径（外半径乘以 √3/2）
    public static readonly innerRadius: number = HexMetrics.outerRadius * 0.866025404;

    // 六边形的六个角点
    public static readonly corners: Vec3[] = [
        new Vec3(0, 0, HexMetrics.outerRadius), // 上
        new Vec3(HexMetrics.innerRadius, 0, 0.5 * HexMetrics.outerRadius), // 右上
        new Vec3(HexMetrics.innerRadius, 0, -0.5 * HexMetrics.outerRadius), // 右下
        new Vec3(0, 0, -HexMetrics.outerRadius), // 下
        new Vec3(-HexMetrics.innerRadius, 0, -0.5 * HexMetrics.outerRadius), // 左下
        new Vec3(-HexMetrics.innerRadius, 0, 0.5 * HexMetrics.outerRadius) // 左上
    ];
}

