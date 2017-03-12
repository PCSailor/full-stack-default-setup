console.log("client.js loaded");
var appVariable = angular.module('IndexApp', ['ngRoute']);
// NOTE: IndexApp matched to index.html/ng-app="IndexApp"
// NOTE: ngRoute is always matched to index.html/ng-view AND is dependency of 'angular-route.js' script.  What is selected with the .config function (below) is placed into the index.html/ng-view area of the webpage.
// NOTE: AppVariable is set for
appVariable.config(['$routeProvider', function($routeProvider) {
  $routeProvider

  .when('/home', {
    templateUrl: '/views/templates/home.html',
    controller: 'HomeController',
    controllerAs: 'hc'
  })

  // .when('/apps', {
  //   templateUrl: '/views/templates/appList.html',
  //   controller: 'AppController',
  //   controllerAs: 'ac'
  // })

.when('/defaultPage', {
  templateUrl: '/views/templates/defaultpage.html',
  controller: 'DefaultController',
  controllerAs: 'dc'
})  // NOTE: semi-colon not needed here
console.log('AppVariable.config code is run');
// .otherwise({
//   redirectTo: 'index'
// });  // NOTE: but semi-colon is needed here
}]);
