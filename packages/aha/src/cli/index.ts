#!/usr/bin/env node
import { command, parse, version } from 'commander';

// @ts-ignore
import packageJson from '../package.json.js';

// commands
import { dev } from './dev';

version(`@vant/cli ${packageJson.version}`);

command('dev')
  .description('Run webpack dev server')
  .action(dev);

parse(process.argv);
