var AppVariable = angular.module('IndexApp', ['ngRoute']);
// NOTE: IndexApp matched to index.html/ng-app="IndexApp"
// NOTE: ngRoute is always matched to index.html/ng-view AND is dependency of 'angular-route.js' script
// NOTE: AppVariable is set for
console.log("client.js loaded");
AppVariable.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/defaultPage', {
    defaultUrl: '/views/templates/defaultpage.html',
    controller: 'DefaultController',
    controllerAs: 'dc'
  })  // NOTE: semi-colon not needed here
  // .otherwise({
  //   redirectTo: 'index'
  // });  // NOTE: but semi-colon is needed here
}]);
// NOTE: END OF CODE
