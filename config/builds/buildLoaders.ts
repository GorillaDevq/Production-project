import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildBabelLoader } from './loaders/BuildBabelLoader';

export default function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const scssLoader = buildCssLoader(isDev);

    const svgLoader = buildSvgLoader();

    const fileLoader = {
        test: /\.(png|jpe?g|gif|ttf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
            outputPath: 'assets',
        },
    };

    const babelLoader = buildBabelLoader(isDev, false);

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typeScriptLoader,
        scssLoader,
    ];
}
