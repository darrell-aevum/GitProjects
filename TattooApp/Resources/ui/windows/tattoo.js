// Application Window Component Constructor
function Tattoo(src) {

	var image;
	var container = {};
	/// ----- Requirements ----- ///
	var EditorOverlay = require('/ui/overlays/EditorOverlay');

	/// ----- Controls ----- ///
	container.overlay = Ti.UI.createView();

	container.webView = Ti.UI.createWebView({
		backgroundColor : 'transparent',
		enableZoomControls : false,
		borderColor : "#334422",
		borderWidth : 2,
		url : '/ui/html/index.html'
	});

	/// ----- Add Controls ----- ///
	container.overlay.add(container.webView);

	//Add Editing Controls
	var editor = new EditorOverlay(container.webView);
	container.overlay.add(editor.overlay);

	/// ----- Event Listenrs ----- ///
	Titanium.App.addEventListener('tattooHtmlLoaded', function() {
		var data = {
			"src" : src
		};
		Ti.App.fireEvent('sendSrc', data);
	});
	Ti.App.addEventListener('updateWindowSize', function(size) {
		container.webView.width = size.width;
		container.webView.height = size.height;
	});

	Ti.App.addEventListener('tattooAdded', function() {
		Titanium.API.log('Tattoo Added');
		var newWidth = 0;
		var newHeight = 0;
		var windowWidth = Titanium.Platform.displayCaps.platformWidth;
		var windowHeight = Titanium.Platform.displayCaps.platformHeight;
		var p;
		if (container.webView.width > container.webView.height) {
			newWidth = windowWidth * .3;
			newHeight = (container.webView.height * newWidth) / container.webView.width;
			p = newWidth / windowWidth;
		} else {
			newHeight = windowHeight * .2;
			newWidth = (container.webView.width * newHeight) / container.webView.width;
			p = newHeight / windowHeight;
		}

		var t = Ti.UI.create3DMatrix().scale(p, p, 0);
		container.webView.transform = t;

		var data = {};
		data.buffer = 20;
		data.color = {
			r : 255,
			g : 255,
			b : 255
		};
		Ti.App.fireEvent('removeColor', data);
	});
	
	container.webView.addEventListener('pinch', function(e) {
		var t = Ti.UI.create3DMatrix().scale(e.scale * .2);
		tattooView.transform = t;
	});

	//container.webView.addEventListener('touchmove', function(e) {
	//	Titanium.API.log("TOUCHMOVE " + JSON.stringify(e));
	//	var p = {
	//			x : e.x,
	//				y : e.y
	//				};
	//var convertPoint = container.webView.convertPointToView(p, container.win);
	//	tattooView.center = convertPoint;
	//	});

	return container;
}

//make constructor function the public component interface
module.exports = Tattoo;
