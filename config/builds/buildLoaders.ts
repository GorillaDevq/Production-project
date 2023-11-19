import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export default function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Создает стили из JS строк
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Транслирует CSS в нативный JS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: /\.module\.scss$/i,
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]',
                    },
                },
            },
            // Компилирует данные препроцессора в CSS
            'sass-loader',
        ],
    };

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|ttf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
            outputPath: 'assets',
        },
    };

    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [isDev && 'react-refresh/babel'].filter(Boolean),
            },
        },
    };

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typeScriptLoader,
        scssLoader,
    ];
}
