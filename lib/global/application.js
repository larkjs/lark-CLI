'use strict';

import _debug     from 'debug';
import commander  from 'commander';
import chalk      from 'chalk';

import generator  from '../utils/generator';
import output     from '../utils/output';

const debug = _debug('lark-CLI');

function application () {
    debug('lib/global/application.js - application() called');
    commander.command('new <appname>')
        .option('-d, --demo', 'create demo modules after app applicationd')
        .option('--no-install-lark', 'prevent the generator to install lark for the app')
        .action((appname, options) => {
            debug('lib/global/application.js - command "new <appname>" action started ...');
            output.out(chalk.cyan('Starts to build a new application ') + chalk.yellow(appname) + chalk.cyan(' ...\nDone!'));
        });
}

debug('lib/global/application.js load');
export default application;
