//FirstView Component Constructor
function ImportType(parentWindow) {
	//////////////////////////
	// ----- Controls ----- //
	//////////////////////////
	var self = Ti.UI.createWindow({
		backgroundColor : '#FFFFFF',
		top : 0,
		left : 0,
		opacity : 1,
		zIndex : 100,
		modal : true
	});

	var label = Ti.UI.createLabel({
		top : 10,
		color : '#000000',
		text : "Choose A Tattoo",
		height : 'auto',
		width : 'auto'
	});

	var galleryButton = Ti.UI.createButton({
		color : '#000',
		top : 50,
		width : 300,
		height : 57,
		font : {
			fontSize : 20,
			fontWeight : 'bold',
			fontFamily : 'Helvetica Neue'
		},
		title : 'Tattoo Gallery'
	});

	var localButton = Ti.UI.createButton({
		color : '#000',
		top : 120,
		width : 300,
		height : 57,
		font : {
			fontSize : 20,
			fontWeight : 'bold',
			fontFamily : 'Helvetica Neue'
		},
		title : 'Camera Roll'
	});

	var cameraButton = Ti.UI.createButton({
		color : '#000',
		top : 200,
		width : 300,
		height : 57,
		font : {
			fontSize : 20,
			fontWeight : 'bold',
			fontFamily : 'Helvetica Neue'
		},
		title : 'Take A Picture'
	});

	var urlButton = Ti.UI.createButton({
		color : '#000',
		top : 280,
		width : 300,
		height : 57,
		font : {
			fontSize : 20,
			fontWeight : 'bold',
			fontFamily : 'Helvetica Neue'
		},
		title : 'From URL'
	});

	// ----- END Controls ----- //

	//////////////////////////////////
	// ----- Add Controls to View ------ //
	//////////////////////////////////

	self.add(label);
	self.add(galleryButton);
	self.add(localButton);
	self.add(cameraButton);
	self.add(urlButton);

	//////////////////////////////////
	// ----- Event Listeners ------ //
	//////////////////////////////////
	galleryButton.addEventListener('click', function(e) {
		//	var Gallery = require('/ui/views/galleryView');
		//	new Gallery().open();

	});

	localButton.addEventListener('click', function(e) {
		Titanium.Media.openPhotoGallery({
			/*success : function(event) {
				var image = event.media;
				var filename = Titanium.Filesystem.applicationDataDirectory + "/" + new Date().getTime() + ".jpg";

				tattooImage = Titanium.Filesystem.getFile(filename);
				tattooImage.write(image);
				Ti.API.log(tattooImage.name);
				Ti.API.log(tattooImage.nativePath);
				Ti.App.fireEvent('returnSrc', {
					"src" : tattooImage.nativePath
				});
			},
			cancel : function() {

			},
			error : function(error) {
				alert('There Was An Error Trying To Getting Image From Gallery ');
			} */
		});
	});

	cameraButton.addEventListener('click', function(e) {
		var camera = require('/ui/windows/common/camera_overlay');
		new camera().open();
		parentWindow.close();
	});

	urlButton.addEventListener('click', function(e) {
		var URLView = require('/ui/views/URLView');
		var urlView = new URLView();
		self.add(urlView);
	});
	// ----- END Event Listeners ----- //

	return self;
}

module.exports = ImportType;
