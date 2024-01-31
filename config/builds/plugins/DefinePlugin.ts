import webpack from 'webpack';

export const DefinePlugin = (isDev: boolean) => new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev),
});
