'use strict';

import _debug   from 'debug';

import options      from './options';
import help         from './help';
import application  from './application';

const debug = _debug('lark-CLI');

function global () {
    debug('lib/global/index.js - global() called');
    options();
    help();
    application();
}

debug('lib/global/index.js load');
export default global;
