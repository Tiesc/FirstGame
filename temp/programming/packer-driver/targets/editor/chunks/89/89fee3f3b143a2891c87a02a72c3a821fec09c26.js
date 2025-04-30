System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, Input, Animation, Node, UITransform, view, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, BLOCK_SIZE, PlayerController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      Input = _cc.Input;
      Animation = _cc.Animation;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      view = _cc.view;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d0ce9NCzRZOkYLfNQXcnR4E", "PlayerController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Vec3', 'EventMouse', 'input', 'Input', 'Animation', 'EventTouch', 'Node', 'UITransform', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BLOCK_SIZE", BLOCK_SIZE = 40);

      _export("PlayerController", PlayerController = (_dec = ccclass("PlayerController"), _dec2 = property(Animation), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = class PlayerController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "BodyAnim", _descriptor, this);

          this._startJump = false;
          this._jumpStep = 0;
          this._curJumpTime = 0;
          this._jumpTime = 0.3;
          this._curJumpSpeed = 0;
          this._curPos = new Vec3();
          this._deltaPos = new Vec3(0, 0, 0);
          this._targetPos = new Vec3();
          this._curMoveIndex = 0;

          _initializerDefineProperty(this, "leftTouch", _descriptor2, this);

          _initializerDefineProperty(this, "rightTouch", _descriptor3, this);
        }

        start() {
          this.setupTouchAreas(); // 设置触摸区域
        } // 设置触摸区域


        setupTouchAreas() {
          const screenSize = view.getVisibleSize(); // 获取屏幕尺寸

          const halfWidth = screenSize.width / 2; // 屏幕宽度的一半

          const height = screenSize.height; // 屏幕高度
          // 设置 leftTouch 的大小、锚点和位置

          const leftTransform = this.leftTouch.getComponent(UITransform);

          if (leftTransform) {
            leftTransform.setContentSize(halfWidth, height); // 设置大小

            leftTransform.setAnchorPoint(0, 0.5); // 设置锚点为 (0, 0.5)

            this.leftTouch.setPosition(-screenSize.width / 2, 0, 0); // 设置位置
          } // 设置 rightTouch 的大小、锚点和位置


          const rightTransform = this.rightTouch.getComponent(UITransform);

          if (rightTransform) {
            rightTransform.setContentSize(halfWidth, height); // 设置大小

            rightTransform.setAnchorPoint(1, 0.5); // 设置锚点为 (1, 0.5)

            this.rightTouch.setPosition(screenSize.width / 2, 0, 0); // 设置位置
          }
        }

        setInputActive(active) {
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

        onTouchStart(event) {
          const target = event.target;

          if ((target == null ? void 0 : target.name) === 'LeftTouch') {
            this.jumpByStep(1); // 左半边触摸，单步跳跃
          } else {
            this.jumpByStep(2); // 右半边触摸，双步跳跃
          }
        }

        onMouseUp(event) {
          if (event.getButton() === 0) {
            this.jumpByStep(1); // 左键单步跳跃
          } else if (event.getButton() === 2) {
            this.jumpByStep(2); // 右键双步跳跃
          }
        }

        jumpByStep(step) {
          if (this._startJump) {
            return; // 如果正在跳跃，则忽略
          }

          this._startJump = true;
          this._jumpStep = step;
          this._curJumpTime = 0;
          const clipName = step === 1 ? 'oneStep' : 'twoStep';
          const state = this.BodyAnim.getState(clipName);
          this._jumpTime = state.duration;
          this._curJumpSpeed = step * BLOCK_SIZE / this._jumpTime;
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

        update(deltaTime) {
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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "BodyAnim", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "leftTouch", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "rightTouch", [_dec4], {
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
//# sourceMappingURL=89fee3f3b143a2891c87a02a72c3a821fec09c26.js.map