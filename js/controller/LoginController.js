
app.controller('loginCtrl', function($scope,$window,$location) {
	$scope.hello = 'Hellow';
	$scope.signup=function()
	{

        	$window.location.href="signup.html";

	}
	$scope.post=function(){

		/*var user = new Parse.User();
		user.set("email",$scope.email);
		user.set("password",$scope.password);
		user.signUp(null,{success:function(user){
			console.log(user);

		},error:function(error){
			console.log('error is'+error);

		}})*/
Parse.User.logIn($scope.email, $scope.password, {
        // If the username and password matches
        success: function(user) {

        	$window.location.href="index.html";


	        },
        // If there is an error
        error: function(user, error) {
            console.log(error);
        }
    });


	} 
});