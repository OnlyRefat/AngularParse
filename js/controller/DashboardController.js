
app.controller('dashboardCtrl', function($scope,$window,$location) {
 $scope.sample=[];
$scope.post=function(){
var profile = Parse.Object.extend('profile');

newProfile= new profile();

newProfile.set('name',$scope.name);
newProfile.set('age',$scope.age);

newProfile.save({success:function(){
	$scope.getdata();
	console.log('saved');

}, error:function(error){

console.log(error);

}
});

}

$scope.getdata=function()
{
   if(Parse.User.current()==null)
   	$window.location.href="login.html";


var profile = Parse.Object.extend('profile');

var query = new Parse.Query(profile);

$scope.sample=[];

query.find({success:function(result){

			for(var i in result)
			{
				 $scope.sample.push({'name':result[i].get('name'),
					'age':result[i].get('age'),id: result[i].id
			});
				console.log( $scope.sample);
				$scope.$apply();
			}

	console.log(result);
},
error:function(error){
console.log(error);

}
});
};







	$scope.logout=function(){
Parse.User.logOut();
if(Parse.User.current()==null)
$window.location.href="login.html";

	};

$scope.delete=function(index){

var profile = Parse.Object.extend('profile');

var query = new Parse.Query(profile);

query.get($scope.sample[index].id,{success:function(yourObj){

yourObj.destroy({success:function(){

	$scope.getdata();
}});
},
 error: function(){



 }
})


}


});