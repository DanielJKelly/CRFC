"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @name isPresent
 * @description
 * Checks whether or not the given context string contains the given string or regexp.
 * @memberof Utils
 * @kind function
 * @param {string | RegExp} test The test string or regexp.
 * @param {string} context The string to test against.
 * @param {any} options
 * @returns {boolean} Returns whether or not the context string contains the given string or regexp.
 */
exports.isPresent = (testStr, str = '', options = { startIndex: 0 }) => {
    let indexOf = -1;
    if (testStr instanceof RegExp) {
        indexOf = str.substring(options.startIndex).search(testStr);
    }
    else if (typeof testStr === 'string') {
        indexOf = str.indexOf(testStr);
    }
    if (indexOf === -1) {
        return false;
    }
    return true;
};
/**
 * @name pluralize
 * @description
 * Pluralize a string
 * @memberof Utils
 * @kind function
 * @param {string} str The string to pluralize
 * @returns {string} The pluralized string
 */
exports.pluralize = (str) => {
    const last = str.slice(-2);
    if (last[1] === 'y') {
        return str.slice(0, -1) + 'ies';
    }
    else if (/(?:.[s|z|x]|ch|sh)$/.test(last)) {
        return str + 'es';
    }
    return str + 's';
};
/**
 * @name isEmail
 * @description
 * Tests whether string is email
 * @memberof Utils
 * @kind function
 * @param {string} str The string to test
 * @returns {boolean} Returns true if string is email, false otherwise
 */
exports.isEmail = (str) => {
    return /^[\w]+@{1}(?:(?!_)[\w])+[.]{1}(?:(?!_)[\w])+$/gi.test(str);
};
/**
 * @name unary
 * @memberof Utils
 * @kind function
 * @description
 * Used to ensure single argument is passed to a callback e.x. parseInt when passed to map won't pass the index as the radix arg
 * @param fn
 */
exports.unary = (fn) => (arg) => fn(arg);
