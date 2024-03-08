import webpack from 'webpack';

export const DefinePlugin = (isDev: boolean, apiUrl: string) => new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev),
    __API__: JSON.stringify(apiUrl),
});
