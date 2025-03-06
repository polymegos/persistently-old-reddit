// ==UserScript==
// @name            Persistently Old Reddit
// @version         0.1.2
// @description     Provides a consistent experience of the old Reddit UI throughout browsing.
// @author          PolyMegos (https://github.com/polymegos)
// @namespace       https://github.com/polymegos/persistently-old-reddit
// @supportURL      https://github.com/polymegos/persistently-old-reddit/issues
// @license         MIT
// @match           *://reddit.com/*
// @match           *://www.reddit.com/*
// @run-at          document-start
// @grant           none
// @compatible      chrome
// @compatible      firefox
// @compatible      opera
// @compatible      edge
// @compatible      safari
// ==/UserScript==

(function() {
    'use strict';
    // Redirect as early as possible
    if (location.hostname !== 'old.reddit.com' && !location.pathname.startsWith('/media')) {
        window.stop(); // halt newer reddit page load
        const newUrl = 'https://old.reddit.com' + location.pathname + location.search + location.hash;
        location.replace(newUrl); // avoid adding to browser history
    }
})();
