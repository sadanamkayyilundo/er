var GHController = angular.module('GHController', []);

GHController.controller('LoginCtrl', function($scope, $rootScope, $location, $http) {
	//fetch users.json here
	$http.get("data/users.json").then(function(response){	//ajax call
		console.log("Success"+response);
		$scope.users=response.data;
	})

    $scope.validate = function() {
    	var login = false;
    	var password = false;
	    angular.forEach($scope.users,function(user){
	    	if(user.username == $scope.username){
	    		login = true;
	    		if(user.password == $scope.password){
	    			password = true;
	    			$rootScope.name = user.name;
	    		}
	    	}
	    });
	    if(login == true){
	    	if (password == true) {
	    		$location.path('/home');
	    	}
	    	else{
	    		alert("Incorrect Password");
	    	}
	    }
	    else{
	    	alert("Incorrect Username");
	    }
	}
});
GHController.controller('BookingCtrl', function($scope, $rootScope, $location, $http) {
    //fetch bookings.json here
    $http.get("data/bookings.json").then(function(response){	//ajax call
		console.log("Success"+response);
		$scope.bookings=response.data;
	})
    $scope.showBookings=function(){

	//use this empty array to create the bookings list for the logged in user.
		$rootScope.specificBooking=[];
		
	//Insert each entry from a loop, using push function
	angular.forEach($scope.bookings,function(booking){
		if($rootScope.name == booking.name){
			var data = {
				'bookingId' : booking.bookingId,
				'name' : booking.name,
				'fromDate' : booking.fromDate,
				'toDate' : booking.toDate,
				'guests' : booking.guests,
				'rooms' : booking.rooms
			};
			$rootScope.specificBooking.push(data)
		}
	});
	$location.path('/bookings');
}

	$scope.book = function(){

		//code for generating a new booking ID for a new booking
        var bookingId=Number(Math.floor(Math.random()*10000));
		
		// use constructor/prototype to initialize the new booking object property
		var New_booking = function(){
			this.bookingId = bookingId,
			this.name = $scope.name,
			this.fromDate = $scope.from,
			this.toDate = $scope.to,
			this.guests = $scope.guests,
			this.rooms = $scope.rooms
		};
		var booking = new New_booking();
		$rootScope.specificBooking.push(booking);
		alert("Booking Success! Here is the summary: Booking ID for "+booking.name+"'s booking is : "+bookingId+" and "+booking.rooms+" room(s) are booked between "+booking.fromDate+" and "+booking.toDate);
		//instantiate the new booking object and push it into specificBooking[]
	}
});
