# key-facsimile
A key-value mirror supporting prefixing, uppercase with underscore and lowercase with dash name convension.

[![Build Status](https://snap-ci.com/aswitalski/key-facsimile/branch/master/build_image)](https://snap-ci.com/aswitalski/key-facsimile/branch/master)

## Examples

#### Key mirror:

``` js
var keyMirror = require('key-facsimile');

const Consts = keyMirror({
    MOBILE: null,
    TABLET: null,
    DESKTOP: null
});

console.log(Consts);
// prints { MOBILE: 'MOBILE', TABLET: 'TABLET', DESKTOP: 'DESKTOP' };
```

#### Key prefix:

``` js
var keyPrefix = require('key-facsimile').prefix('MODE-');

const Consts = keyPrefix({
    MOBILE: null,
    TABLET: null,
    DESKTOP: null
});

console.log(Consts);
// prints { MOBILE: 'MODE-MOBILE', TABLET: 'MODE-TABLET', DESKTOP: 'MODE-DESKTOP' };
```

#### Key lowercase conversion (with dashes):

``` js
var keyLowercase = require('key-facsimile').lowercase;

const Classes = keyLowercase({
    PRIMARY: null,
    DISABLED: null,
    HAS_FOCUS: null
});

console.log(Classes);
// prints { PRIMARY: 'primary', DISABLED: 'disabled', HAS_FOCUS: 'has-focus' };
```

#### Key uppercase conversion (with underscores):

``` js
var keyUppercase = require('key-facsimile').uppercase;

const OS = keyMirror({
    'mac-os-x': null
    linux: null,
    windows: null,
});

console.log(OS);
// prints { mac-os-x: 'MAC_OS_X', linux: 'LINUX', windows: 'WINDOWS' };
```
