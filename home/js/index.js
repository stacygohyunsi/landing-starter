var app = angular.module("mainApp", ["ngMaterial", "ngRoute"]);

app.config(function($routeProvider,$locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider
  .when('/', {
    templateUrl: "/main.html",
    controller: 'main'
  })
  .otherwise({
    redirectTo: '/'
  });
});


app.controller("main", function($scope, $http, $mdDialog) {	
  $scope.draft = {};
  $scope.openForm = function() {
    track("openGoogleForm");
    //enter your google form link here
    window.open("");
  }
  $scope.submitForm = function() {
    track("submitForm");

    console.log($scope.draft.user);
    $http.post("/api/send", $scope.draft.user).then(function(resp) {
      
      $scope.showAlert = function() {
        $mdDialog.show(
          $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title('Thank you')
            .textContent('Your response is recorded.')
            .ariaLabel('Alert Dialog Demo')
            .ok('Done')
            .targetEvent()
        );
      };
      $scope.showAlert();
    })
  }
})
