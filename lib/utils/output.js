'use strict';

import $        from 'lodash';
import _debug   from 'debug';
import chalk    from 'chalk';

const debug = _debug('lark-CLI');

const output = {
    silent    : false,
    outStream : process.stdout,
    errStream : process.stderr,
    set color (enable) {
        chalk.supportsColor = !!enable;
    },
    get color () {
        return !!chalk.supportsColor;
    },

    out (content) {
        !this.silent && this.outStream.write(format(content));
    },
    err (content) {
        !this.silent && this.errStream.write(format(content));
    },
};

function format (content) {
    return content ? "  " + content.trim().replace("\n", "\n  ") + "\n" : content;
};

debug('lib/utils/output.js load');
export default output;
