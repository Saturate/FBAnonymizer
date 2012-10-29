// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// By Allan Kimmer Jensen with help from the example here:
// http://developer.chrome.com/trunk/extensions/samples.html#cc8563a6666add797264184a960c7b7c8bd3e64d

chrome.browserAction.onClicked.addListener(function() {
  chrome.windows.getCurrent(function(win) {
    chrome.tabs.getSelected(win.id, actionClicked);
  });
});

var version = "1.0";

var cssstyle = ".fbxWelcomeBox .fbxWelcomeBoxName { -webkit-filter: blur(10px); }";

function actionClicked(tab) {
	var tabUrl = tab.url;
	if( tabUrl.indexOf("facebook.com") != -1){
		chrome.tabs.executeScript(null, {code:"document.body.bgColor='red'"});

	chrome.tabs.insertCSS(null, {file: 'css/inject.css'}, function() { });

	} else {
		console.log('This is not FB!');
	}
}

/*
	Google Analytics for tracking use
	More infomation: https://developer.chrome.com/trunk/extensions/tut_analytics.html
	If you want access to the data just send me a message!
 */
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-35949748-1']);
_gaq.push(['_trackPageview']);
(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = 'https://ssl.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();