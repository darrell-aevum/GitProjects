//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	var HomeView = require('ui/views/HomeView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#000000'
	});
		
	//construct UI
	var homeView = new HomeView(self); 
	self.add(homeView);
	
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
