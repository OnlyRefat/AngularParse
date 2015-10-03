
var app = angular.module('app', ['ngRoute']);

app.run(function(){
Parse.initialize("xg2aq59TfHEcWhJX0IYO7VTNGPSBE70mb5dnqs1z", "JpvsYEGPgIFFrHdnYJPhEEd4duv26FMdpQBjWYgN");


})
.config(function($routeProvider, $locationProvider){
	$routeProvider.
		when('/dashboard',{templateUrl: 'view/dashboard.html',controller: 'dashboardCtrl'}).
		otherwise({ redirectTo: '/dashboard' });
});



