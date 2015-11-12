app.service('Session', function () {
  this.create = function (userId, firstName, lastName, email, account_type) {
    //this.id = sessionId;
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.account_type = account_type;
  };
  
  this.destroy = function () {
    //this.id = null;
    this.userId = null;
    this.firstName = null;
    this.lastName = null;
    this.email = null;
    this.account_type = null;
  };
});