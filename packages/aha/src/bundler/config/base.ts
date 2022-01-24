import FriendlyErrorsPlugin from '@nuxt/friendly-errors-webpack-plugin';

export function getBaseConfig() {
  return {
    plugins: [
      new FriendlyErrorsPlugin({
        clearConsole: false,
        logLevel: 'WARNING',
      }),
    ],
  };
}
