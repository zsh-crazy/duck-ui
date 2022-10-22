import setBaseConfig from './base';
import setDevConfig from './dev';
import proConfig from './pro';
import { merge } from 'webpack-merge';
export const devOptions = (path: string) =>
    merge(setBaseConfig(path), setDevConfig(path));
export const proOptions = (path: string) =>
    merge(setBaseConfig(path), proConfig);
