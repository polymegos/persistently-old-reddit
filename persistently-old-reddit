// ==UserScript==
// @name            Persistently Old Reddit
// @version         0.1.0
// @description     Provides a consistent experience of the old Reddit UI throughout browsing.
// @author          PolyMegos (https://github.com/polymegos)
// @namespace       https://github.com/polymegos/persistently-old-reddit
// @supportURL      https://github.com/polymegos/persistently-old-reddit/issues
// @license         MIT
// @match           *://reddit.com/*
// @match           *://www.reddit.com/*
// @grant           none
// @compatible      chrome
// @compatible      firefox
// @compatible      opera
// @compatible      edge
// @compatible      safari
// ==/UserScript==

(function() {
    'use strict';

    // Check if current URL is not already old.reddit.com
    if (!location.hostname.startsWith('old.')) {
        const newUrl = location.href.replace(/^(https?:\/\/)(www\.)?reddit\.com/, '$1old.reddit.com');
        location.replace(newUrl);
    }
})();
