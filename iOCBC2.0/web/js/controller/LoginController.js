app.controller('LoginController', function ($scope, $location, $rootScope, UserService, $http, Session) {
    $scope.credentials = {
        username: "", password: ""
    };

    $scope.result = "";

    $scope.login = false;

    $scope.register = function () {
        $location.path("register");
    };

    $scope.authenticate = function () {
        $location.path("dashboard");
    };

    $scope.authenticateUser = function () {
        //console.log($scope.credentials.username + " " + $scope.credentials.password);
        UserService.authenticate($scope.credentials).then(function (res) {

        }, function (res) {
            //console.log($scope.username + " " + $scope.password);
            if ($scope.credentials.username === 'admin' && $scope.credentials.password === 'password') {
                // if (res.status === 200) {
                //$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                init();
                var user = {
                    id: 1,
                    firstName: "John",
                    lastName: "Tan",
                    email: "johntan@gmail.com",
                    account_type: 1
                };
                Session.create(user.id, user.firstName, user.lastName, user.email, user.account_type);
                $rootScope.setCurrentUser(user);
                $scope.login = true;
            } else {
                $scope.result = "Invalid username / password!";
                //$scope.$digest();
                $location.path("login");
            }
        });
    };

    init = function () {
        $http.defaults.xsrfHeaderName = 'X-CSRF-TOKEN';
        $http.defaults.xsrfCookieName = 'CSRF-TOKEN';
    };
});