
<!--#echo json="package.json" key="name" underline="=" -->
verify-window-global-library-version-pmb
========================================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Utility function to ensure window.Vue is compatible with my web app.
<!--/#echo -->



API
---

This module exports one function:

### verifyLibraryVersion(key, wantMajor, minMinor)

Checks `window[key].version`.
If acceptable, returns `window[key]`.
Throws an error if the major version is not `wantMajor`
or the minor version is lower than `minMinor`.



Usage
-----

```javascript
const needLibVer = require('verify-window-global-library-version-pmb');
const Vue = needLibVer('vue', 2, 6);
needLibVer('vuex', 3, 6);
```


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
