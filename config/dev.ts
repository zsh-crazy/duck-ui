import { resolve } from 'path';
import { UserConfig } from 'vite';
process.env.BROWSER = 'chrome';
const devConfig = {
    build: {
        target: 'es2015', // 设置最终构建的浏览器兼容目标。默认值是一个 Vite 特有的值——'modules'  还可设置为 'es2015' 'es2016'等
        sourcemap: false, // 构建后是否生成 source map 文件。如果为 true，将会创建一个独立的 source map 文件
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
            exclude: resolve(__dirname, '..', 'node_modules/**')
        },
        manifest: false
    }
};

export default <UserConfig>devConfig;
