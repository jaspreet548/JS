myAppModule.controller("myController", function($scope){

	$scope.paraData= 'this is test';
	$scope.name='two way binding';

	$scope.data = [
        "Jaspreet",
        "Mohit",
        "Susheel"
    ];

	$scope.records = [
       {
            "Name" : "Alfreds Futterkiste",
            "Country" : "Germany"
        },{
            "Name" : "Berglunds",
            "Country" : "Sweden"
        },{
            "Name" : "Centro",
            "Country" : "Mexico"
        },{
            "Name" : "Ernst Handel",
            "Country" : "Austria"
        }
    ];

	$scope.case= '1';

	$scope.btnClick= function(){
		console.log($scope.name);
		console.log($scope.data);
	};

	$scope.onblurFocus= function(blurFocus){
		console.log(blurFocus);
	};
});