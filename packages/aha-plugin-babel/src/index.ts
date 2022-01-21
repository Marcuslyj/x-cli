import { AhaPlugin } from 'hey_aha';

function configureWebpack() {
  return {
    resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.(js|ts|jsx|tsx)$/,
          exclude: /node_modules/,
          use: ['cache-loader', 'babel-loader'],
        },
      ],
    },
  };
}

export const AhaPluginBabel: AhaPlugin = (api) => {
  api.configureWebpack(configureWebpack);
};
