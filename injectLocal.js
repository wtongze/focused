// ==UserScript==
// @name         injectLocal
// @namespace    https://innoteam.cn/projects/focused
// @version      0.1
// @description  try to take over the world!
// @author       Tongze Wang, INNO Team
// @match        https://medium.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let loadlocal = document.createElement('script');
    loadlocal.type = "text/javascript";
    loadlocal.src = "http://127.0.0.1:8080/test.js";
    document.body.append(loadlocal);
})();