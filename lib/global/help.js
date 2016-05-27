'use strict';

import _debug     from 'debug';
import commander  from 'commander';
import chalk      from 'chalk';

const debug = _debug('lark-CLI');

function help () {
    debug('lib/global/help.js - help() called');
    commander.on('--help', () => {
        console.log("  Examples: ");
        console.log("  ");
        console.log("      " + chalk.cyan("$") + " lark new appname ");
        console.log("      " + chalk.cyan("$") + " lark new route foo/bar ");
        console.log("      " + chalk.cyan("$") + " lark start ");
        console.log("  ");
    });

    if (!process.argv.slice(2).length) {
        debug('lib/global/help.js - help() process arguments not given, show help info');
        process.nextTick(() => {
            commander.outputHelp();
        });
    }
}

debug('lib/global/help.js load');
export default help;
