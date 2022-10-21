import { defineConfig, UserConfig } from "vite";
import baseConfig from "./base";
import devConfig from "./dev";
import proConfig from "./pro";
import { merge } from "webpack-merge";

export default defineConfig((): UserConfig => {
    if (process.env.NODE_ENV === "development") {
        return merge<UserConfig>(baseConfig, devConfig);
    } else {
        return merge<UserConfig>(baseConfig, proConfig);
    }
});
