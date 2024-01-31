import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../builds/loaders/buildCssLoader';
import { BuildPaths } from '../builds/types/config';
import { buildSvgLoader } from '../builds/loaders/buildSvgLoader';
import { buildBabelLoader } from '../builds/loaders/BuildBabelLoader';
import { DefinePlugin } from '../builds/plugins/DefinePlugin';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push(buildCssLoader(true));
    config.module.rules.push(buildBabelLoader(false, true));
    config.plugins.push(DefinePlugin(true));
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg/i };
        }

        return rule;
    });
    config.module.rules.push(buildSvgLoader());

    return config;
};
