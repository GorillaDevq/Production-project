import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export default function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
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
                loader: "css-loader",
                options: {
                    modules: {
                        auto: /\.module\.scss$/i,
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]'
                    },
                }
            },
            // Компилирует данные препроцессора в CSS
            "sass-loader",
        ],
    }

    return [
        typeScriptLoader,
        scssLoader,
    ]
}