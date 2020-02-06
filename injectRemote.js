// ==UserScript==
// @name         Focused
// @namespace    https://innoteam.cn/projects/focused
// @version      0.1
// @description  Add a reader to medium.com for better reading experience.
// @author       Tongze Wang, INNO Team
// @match        https://medium.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let loadRemote = document.createElement('script');
    loadRemote.type = "text/javascript";
    loadRemote.src = "https://raw.githack.com/wtongze/focused/master/focused.js";
    document.body.append(loadRemote);
})();