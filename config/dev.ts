import { resolve } from 'path';
import { UserConfig } from 'vite';

export default function setDevConfig(basePath: string): UserConfig {
    return {
        build: {
            target: 'modules', // 设置最终构建的浏览器兼容目标。默认值是一个 Vite 特有的值——'modules'  还可设置为 'es2015' 'es2016'等
            sourcemap: false, // 构建后是否生成 source map 文件。如果为 true，将会创建一个独立的 source map 文件
            reportCompressedSize: false,
            minify: false,
            watch: {
                chokidar: {
                    usePolling: false,
                    interval: 100,
                    binaryInterval: 300,
                    alwaysStat: false,
                    depth: 99,
                    awaitWriteFinish: {
                        stabilityThreshold: 2000,
                        pollInterval: 100
                    },
                    ignorePermissionErrors: false
                },
                clearScreen: true,
                exclude: resolve(basePath, '.', 'node_modules/**')
            },
            manifest: false
        }
    };
}
