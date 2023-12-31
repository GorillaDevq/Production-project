export function buildBabelLoader(isDev: boolean, storybook: boolean) {
    return {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env',
                    storybook && ['@babel/preset-react', { runtime: 'automatic' }]].filter(Boolean),
                plugins: [isDev && 'react-refresh/babel'].filter(Boolean),
            },
        },
    };
}
