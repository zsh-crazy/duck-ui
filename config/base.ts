import { resolve } from 'path';
import { UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginTransformFilterCssModule from 'vite-plugin-filter-css-moudle';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import dts from 'vite-plugin-dts';
export default function setBaseConfig(basePath: string): UserConfig {
    return {
        resolve: {
            extensions: ['.ts', '.tsx', '.json', 'js'],
            alias: [{ find: '@', replacement: resolve(basePath, '.', './src') }]
        },
        css: {
            preprocessorOptions: {
                scss: {
                    charset: false,
                    additionalData: '@import "@/styles/variables.scss";'
                }
            }
        },
        plugins: [
            react({
                exclude: /node_modules/,
                include: [resolve(basePath, '**/*.(t|j)sx')],
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
                    test: /src\/components\/([a-z-]+\/)*[a-z-]+\.s[ac]ss$/i,
                    modules: {
                        generateScopedName: 'kf_[local]'
                    }
                },
                {
                    test: /\.s[ac]ss$/i,
                    modules: {
                        generateScopedName: '[path]___[local]___[hash:base64:5]'
                    }
                }
            ]),
            createSvgIconsPlugin({
                // 指定需要缓存的图标文件夹
                iconDirs: [resolve(basePath, 'src/assets/icons')],
                // 指定symbolId格式
                symbolId: 'icon-[dir]-[name]',
                /**
                 * 自定义插入位置
                 * @default: body-last
                 */
                inject: 'body-first' //'body-last' | 'body-first'
            }),
            dts({
                outputDir: 'dist/types'
            })
        ],
        build: {
            target: 'es2016',
            emptyOutDir: false,
            outDir: 'dist',
            cssCodeSplit: false,
            rollupOptions: {
                external: ['react', 'react-dom'],
                output: {
                    globals: {
                        react: 'React',
                        'react-dom': 'ReactDOM'
                    }
                }
            },
            lib: {
                entry: resolve(basePath, '.', 'src/index.ts'),
                name: 'index',
                fileName: (format) => `index.${format}.js`
            }
        }
    };
}
