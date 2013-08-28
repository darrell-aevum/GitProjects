//FirstView Component Constructor
function HomeView(parentWindow) {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	 
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label = Ti.UI.createLabel({
		top:10,
		color:'#000000',
		text:"Select Your Canvas",
		height:'auto',
		width:'auto'
	});
	
	var cameraButton = Ti.UI.createButton({
		color : '#000',
		top : 50,
		width : 300,
		height : 57,
		font : {
			fontSize : 20,
			fontWeight : 'bold',
			fontFamily : 'Helvetica Neue'
		},
		title : 'Camera'
	});
	
	var staticButton = Ti.UI.createButton({
		color : '#000',
		top : 125,
		width : 300,
		height : 57,
		font : {
			fontSize : 20,
			fontWeight : 'bold',
			fontFamily : 'Helvetica Neue'
		},
		title : 'Camera Roll'
	});
	
	self.add(label);
	self.add(cameraButton);
	self.add(staticButton);
	
	//Add behavior for UI
	cameraButton.addEventListener('click', function(e) {
		var camera = require('/ui/windows/common/camera_overlay');
		 new camera().open(); 
		 parentWindow.close(); 
	});
	
	return self;
}

module.exports = HomeView;
