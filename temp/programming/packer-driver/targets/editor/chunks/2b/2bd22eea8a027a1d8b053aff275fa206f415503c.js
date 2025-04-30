System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCInteger, Component, Prefab, instantiate, Node, Vec3, Label, BLOCK_SIZE, PlayerController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, BlockType, GameState, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBLOCK_SIZE(extras) {
    _reporterNs.report("BLOCK_SIZE", "./PlayerController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerController(extras) {
    _reporterNs.report("PlayerController", "./PlayerController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      BLOCK_SIZE = _unresolved_2.BLOCK_SIZE;
      PlayerController = _unresolved_2.PlayerController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5cf00ZyaWRBbqiMv0DCC22h", "GameManager", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Component', 'Prefab', 'instantiate', 'Node', 'Vec3', 'Label']);

      ({
        ccclass,
        property
      } = _decorator); // 定义块类型枚举

      BlockType = /*#__PURE__*/function (BlockType) {
        BlockType[BlockType["BT_NONE"] = 0] = "BT_NONE";
        BlockType[BlockType["BT_STONE"] = 1] = "BT_STONE";
        return BlockType;
      }(BlockType || {});

      GameState = /*#__PURE__*/function (GameState) {
        GameState[GameState["GS_INIT"] = 0] = "GS_INIT";
        GameState[GameState["GS_PLAYING"] = 1] = "GS_PLAYING";
        GameState[GameState["GS_END"] = 2] = "GS_END";
        return GameState;
      }(GameState || {});

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: CCInteger
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: _crd && PlayerController === void 0 ? (_reportPossibleCrUseOfPlayerController({
          error: Error()
        }), PlayerController) : PlayerController
      }), _dec6 = property({
        type: Label
      }), _dec(_class = (_class2 = class GameManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "boxPrefab", _descriptor, this);

          // 预制体
          _initializerDefineProperty(this, "roadLength", _descriptor2, this);

          // 道路长度
          _initializerDefineProperty(this, "startMenu", _descriptor3, this);

          // 开始的 UI
          _initializerDefineProperty(this, "playerCtrl", _descriptor4, this);

          // 角色控制器
          _initializerDefineProperty(this, "stepsLabel", _descriptor5, this);

          // 计步器
          this._road = [];
        }

        // 道路数据
        start() {
          var _this$playerCtrl;

          this.setCurState(GameState.GS_INIT); // 初始化游戏状态

          (_this$playerCtrl = this.playerCtrl) == null || _this$playerCtrl.node.on('JumpEnd', this.onPlayerJumpEnd, this);
        } // 初始化游戏


        init() {
          this.showStartMenu(true);
          this.generateRoad();
          this.resetPlayer();
        } // 显示或隐藏开始菜单


        showStartMenu(visible) {
          if (this.startMenu) {
            this.startMenu.active = visible;
          }
        } // 重置玩家状态


        resetPlayer() {
          if (this.playerCtrl) {
            this.playerCtrl.setInputActive(false);
            this.playerCtrl.node.setPosition(Vec3.ZERO);
            this.playerCtrl.reset();
          }
        } // 生成道路


        generateRoad() {
          this.node.removeAllChildren(); // 移除所有子节点

          this._road = this.createRoadData(); // 生成道路数据

          this.spawnRoadBlocks(); // 生成道路块
        } // 创建道路数据


        createRoadData() {
          const road = [BlockType.BT_STONE]; // 起点设置为石头块

          for (let i = 1; i < this.roadLength; i++) {
            if (road[i - 1] === BlockType.BT_NONE) {
              road.push(BlockType.BT_STONE); // 如果前一个块是空的，则当前块必须是石头
            } else {
              road.push(Math.random() < 0.8 ? BlockType.BT_STONE : BlockType.BT_NONE); // 随机生成块类型
            }
          }

          return road;
        } // 生成道路块


        spawnRoadBlocks() {
          for (let j = 0; j < this._road.length; j++) {
            const block = this.spawnBlockByType(this._road[j]);

            if (block) {
              this.node.addChild(block);
              block.setPosition(j * (_crd && BLOCK_SIZE === void 0 ? (_reportPossibleCrUseOfBLOCK_SIZE({
                error: Error()
              }), BLOCK_SIZE) : BLOCK_SIZE), 0, 0);
            }
          }
        } // 根据块类型生成块


        spawnBlockByType(type) {
          if (!this.boxPrefab) {
            return null;
          }

          if (type === BlockType.BT_STONE) {
            return instantiate(this.boxPrefab); // 实例化石头块
          }

          return null;
        } // 设置当前游戏状态


        setCurState(state) {
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
        } // 开始游戏


        startGame() {
          this.showStartMenu(false);
          this.resetStepsLabel();
          this.enablePlayerInput();
        } // 重置计步器


        resetStepsLabel() {
          if (this.stepsLabel) {
            this.stepsLabel.string = '0';
          }
        } // 启用玩家输入


        enablePlayerInput() {
          Promise.resolve().then(() => {
            if (this.playerCtrl) {
              this.playerCtrl.setInputActive(true);
            }
          });
        } // 结束游戏


        endGame() {// 游戏结束逻辑
        } // 点击开始按钮


        onStartButtonClicked() {
          this.setCurState(GameState.GS_PLAYING);
        } // 玩家跳跃结束


        onPlayerJumpEnd(moveIndex) {
          this.updateStepsLabel(moveIndex);
          this.checkResult(moveIndex);
        } // 更新计步器


        updateStepsLabel(moveIndex) {
          if (this.stepsLabel) {
            this.stepsLabel.string = Math.min(moveIndex, this.roadLength).toString();
          }
        } // 检查游戏结果


        checkResult(moveIndex) {
          if (moveIndex >= this.roadLength || this._road[moveIndex] === BlockType.BT_NONE) {
            this.setCurState(GameState.GS_INIT); // 重新初始化游戏
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "boxPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "roadLength", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 50;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "startMenu", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "playerCtrl", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "stepsLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2bd22eea8a027a1d8b053aff275fa206f415503c.js.map