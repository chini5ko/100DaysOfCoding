//n0de js tuturial at 6:00 minutes 
//https://www.youtube.com/watch?v=GQC2lJIAyzM
console.log("almost done");

//import statement 
var Twit = require('twit');

//new Twit object 
var T = new Twit({
    consumer_key:         '...',
    consumer_secret:      '...',
    access_token:         '...',
    access_token_secret:  '...',
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
  })