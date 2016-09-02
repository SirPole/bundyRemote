var BG = chrome.extension.getBackgroundPage();
var URL = "*://ant.bundysw.com/report/dashboard/*";
function getTab(callback) {
	chrome.tabs.query({
		"url": URL
	}, function (tabs) {
		tabs.forEach(function (tab) {
			if (callback) callback(tab);
		});
	});
}

function execute(script, params, callback) {
	getTab(function (tab) {
		chrome.tabs.executeScript(tab.id, {file: 'jquery.min.js'}, function () {
			chrome.tabs.executeScript(tab.id, {code: 'var config = ' + JSON.stringify(params)}, function () {
				chrome.tabs.executeScript(tab.id, {file: script}, function (result) {
					if (callback) callback(result[0]);
				});
			});
		});
	});
}

function getState(callback) {
	execute('getState.js', null, function (result) {
		if (callback) callback(result);
	});
}

function updateIcon(state) {
	if(state === 'play') {
		chrome.browserAction.setIcon({
			path : 'on.png'
		});
	} else if(state === 'pause') {
		chrome.browserAction.setIcon({
			path : 'off.png'
		});
	} else {
		chrome.browserAction.setIcon({
			path : 'disabled.png'
		});
	}
}

function update() {
	getState(function (state) {
		updateIcon(state);
	});
}

chrome.webRequest.onCompleted.addListener(function (response) {
	if(response.url.indexOf('?do=insertRecord-') >= 0) {
		update();
	}
}, {
	"urls" : [URL]
});

chrome.browserAction.onClicked.addListener(function () {
	getState(function (state) {
		execute('bundy.js', state);
	});
});

update();