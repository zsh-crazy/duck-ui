import { defineConfig } from 'vite';
import { devOptions, proOptions } from '../../config/index';

const getEnvConfig = () => {
    if (process.env.NODE_ENV === 'development') {
        return devOptions(__dirname);
    } else {
        return proOptions(__dirname);
    }
};
export default defineConfig(getEnvConfig());
