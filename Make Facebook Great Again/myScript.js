// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
	
		// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
		chrome.tabs.executeScript({
			code: 'var x = document.getElementsByClassName("fbNubFlyoutTitlebar"); var i; for (i = 0; i < x.length; i++) { x[i].style.backgroundColor="#43a4fe"; }'
	});
});