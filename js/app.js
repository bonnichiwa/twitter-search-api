angular.module('twitterApp', [])

.controller('twitterCtrl', function($scope, $http) {
  $scope.searchItem = function(tag) {
    var url = 'https://api.twitter.com/1.1/search/tweets.json';
    var request = {
      // oauth_consumer_key: "YnRMPPZakdZT1yENkiyMerJob", 
      // oauth_nonce: "12aac8ebcf3914dc36f553d7aa6b28af", 
      // oauth_signature: "Oj2gNMD4xP935J%2F4wA3yhUBX270%3D", 
      // oauth_signature_method: "HMAC-SHA1", 
      // oauth_timestamp: "1444609600", 
      // oauth_token: "3931359149-reKIpFTZwafjZxlQMKxyvSmzflyZSNl0uoVyTGu", 
      // oauth_version: "1.0",
      q: tag
    };

    $http({
      method: 'JSONP',
      url: url,
      params: request
    })
    .then(function(response) {
      console.log(response);
    },
    function(error) {
      alert('Error: Unable to find tweets from Twitter');
    })
  };
});