var App = angular.module('App', ['ngRoute']);
// NOTE: App matched to index.html/ng-app="App"; ngRoute is always matched to index.html/ng-view AND is dependency of 'angular-route.js' script
console.log("client.js loaded");
App.config(['$routeProvider', function($routeProvider) {
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

// NOTE: Luke updated code:
// var myApp = angular.module('TaskApp', ['ngRoute']);
// myApp.config(['$routeProvider', function($routeProvider) {
//   $routeProvider
//     .when('/home', {
//       templateUrl: '/views/home.html',
//       controller: 'HomeController',
//       controllerAs: 'hc'
//     })
//     .when('/todoList', {
//       templateUrl: '/views/todoList.html',
//       controller: 'TaskController',
//       controllerAs: 'tc'
//     })
//     .when('/about', {
//       templateUrl: '/views/about.html',
//       controller: 'AboutController',
//       controllerAs: 'ac'
//     })
//     .otherwise({
//       redirectTo: 'home'
//     })
// }]);
