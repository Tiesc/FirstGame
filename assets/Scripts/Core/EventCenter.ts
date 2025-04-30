// EventCenter.ts
import { _decorator, Component, SystemEvent, EventTarget, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EventCenter')
export class EventCenter extends Component {
    private static _instance: EventCenter;

    public static get Instance(): EventCenter {
        return this._instance;
    }

    private eventTarget: EventTarget = new EventTarget();

    onLoad() {
        if (EventCenter._instance) {
            this.node.destroy();
        } else {
            EventCenter._instance = this;
            director.addPersistRootNode(this.node);
        }
    }

    /**
     * 监听事件
     * @param eventName 事件名称
     * @param callback 回调函数
     * @param target 绑定对象（可选）
     */
    on(eventName: string, callback: (arg?: any) => void, target?: any) {
        this.eventTarget.on(eventName, callback, target);
    }

    /**
     * 监听一次事件后自动取消
     * @param eventName 事件名称
     * @param callback 回调函数
     * @param target 绑定对象（可选）
     */
    once(eventName: string, callback: (arg?: any) => void, target?: any) {
        this.eventTarget.once(eventName, callback, target);
    }

    /**
     * 触发事件
     * @param eventName 事件名称
     * @param arg 参数（可选）
     */
    emit(eventName: string, arg?: any) {
        this.eventTarget.emit(eventName, arg);
    }

    /**
     * 移除监听器
     * @param eventName 事件名称
     * @param callback 回调函数
     * @param target 绑定对象（可选）
     */
    off(eventName: string, callback: (arg?: any) => void, target?: any) {
        this.eventTarget.off(eventName, callback, target);
    }

    /**
     * 移除所有监听器
     */
    removeAllListeners() {
        this.eventTarget.targetOff(this);
    }
}