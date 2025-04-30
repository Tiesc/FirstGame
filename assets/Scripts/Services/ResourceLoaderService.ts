// Services/ResourceLoaderService.ts
import { SpriteFrame, assetManager, AssetManager } from 'cc';

export class ResourceLoaderService {
    /**
     * 加载资源包 (Bundle)
     * @param bundleName 资源包名称
     * @param onLoaded 加载成功回调
     * @param onError 加载失败回调
     */
    public static loadBundle(
        bundleName: string,
        onLoaded: (bundle: AssetManager.Bundle) => void,
        onError: (error: Error) => void
    ): void {
        assetManager.loadBundle(bundleName, (err, bundle) => {
            if (err) {
                console.error(`资源包加载失败: ${bundleName}`, err);
                onError(err);
                return;
            }
            onLoaded(bundle);
        });
    }

    /**
     * 从指定 Bundle 中加载 SpriteFrame
     * @param bundle 已加载的资源包
     * @param path 资源路径
     * @param onLoaded 加载成功回调
     * @param onError 加载失败回调
     */
    public static loadSpriteFrameFromBundle(
        bundle: AssetManager.Bundle,
        path: string,
        onLoaded: (spriteFrame: SpriteFrame) => void,
        onError: (error: Error) => void
    ): void {
        bundle.load(path, SpriteFrame, (err, spriteFrame) => {
            if (err) {
                console.error(`路径 [${path}] 加载 SpriteFrame 失败`, err);
                onError(err);
                return;
            }
            onLoaded(spriteFrame);
        });
    }
}