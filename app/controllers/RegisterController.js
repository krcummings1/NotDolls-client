"use strict";

NotDolls.controller('RegisterController', [
  '$http',
  '$scope',

    function ($http, $scope) {

      $scope.githubOauth = function () {
        OAuth.initialize('r7-abwyXggRFS3qwrLFxEU8nHLo')
        OAuth.popup('github').done(function(result) {
            console.log(result)
            
            result.me().done(function(data) {
              // do something with `data`, e.g. print data.name
              console.log(data);

              $http({
                url: "http://localhost:5000/api/Geek",
                method: "POST",
                data: JSON.stringify({
                  username: data.alias,
                  location: data.location,
                  emailAddress: data.email,
                  createdDate: new Date()
                })
              });

            })

            // do some stuff with result
        });
      };
    }

]);