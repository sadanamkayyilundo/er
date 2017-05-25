var guestHouseApp = angular.module('guestHouseApp', ['GHController',"ngRoute"]);

//Include Routing Logic here
guestHouseApp.config(function($routeProvider) {
        $routeProvider.
		when('/main', {
            templateUrl: 'main'
        }).
        when('/login', {
            templateUrl: 'partials/login.html',
			controller: 'LoginCtrl'
        }).
        when('/home', {
            templateUrl: 'partials/home.html',
			controller: 'BookingCtrl'
        }).
        when('/bookings', {
            templateUrl: 'partials/bookings.html',
			controller: 'BookingCtrl'
        }).
        when('/bookingForm', {
            templateUrl: 'partials/bookingForm.html',
			controller: 'BookingCtrl'
        });
    });
