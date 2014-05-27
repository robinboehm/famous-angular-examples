angular.module('integrationApp',['famous.angular', 'ui.router', 'ngAnimate'])
  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/animations");
    $stateProvider
      .state("lock-screen", {
        url: "/lock-screen",
        templateUrl: "views/lock-screen.html"
      })
      .state("animations", {
        url: "/animations",
        templateUrl: "views/animations.html",
        controller: "AnimationsCtrl"
      })
      .state("demo", {
        url: "/demo",
        templateUrl: "views/demo.html"
      });
    });