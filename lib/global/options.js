'use strict';

import _debug     from 'debug';
import commander  from 'commander';
import fs         from 'fs';
import path       from 'path';

import output     from './../utils/output';

const debug = _debug('lark-CLI');

function options () {
    debug('lib/global/options.js - options() called');
    commander.option('-s, --silent', 'silencing output');
    commander.option('-o, --out <OUTFILE>', 'print output from stdout into OUTFILE');
    commander.option('-e, --err <ERRFILE>', 'print output from stderr into ERRFILE');
    commander.option('--no-color', 'disable output coloring');

    commander.on('silent', () => {
        output.silent = true;
        debug('lib/global/options.js - commander.on("silent") emitted, silent is set true');
    });

    commander.on('out', file => {
        output.outStream = fs.createWriteStream(
                path.isAbsolute(file) ?
                file : 
                path.join(process.original_cwd, file)
        );
        debug('lib/global/options.js - commander.on("out") emitted, out stream path is set to ' + output.outStream.path);
    });

    commander.on('err', file => {
        output.errStream = fs.createWriteStream(
                path.isAbsolute(file) ?
                file : 
                path.join(process.original_cwd, file)
        );
        debug('lib/global/options.js - commander.on("err") emitted, error stream path is set to ' + output.errStream.path);
    });

    commander.on('color', () => {
        output.color = true;
        debug('lib/global/options.js - commander.on("color") emitted, no-color is set true');
    });
}

debug('lib/global/options.js load');
export default options;
