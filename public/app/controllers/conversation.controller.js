/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


'use strict';
angular.module('matroshkiApp').controller('conversationCtrl', function ($scope, appSettings, commonHelper) {
  $scope.options = conversation;
  $scope.socketOptions ={
    url: appSettings.SOCKET_URL,
    query: commonHelper.obToquery({token: appSettings.TOKEN}),
    path: '/socket.io-client'
  };
});