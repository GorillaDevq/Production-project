import webpack from "webpack";

export default function buildLoaders(): webpack.RuleSetRule[] {
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Создает стили из JS строк
            "style-loader",
            // Транслирует CSS в нативный JS
            "css-loader",
            // Компилирует данные препроцессора в CSS
            "sass-loader",
        ],
    }

    return [
        typeScriptLoader,
        scssLoader,
    ]
}