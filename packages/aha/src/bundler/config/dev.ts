import merge from 'webpack-merge';
import WebpackBar from 'webpackbar';
import { getBaseConfig } from './base';

export function getDevConfig() {
  const baseConfig = getBaseConfig();
  const devConfig = {
    mode: 'development',
    plugins: [
      new WebpackBar({
        name: 'Aha',
        color: '#18b4fe',
      }),
    ],
  };

  return merge(baseConfig, devConfig);
}
