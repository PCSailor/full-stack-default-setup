console.log("client.js loaded");
var appVarDefinedInClientJs = angular.module('IndexHtmlToClientJsApp', ['ngRoute']);
// NOTE: IndexHtmlToClientJsApp matched to index.html/ng-app="IndexHtmlToClientJsApp"
// NOTE: ngRoute is always matched to index.html/ng-view AND is dependency of 'angular-route.js' script.  What is selected with the .config function (below) is placed into the index.html/ng-view area of the webpage.
// NOTE: appVarDefinedInClientJs is set for
appVarDefinedInClientJs.config(['$routeProvider', function($routeProvider) {
  $routeProvider

  .when('/navHtmlWebAddressMustMatchClientJsWhenFunction', {
    templateUrl: '/views/templates/home.html',
    controller: 'HomeController',
    controllerAs: 'hc'
  })

  .when('/appList', {
    templateUrl: '/views/templates/appList.html',
    controller: 'AppListController',
    controllerAs: 'alc'
  })

.when('/defaultWebpage', {
  templateUrl: '/views/templates/defaultpage.html',
  controller: 'DefaultController',
  controllerAs: 'dc'
})  // NOTE: semi-colon not needed here
console.log('appVarDefinedInClientJs.config code is run');
// .otherwise({
//   redirectTo: 'index'
// });  // NOTE: but semi-colon is needed here
}]);
