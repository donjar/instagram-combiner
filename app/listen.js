window.onload = function() {
	chrome.runtime.onMessage.addListener(function(msg, _, sendResponse) {
		if (msg.toggle) {
			document.getElementsByTagName('body')[0].classList
				.toggle('instagram-combiner');
		}
	});
};
