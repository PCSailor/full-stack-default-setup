appVarDefinedInClientJs.controller('DefaultController', ['DefaultFactory', function(DefaultFactory) {
// NOTE:  appVarDefinedInClientJs is defined in client.js/var appVarDefinedInClientJs = angular.module('App', ['ngRoute']);
// NOTE:  DefaultController must match clientJs/.when-controller
// NOTE:  1st DefaultFactory is the dependency and must match the factory name in the first code line of the factory.js file
// NOTE:  2nd DefaultFactory is used within this file to reference the data needed for the factory.js file.

console.log('default.controller.js file is loaded');
var self = this;
self.message = 'text from default.controller.js';


// self.newApp = {}; // TODO:
// self.appList = DefaultFactory.allApps; // TODO:
//
// self.addApp = function() {
//   DefaultFactory.addApp(self.newApp);
// }
//
// self.deleteApp = function(appId) {
//   DefaultFactory.deleteApp(appId);
// }
}]);
