import { _decorator, Component, Vec3, EventMouse, input, Input, Animation, EventTouch, Node, UITransform, view } from "cc";
const { ccclass, property } = _decorator;

export const BLOCK_SIZE = 40;

@ccclass("PlayerController")
export class PlayerController extends Component {

    @property(Animation)
    BodyAnim: Animation = null;

    private _startJump: boolean = false;
    private _jumpStep: number = 0;
    private _curJumpTime: number = 0;
    private _jumpTime: number = 0.3;
    private _curJumpSpeed: number = 0;
    private _curPos: Vec3 = new Vec3();
    private _deltaPos: Vec3 = new Vec3(0, 0, 0);
    private _targetPos: Vec3 = new Vec3();
    private _curMoveIndex = 0;

    @property(Node)
    leftTouch: Node = null;

    @property(Node)
    rightTouch: Node = null;

    start() {
        this.setupTouchAreas(); // 设置触摸区域
    }

    // 设置触摸区域
    private setupTouchAreas() {
        const screenSize = view.getVisibleSize(); // 获取屏幕尺寸
        const halfWidth = screenSize.width / 2; // 屏幕宽度的一半
        const height = screenSize.height; // 屏幕高度

        // 设置 leftTouch 的大小、锚点和位置
        const leftTransform = this.leftTouch.getComponent(UITransform);
        if (leftTransform) {
            leftTransform.setContentSize(halfWidth, height); // 设置大小
            leftTransform.setAnchorPoint(0, 0.5); // 设置锚点为 (0, 0.5)
            this.leftTouch.setPosition(-screenSize.width / 2, 0, 0); // 设置位置
        }

        // 设置 rightTouch 的大小、锚点和位置
        const rightTransform = this.rightTouch.getComponent(UITransform);
        if (rightTransform) {
            rightTransform.setContentSize(halfWidth, height); // 设置大小
            rightTransform.setAnchorPoint(1, 0.5); // 设置锚点为 (1, 0.5)
            this.rightTouch.setPosition(screenSize.width / 2, 0, 0); // 设置位置
        }
    }

    setInputActive(active: boolean) {
        if (active) {
            this.leftTouch.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
            this.rightTouch.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        } else {
            this.leftTouch.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
            this.rightTouch.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
        }
    }

    reset() {
        this._curMoveIndex = 0;
    }

    onTouchStart(event: EventTouch) {
        const target = event.target as Node;
        if (target?.name === 'LeftTouch') {
            this.jumpByStep(1); // 左半边触摸，单步跳跃
        } else {
            this.jumpByStep(2); // 右半边触摸，双步跳跃
        }
    }

    onMouseUp(event: EventMouse) {
        if (event.getButton() === 0) {
            this.jumpByStep(1); // 左键单步跳跃
        } else if (event.getButton() === 2) {
            this.jumpByStep(2); // 右键双步跳跃
        }
    }

    jumpByStep(step: number) {
        if (this._startJump) {
            return; // 如果正在跳跃，则忽略
        }

        this._startJump = true;
        this._jumpStep = step;
        this._curJumpTime = 0;

        const clipName = step === 1 ? 'oneStep' : 'twoStep';
        const state = this.BodyAnim.getState(clipName);
        this._jumpTime = state.duration;

        this._curJumpSpeed = (step * BLOCK_SIZE) / this._jumpTime;
        this.node.getPosition(this._curPos);
        Vec3.add(this._targetPos, this._curPos, new Vec3(step * BLOCK_SIZE, 0, 0));

        if (this.BodyAnim) {
            this.BodyAnim.play(clipName); // 播放动画
        }

        this._curMoveIndex += step;
    }

    onOnceJumpEnd() {
        this.node.emit('JumpEnd', this._curMoveIndex);
    }

    update(deltaTime: number) {
        if (this._startJump) {
            this._curJumpTime += deltaTime; // 累计跳跃时间

            if (this._curJumpTime > this._jumpTime) {
                // 跳跃结束
                this.node.setPosition(this._targetPos); // 强制位置到终点
                this._startJump = false; // 清理跳跃标记
                this.onOnceJumpEnd();
            } else {
                // 跳跃中
                this.node.getPosition(this._curPos);
                this._deltaPos.x = this._curJumpSpeed * deltaTime; // 计算每帧位移
                Vec3.add(this._curPos, this._curPos, this._deltaPos); // 应用位移
                this.node.setPosition(this._curPos); // 更新角色位置
            }
        }
    }
}
