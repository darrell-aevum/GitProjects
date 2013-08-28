function cam_overlay(_args) {
	if (_args == null)
		_args = {};
	////////////////////////////
	/// ----- Required ----- ///
	////////////////////////////
	var CameraToolbar = require('ui/toolbars/cameraToolbar');

	////////////////////////////////////
	/// ----- Private Variables -----///
	////////////////////////////////////
	var container = {};

	////////////////////////////
	/// ----- Controls ----- ///
	///////////////////////////

	// Window
	container.win = Titanium.UI.createWindow({
		title : _args.title || ""
	});

	// Overlay
	container.overlay = Titanium.UI.createView();

	// Toolbar
	var toolbar = new CameraToolbar();

	////////////////////////////////
	/// ----- Add Controls ----- ///
	////////////////////////////////
	container.overlay.add(toolbar.control);

	///////////////////////////////////
	/// ----- Event Listeners ----- ///
	///////////////////////////////////

	toolbar.cameraButton.addEventListener('click', function() {
		Ti.Media.takePicture();
		container.messageView.animate({
			visible : true
		});
		setTimeout(function() {
			container.messageView.animate({
				visible : false
			});
		}, 500);
	});

	toolbar.homeButton.addEventListener('click', function() {
		Ti.Media.hideCamera();
		container.win.close();
		Ti.App.fireEvent('goHome');
	});

	toolbar.addButton.addEventListener('click', function() {

		var ImportView = require('/ui/views/ImportView');
		var importView = new ImportView();
		importView.open();

		Ti.App.addEventListener('returnSrc', function(data) {
			importView.close();

			var Tattoo = require('/ui/windows/tattoo');
			var tattooView = new Tattoo(data.src);
			container.overlay.add(tattooView.overlay);
		});

	});

	/////////////////////////////////
	/// ----- Functionality ----- ///
	/////////////////////////////////

	Titanium.Media.showCamera({

		success : function(event) {
			Ti.API.debug("picture was taken");
			// programatically hide the camera
			Ti.Media.hideCamera();

		},
		cancel : function() {
		},
		error : function(error) {
			if (error.code == Titanium.Media.NO_CAMERA) {
				var back = Ti.UI.createImageView({
					image : '/images/back.jpg'
				});
				container.overlay.add(back);
				container.win.add(container.overlay);
			} else {
				alert('Unexpected error: ' + error.code);
			}
		},
		overlay : container.overlay,
		showControls : false, // don't show system controls
		mediaTypes : Ti.Media.MEDIA_TYPE_PHOTO,
		autohide : false // tell the system not to auto-hide and we'll do it ourself
	});
	container.open = function() {
		container.win.open();
	};

	return container.win;
};

module.exports = cam_overlay;
