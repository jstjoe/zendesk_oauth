(function() {
  return {
    // defaultState: 'init',
    events: {
      'app.created':'init',
      'iframe.roger':'onConnected',
      'click .log_in':'logIn'
    },
    init: function() {
      if(!this.store('db_token')) {
        // not logged in
        this.switchTo('logIn');
      } else {
        // TODO check that the token is valid with a generic API call, so the user doesn't get bumped out later if logged out
        services.notify('You already have a token. Proceed apace.');
      }
    },
    logIn: function(e) {
      if(e) {e.preventDefault();}
      this.switchTo('iframe');
    },
    onConnected: function(data) {
      this.store('db_token', data.token);
      // this.switchTo('loggedIn');
      services.notify('You\'re logged in!');
    }
  };
}());
