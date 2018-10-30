var guestBook = angular.module('guestBook', ['ui.router']);

guestBook.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('recent-entries', {
            url: '/',
            templateUrl: 'client/recent-entries.html'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('add-entry', {
            url: '/add',
            templateUrl: 'client/add-entry.html',
            controller: function($scope) {
            $scope.newentry = "Type In A New Entry";
        } 
        });

});
