'use strict'

angular.module('myApp.sp.controllers',[])
	// .controller('PostController',['$scope','postService',function($scope,postService)
	// {
	// 	$scope.getAllPosts=function()
	// 	{
	// 		return postService.getAll();
	// 	};
	// 	$scope.posts=$scope.getAllPosts();
	// }])
	// .controller('PostDetailsController',['$stateParams','$state','$scope','postService',function($stateParams,$state,$scope,postService)
	// {
	// 	$scope.getPostById=function(id)
	// 	{
	// 		return postService.getPostById(id);
	// 	};
	// 	$scope.closePost=function()
	// 	{
	// 		$state.go('allPosts');
	// 	};
	// 	$scope.singlePost=$scope.getPostById($stateParams.id);
	// }])

.controller('ctrlsp',function($scope,spService){
	$scope.sanpham = spService.getAll();
	$scope.menu = spService.getMenu();
	
// $scope.filterSelection("all")
$scope.filterSelection= function(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    // console.log(x[i]);
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  // console.log(arr1);
  arr2 = name.split(" ");
  // console.log(arr2);
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);    
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

})
	// .controller('ctrlchitiet',($scope,spService,$stateParams)=>{
	// 		$scope.getSpById=function(id)
	// 		{
	// 			return spService.getSpById(id);
	// 		};
	// 		console.log($stateParams.id);
	// 		$scope.data = $scope.getSpById($stateParams.id);
	// })

	.controller('ctrlchitiet',['$stateParams','$state','$scope','spService','$rootScope',function($stateParams,$state,$scope,spService,$rootScope)
	{
		$scope.getPostById=function(id)
		{
			return spService.getSpById(id);
		};
		$scope.closePost=function()
		{	
			$state.go('sanpham');
		};
		$scope.chitiet=$scope.getPostById($stateParams.id);
		$scope.getAll = function()
		{
			return spService.getAll();
		};
		$scope.sp = $scope.getAll();
		var count = 0;
		$scope.add = function()
		{
			!$rootScope.giohang?$rootScope.giohang=new Array($scope.chitiet):$rootScope.giohang.unshift($scope.chitiet);
			
			for(var i in $rootScope.giohang)
			{
				if($rootScope.giohang[i].id == $scope.chitiet.id)
				{
					count++;//1
					$rootScope.giohang[i].sl = count;
				}
			}

			count = 0;
		};
	}])

	.controller('ctrlgiohang',['$stateParams','$state','$scope','$rootScope',function($stateParams,$state,$scope,$rootScope)
	{	
		$scope.closePost=function()
		{	
			$state.go('sanpham');
		};

		$scope.giohang = [...new Set($scope.giohang)];

		$scope.tong = function()
		{
			$scope.sum=0;
			$scope.giohang.forEach(e => $scope.sum += e.sl * e.gia);
			return $scope.sum;
		};

		var arr = new Array($scope.giohang.length);

		$scope.change = (i)=>
		{
			arr[i]=$scope.giohang[i].gia*$scope.giohang[i].sl;
			$scope.sum = arr.reduce((a,b)=>a+b);
			$scope.sum = '...';
		}

		$scope.del = function(e)
		{
			angular.forEach($rootScope.giohang, function(value,key){
				if($scope.giohang[e].id==$rootScope.giohang[key].id)
				{
					$rootScope.giohang[key]='';
				}
			});
			$rootScope.giohang= $rootScope.giohang.filter(Boolean)
			$scope.giohang.splice(e,1);

			$scope.sum = '...';
		}
	}])


	.controller('ctrlDangky', ['$scope', '$rootScope', '$state', function ($scope, $rootScope, $state) {
		$scope.modal = function () {
				// Get the modal
				var modal = document.getElementById("myModal");

				// Get the button that opens the modal
				var btn = document.getElementById("myBtn");

				// Get the <span> element that closes the modal
				var span = document.getElementsByClassName("close")[0];

				// When the user clicks on the button, open the modal
				(btn.onclick = function () {
						modal.style.display = "block";
				})()

				// // When the user clicks on <span> (x), close the modal
				// span.onclick = function () {
				//     modal.style.display = "none";
				// }

				// // When the user clicks anywhere outside of the modal, close it
				// window.onclick = function (event) {
				//     if (event.target == modal) {
				//         modal.style.display = "none";
				//     }
				// }

				var seconds = document.getElementById("countdown").textContent;
				var countdown = setInterval(function () {
						seconds--;
						document.getElementById("countdown").textContent = seconds;
						if (seconds <= 0) clearInterval(countdown);
				}, 1000);

				setTimeout(function () { $state.go('trangchu') }, 3000)
		}

		$scope.saveUser = function () {
				if ($scope.dangky.$valid) {
						if (!$rootScope.nguoidung) {
								$rootScope.nguoidung = new Array($scope.user);
								$scope.modal()
						}
						else {
								angular.forEach($rootScope.nguoidung, function (value, key) {
										if ($rootScope.nguoidung[key].email == $scope.user.email) {
												alert('email đã được đăng ký');
												return $scope.dangky.$invalid;
										}

										else if ($rootScope.nguoidung[key].phone == $scope.user.phone) {
												alert('phone đã được đăng ký');
												return $scope.dangky.$invalid;
										}

										else {

												$scope.modal()
										}
								});
						}
				}
				else
						return $scope.dangky.$invalid;
		}
}])

	