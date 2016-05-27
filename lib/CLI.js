'use strict';

import _debug     from 'debug';
import commander  from 'commander';
import cp         from 'child_process';
import fs         from 'fs';
import util       from 'util';

import global_cli from './global';
import app_cli    from './app';

const debug = _debug('lark-CLI');

function CLI () {
    debug('lib/CLI.js - CLI() called');
    process.original_cwd = process.cwd();
    process.on('exit', () => cp.execSync('cd ' + process.original_cwd));

    global_cli();
    if (findAppRoot()) {
        app_cli();
    }
    commander.parse(process.argv);
}

function findAppRoot () {
    debug('lib/CLI.js - findAppRoot() called');
    let cwd = process.cwd();
    while (true) {
        debug('lib/CLI.js - findAppRoot() checking path ' + cwd);
        try {
            let pkg = fs.readFileSync('./package.json');
            pkg = JSON.parse(pkg);
            if (pkg['lark-app'] === true) {
                return true;
            }
        }
        catch (e) {}
        process.chdir('..');
        if (process.cwd() === cwd) {
            return false;
        }
        cwd = process.cwd();
    }
}

debug('lib/CLI.js load');
export default CLI;
