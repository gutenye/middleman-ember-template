App.Router = Ember.Router.extend({
  root: Ember.Route.extend({
    index: Ember.Route.extend({
      route: "/",

      connectOutlets: function(router, context){
        //router.get("applicationController").connectOutlet("home");
      }
    })
  })
});
