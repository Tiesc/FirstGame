import { _decorator, CCInteger, Component, Prefab, instantiate, Node, Vec3, Label } from 'cc';
import { BLOCK_SIZE, PlayerController } from './PlayerController';
const { ccclass, property } = _decorator;

// 定义块类型枚举
enum BlockType {
    BT_NONE,
    BT_STONE,
}

enum GameState {
    GS_INIT,
    GS_PLAYING,
    GS_END,
}

@ccclass('GameManager')
export class GameManager extends Component {
    @property({ type: Prefab })
    public boxPrefab: Prefab | null = null; // 预制体

    @property({ type: CCInteger })
    public roadLength: number = 50; // 道路长度

    @property({ type: Node })
    public startMenu: Node | null = null; // 开始的 UI

    @property({ type: PlayerController })
    public playerCtrl: PlayerController | null = null; // 角色控制器

    @property({ type: Label })
    public stepsLabel: Label | null = null; // 计步器

    private _road: BlockType[] = []; // 道路数据

    start() {
        this.setCurState(GameState.GS_INIT); // 初始化游戏状态
        this.playerCtrl?.node.on('JumpEnd', this.onPlayerJumpEnd, this);
    }

    // 初始化游戏
    private init() {
        this.showStartMenu(true);
        this.generateRoad();
        this.resetPlayer();
    }

    // 显示或隐藏开始菜单
    private showStartMenu(visible: boolean) {
        if (this.startMenu) {
            this.startMenu.active = visible;
        }
    }

    // 重置玩家状态
    private resetPlayer() {
        if (this.playerCtrl) {
            this.playerCtrl.setInputActive(false);
            this.playerCtrl.node.setPosition(Vec3.ZERO);
            this.playerCtrl.reset();
        }
    }

    // 生成道路
    private generateRoad() {
        this.node.removeAllChildren(); // 移除所有子节点
        this._road = this.createRoadData(); // 生成道路数据
        this.spawnRoadBlocks(); // 生成道路块
    }

    // 创建道路数据
    private createRoadData(): BlockType[] {
        const road: BlockType[] = [BlockType.BT_STONE]; // 起点设置为石头块

        for (let i = 1; i < this.roadLength; i++) {
            if (road[i - 1] === BlockType.BT_NONE) {
                road.push(BlockType.BT_STONE); // 如果前一个块是空的，则当前块必须是石头
            } else {
                road.push(Math.random() < 0.8 ? BlockType.BT_STONE : BlockType.BT_NONE); // 随机生成块类型
            }
        }

        return road;
    }

    // 生成道路块
    private spawnRoadBlocks() {
        for (let j = 0; j < this._road.length; j++) {
            const block = this.spawnBlockByType(this._road[j]);
            if (block) {
                this.node.addChild(block);
                block.setPosition(j * BLOCK_SIZE, 0, 0);
            }
        }
    }

    // 根据块类型生成块
    private spawnBlockByType(type: BlockType): Node | null {
        if (!this.boxPrefab) {
            return null;
        }

        if (type === BlockType.BT_STONE) {
            return instantiate(this.boxPrefab); // 实例化石头块
        }

        return null;
    }

    // 设置当前游戏状态
    private setCurState(state: GameState) {
        switch (state) {
            case GameState.GS_INIT:
                this.init();
                break;
            case GameState.GS_PLAYING:
                this.startGame();
                break;
            case GameState.GS_END:
                this.endGame();
                break;
        }
    }

    // 开始游戏
    private startGame() {
        this.showStartMenu(false);
        this.resetStepsLabel();
        this.enablePlayerInput();
    }

    // 重置计步器
    private resetStepsLabel() {
        if (this.stepsLabel) {
            this.stepsLabel.string = '0';
        }
    }

    // 启用玩家输入
    private enablePlayerInput() {
        Promise.resolve().then(() => {
            if (this.playerCtrl) {
                this.playerCtrl.setInputActive(true);
            }
        });
    }

    // 结束游戏
    private endGame() {
        // 游戏结束逻辑
    }

    // 点击开始按钮
    public onStartButtonClicked() {
        this.setCurState(GameState.GS_PLAYING);
    }

    // 玩家跳跃结束
    private onPlayerJumpEnd(moveIndex: number) {
        this.updateStepsLabel(moveIndex);
        this.checkResult(moveIndex);
    }

    // 更新计步器
    private updateStepsLabel(moveIndex: number) {
        if (this.stepsLabel) {
            this.stepsLabel.string = Math.min(moveIndex, this.roadLength).toString();
        }
    }

    // 检查游戏结果
    private checkResult(moveIndex: number) {
        if (moveIndex >= this.roadLength || this._road[moveIndex] === BlockType.BT_NONE) {
            this.setCurState(GameState.GS_INIT); // 重新初始化游戏
        }
    }
}
