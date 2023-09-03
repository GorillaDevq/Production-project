import webpack from "webpack";
import path from "path";
import buildLoaders from "./buildLoaders";
import buildResolves from "./buildResolves";
import buildPlugins from "./buildPlugins";

import { BuildOptions } from "./types/config";


export default function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths } = options;

    return {
        mode,
        entry: paths.entry,
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolves(),
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
    };
}