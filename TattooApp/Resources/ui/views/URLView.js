//FirstView Component Constructor
function URLView(parentWindow) {
	//create object instance, a parasitic subclass of Observable
	var view = Ti.UI.createView({
		height : "100%",
		width : "100%",
		backgroundColor : "#f0f0f0"
	});
	var textField = Ti.UI.createTextField({
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		color : '#336699',
		top : 10,
		width : 250,
		height : 60
	});
	view.add(textField);
	var okButton = Ti.UI.createButton({
		color : '#000',
		top : textField.top + textField.height + 10,
		width : 300,
		height : 57,
		font : {
			fontSize : 20,
			fontWeight : 'bold',
			fontFamily : 'Helvetica Neue'
		},
		title : 'Get Image'
	});

	okButton.addEventListener('click', function(e) {
		var data = {
			"src" : textField.value
		}
		Ti.App.fireEvent('returnSrc', data);
		//	self.add(textField)
		//	var camera = require('/ui/windows/common/camera_overlay');
		// new camera().open();
		//parentWindow.close();
	});

	view.add(okButton);
	return view;
}

module.exports = URLView;
