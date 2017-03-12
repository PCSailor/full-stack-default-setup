appVariable.controller('AppController', ['DefaultFactory', function(DefaultFactory) {
// NOTE:  AppVariable is defined in client.js/var AppVariable = angular.module('App', ['ngRoute']);
// NOTE:  DefaultController must match clientJs/.when-controller
// NOTE:  1st DefaultFactory is the dependency and must match the factory name in the first code line of the factory.js file
// NOTE:  2nd DefaultFactory is used within this file to reference the data needed for the factory.js file.

console.log('app.controller.js file is loaded');
var self = this;

self.someMessage = 'message from appList.html';

// self.newApp = {}; // TODO:
// self.appList = DefaultFactory.allApps; // TODO:


}]);
