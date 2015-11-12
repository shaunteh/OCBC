app.service('UserService', function($http, Session) {
    var userService = {};

    userService.authenticate = function(credentials) {
        
        return $http.post('/auth/login', credentials).then(function(res) {
                return res;
        });
    };

    userService.createUser = function(newUser) {
        console.log(newUser);
        return $http.post('/register/submit', newUser).then(function(res) {
            return res;
        });
    };

    userService.isAuthenticated = function() {
        return !!Session.userId;
    };

    userService.isAuthorized = function(authorizedRoles) {
        if (!angular.isArray(authorizedRoles)) {
            authorizedRoles = [authorizedRoles];
        }
        return (userService.isAuthenticated() &&
                authorizedRoles.indexOf(Session.userRole) !== -1);
    };
    return userService;
});