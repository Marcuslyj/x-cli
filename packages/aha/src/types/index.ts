import { Configuration } from 'webpack';

export type AhaAPI = {
  configureWebpack(fn: (config: Configuration) => Configuration): void;
};

export type AhaPlugin = (api: AhaAPI) => void;
