// RoomCtrl
angular.module('wechatApp').controller('RoomCtrl', ['$scope', 'socket', function($scope, socket){
    $scope.messages = [];
    socket.emit('getAllMessages');
    socket.on('allMessages', function (messages) {
        // $scope.messages = messages;
    }),

    socket.on('messageAdded', function (message) {
        $scope.messages.push(message);
    });

    socket.on('roomData', function (room) {
        $scope.room = room;
    });

    socket.emit('getRoom');
}]);