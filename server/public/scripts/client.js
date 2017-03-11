var App = angular.module('App', ['ngRoute']);
console.log("client.js loaded");
App.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/defaultPage', {
    defaultUrl: '/views/templates/defaultpage.html',
    controller: 'DefaultController',
    controllerAs: 'dc'
  })  // QUESTION: semi-colon not needed here
  .otherwise({
    redirectTo: 'index'
  });  // QUESTION: but semi-colon is needed here??
}]);
// NOTE: END OF CODE
