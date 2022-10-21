import { defineConfig, ConfigEnv, UserConfig } from 'vite';
import baseConfig from './base';
import devConfig from './dev';
import proConfig from './pro';
import { merge } from 'webpack-merge';
export default defineConfig(({ command }: ConfigEnv): UserConfig => {
    if (command === 'serve') {
        return merge<UserConfig>(baseConfig, devConfig);
    } else {
        return merge<UserConfig>(baseConfig, proConfig);
    }
});
