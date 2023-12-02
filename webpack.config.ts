import webpack from "webpack";
import { buildWebpack } from "./config/build/buildWebpack";
import path from "path";
import { BuildPlatform, type BuildMode } from "./config/build/types/types";
interface EnvVariables {
  mode?: BuildMode;
  port?: number;
  analyzer?: boolean;
  platform?: BuildPlatform;
}

export default (env: EnvVariables) => {
  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 1234,
    mode: env.mode ?? "development",
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      html: path.resolve(__dirname, "public", "index.html"),
      output: path.resolve(__dirname, "build"),
      src: path.resolve(__dirname, "src"),
    },
    analyzer: env.analyzer,
    platform: env.platform ?? "desktop",
  });
  return config;
};
