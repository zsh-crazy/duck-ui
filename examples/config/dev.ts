import { UserConfig } from 'vite';
process.env.BROWSER = 'chrome';
const devConfig = {
    mode: 'development',
    server: {
        host: '0.0.0.0'
    }
};

export default <UserConfig>devConfig;
