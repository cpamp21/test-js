

function getName(func) {
    var f = 'function '.length;
    var str = func.toString();
    return str.substr(f, str.indexOf('(') - f);
}

function toStr(val): string {
    if (val === null) return 'null';
    if (val === true) return 'true';
    if (val === false) return 'false';
    if (val === void 0) return 'undefined';
    return val;
}

function assert(pf: string, f, e, a, eq: string) {
    return f + " " + pf + ": " + toStr(e) + " " + eq + " " + toStr(a);
}

const FAILED = "Failed";
const PASSED = "Passed";

export module Utilities {
    export function getFuncName(func) {
        return func.name || getName(func);
    }

    export function assertFail(f, e, a, eq: string) {
        return assert(FAILED, f, e, a, eq);
    }

    export function assertPass(f, e, a, eq: string) {
        return assert(PASSED, f, e, a, eq);
    }
}