app.controller('ApplicationController', function($rootScope, USER_ROLES, UserService, $cookieStore) {
    $rootScope.currentUser;
    $rootScope.userRoles = USER_ROLES;
    $rootScope.isAuthorized = UserService.isAuthorized;
    $rootScope.formData = {};
    $rootScope.setCurrentUser = function(user) {
        console.log("in set user");
        $cookieStore.put("user", user);
        $rootScope.currentUser = user;
    };
    
    $rootScope.removeCurrentUser = function(){
        $cookieStore.remove("user");
    };
});
