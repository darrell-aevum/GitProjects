function CameraToolbar(_args) {
	if (_args == null)
		_args = {};
	var cameraToolbar = {};

	cameraToolbar.homeButton = Titanium.UI.createButton({
		title : 'Home',
		style : Titanium.UI.iPhone.SystemButtonStyle.DONE,
	});

	cameraToolbar.cameraButton = Titanium.UI.createButton({
		systemButton : Titanium.UI.iPhone.SystemButton.CAMERA,
	});

	cameraToolbar.addButton = Titanium.UI.createButton({
		systemButton : Titanium.UI.iPhone.SystemButton.ADD
	});

	var flexSpace = Titanium.UI.createButton({
		systemButton : Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	});

	cameraToolbar.control = Titanium.UI.iOS.createToolbar({
		items : [cameraToolbar.homeButton, flexSpace, cameraToolbar.cameraButton, flexSpace, cameraToolbar.addButton],
		bottom : 0,
		borderTop : true,
		borderBottom : false,
		zIndex : 99
	});

	return cameraToolbar;
};

module.exports = CameraToolbar;
