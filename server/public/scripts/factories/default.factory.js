appVarDefinedInClientJs.factory('DefaultFactory', ['$http', function($http) {
  // NOTE: factory is a dependency that controller.js is needs AND must have a return
  console.log('default.factory.js is run');

var factoryApps = { list: [] };  // NOTE: from controller.js AND must be a property inside of object
//
// getApps();
// function getApps() {
//   $http({ // NOTE: http request moves to factory because glue between factory & server
//     method: 'GET',
//     url: '/apps',
//   }).then(function(response) {
//     console.log('factory.js/response.data: ', response.data);
//     factoryApps.list = response.data;  // NOTE: MAKE SURE the factoryApps points to an object property (aka .list)
//   });
// }

// function addApp(sumNewApp) {
//   $http({
//     method: 'POST',
//     url: '/addapp',
//     data: sumNewApp
//   }).then(function(response) {
//     console.log('<function addApp(sumNewApp)> response: ', response);
//     getApps();
//   });
// }
//
// function deleteApp(appId) {
//   $http({
//     method: 'DELETE',
//     url: 'deleteapp/' + appId
//   }).then(function(response) {
//     console.log('<function deleteApp(appId)> response: ', response);
//     getApps();
//   });
// }

return {  // NOTE: returning $http function
  // NOTE: Inside this return is the public API, if it's not in here, your controller won't see it
allApps: factoryApps, // NOTE: allApps from // TODO: AND factoryApps from variable created above
  // updateApps: getApps()  // TODO: // NOTE: refers to function getApps()
  // QUESTION: updateTasks refers to the GET function in this file only?
  // addApp: addApp, // NOTE: 1st addApp from // TODO: AND 2nd addApp from // TODO:
  // deleteApp: deleteApp, // NOTE: 1st deleteApp from // TODO: AND 2nd deleteApp from // TODO:

};
}]);
// TODO:
