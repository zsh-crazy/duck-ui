import { resolve } from 'path';
import { UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginTransformFilterCssModule from 'vite-plugin-filter-css-moudle';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
// https://vitejs.dev/config/
export default <UserConfig>{
    resolve: {
        alias: {
            '@': resolve(__dirname, '..', 'src')
        },
        extensions: ['.ts', '.tsx', '.json', 'js']
    },

    css: {
        preprocessorOptions: {
            scss: {
                charset: false,
                additionalData: `@use "@/styles/mixin.scss" as *;@import "@/styles/variables.scss";`
            }
        }
    },
    plugins: [
        react({
            exclude: /node_modules/,
            include: '**/*.(t|j)sx',
            babel: {
                plugins: [
                    [
                        '@babel/plugin-transform-react-jsx',
                        {
                            runtime: 'automatic',
                            importSource: 'react-auto-clsx'
                        },
                        '@babel-auto-react-jsx'
                    ]
                ]
            }
        }),
        vitePluginTransformFilterCssModule([
            {
                test: /\.s[ac]ss$/i,
                modules: {
                    generateScopedName: '[path]___[local]___[hash:base64:5]'
                }
            }
        ]),
        createSvgIconsPlugin({
            // 指定需要缓存的图标文件夹
            iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
            // 指定symbolId格式
            symbolId: 'icon-[dir]-[name]',
            /**
             * 自定义插入位置
             * @default: body-last
             */
            inject: 'body-first' //'body-last' | 'body-first'
        })
    ]
};
