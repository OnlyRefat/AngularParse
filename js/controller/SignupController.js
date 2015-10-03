
app.controller('signupCtrl', function($scope,$window,$location) {
	$scope.hello = 'Hellow';

	$scope.post=function(){

		/*var user = new Parse.User();
		user.set("email",$scope.email);
		user.set("password",$scope.password);
		user.signUp(null,{success:function(user){
			console.log(user);

		},error:function(error){
			console.log('error is'+error);

		}})*/
     Parse.User.signUp($scope.email, $scope.password, {}, {
        success: function (user) {
	    $window.location.href="index.html";
	       },
        error: function (user, error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });


	} 
});