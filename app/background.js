chrome.browserAction.onClicked.addListener(function(tab) {
	var regexPage = new RegExp(/:\/\/www.instagram.com\//);
	if (regexPage.exec(tab.url) && tab.status === 'complete') {
		chrome.tabs.sendMessage(tab.id, { toggle: true });
	}
});
