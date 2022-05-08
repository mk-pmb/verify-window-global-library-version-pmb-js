/* -*- tab-width: 2 -*- */
'use strict';
/* eslint-env browser */

module.exports = (function compile() {
  function str2num(s) { return (+s || 0); }

  function wrongVer(key, want, found) {
    const msg = ('Wrong library version in window.' + key
      + '.version: Expected ' + want + ' but found ' + found);
    return new Error(msg);
  }

  const EX = function verifyLibraryVersion(key, wantMajor, minMinor) {
    const lib = (EX.window[key] || false);
    const ver = String(lib.version || '').split('.').map(str2num);
    if (ver[0] !== wantMajor) {
      throw wrongVer(key, 'major === ' + wantMajor, ver[0]);
    }
    if (ver[1] < minMinor) {
      throw wrongVer(key, 'minor >= ' + minMinor, ver[1]);
    }
    return lib;
  };

  EX.window = window;
  return EX;
}());
