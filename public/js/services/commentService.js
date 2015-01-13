angular.module('commentService', [])

	.factory('Comment', function($http) {

		return {
			// Ná í öll comment
			get: function() {
				return $http.get('/api/comments');
			},

			// Vista comment með data
			save: function(commentData) {
				return $http({
					method: 'POST',
					url: '/api/comments',
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
					data: $.param(commentData)
				});
			},

			// Eyða commenti
			destroy: function($id) {
				return $http.delete('/api/comments/' + $id);
			}
		}
	});