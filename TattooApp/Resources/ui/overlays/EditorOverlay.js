function EditorOverlay(viewObj, _args) {
	if (_args == null)
		_args = {};

	container = {};

	////////////////////////////
	/// ----- Controls ----- ///
	////////////////////////////
	container.overlay = Titanium.UI.createView();

	container.sepiaButton = Titanium.UI.createButton({
		color : '#000',
		top : 40,
		right : 10,
		height : 60,
		font : {
			fontSize : 20,
			fontWeight : 'bold',
			fontFamily : 'Helvetica Neue'
		},
		title : 'Sepia'
	});

	container.removeColorButton = Titanium.UI.createButton({
		color : '#00',
		top : 110,
		right : 10,
		height : 60,
		font : {
			fontSize : 20,
			fontWeight : 'bold',
			fontFamily : 'Helvetica Neue'
		},
		title : 'Remove Color'
	});

	container.opacitySlider = Titanium.UI.createSlider({
		top : 0,
		min : 0,
		max : 1,
		width : '100%',
		value : 1
	});
/// ----- END Controls ----- ///

/// ----- Event Listeners ----- ///
	container.opacitySlider.addEventListener('change', function(e) {
		viewObj.opacity = e.value;
	});

	container.sepiaButton.addEventListener('click', function(e) {
		Ti.App.fireEvent('sepia');
	}); 
	
	container.removeColorButton.addEventListener('click', function(e){
	    Ti.App.fireEvent('removeColor');
	});
	
	container.overlay.add(container.sepiaButton);
	container.overlay.add(container.removeColorButton);
	container.overlay.add(container.opacitySlider);

	return container;
};

module.exports = EditorOverlay;
