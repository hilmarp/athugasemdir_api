angular.module('mainController', [])

	// Injecta Comment service
	.controller('mainCtrl', function($scope, $http, Comment) {

		// Geymir form info
		$scope.commentData = {};

		// Birtir loading icon
		$scope.loading = true;

		// Ná í öll comment
		Comment.get()
			.success(function(data) {
				$scope.comments = data;
				$scope.loading = false;
			});

		// Vista comment
		$scope.submitComment = function() {

			$scope.loading = true;

			// Vista comment með commentData sem við fáum úr forminu
			Comment.save($scope.commentData) {

				.success(function(data) {

					// Ef save heppnaðist þá refresha lista
					Comment.get()
						.success(function(getData) {
							$scope.comments = getData;
							$scope.loading = false;
						});
				})
				.error(function(data) {
					console.log(data);
				});
			}
		};

		// Delete comment
		$scope.deleteComment = function(id) {

			$scope.loading = true,

			Comment.destroy(id)
				.success(function(data) {

					// Ef heppnaðist þá refresha lista
					Comment.get()
						.success(function(getData) {
							$scope.comments = getData;
							$scope.loading = false;
						});
				});
		};

	});