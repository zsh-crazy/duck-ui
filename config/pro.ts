import { UserConfig } from "vite";
const proConfig = {
    build: {
        target: "es2015", // 设置最终构建的浏览器兼容目标。默认值是一个 Vite 特有的值——'modules'  还可设置为 'es2015' 'es2016'等
        minify: "terser", // 'terser' 相对较慢，但大多数情况下构建后的文件体积更小。'esbuild' 最小化混淆更快但构建后的文件相对更大。
        terserOptions: {
            compress: {
                drop_console: true, // 生产环境去除console
                drop_debugger: true, // 生产环境去除debugger
            },
        },
        sourcemap: false, // 构建后是否生成 source map 文件。如果为 true，将会创建一个独立的 source map 文件
        manifest: true,
    },
};

export default <UserConfig>proConfig;
