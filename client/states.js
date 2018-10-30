var guestBook = angular.module('guestBook', ['ui.router']);
guestBook.run(function($rootScope) {
    $rootScope.entriesArray = ["Testing", "Another Test", "Final test"];
});
guestBook.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('start', {
            url: '/',
            templateUrl: 'client/recent-entries.html'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('add-entry', {
            url: '/add',
            templateUrl: 'client/add-entry.html',
            controller: function($scope) {
            $scope.newentry = "Type In A New Entry";
            $scope.submitentry = function(){
                alert("Entry Submitted");
                $scope.newentry = "";
                }
            } 
        })

        .state('view-all', {
            url: '/view-all',
            templateUrl: 'client/view-all.html'
        })

});
